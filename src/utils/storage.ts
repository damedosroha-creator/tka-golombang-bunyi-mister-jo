import { UserProgress, UserAnswer } from '../types';

const STORAGE_KEY = 'FISIKA_JENIUS_PROGRESS_V1';

export const INITIAL_PROGRESS: UserProgress = {
  studentName: '',
  startedAt: new Date().toISOString(),
  lastActiveAt: new Date().toISOString(),
  answers: {},
  soundEnabled: true,
  speechRate: 1.0,
  currentQuestionId: 1,
  completed: false,
};

export function loadProgress(): UserProgress {
  if (typeof window === 'undefined') return INITIAL_PROGRESS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_PROGRESS;
    const parsed = JSON.parse(raw);
    return {
      ...INITIAL_PROGRESS,
      ...parsed,
      answers: parsed.answers || {},
    };
  } catch (e) {
    console.error('Failed to parse saved progress from localStorage:', e);
    return INITIAL_PROGRESS;
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  try {
    const updated = {
      ...progress,
      lastActiveAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save progress to localStorage:', e);
  }
}

export function resetProgress(): UserProgress {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Failed to remove progress from localStorage:', e);
    }
  }
  return {
    ...INITIAL_PROGRESS,
    startedAt: new Date().toISOString(),
    lastActiveAt: new Date().toISOString(),
  };
}
