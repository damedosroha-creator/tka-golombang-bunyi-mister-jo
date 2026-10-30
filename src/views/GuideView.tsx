import React, { useEffect } from 'react';
import { soundService } from '../utils/soundService';
import {
  Volume2,
  BookOpen,
  Eye,
  CheckCircle,
  HelpCircle,
  TrendingUp,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Zap,
} from 'lucide-react';
import { ActivePage } from '../components/Navbar';

interface Props {
  onNavigate: (page: ActivePage) => void;
}

export const GuideView: React.FC<Props> = ({ onNavigate }) => {
  const guideNarration =
    'Selamat datang di petunjuk belajar bersama Mister Jo. Di sini kamu akan memahami cara memaksimalkan latihan TKA Gelombang Bunyi. Mulai latihan dari beranda atau bank soal. Baca stimulus dan perhatikan grafik atau diagram dengan teliti sebelum menghitung. Untuk pilihan ganda biasa, pilih satu opsi paling tepat. Untuk pilihan ganda kompleks, pilihlah seluruh opsi yang kamu yakini benar. Pada soal benar-salah, tentukan status ketiga pernyataan secara mandiri. Manfaatkan sepuluh langkah pembahasan dan trik Cara Cepat Mister Jo untuk mempertajam intuisimu!';

  useEffect(() => {
    soundService.speak(guideNarration);
  }, []);

  const handlePlayVoice = () => {
    soundService.speak(guideNarration);
  };

  const steps = [
    {
      step: '1',
      title: 'Cara Memulai Latihan',
      desc: 'Klik tombol "MULAI LATIHAN SEKARANG" di Beranda atau buka tab "Latihan Soal". Anda juga dapat melompat ke nomor spesifik melalui menu "Bank Soal".',
      icon: <BookOpen className="w-5 h-5 text-red-600" />,
    },
    {
      step: '2',
      title: 'Cara Membaca Stimulus',
      desc: 'Setiap soal dilengkapi stimulus nyata (paragraf wacana ilmiah, tabel data pengukuran, grafik kurva, atau diagram alat). Temukan besaran fisika yang diketahui dan konsep dasar sebelum mulai berhitung.',
      icon: <Eye className="w-5 h-5 text-amber-600" />,
    },
    {
      step: '3',
      title: 'Mengerjakan Pilihan Ganda (PG)',
      desc: 'Terdapat 5 pilihan jawaban (A, B, C, D, E). Hanya ada satu jawaban paling benar. Klik opsi pilihan Anda, lalu tekan tombol "SIMPAN & PERIKSA JAWABAN".',
      icon: <CheckCircle className="w-5 h-5 text-emerald-600" />,
    },
    {
      step: '4',
      title: 'Mengerjakan Pilihan Ganda Kompleks (PGK)',
      desc: 'Pada tipe ini, bisa terdapat lebih dari satu jawaban benar. Centang semua opsi yang benar. Sistem penilaian menerapkan skor berbobot adil agar terhindar dari tebakan asal.',
      icon: <HelpCircle className="w-5 h-5 text-blue-600" />,
    },
    {
      step: '5',
      title: 'Mengisi Soal Benar-Salah (3 Pernyataan)',
      desc: 'Setiap nomor menyajikan 3 pernyataan konseptual mendalam. Tentukan BENAR atau SALAH pada masing-masing baris secara teliti dan independen.',
      icon: <Sparkles className="w-5 h-5 text-purple-600" />,
    },
    {
      step: '6',
      title: 'Membuka Pembahasan 10 Langkah',
      desc: 'Setelah menjawab, klik "BACA PEMBAHASAN LENGKAP". Anda akan mempelajari analisis sistematis: Memahami Masalah, Diketahui, Ditanyakan, Rumus Kunci, Penyelesaian KaTeX, hingga Kesimpulan.',
      icon: <BookOpen className="w-5 h-5 text-rose-600" />,
    },
    {
      step: '7',
      title: 'Memanfaatkan Cara Cepat Mister Jo',
      desc: 'Di akhir setiap pembahasan, temukan kartu emas "Cara Cepat Mister Jo" yang memberikan tips pintas logis berbasis perbandingan proporsional tanpa perhitungan panjang.',
      icon: <Zap className="w-5 h-5 text-amber-500" />,
    },
    {
      step: '8',
      title: 'Melihat Hasil & Evaluasi Kemampuan',
      desc: 'Buka menu "Hasil Latihan" untuk melihat skor skala 100, evaluasi predikat (Jenius, Sangat Menguasai, dll.), radar capaian 11 submateri, serta rekomendasi materi remedial.',
      icon: <TrendingUp className="w-5 h-5 text-teal-600" />,
    },
    {
      step: '9',
      title: 'Menyimpan & Melanjutkan Progres Offline',
      desc: 'Aplikasi otomatis menyimpan seluruh jawaban, status soal, dan pengaturan ke penyimpanan lokal perangkat Anda. Anda dapat menutup peramban kapan saja dan melanjutkannya nanti.',
      icon: <RotateCcw className="w-5 h-5 text-slate-600" />,
    },
  ];

  return (
    <div className="space-y-8 py-4 animate-fadeIn max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-900 to-red-800 text-white rounded-3xl p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-red-200 mb-3">
            <HelpCircle className="w-4 h-4 text-amber-300" />
            <span>PANDUAN LENGKAP APLIKASI</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
            Petunjuk Belajar Fisika Jenius
          </h1>
          <p className="mt-2 text-sm sm:text-base text-red-100 max-w-xl leading-relaxed">
            Ikuti 9 panduan langkah strategis dari <strong>Mister Jo</strong> agar proses belajar Anda optimal dan siap meraih nilai maksimal di TKA Fisika!
          </p>
        </div>

        <button
          type="button"
          onClick={handlePlayVoice}
          aria-label="Dengarkan panduan suara Mister Jo"
          className="shrink-0 flex items-center gap-2 px-5 py-3 bg-amber-400 hover:bg-amber-300 text-red-950 font-black text-sm rounded-2xl shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          <Volume2 className="w-5 h-5 fill-current" />
          <span>Dengarkan Panduan Suara</span>
        </button>
      </div>

      {/* Guide Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {steps.map((item) => (
          <div
            key={item.step}
            className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-red-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-full bg-red-100 text-red-800 flex items-center justify-center font-black text-sm">
                  {item.step}
                </span>
                <div className="p-2 bg-slate-50 rounded-xl">{item.icon}</div>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Bottom Banner */}
      <div className="bg-red-50 border border-red-200 rounded-3xl p-6 text-center space-y-4">
        <h3 className="text-lg font-black text-red-950">
          Sudah Memahami Seluruh Petunjuk?
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
          Mari buktikan kemampuan penalaran fisika Anda pada 30 soal HOTS Gelombang Bunyi bersama bimbingan Mister Jo.
        </p>
        <button
          type="button"
          onClick={() => onNavigate('latihan')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-black text-sm rounded-2xl shadow-md transition-transform hover:scale-105"
        >
          <span>Mulai Kerjakan Soal Latihan</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
