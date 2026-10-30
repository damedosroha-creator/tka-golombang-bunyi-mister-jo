import React, { useState } from 'react';
import { ALL_QUESTIONS } from '../data/questions';
import { SUBTOPICS } from '../data/subtopics';
import { UserProgress, QuestionType } from '../types';
import {
  Layers,
  Search,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  BookOpen,
  Filter,
} from 'lucide-react';
import { ActivePage } from '../components/Navbar';

interface Props {
  progress: UserProgress;
  onNavigate: (page: ActivePage) => void;
  onSelectQuestion: (questionId: number) => void;
}

export const QuestionBankView: React.FC<Props> = ({
  progress,
  onNavigate,
  onSelectQuestion,
}) => {
  const [selectedSubtopic, setSelectedSubtopic] = useState<number | 'ALL'>('ALL');
  const [selectedType, setSelectedType] = useState<QuestionType | 'ALL'>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<'ALL' | 'DONE' | 'UNDONE' | 'CORRECT' | 'WRONG'>('ALL');

  const filteredQuestions = ALL_QUESTIONS.filter((q) => {
    if (selectedSubtopic !== 'ALL' && q.subtopicId !== selectedSubtopic) {
      return false;
    }
    if (selectedType !== 'ALL' && q.type !== selectedType) {
      return false;
    }
    const ans = progress.answers[q.id];
    if (selectedStatus === 'DONE' && (!ans || !ans.isSubmitted)) {
      return false;
    }
    if (selectedStatus === 'UNDONE' && ans && ans.isSubmitted) {
      return false;
    }
    if (selectedStatus === 'CORRECT' && (!ans || !ans.isFullyCorrect)) {
      return false;
    }
    if (selectedStatus === 'WRONG' && (!ans || !ans.isSubmitted || ans.isFullyCorrect)) {
      return false;
    }
    return true;
  });

  const handleOpenPractice = (questionId: number) => {
    onSelectQuestion(questionId);
    onNavigate('latihan');
  };

  const handleOpenExplanation = (questionId: number) => {
    onSelectQuestion(questionId);
    onNavigate('pembahasan');
  };

  return (
    <div className="space-y-6 py-4 animate-fadeIn max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded-full mb-1">
            <Layers className="w-3.5 h-3.5" />
            <span>KISI-KISI & BANK SOAL</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Bank 30 Soal TKA Gelombang Bunyi
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Menampilkan seluruh 30 butir soal lengkap dengan stimulus, kunci jawaban, dan pembahasan.
          </p>
        </div>
      </div>

      {/* Filter Controls Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
          <Filter className="w-4 h-4 text-red-600" />
          <span>Filter Soal:</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Subtopic Filter */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">
              Submateri (1 - 11):
            </label>
            <select
              value={selectedSubtopic}
              onChange={(e) =>
                setSelectedSubtopic(
                  e.target.value === 'ALL' ? 'ALL' : Number(e.target.value)
                )
              }
              className="w-full text-xs font-medium px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-red-500"
            >
              <option value="ALL">Semua 11 Submateri ({ALL_QUESTIONS.length} Soal)</option>
              {SUBTOPICS.map((sub) => (
                <option key={sub.id} value={sub.id}>
                  #{sub.id} {sub.shortName} ({sub.questionCount} Soal)
                </option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">
              Tipe Format Soal:
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as QuestionType | 'ALL')}
              className="w-full text-xs font-medium px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-red-500"
            >
              <option value="ALL">Semua Format (PG, PGK, Benar-Salah)</option>
              <option value="PG">Pilihan Ganda (12 Soal)</option>
              <option value="PGK">Pilihan Ganda Kompleks (12 Soal)</option>
              <option value="BENAR_SALAH">Benar - Salah (6 Soal)</option>
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">
              Status Pengerjaan:
            </label>
            <select
              value={selectedStatus}
              onChange={(e) =>
                setSelectedStatus(e.target.value as 'ALL' | 'DONE' | 'UNDONE' | 'CORRECT' | 'WRONG')
              }
              className="w-full text-xs font-medium px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-red-500"
            >
              <option value="ALL">Semua Status</option>
              <option value="UNDONE">Belum Dikerjakan</option>
              <option value="DONE">Sudah Dikerjakan</option>
              <option value="CORRECT">Jawaban Benar</option>
              <option value="WRONG">Jawaban Salah / Parsial</option>
            </select>
          </div>
        </div>
      </div>

      {/* Questions Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredQuestions.map((q) => {
          const ans = progress.answers[q.id];
          const isSubmitted = ans?.isSubmitted;
          const isCorrect = ans?.isFullyCorrect;
          const isPartial = isSubmitted && !isCorrect && ans.score > 0;

          return (
            <div
              key={q.id}
              className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-red-300 shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                {/* Badges Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-8 h-8 rounded-lg bg-red-700 text-white flex items-center justify-center font-black text-xs">
                      #{q.id}
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {q.type === 'PG'
                        ? 'Pilihan Ganda'
                        : q.type === 'PGK'
                        ? 'PG Kompleks'
                        : 'Benar-Salah'}
                    </span>
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
                  </div>

                  {/* Status Indicator */}
                  <div>
                    {isSubmitted ? (
                      isCorrect ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Benar (1.0)
                        </span>
                      ) : isPartial ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                          <HelpCircle className="w-3.5 h-3.5" /> Parsial ({ans.score})
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
                          <XCircle className="w-3.5 h-3.5" /> Salah (0.0)
                        </span>
                      )
                    ) : (
                      <span className="text-[11px] font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">
                        Belum Dikerjakan
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-[11px] font-bold text-red-700 mb-1 uppercase tracking-wider">
                  Submateri #{q.subtopicId}: {q.subtopicName}
                </div>

                <h3 className="text-sm font-bold text-slate-900 line-clamp-1 mb-2">
                  {q.title}
                </h3>

                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                  {q.stimulusContext}
                </p>
              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => handleOpenPractice(q.id)}
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-red-700 hover:bg-red-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
                >
                  <span>{isSubmitted ? 'Ulangi Soal' : 'Kerjakan Soal'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenExplanation(q.id)}
                  className="flex items-center gap-1 px-3 py-2 bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-700 font-bold text-xs rounded-xl transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Pembahasan</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredQuestions.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
          <p className="text-sm font-bold text-slate-600">
            Tidak ada soal yang cocok dengan kriteria filter Anda.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedSubtopic('ALL');
              setSelectedType('ALL');
              setSelectedStatus('ALL');
            }}
            className="mt-3 text-xs font-bold text-red-700 hover:underline"
          >
            Reset Semua Filter
          </button>
        </div>
      )}
    </div>
  );
};
