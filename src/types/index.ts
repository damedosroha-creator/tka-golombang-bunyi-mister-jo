export type QuestionType = 'PG' | 'PGK' | 'BENAR_SALAH';
export type DifficultyLevel = 'Menengah' | 'Sulit' | 'Sangat Sulit';

export interface SubtopicInfo {
  id: number;
  name: string;
  shortName: string;
  icon: string;
  description: string;
  questionCount: number;
}

export interface StatementItem {
  id: string;
  statement: string;
  isCorrect: boolean; // true = BENAR, false = SALAH
  explanation: string;
}

export interface QuestionOption {
  key: 'A' | 'B' | 'C' | 'D' | 'E';
  text: string;
}

export interface DetailedExplanation {
  memahamiMasalah: string;
  diketahui: string[];
  ditanyakan: string;
  rumusKunci: string;
  analisisKonsep: string;
  penyelesaian: string; // KaTeX steps formatted
  hasilAkhir: string;
  kesimpulan: string;
  caraCepatMisterJo: string;
  jebakanKonsep: string;
}

export interface VoiceScripts {
  preStimulus: string;
  onSolving: string;
  explanation: string;
  caraCepat: string;
  encouragementCorrect?: string;
  encouragementIncorrect?: string;
}

export interface QuestionDiagramInfo {
  type: 
    | 'medium_speed'
    | 'open_pipe'
    | 'closed_pipe'
    | 'string_melde'
    | 'resonance_tube'
    | 'doppler_effect'
    | 'sound_intensity'
    | 'intensity_level'
    | 'n_sources'
    | 'distance_falloff'
    | 'sound_properties';
  params?: Record<string, string | number | boolean>;
  caption: string;
}

export interface Question {
  id: number; // 1 to 30
  subtopicId: number; // 1 to 11
  subtopicName: string;
  type: QuestionType;
  difficulty: DifficultyLevel;
  title: string;
  stimulusContext: string; // scientific discourse or experiment background
  stimulusData?: {
    type: 'table' | 'text' | 'comparison';
    headers?: string[];
    rows?: (string | number)[][];
    content?: string;
  };
  diagram?: QuestionDiagramInfo;
  rumusKunciPreview: string; // Quick formula hint
  questionPrompt: string; // The specific question demanding reasoning
  
  // Options for PG and PGK
  options?: QuestionOption[];
  // For PG: single key e.g. 'B'
  correctAnswerSingle?: 'A' | 'B' | 'C' | 'D' | 'E';
  // For PGK: array of keys e.g. ['A', 'C', 'D']
  correctAnswerMultiple?: ('A' | 'B' | 'C' | 'D' | 'E')[];
  
  // For Benar-Salah: exactly 3 statements
  statements?: StatementItem[];
  
  explanation: DetailedExplanation;
  voiceScripts: VoiceScripts;
}

export interface UserAnswer {
  questionId: number;
  singleAnswer?: 'A' | 'B' | 'C' | 'D' | 'E';
  multipleAnswers?: ('A' | 'B' | 'C' | 'D' | 'E')[];
  statementAnswers?: Record<string, boolean>; // statement id -> user chose true (BENAR) or false (SALAH)
  isSubmitted: boolean;
  score: number; // 0.0 to 1.0
  isFullyCorrect: boolean;
  timeSpentSeconds: number;
}

export interface UserProgress {
  studentName: string;
  startedAt: string;
  lastActiveAt: string;
  answers: Record<number, UserAnswer>;
  soundEnabled: boolean;
  speechRate: number; // 0.8, 1.0, 1.2
  currentQuestionId: number;
  completed: boolean;
}
