import { cleanLatexForSpeech } from './mathSpeech';

type SoundStateListener = (state: {
  isPlaying: boolean;
  isPaused: boolean;
  currentText: string;
  rate: number;
  isEnabled: boolean;
}) => void;

class SoundService {
  private synth: SpeechSynthesis | null = null;
  private isEnabled: boolean = true;
  private speechRate: number = 1.0;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private currentText: string = '';
  private isPlaying: boolean = false;
  private isPaused: boolean = false;
  private selectedVoice: SpeechSynthesisVoice | null = null;
  private listeners: Set<SoundStateListener> = new Set();
  private hasUserInteracted: boolean = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.initVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.initVoices();
      }

      // Mark user interaction
      const unlockAudio = () => {
        this.hasUserInteracted = true;
        window.removeEventListener('click', unlockAudio);
        window.removeEventListener('keydown', unlockAudio);
        window.removeEventListener('touchstart', unlockAudio);
      };
      window.addEventListener('click', unlockAudio);
      window.addEventListener('keydown', unlockAudio);
      window.addEventListener('touchstart', unlockAudio);
    }
  }

  private initVoices() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    // Prioritize Indonesian voices: 'id-ID', 'id', 'indonesian', etc.
    const indonesianVoice =
      voices.find((v) => v.lang.toLowerCase().replace('_', '-').startsWith('id')) ||
      voices.find((v) => v.lang.toLowerCase().includes('id')) ||
      voices.find((v) => v.name.toLowerCase().includes('indonesia')) ||
      voices[0] ||
      null;

    this.selectedVoice = indonesianVoice;
  }

  public subscribe(listener: SoundStateListener): () => void {
    this.listeners.add(listener);
    this.notify();
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    const state = {
      isPlaying: this.isPlaying,
      isPaused: this.isPaused,
      currentText: this.currentText,
      rate: this.speechRate,
      isEnabled: this.isEnabled,
    };
    this.listeners.forEach((l) => l(state));
  }

  public setEnabled(enabled: boolean) {
    this.isEnabled = enabled;
    if (!enabled) {
      this.stop();
    }
    this.notify();
  }

  public getIsEnabled(): boolean {
    return this.isEnabled;
  }

  public setRate(rate: number) {
    this.speechRate = Math.max(0.5, Math.min(2.0, rate));
    if (this.isPlaying && this.currentText) {
      // Re-trigger with new rate from current sentence if playing
      const text = this.currentText;
      this.stop();
      this.speak(text);
    } else {
      this.notify();
    }
  }

  public getRate(): number {
    return this.speechRate;
  }

  /**
   * Speak a given text with Indonesian voice and clean latex handling.
   * Cancels any running speech first.
   */
  public speak(rawText: string, options?: { force?: boolean }): void {
    if (!this.synth) return;
    if (!this.isEnabled && !options?.force) return;

    this.stop();

    const spokenText = cleanLatexForSpeech(rawText);
    if (!spokenText.trim()) return;

    this.currentText = spokenText;
    const utterance = new SpeechSynthesisUtterance(spokenText);

    if (this.selectedVoice) {
      utterance.voice = this.selectedVoice;
    } else {
      this.initVoices();
      if (this.selectedVoice) {
        utterance.voice = this.selectedVoice;
      }
    }

    utterance.lang = 'id-ID';
    utterance.rate = this.speechRate;
    utterance.pitch = 1.05; // Friendly, warm teacher tone

    utterance.onstart = () => {
      this.isPlaying = true;
      this.isPaused = false;
      this.notify();
    };

    utterance.onend = () => {
      this.isPlaying = false;
      this.isPaused = false;
      this.currentText = '';
      this.currentUtterance = null;
      this.notify();
    };

    utterance.onerror = (e) => {
      // If error is canceled, it is intentional from stop()
      if (e.error !== 'canceled' && e.error !== 'interrupted') {
        console.warn('Speech error:', e.error);
      }
      this.isPlaying = false;
      this.isPaused = false;
      this.currentUtterance = null;
      this.notify();
    };

    this.currentUtterance = utterance;

    try {
      this.synth.speak(utterance);
    } catch (err) {
      console.warn('Speech synthesis call failed:', err);
    }
  }

  public pause(): void {
    if (this.synth && this.isPlaying && !this.isPaused) {
      this.synth.pause();
      this.isPaused = true;
      this.notify();
    }
  }

  public resume(): void {
    if (this.synth && this.isPlaying && this.isPaused) {
      this.synth.resume();
      this.isPaused = false;
      this.notify();
    }
  }

  public togglePause(): void {
    if (this.isPaused) {
      this.resume();
    } else if (this.isPlaying) {
      this.pause();
    }
  }

  public stop(): void {
    if (this.synth) {
      this.synth.cancel();
      this.isPlaying = false;
      this.isPaused = false;
      this.currentText = '';
      this.currentUtterance = null;
      this.notify();
    }
  }

  public replay(): void {
    if (this.currentText) {
      const text = this.currentText;
      this.speak(text);
    }
  }
}

export const soundService = new SoundService();
