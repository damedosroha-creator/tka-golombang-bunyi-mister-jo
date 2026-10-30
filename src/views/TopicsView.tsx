import React, { useEffect } from 'react';
import { SUBTOPICS } from '../data/subtopics';
import { ALL_QUESTIONS } from '../data/questions';
import { UserProgress } from '../types';
import { soundService } from '../utils/soundService';
import {
  MapPin,
  PlayCircle,
  Volume2,
  CheckCircle2,
  Activity,
  Waves,
  Radio,
  Gauge,
  Zap,
  Volume2 as SoundIcon,
  Users,
  Maximize2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { ActivePage } from '../components/Navbar';

interface Props {
  progress: UserProgress;
  onNavigate: (page: ActivePage) => void;
  onSelectQuestion: (questionId: number) => void;
}

export const TopicsView: React.FC<Props> = ({
  progress,
  onNavigate,
  onSelectQuestion,
}) => {
  const topicsNarration =
    'Berikut adalah peta 11 submateri Gelombang Bunyi yang wajib kamu kuasai. Mulai dari kelajuan bunyi dalam berbagai medium, pipa organa terbuka dan tertutup, dawai Melde, resonansi kolom udara, efek Doppler, intensitas bunyi, hingga taraf intensitas desibel dan sifat-sifat gelombang bunyi. Pilih salah satu submateri untuk langsung melatih kemampuanmu!';

  useEffect(() => {
    soundService.speak(topicsNarration);
  }, []);

  const getSubtopicIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Gauge className="w-5 h-5 text-red-600" />;
      case 2:
        return <Radio className="w-5 h-5 text-amber-600" />;
      case 3:
        return <Waves className="w-5 h-5 text-rose-600" />;
      case 4:
        return <Activity className="w-5 h-5 text-blue-600" />;
      case 5:
        return <Waves className="w-5 h-5 text-teal-600" />;
      case 6:
        return <Activity className="w-5 h-5 text-purple-600" />;
      case 7:
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 8:
        return <SoundIcon className="w-5 h-5 text-indigo-600" />;
      case 9:
        return <Users className="w-5 h-5 text-emerald-600" />;
      case 10:
        return <Maximize2 className="w-5 h-5 text-cyan-600" />;
      case 11:
      default:
        return <Sparkles className="w-5 h-5 text-yellow-500" />;
    }
  };

  const handleStartSubtopic = (subtopicId: number) => {
    const firstQ = ALL_QUESTIONS.find((q) => q.subtopicId === subtopicId);
    if (firstQ) {
      onSelectQuestion(firstQ.id);
      onNavigate('latihan');
    }
  };

  return (
    <div className="space-y-8 py-4 animate-fadeIn max-w-6xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-900 to-red-800 text-white rounded-3xl p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-red-200 mb-3">
            <MapPin className="w-4 h-4 text-amber-300" />
            <span>DISTRIBUSI KURIKULUM TKA FISIKA</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
            Peta 11 Submateri Gelombang Bunyi
          </h1>
          <p className="mt-2 text-sm sm:text-base text-red-100 max-w-2xl leading-relaxed">
            Terdiri dari tepat 30 soal HOTS yang terbagi secara proporsional ke dalam 11 submateri pokok tanpa ada topik yang terlewat.
          </p>
        </div>

        <button
          type="button"
          onClick={() => soundService.speak(topicsNarration)}
          aria-label="Dengarkan penjelasan peta materi dari Mister Jo"
          className="shrink-0 flex items-center gap-2 px-5 py-3 bg-amber-400 hover:bg-amber-300 text-red-950 font-black text-sm rounded-2xl shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          <Volume2 className="w-5 h-5 fill-current" />
          <span>Dengarkan Peta Materi</span>
        </button>
      </div>

      {/* Grid of 11 Subtopics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SUBTOPICS.map((sub) => {
          const subQuestions = ALL_QUESTIONS.filter((q) => q.subtopicId === sub.id);
          const solvedInSub = subQuestions.filter(
            (q) => progress.answers[q.id]?.isSubmitted
          ).length;
          const isFullySolved = solvedInSub === sub.questionCount;

          return (
            <div
              key={sub.id}
              className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-red-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-red-100 text-red-800 flex items-center justify-center font-bold text-xs">
                      #{sub.id}
                    </span>
                    <span className="text-[11px] font-black uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100">
                      {sub.questionCount} Soal
                    </span>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-xl">
                    {getSubtopicIcon(sub.id)}
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {sub.name}
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {sub.description}
                </p>

                {/* Progress bar for this subtopic */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-500">Progres Bab:</span>
                    <span className="text-red-700 font-bold">
                      {solvedInSub}/{sub.questionCount} Soal ({Math.round((solvedInSub / sub.questionCount) * 100)}%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-red-600 h-full rounded-full transition-all duration-500"
                      style={{ width: `${(solvedInSub / sub.questionCount) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-500">
                  {isFullySolved ? (
                    <span className="text-emerald-600 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Bab Selesai
                    </span>
                  ) : (
                    `Tersisa ${sub.questionCount - solvedInSub} Soal`
                  )}
                </span>
                <button
                  type="button"
                  onClick={() => handleStartSubtopic(sub.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-red-700 hover:bg-red-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
                >
                  <PlayCircle className="w-3.5 h-3.5" />
                  <span>Kerjakan</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
