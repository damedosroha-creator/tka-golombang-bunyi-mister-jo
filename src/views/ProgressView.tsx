import React, { useState } from 'react';
import { UserProgress } from '../types';
import { ALL_QUESTIONS } from '../data/questions';
import { evaluateExam } from '../utils/scoring';
import {
  TrendingUp,
  RotateCcw,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Clock,
  PlayCircle,
  BookOpen,
  User,
  Calendar,
} from 'lucide-react';
import { ActivePage } from '../components/Navbar';
import { ResetConfirmModal } from '../components/ResetConfirmModal';

interface Props {
  progress: UserProgress;
  onNavigate: (page: ActivePage) => void;
  onSelectQuestion: (questionId: number) => void;
  onResetProgress: () => void;
}

export const ProgressView: React.FC<Props> = ({
  progress,
  onNavigate,
  onSelectQuestion,
  onResetProgress,
}) => {
  const [showResetModal, setShowResetModal] = useState(false);
  const summary = evaluateExam(ALL_QUESTIONS, progress.answers);

  const formattedStarted = progress.startedAt
    ? new Date(progress.startedAt).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    : '-';

  const handleOpenQuestion = (questionId: number) => {
    onSelectQuestion(questionId);
    onNavigate('latihan');
  };

  const handleOpenExplanation = (questionId: number) => {
    onSelectQuestion(questionId);
    onNavigate('pembahasan');
  };

  return (
    <div className="space-y-8 py-4 animate-fadeIn max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded-full mb-2">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>DASBOR MONITORING BELAJAR</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Perkembangan Belajar Siswa
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-slate-400" />
              Siswa: <strong>{progress.studentName || 'Peserta Mandiri'}</strong>
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              Mulai: {formattedStarted}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onNavigate('latihan')}
            className="flex items-center gap-2 px-5 py-2.5 bg-red-700 hover:bg-red-800 text-white font-black text-xs sm:text-sm rounded-xl shadow-xs transition-colors"
          >
            <PlayCircle className="w-4 h-4" />
            <span>Lanjutkan Belajar</span>
          </button>

          <button
            type="button"
            onClick={() => setShowResetModal(true)}
            className="flex items-center gap-1.5 px-3 py-2.5 text-xs font-bold text-red-700 hover:bg-red-50 rounded-xl transition-colors border border-red-200"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Progres</span>
          </button>
        </div>
      </div>

      {/* 4 Metric Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Telah Dikerjakan
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            {summary.attemptedCount} / 30
          </div>
          <p className="text-[11px] text-slate-400 mt-1 font-medium">
            {Math.round((summary.attemptedCount / 30) * 100)}% Kelengkapan
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Jawaban Tepat (100%)
          </div>
          <div className="text-2xl sm:text-3xl font-black text-emerald-600 mt-2">
            {summary.fullyCorrectCount} Soal
          </div>
          <p className="text-[11px] text-slate-400 mt-1 font-medium">
            Akurasi Penuh
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Skor Sementara
          </div>
          <div className="text-2xl sm:text-3xl font-black text-red-700 mt-2">
            {summary.totalScore}
          </div>
          <p className="text-[11px] text-slate-400 mt-1 font-medium">
            Skala 0 - 100
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Predikat Capaian
          </div>
          <div className="text-sm sm:text-base font-black text-slate-900 mt-2 line-clamp-1">
            {summary.category}
          </div>
          <p className="text-[11px] text-slate-400 mt-1 font-medium">
            Evaluasi Mister Jo
          </p>
        </div>
      </div>

      {/* Detailed Question Status Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
        <h2 className="text-lg font-black text-slate-900">
          Daftar Rincian Status 30 Soal Latihan
        </h2>

        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-xs text-left">
            <thead className="bg-slate-50 text-slate-600 font-bold uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3">No</th>
                <th className="px-4 py-3">Submateri</th>
                <th className="px-4 py-3">Format</th>
                <th className="px-4 py-3">Tingkat</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Skor</th>
                <th className="px-4 py-3 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {ALL_QUESTIONS.map((q) => {
                const ans = progress.answers[q.id];
                const isSubmitted = ans?.isSubmitted;
                const isCorrect = ans?.isFullyCorrect;
                const isPartial = isSubmitted && !isCorrect && ans.score > 0;

                return (
                  <tr key={q.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="px-4 py-3 font-black text-slate-900">#{q.id}</td>
                    <td className="px-4 py-3 font-semibold text-slate-800">
                      {q.subtopicName}
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      {q.type === 'PG'
                        ? 'Pilihan Ganda'
                        : q.type === 'PGK'
                        ? 'PG Kompleks'
                        : 'Benar-Salah'}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          q.difficulty === 'Menengah'
                            ? 'bg-blue-100 text-blue-800'
                            : q.difficulty === 'Sulit'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {q.difficulty}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      {isSubmitted ? (
                        isCorrect ? (
                          <span className="inline-flex items-center gap-1 font-bold text-emerald-700">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Benar
                          </span>
                        ) : isPartial ? (
                          <span className="inline-flex items-center gap-1 font-bold text-amber-700">
                            <HelpCircle className="w-3.5 h-3.5" /> Parsial
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 font-bold text-red-700">
                            <XCircle className="w-3.5 h-3.5" /> Salah
                          </span>
                        )
                      ) : (
                        <span className="text-slate-400">Belum dikerjakan</span>
                      )}
                    </td>
                    <td className="px-4 py-3 font-black text-slate-900">
                      {isSubmitted ? ans.score.toFixed(2) : '-'}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="inline-flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => handleOpenQuestion(q.id)}
                          className="px-2.5 py-1 bg-red-50 hover:bg-red-100 text-red-800 font-bold rounded-lg transition-colors"
                        >
                          Buka
                        </button>
                        <button
                          type="button"
                          onClick={() => handleOpenExplanation(q.id)}
                          className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg transition-colors"
                        >
                          Solusi
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Confirmation Modal */}
      <ResetConfirmModal
        isOpen={showResetModal}
        onClose={() => setShowResetModal(false)}
        onConfirm={onResetProgress}
      />
    </div>
  );
};
