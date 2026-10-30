import React, { useEffect } from 'react';
import { UserProgress } from '../types';
import { soundService } from '../utils/soundService';
import {
  Play,
  RotateCcw,
  BookOpen,
  HelpCircle,
  MapPin,
  Layers,
  Award,
  Sparkles,
  Volume2,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { ActivePage } from '../components/Navbar';

interface Props {
  progress: UserProgress;
  onUpdateName: (name: string) => void;
  onNavigate: (page: ActivePage) => void;
}

export const HomeView: React.FC<Props> = ({
  progress,
  onUpdateName,
  onNavigate,
}) => {
  const answeredCount = Object.values(progress.answers).filter((a) => a.isSubmitted).length;
  const hasStarted = answeredCount > 0;

  const welcomeNarration =
    'Halo, para calon jagoan Fisika! Selamat datang di Fisika Jenius bersama Mister Jo. Di sini kita akan menaklukkan materi Gelombang Bunyi. Jangan takut dengan angka, rumus, ataupun soal yang kelihatannya sulit. Kita akan belajar pelan-pelan, memahami konsepnya, kemudian menemukan cara menyelesaikannya. Siap menjadi jenius Fisika?';

  // Read welcome audio on user trigger or mount
  const handlePlayWelcome = () => {
    soundService.speak(welcomeNarration);
  };

  useEffect(() => {
    // If audio is enabled, trigger welcome narration
    if (progress.soundEnabled) {
      soundService.speak(welcomeNarration);
    }
  }, []);

  return (
    <div className="space-y-10 py-6 animate-fadeIn">
      {/* Hero Banner Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-950 via-red-900 to-red-800 text-white p-6 sm:p-10 lg:p-14 shadow-xl border border-red-700/50">
        {/* Abstract acoustic wave decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-red-600/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-500/10 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-bold text-red-200 mb-6">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>TKA FISIKA TINGKAT SMA • GELOMBANG BUNYI</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight uppercase">
            Fisika Jenius
          </h1>
          <p className="mt-2 text-xl sm:text-2xl font-bold text-red-200">
            TKA GELOMBANG BUNYI
          </p>

          {/* Slogan */}
          <blockquote className="mt-4 text-base sm:text-xl font-extrabold italic text-amber-300 tracking-wide border-l-4 border-amber-400 pl-4">
            "Taklukkan Gelombang Bunyi, Kuasai Penalaran Fisika!"
          </blockquote>

          {/* Teacher Identity Badge */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2.5 px-4 py-2 bg-black/30 backdrop-blur-md rounded-2xl border border-white/10">
              <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center font-black text-sm text-white shadow-sm ring-2 ring-amber-400">
                MJ
              </div>
              <div>
                <div className="text-xs text-red-200 font-semibold">Identitas Pengajar</div>
                <div className="text-sm font-extrabold text-white">MISTER JO</div>
              </div>
            </div>

            <button
              type="button"
              onClick={handlePlayWelcome}
              aria-label="Dengarkan salam pembuka dari Mister Jo"
              className="flex items-center gap-2 px-4 py-2 bg-white/15 hover:bg-white/25 rounded-2xl text-xs sm:text-sm font-bold text-white border border-white/20 transition-all hover:scale-105"
            >
              <Volume2 className="w-4 h-4 text-amber-300" />
              <span>Dengarkan Sambutan Mister Jo</span>
            </button>
          </div>

          {/* Student Profile Input */}
          <div className="mt-8 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 max-w-md">
            <label htmlFor="student-name" className="block text-xs font-bold text-red-200 mb-1.5 uppercase">
              Nama Peserta / Calon Jenius:
            </label>
            <div className="flex gap-2">
              <input
                id="student-name"
                type="text"
                placeholder="Ketik nama Anda di sini..."
                value={progress.studentName}
                onChange={(e) => onUpdateName(e.target.value)}
                className="flex-1 px-3.5 py-2 text-sm rounded-xl bg-white text-slate-900 font-medium placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-amber-400"
              />
            </div>
            {progress.studentName && (
              <p className="text-[11px] text-emerald-300 font-semibold mt-1.5 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Tersimpan: Selamat datang, {progress.studentName}!
              </p>
            )}
          </div>

          {/* Action CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => onNavigate('latihan')}
              className="flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-red-950 font-black text-sm sm:text-base rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>{hasStarted ? 'LANJUTKAN BELAJAR' : 'MULAI LATIHAN SEKARANG'}</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('petunjuk')}
              className="flex items-center gap-2 px-5 py-3.5 bg-white/15 hover:bg-white/25 text-white font-bold text-sm sm:text-base rounded-2xl border border-white/20 transition-colors"
            >
              <HelpCircle className="w-5 h-5 text-red-200" />
              <span>Petunjuk Belajar</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('peta')}
              className="flex items-center gap-2 px-5 py-3.5 bg-white/15 hover:bg-white/25 text-white font-bold text-sm sm:text-base rounded-2xl border border-white/20 transition-colors"
            >
              <MapPin className="w-5 h-5 text-red-200" />
              <span>Peta 11 Submateri</span>
            </button>
          </div>
        </div>
      </section>

      {/* Progress & Quick Stats Card */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-red-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-red-100 text-red-800 flex items-center justify-center font-black">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">30 Soal</div>
            <div className="text-xs text-slate-500 font-medium">Tepat 30 Soal HOTS Numerik</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-red-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">11 Submateri</div>
            <div className="text-xs text-slate-500 font-medium">Cakupan Gelombang Bunyi Lengkap</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-red-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-black">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">
              {answeredCount}/30
            </div>
            <div className="text-xs text-slate-500 font-medium">Progres Pengerjaan Anda</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-red-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">10 Langkah</div>
            <div className="text-xs text-slate-500 font-medium">Pembahasan Sistematis + Cara Cepat</div>
          </div>
        </div>
      </section>

      {/* 3 Pillars of Format Soal */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Distribusi 3 Format Soal Standar TKA
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Dirancang secara proporsional menguji seluruh aspek penalaran tingkat tinggi (HOTS) siswa SMA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: PG */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-300 transition-colors">
            <div className="inline-flex px-3 py-1 rounded-full text-xs font-black bg-red-100 text-red-800 mb-3">
              12 SOAL
            </div>
            <h3 className="text-lg font-bold text-slate-900">Pilihan Ganda (PG)</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Lima opsi pilihan (A, B, C, D, E) dengan tepat 1 jawaban paling benar. Pengecoh berbasis miskonsepsi nyata siswa.
            </p>
          </div>

          {/* Card 2: PGK */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-300 transition-colors">
            <div className="inline-flex px-3 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-800 mb-3">
              12 SOAL
            </div>
            <h3 className="text-lg font-bold text-slate-900">Pilihan Ganda Kompleks (PGK)</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Bisa terdapat lebih dari satu jawaban benar. Siswa harus memilih seluruh opsi benar untuk evaluasi penalaran menyeluruh.
            </p>
          </div>

          {/* Card 3: Benar-Salah */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-300 transition-colors">
            <div className="inline-flex px-3 py-1 rounded-full text-xs font-black bg-blue-100 text-blue-800 mb-3">
              6 SOAL
            </div>
            <h3 className="text-lg font-bold text-slate-900">Benar - Salah (3 Pernyataan)</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Tiap soal berisi 3 pernyataan ilmiah yang menguji aspek penalaran analitis, fisis, dan matematis yang berbeda.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-gradient-to-br from-red-50 to-white rounded-3xl border border-red-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center mb-4 shadow-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-black text-red-950">
              10 Langkah Pembahasan Lengkap & Cara Cepat Mister Jo
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Setiap soal dilengkapi rincian: Memahami Masalah, Diketahui, Ditanyakan, Rumus Kunci, Analisis Konsep, Penyelesaian bertahap KaTeX, Hasil Akhir, Kesimpulan, Cara Cepat Mister Jo, dan Peringatan Jebakan Konsep.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('bank')}
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-red-700 hover:text-red-900"
          >
            Jelajahi Bank 30 Soal <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 bg-gradient-to-br from-amber-50 to-white rounded-3xl border border-amber-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center mb-4 shadow-sm">
              <Volume2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-black text-amber-950">
              Pembimbing Suara Bahasa Indonesia Alami
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Didampingi narator Mister Jo yang hangat dan komunikatif. Rumus matematika otomatis diterjemahkan ke dalam ucapan bahasa Indonesia ilmiah yang natural tanpa kode LaTeX mentah.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('petunjuk')}
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-amber-800 hover:text-amber-950"
          >
            Pelajari Petunjuk Penggunaan <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Mandatory Closing Quote Section */}
      <section className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 text-center relative overflow-hidden shadow-xl">
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-red-600/30 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-widest">
            Pesan Inspiratif Pengajar
          </div>
          <p className="text-lg sm:text-2xl font-bold italic leading-relaxed text-slate-100">
            "Fisika bukan sekadar menghafal rumus. Fisika adalah seni memahami bagaimana alam semesta bekerja. Bersama Mister Jo, mari kita buktikan bahwa kamu bisa menjadi jenius Fisika!"
          </p>
          <div className="pt-2 text-sm font-extrabold text-amber-400">
            — MISTER JO, Guru Fisika Anda
          </div>
        </div>
      </section>
    </div>
  );
};
