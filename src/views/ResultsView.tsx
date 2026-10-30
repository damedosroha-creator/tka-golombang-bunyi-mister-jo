import React, { useEffect, useRef } from 'react';
import { UserProgress } from '../types';
import { ALL_QUESTIONS } from '../data/questions';
import { evaluateExam } from '../utils/scoring';
import { soundService } from '../utils/soundService';
import confetti from 'canvas-confetti';
import {
  Award,
  CheckCircle2,
  XCircle,
  HelpCircle,
  TrendingUp,
  RotateCcw,
  BookOpen,
  ArrowRight,
  Sparkles,
  Download,
  AlertCircle,
} from 'lucide-react';
import { ActivePage } from '../components/Navbar';

interface Props {
  progress: UserProgress;
  onNavigate: (page: ActivePage) => void;
  onSelectQuestion: (questionId: number) => void;
}

export const ResultsView: React.FC<Props> = ({
  progress,
  onNavigate,
  onSelectQuestion,
}) => {
  const summary = evaluateExam(ALL_QUESTIONS, progress.answers);

  useEffect(() => {
    // Confetti celebration if score is high
    if (summary.totalScore >= 80) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }

    // Voice announcement
    let voiceText = `Nilai akhir Anda adalah ${summary.totalScore}. Kategori pencapaian: ${summary.category}. `;
    if (summary.totalScore >= 90) {
      voiceText += 'Luar biasa sekali! Anda benar-benar seorang Jenius Gelombang Bunyi!';
    } else if (summary.totalScore >= 70) {
      voiceText += 'Bagus sekali! Pemahaman fisikamu sudah mantap, terus berlatih bersama Mister Jo!';
    } else {
      voiceText += 'Jangan berkecil hati. Mari pelajari kembali pembahasan dan cara cepat bersama Mister Jo!';
    }
    soundService.speak(voiceText);
  }, []);

  const handleReviewMistakes = () => {
    // Find first question with wrong or partial answer
    const firstWrong = ALL_QUESTIONS.find((q) => {
      const a = progress.answers[q.id];
      return a && a.isSubmitted && !a.isFullyCorrect;
    });
    if (firstWrong) {
      onSelectQuestion(firstWrong.id);
      onNavigate('latihan');
    } else {
      onNavigate('latihan');
    }
  };

  return (
    <div className="space-y-8 py-4 animate-fadeIn max-w-5xl mx-auto">
      {/* Hero Score Card */}
      <div className="bg-gradient-to-br from-red-950 via-red-900 to-red-800 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-red-700/50 relative overflow-hidden text-center">
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs sm:text-sm font-bold text-red-200">
            <Award className="w-4 h-4 text-amber-300" />
            <span>RAPOR HASIL EVALUASI TKA GELOMBANG BUNYI</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black">
            {progress.studentName ? `Hasil Latihan ${progress.studentName}` : 'Hasil Latihan Anda'}
          </h1>

          {/* Big Score Number */}
          <div className="py-4">
            <div className="text-6xl sm:text-8xl font-black text-amber-300 tracking-tight drop-shadow-md">
              {summary.totalScore}
            </div>
            <div className="text-xs uppercase tracking-widest text-red-200 mt-1 font-bold">
              SKOR AKHIR (SKALA 100)
            </div>
          </div>

          {/* Category Badge */}
          <div className="inline-block px-6 py-2.5 rounded-2xl text-base sm:text-lg font-black tracking-wide shadow-md bg-white text-red-950 border-2 border-amber-400">
            {summary.category}
          </div>

          <p className="text-xs sm:text-sm text-red-100 max-w-md mx-auto pt-2 leading-relaxed">
            Dari total 30 butir soal HOTS, Anda telah mengerjakan {summary.attemptedCount} soal dengan rincian capaian berikut.
          </p>
        </div>
      </div>

      {/* 3 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">
              {summary.fullyCorrectCount} Soal
            </div>
            <div className="text-xs text-slate-500 font-medium">Jawaban Benar Penuh (100%)</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">
              {summary.partialCorrectCount} Soal
            </div>
            <div className="text-xs text-slate-500 font-medium">Jawaban Parsial (PGK/BS)</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-red-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-black">
            <XCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">
              {summary.incorrectCount} Soal
            </div>
            <div className="text-xs text-slate-500 font-medium">Jawaban Salah / Belum</div>
          </div>
        </div>
      </div>

      {/* Subtopic Mastery Breakdown (11 Submateri) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight">
            Capaian Penguasaan Berdasarkan 11 Submateri
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Evaluasi kelemahan dan kekuatan Anda pada masing-masing domain konsep fisika gelombang bunyi.
          </p>
        </div>

        <div className="space-y-4">
          {summary.subtopicScores.map((sub) => {
            let barColor = 'bg-red-600';
            if (sub.percentage >= 80) barColor = 'bg-emerald-600';
            else if (sub.percentage >= 60) barColor = 'bg-amber-500';

            return (
              <div key={sub.subtopicId} className="p-3 bg-slate-50 rounded-2xl border border-slate-200/70">
                <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                  <span className="text-slate-800">
                    #{sub.subtopicId} {sub.subtopicName}
                  </span>
                  <span className="text-slate-900">
                    {sub.percentage}% ({sub.earnedScore}/{sub.maxScore} Poin)
                  </span>
                </div>
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div
                    className={`${barColor} h-full rounded-full transition-all duration-700`}
                    style={{ width: `${sub.percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recommendations & Remedial Guidance */}
      <div className="bg-amber-50 rounded-3xl p-6 sm:p-8 border border-amber-200 space-y-4">
        <div className="flex items-center gap-2 text-amber-900 font-black text-base">
          <Sparkles className="w-5 h-5 text-amber-600" />
          <span>Rekomendasi Belajar dari Mister Jo:</span>
        </div>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
          {summary.recommendations.map((rec, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">•</span>
              <span className="leading-relaxed">{rec}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
        <button
          type="button"
          onClick={() => onNavigate('beranda')}
          className="px-5 py-3 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm rounded-2xl transition-colors shadow-xs"
        >
          Kembali ke Beranda
        </button>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleReviewMistakes}
            className="flex items-center gap-2 px-5 py-3 bg-red-100 hover:bg-red-200 text-red-900 font-bold text-xs sm:text-sm rounded-2xl transition-colors"
          >
            <RotateCcw className="w-4 h-4 text-red-700" />
            <span>Ulangi Soal yang Salah</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('bank')}
            className="flex items-center gap-2 px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-black text-xs sm:text-sm rounded-2xl shadow-md transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            <span>Pelajari Semua Pembahasan</span>
          </button>
        </div>
      </div>
    </div>
  );
};
