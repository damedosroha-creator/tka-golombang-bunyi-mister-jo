import React, { useState } from 'react';
import {
  BookOpen,
  HelpCircle,
  MapPin,
  Layers,
  Award,
  TrendingUp,
  Key,
  RotateCcw,
  Menu,
  X,
  PlayCircle,
  FileText,
} from 'lucide-react';
import { UserProgress } from '../types';
import { ResetConfirmModal } from './ResetConfirmModal';

export type ActivePage =
  | 'beranda'
  | 'petunjuk'
  | 'peta'
  | 'bank'
  | 'latihan'
  | 'pembahasan'
  | 'hasil'
  | 'progres'
  | 'rumus';

interface Props {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  progress: UserProgress;
  onResetProgress: () => void;
}

export const Navbar: React.FC<Props> = ({
  activePage,
  onNavigate,
  progress,
  onResetProgress,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);

  const answeredCount = Object.values(progress.answers).filter((a) => a.isSubmitted).length;

  const navItems: { id: ActivePage; label: string; icon: React.ReactNode }[] = [
    { id: 'beranda', label: 'Beranda', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'petunjuk', label: 'Petunjuk Belajar', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'peta', label: 'Peta Materi', icon: <MapPin className="w-4 h-4" /> },
    { id: 'bank', label: 'Bank Soal', icon: <Layers className="w-4 h-4" /> },
    { id: 'latihan', label: 'Latihan Soal', icon: <PlayCircle className="w-4 h-4" /> },
    { id: 'pembahasan', label: 'Pembahasan', icon: <FileText className="w-4 h-4" /> },
    { id: 'hasil', label: 'Hasil Latihan', icon: <Award className="w-4 h-4" /> },
    { id: 'progres', label: 'Progres', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'rumus', label: 'Rumus Kunci', icon: <Key className="w-4 h-4" /> },
  ];

  const handleNavClick = (page: ActivePage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-red-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Brand Logo & Name */}
            <button
              type="button"
              onClick={() => handleNavClick('beranda')}
              className="flex items-center gap-3 text-left group cursor-pointer focus:outline-hidden"
              aria-label="Kembali ke Beranda Fisika Jenius"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-red-800 via-red-600 to-red-500 text-white flex items-center justify-center font-black text-lg sm:text-xl shadow-md ring-2 ring-red-200 group-hover:scale-105 transition-transform">
                FJ
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base sm:text-lg font-black tracking-tight text-red-950 uppercase">
                    Fisika Jenius
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
                    TKA Gelombang Bunyi
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium hidden sm:block">
                  Bersama <span className="font-bold text-red-700">Mister Jo</span> • "Taklukkan Gelombang Bunyi, Kuasai Penalaran Fisika!"
                </p>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1" aria-label="Navigasi Utama">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-red-700 text-white shadow-xs'
                        : 'text-slate-600 hover:text-red-700 hover:bg-red-50'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Progress Pill */}
              <div
                onClick={() => handleNavClick('progres')}
                className="cursor-pointer hidden sm:flex items-center gap-2 px-3 py-1.5 bg-red-50 hover:bg-red-100 border border-red-200/60 rounded-xl transition-colors"
                title="Lihat progres latihan"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleNavClick('progres')}
              >
                <div className="text-right">
                  <div className="text-[10px] uppercase font-bold text-red-800">
                    Progres
                  </div>
                  <div className="text-xs font-black text-red-950">
                    {answeredCount}/30 Soal
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-xs text-red-700 border border-red-200">
                  {Math.round((answeredCount / 30) * 100)}%
                </div>
              </div>

              {/* Reset Button */}
              <button
                type="button"
                onClick={() => setShowResetModal(true)}
                className="p-2 sm:px-3 sm:py-2 flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-red-700 hover:bg-red-50 rounded-xl transition-colors"
                title="Reset seluruh progres belajar"
                aria-label="Buka dialog reset seluruh progres"
              >
                <RotateCcw className="w-4 h-4 text-slate-400 group-hover:text-red-600" />
                <span className="hidden md:inline">Reset</span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 text-slate-600 hover:text-red-700 hover:bg-red-50 rounded-xl"
                aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-red-100 bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-1 shadow-lg animate-fadeIn">
            <div className="py-2 px-3 bg-red-50 rounded-xl mb-3 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-red-950">
                  {progress.studentName || 'Siswa Jenius'}
                </p>
                <p className="text-[11px] text-red-700">
                  {answeredCount} dari 30 soal diselesaikan ({Math.round((answeredCount / 30) * 100)}%)
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleNavClick('latihan')}
                className="px-3 py-1 bg-red-700 text-white font-bold text-xs rounded-lg shadow-xs"
              >
                Lanjutkan
              </button>
            </div>

            <div className="grid grid-cols-2 gap-1.5">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold text-left transition-all ${
                      isActive
                        ? 'bg-red-700 text-white'
                        : 'text-slate-700 hover:bg-red-50 hover:text-red-800'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Confirmation Modal */}
      <ResetConfirmModal
        isOpen={showResetModal}
        onClose={() => setShowResetModal(false)}
        onConfirm={onResetProgress}
      />
    </>
  );
};
