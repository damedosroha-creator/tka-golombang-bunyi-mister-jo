import React, { useEffect, useState } from 'react';
import { soundService } from '../utils/soundService';
import { Volume2, VolumeX, Play, Pause, RotateCcw, Sparkles } from 'lucide-react';

interface Props {
  className?: string;
}

export const AudioNarrationBar: React.FC<Props> = ({ className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [rate, setRate] = useState(1.0);
  const [isEnabled, setIsEnabled] = useState(true);
  const [showFullTranscript, setShowFullTranscript] = useState(false);

  useEffect(() => {
    const unsubscribe = soundService.subscribe((state) => {
      setIsPlaying(state.isPlaying);
      setIsPaused(state.isPaused);
      setCurrentText(state.currentText);
      setRate(state.rate);
      setIsEnabled(state.isEnabled);
    });
    return () => unsubscribe();
  }, []);

  const handleToggleSound = () => {
    const next = !isEnabled;
    setIsEnabled(next);
    soundService.setEnabled(next);
  };

  const handleTogglePlayPause = () => {
    if (isPaused) {
      soundService.resume();
    } else if (isPlaying) {
      soundService.pause();
    } else if (currentText) {
      soundService.speak(currentText);
    }
  };

  const handleReplay = () => {
    soundService.replay();
  };

  const handleRateChange = (newRate: number) => {
    soundService.setRate(newRate);
  };

  return (
    <div
      className={`bg-white/95 backdrop-blur-md border border-red-200/80 shadow-md rounded-2xl p-3 sm:p-4 transition-all ${className}`}
      role="region"
      aria-label="Panel Pembimbing Suara Mister Jo"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Mister Jo identity & animated avatar */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-red-800 to-red-600 text-white flex items-center justify-center font-bold text-base shadow-sm ring-2 ring-red-400/40">
              MJ
            </div>
            {isPlaying && !isPaused && (
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-600"></span>
              </span>
            )}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-extrabold text-red-950 tracking-tight">
                Mister Jo
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-red-100 text-red-800 px-2 py-0.5 rounded-full">
                <Sparkles className="w-2.5 h-2.5" /> Pembimbing Suara
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              {isPlaying
                ? isPaused
                  ? 'Suara dijeda'
                  : 'Sedang membimbing...'
                : 'Siap membimbing penalaran Anda'}
            </p>
          </div>
        </div>

        {/* Animated wave sound bars when active */}
        {isPlaying && !isPaused && (
          <div className="hidden md:flex items-center gap-1 h-5 px-2">
            {[4, 8, 14, 20, 12, 18, 9, 5].map((h, i) => (
              <div
                key={i}
                className="w-1 bg-red-600 rounded-full animate-pulse"
                style={{
                  height: `${h}px`,
                  animationDelay: `${i * 120}ms`,
                  animationDuration: '600ms',
                }}
              />
            ))}
          </div>
        )}

        {/* Action Controls */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Rate Selector */}
          <div className="flex items-center bg-slate-100 rounded-lg p-0.5 text-xs font-semibold text-slate-700">
            {[0.8, 1.0, 1.2, 1.5].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => handleRateChange(r)}
                aria-label={`Kecepatan suara ${r}x`}
                className={`px-2 py-1 rounded-md transition-all ${
                  rate === r
                    ? 'bg-red-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {r}x
              </button>
            ))}
          </div>

          {/* Replay */}
          <button
            type="button"
            onClick={handleReplay}
            disabled={!currentText}
            aria-label="Ulangi narasi Mister Jo"
            className="p-2 text-slate-600 hover:text-red-700 hover:bg-red-50 rounded-lg disabled:opacity-40 transition-colors"
            title="Ulangi Narasi"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Play/Pause */}
          <button
            type="button"
            onClick={handleTogglePlayPause}
            disabled={!currentText && !isPlaying}
            aria-label={isPlaying && !isPaused ? 'Jeda suara Mister Jo' : 'Lanjutkan suara Mister Jo'}
            className="p-2 bg-red-700 hover:bg-red-800 text-white rounded-lg disabled:opacity-40 shadow-xs transition-transform active:scale-95"
            title={isPlaying && !isPaused ? 'Jeda' : 'Putar'}
          >
            {isPlaying && !isPaused ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </button>

          {/* Toggle Mute/Enable */}
          <button
            type="button"
            onClick={handleToggleSound}
            aria-label={isEnabled ? 'Nonaktifkan suara' : 'Aktifkan suara'}
            className={`p-2 rounded-lg transition-colors ${
              isEnabled
                ? 'text-red-700 hover:bg-red-50'
                : 'text-slate-400 hover:bg-slate-100 bg-slate-100'
            }`}
            title={isEnabled ? 'Suara Aktif' : 'Suara Dimatikan'}
          >
            {isEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Spoken Narration Text Display */}
      {currentText && (
        <div className="mt-2.5 pt-2 border-t border-slate-100 text-xs text-slate-700 flex items-start justify-between gap-2">
          <p className="line-clamp-1 italic text-slate-600 flex-1">
            "{currentText}"
          </p>
          <button
            type="button"
            onClick={() => setShowFullTranscript(!showFullTranscript)}
            className="text-[11px] text-red-700 font-semibold hover:underline shrink-0"
          >
            {showFullTranscript ? 'Tutup' : 'Lihat Teks'}
          </button>
        </div>
      )}

      {showFullTranscript && currentText && (
        <div className="mt-2 p-3 bg-red-50/60 rounded-xl text-xs text-slate-800 leading-relaxed border border-red-100 animate-fadeIn">
          <span className="font-bold text-red-900 block mb-1">
            Narasi Mister Jo:
          </span>
          <p>{currentText}</p>
        </div>
      )}
    </div>
  );
};
