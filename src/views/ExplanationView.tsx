import React, { useEffect } from 'react';
import { Question } from '../types';
import { ALL_QUESTIONS } from '../data/questions';
import { MathView } from '../components/MathView';
import { soundService } from '../utils/soundService';
import {
  Volume2,
  Zap,
  AlertTriangle,
  CheckCircle2,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import { ActivePage } from '../components/Navbar';

interface Props {
  currentQuestionId: number;
  onSelectQuestion: (id: number) => void;
  onNavigate: (page: ActivePage) => void;
}

export const ExplanationView: React.FC<Props> = ({
  currentQuestionId,
  onSelectQuestion,
  onNavigate,
}) => {
  const question: Question =
    ALL_QUESTIONS.find((q) => q.id === currentQuestionId) || ALL_QUESTIONS[0];

  const { explanation, voiceScripts } = question;

  // Speak explanation when opening
  useEffect(() => {
    soundService.speak(voiceScripts.explanation);
  }, [question.id]);

  const handlePlayFullExplanationVoice = () => {
    soundService.speak(voiceScripts.explanation);
  };

  const handlePlayCaraCepatVoice = () => {
    soundService.speak(voiceScripts.caraCepat);
  };

  const handlePrevious = () => {
    if (question.id > 1) {
      onSelectQuestion(question.id - 1);
    }
  };

  const handleNext = () => {
    if (question.id < ALL_QUESTIONS.length) {
      onSelectQuestion(question.id + 1);
    }
  };

  return (
    <div className="space-y-6 py-4 animate-fadeIn max-w-4xl mx-auto">
      {/* Top Navigation Strip */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <button
          type="button"
          onClick={() => onNavigate('latihan')}
          className="flex items-center gap-1.5 text-xs font-bold text-red-700 hover:text-red-900"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Soal #{question.id}</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={question.id === 1}
            onClick={handlePrevious}
            className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 font-bold text-xs rounded-xl transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Sebelumnya</span>
          </button>
          <span className="text-xs font-black text-slate-800 px-2">
            #{question.id} / {ALL_QUESTIONS.length}
          </span>
          <button
            type="button"
            disabled={question.id === ALL_QUESTIONS.length}
            onClick={handleNext}
            className="flex items-center gap-1 px-3 py-1.5 bg-red-700 hover:bg-red-800 disabled:opacity-40 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
          >
            <span>Berikutnya</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Title & Teacher Audio Action */}
      <div className="bg-gradient-to-r from-red-900 via-red-800 to-red-700 text-white p-6 rounded-3xl shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-red-200 mb-2">
            <BookOpen className="w-4 h-4 text-amber-300" />
            <span>PEMBAHASAN RESMI MISTER JO</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black tracking-tight">
            Pembahasan Soal #{question.id}: {question.title}
          </h1>
          <p className="text-xs text-red-200 mt-1">
            Submateri #{question.subtopicId}: {question.subtopicName}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={handlePlayFullExplanationVoice}
            className="flex items-center gap-2 px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-red-950 font-black text-xs rounded-2xl shadow-sm transition-transform hover:scale-105"
          >
            <Volume2 className="w-4 h-4 fill-current" />
            <span>Dengarkan Pembahasan</span>
          </button>
          <button
            type="button"
            onClick={handlePlayCaraCepatVoice}
            className="flex items-center gap-2 px-4 py-2.5 bg-white/15 hover:bg-white/25 text-white font-bold text-xs rounded-2xl border border-white/20 transition-colors"
          >
            <Zap className="w-4 h-4 text-amber-300" />
            <span>Dengarkan Cara Cepat</span>
          </button>
        </div>
      </div>

      {/* Golden Highlight Card: CARA CEPAT MISTER JO */}
      <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-white p-6 rounded-3xl border-2 border-amber-400 shadow-sm relative overflow-hidden">
        <div className="flex items-center gap-2 text-amber-900 font-black text-sm uppercase tracking-wider mb-2">
          <div className="w-7 h-7 rounded-lg bg-amber-400 text-red-950 flex items-center justify-center font-black">
            <Zap className="w-4 h-4 fill-current" />
          </div>
          <span>9. CARA CEPAT MISTER JO</span>
        </div>
        <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed pl-9">
          <MathView text={explanation.caraCepatMisterJo} />
        </p>
      </div>

      {/* 10-Step Systematic Breakdown Container */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-7 divide-y divide-slate-100">
        {/* Step 1: Memahami Masalah */}
        <div className="space-y-2">
          <h3 className="text-xs font-black uppercase tracking-wider text-red-700 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-red-100 text-red-800 flex items-center justify-center text-[10px]">1</span>
            MEMAHAMI MASALAH
          </h3>
          <p className="text-sm text-slate-800 leading-relaxed font-normal pl-7">
            <MathView text={explanation.memahamiMasalah} />
          </p>
        </div>

        {/* Step 2: Diketahui */}
        <div className="pt-6 space-y-2">
          <h3 className="text-xs font-black uppercase tracking-wider text-red-700 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-red-100 text-red-800 flex items-center justify-center text-[10px]">2</span>
            DIKETAHUI
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-800 pl-7">
            {explanation.diketahui.map((item, idx) => (
              <li key={idx}>
                <MathView text={item} />
              </li>
            ))}
          </ul>
        </div>

        {/* Step 3: Ditanyakan */}
        <div className="pt-6 space-y-2">
          <h3 className="text-xs font-black uppercase tracking-wider text-red-700 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-red-100 text-red-800 flex items-center justify-center text-[10px]">3</span>
            DITANYAKAN
          </h3>
          <p className="text-sm text-slate-800 font-semibold pl-7">
            <MathView text={explanation.ditanyakan} />
          </p>
        </div>

        {/* Step 4: Rumus Kunci */}
        <div className="pt-6 space-y-2">
          <h3 className="text-xs font-black uppercase tracking-wider text-red-700 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-red-100 text-red-800 flex items-center justify-center text-[10px]">4</span>
            RUMUS KUNCI
          </h3>
          <div className="pl-7 py-2">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center">
              <MathView math={explanation.rumusKunci} block />
            </div>
          </div>
        </div>

        {/* Step 5: Analisis Konsep */}
        <div className="pt-6 space-y-2">
          <h3 className="text-xs font-black uppercase tracking-wider text-red-700 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-red-100 text-red-800 flex items-center justify-center text-[10px]">5</span>
            ANALISIS KONSEP
          </h3>
          <p className="text-sm text-slate-800 leading-relaxed font-normal whitespace-pre-line pl-7">
            <MathView text={explanation.analisisKonsep} />
          </p>
        </div>

        {/* Step 6: Penyelesaian Langkah demi Langkah */}
        <div className="pt-6 space-y-2">
          <h3 className="text-xs font-black uppercase tracking-wider text-red-700 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-red-100 text-red-800 flex items-center justify-center text-[10px]">6</span>
            PENYELESAIAN LANGKAH DEMI LANGKAH
          </h3>
          <div className="pl-7 text-sm text-slate-800 leading-relaxed">
            <MathView text={explanation.penyelesaian} />
          </div>
        </div>

        {/* Step 7: Hasil Akhir */}
        <div className="pt-6 space-y-2">
          <h3 className="text-xs font-black uppercase tracking-wider text-red-700 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-red-100 text-red-800 flex items-center justify-center text-[10px]">7</span>
            HASIL AKHIR
          </h3>
          <div className="pl-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-900 border border-emerald-300 rounded-xl font-black text-base shadow-2xs">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>{explanation.hasilAkhir}</span>
            </div>
          </div>
        </div>

        {/* Step 8: Kesimpulan */}
        <div className="pt-6 space-y-2">
          <h3 className="text-xs font-black uppercase tracking-wider text-red-700 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-red-100 text-red-800 flex items-center justify-center text-[10px]">8</span>
            KESIMPULAN FISIS
          </h3>
          <p className="text-sm text-slate-800 leading-relaxed pl-7">
            <MathView text={explanation.kesimpulan} />
          </p>
        </div>

        {/* Step 10: Jebakan Konsep */}
        <div className="pt-6 space-y-2">
          <div className="p-4 bg-red-50/80 rounded-2xl border border-red-200 space-y-2">
            <h3 className="text-xs font-black uppercase tracking-wider text-red-900 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              10. JEBAKAN KONSEP & KESALAHAN UMUM SISWA
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              <MathView text={explanation.jebakanKonsep} />
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center justify-between pt-4">
        <button
          type="button"
          onClick={() => onNavigate('latihan')}
          className="px-5 py-2.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-xs"
        >
          Kembali ke Lembar Soal
        </button>

        <button
          type="button"
          onClick={handleNext}
          disabled={question.id === ALL_QUESTIONS.length}
          className="flex items-center gap-2 px-6 py-2.5 bg-red-700 hover:bg-red-800 disabled:opacity-40 text-white font-black text-xs sm:text-sm rounded-xl shadow-md transition-colors"
        >
          <span>Lanjut ke Soal #{question.id + 1}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
