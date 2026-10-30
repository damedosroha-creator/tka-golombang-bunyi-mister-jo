import { Question, UserAnswer } from '../types';

/**
 * Calculates score for Single-choice (PG)
 */
export function evaluatePG(
  userChoice?: 'A' | 'B' | 'C' | 'D' | 'E',
  correctChoice?: 'A' | 'B' | 'C' | 'D' | 'E'
): { score: number; isFullyCorrect: boolean } {
  if (!userChoice || !correctChoice) {
    return { score: 0, isFullyCorrect: false };
  }
  const isMatch = userChoice === correctChoice;
  return {
    score: isMatch ? 1 : 0,
    isFullyCorrect: isMatch,
  };
}

/**
 * Calculates score for Multi-choice (PGK)
 * Formula: max(0, (correctSelected - incorrectSelected) / totalCorrect)
 * Ensures no full score if missing correct or selecting wrong.
 */
export function evaluatePGK(
  userChoices: ('A' | 'B' | 'C' | 'D' | 'E')[] = [],
  correctChoices: ('A' | 'B' | 'C' | 'D' | 'E')[] = []
): { score: number; isFullyCorrect: boolean } {
  if (correctChoices.length === 0) {
    return { score: 0, isFullyCorrect: false };
  }
  if (userChoices.length === 0) {
    return { score: 0, isFullyCorrect: false };
  }

  const correctSet = new Set(correctChoices);
  const userSet = new Set(userChoices);

  let correctSelected = 0;
  let incorrectSelected = 0;

  for (const choice of userSet) {
    if (correctSet.has(choice)) {
      correctSelected++;
    } else {
      incorrectSelected++;
    }
  }

  const isExactMatch =
    correctSelected === correctChoices.length &&
    incorrectSelected === 0 &&
    userChoices.length === correctChoices.length;

  if (isExactMatch) {
    return { score: 1.0, isFullyCorrect: true };
  }

  // Partial calculation with penalty for choosing incorrect options
  const rawScore = (correctSelected - incorrectSelected) / correctChoices.length;
  const clampedScore = Math.max(0, Math.min(0.9, Number(rawScore.toFixed(2))));

  return {
    score: clampedScore,
    isFullyCorrect: false,
  };
}

/**
 * Calculates score for Benar-Salah (3 statements)
 */
export function evaluateBenarSalah(
  answers: Record<string, boolean> = {},
  statements: { id: string; isCorrect: boolean }[] = []
): { score: number; isFullyCorrect: boolean; correctCount: number } {
  if (statements.length === 0) {
    return { score: 0, isFullyCorrect: false, correctCount: 0 };
  }

  let correctCount = 0;
  for (const stmt of statements) {
    if (answers[stmt.id] !== undefined && answers[stmt.id] === stmt.isCorrect) {
      correctCount++;
    }
  }

  const ratio = correctCount / statements.length;
  const isFullyCorrect = correctCount === statements.length;

  return {
    score: Number(ratio.toFixed(2)),
    isFullyCorrect,
    correctCount,
  };
}

export interface ExamSummary {
  totalQuestions: number;
  attemptedCount: number;
  fullyCorrectCount: number;
  partialCorrectCount: number;
  incorrectCount: number;
  totalScore: number; // 0 - 100
  accuracyPercent: number; // 0 - 100%
  category: string;
  categoryBadgeColor: string;
  subtopicScores: {
    subtopicId: number;
    subtopicName: string;
    totalQuestions: number;
    earnedScore: number;
    maxScore: number;
    percentage: number;
  }[];
  recommendations: string[];
}

export function evaluateExam(
  questions: Question[],
  answers: Record<number, UserAnswer>
): ExamSummary {
  const totalQuestions = questions.length;
  let attemptedCount = 0;
  let fullyCorrectCount = 0;
  let partialCorrectCount = 0;
  let incorrectCount = 0;
  let totalScoreRaw = 0;

  const subtopicMap: Record<
    number,
    { subtopicName: string; totalQuestions: number; earnedScore: number }
  > = {};

  for (const q of questions) {
    if (!subtopicMap[q.subtopicId]) {
      subtopicMap[q.subtopicId] = {
        subtopicName: q.subtopicName,
        totalQuestions: 0,
        earnedScore: 0,
      };
    }
    subtopicMap[q.subtopicId].totalQuestions += 1;

    const ans = answers[q.id];
    if (ans && ans.isSubmitted) {
      attemptedCount++;
      totalScoreRaw += ans.score;
      subtopicMap[q.subtopicId].earnedScore += ans.score;

      if (ans.isFullyCorrect) {
        fullyCorrectCount++;
      } else if (ans.score > 0) {
        partialCorrectCount++;
      } else {
        incorrectCount++;
      }
    } else {
      incorrectCount++;
    }
  }

  const totalScore = totalQuestions > 0 ? Math.round((totalScoreRaw / totalQuestions) * 100) : 0;
  const accuracyPercent = attemptedCount > 0 ? Math.round((totalScoreRaw / attemptedCount) * 100) : 0;

  let category = '';
  let categoryBadgeColor = '';

  if (totalScore >= 90) {
    category = 'JENIUS GELOMBANG BUNYI';
    categoryBadgeColor = 'bg-emerald-600 text-white';
  } else if (totalScore >= 80) {
    category = 'SANGAT MENGUASAI';
    categoryBadgeColor = 'bg-blue-600 text-white';
  } else if (totalScore >= 70) {
    category = 'BAIK, TERUS BERLATIH';
    categoryBadgeColor = 'bg-amber-600 text-white';
  } else if (totalScore >= 60) {
    category = 'PERLU PENGUATAN';
    categoryBadgeColor = 'bg-orange-600 text-white';
  } else {
    category = 'AYO BELAJAR LAGI BERSAMA MISTER JO';
    categoryBadgeColor = 'bg-red-700 text-white';
  }

  const subtopicScores = Object.entries(subtopicMap).map(([idStr, data]) => {
    const sId = Number(idStr);
    const maxScore = data.totalQuestions;
    const percentage = maxScore > 0 ? Math.round((data.earnedScore / maxScore) * 100) : 0;
    return {
      subtopicId: sId,
      subtopicName: data.subtopicName,
      totalQuestions: data.totalQuestions,
      earnedScore: Number(data.earnedScore.toFixed(2)),
      maxScore,
      percentage,
    };
  });

  // Sort subtopics to identify weakest areas
  const recommendations: string[] = [];
  const lowScoring = [...subtopicScores].filter((s) => s.percentage < 75);
  lowScoring.sort((a, b) => a.percentage - b.percentage);

  if (lowScoring.length === 0) {
    recommendations.push(
      'Luar biasa! Pemahaman konsep dan penalaran gelombang bunyi Anda sudah sangat solid di seluruh submateri. Pertahankan performa prima ini!'
    );
  } else {
    for (const item of lowScoring.slice(0, 3)) {
      recommendations.push(
        `Perkuat kembali materi "${item.subtopicName}" (Capaian: ${item.percentage}%). Pelajari kembali stimulus dan trik Cara Cepat Mister Jo.`
      );
    }
  }

  return {
    totalQuestions,
    attemptedCount,
    fullyCorrectCount,
    partialCorrectCount,
    incorrectCount,
    totalScore,
    accuracyPercent,
    category,
    categoryBadgeColor,
    subtopicScores,
    recommendations,
  };
}
