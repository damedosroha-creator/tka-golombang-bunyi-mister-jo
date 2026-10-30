import React, { useState, useEffect } from 'react';
import { UserProgress, UserAnswer } from './types';
import { loadProgress, saveProgress, resetProgress } from './utils/storage';
import { soundService } from './utils/soundService';
import { Navbar, ActivePage } from './components/Navbar';
import { AudioNarrationBar } from './components/AudioNarrationBar';
import { HomeView } from './views/HomeView';
import { GuideView } from './views/GuideView';
import { TopicsView } from './views/TopicsView';
import { QuestionBankView } from './views/QuestionBankView';
import { PracticeView } from './views/PracticeView';
import { ExplanationView } from './views/ExplanationView';
import { ResultsView } from './views/ResultsView';
import { ProgressView } from './views/ProgressView';
import { FormulasView } from './views/FormulasView';

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(() => loadProgress());
  const [activePage, setActivePage] = useState<ActivePage>('beranda');
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(
    progress.currentQuestionId || 1
  );

  // Sync soundService settings on mount
  useEffect(() => {
    soundService.setEnabled(progress.soundEnabled);
    soundService.setRate(progress.speechRate);
  }, []);

  // Persist progress to localStorage whenever progress state changes
  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  // Handle navigation and stop old audio when changing views
  const handleNavigate = (page: ActivePage) => {
    soundService.stop();
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpdateStudentName = (name: string) => {
    setProgress((prev) => ({
      ...prev,
      studentName: name,
    }));
  };

  const handleSelectQuestion = (id: number) => {
    setCurrentQuestionId(id);
    setProgress((prev) => ({
      ...prev,
      currentQuestionId: id,
    }));
  };

  const handleSaveAnswer = (questionId: number, answer: UserAnswer) => {
    setProgress((prev) => {
      const nextAnswers = {
        ...prev.answers,
        [questionId]: answer,
      };
      // Check if all 30 questions are submitted
      const submittedCount = Object.values(nextAnswers).filter((a) => a.isSubmitted).length;
      return {
        ...prev,
        answers: nextAnswers,
        completed: submittedCount === 30,
      };
    });
  };

  const handleResetProgress = () => {
    soundService.stop();
    const fresh = resetProgress();
    setProgress(fresh);
    setCurrentQuestionId(1);
    setActivePage('beranda');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 selection:bg-red-600 selection:text-white">
      {/* Primary Sticky Header */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        progress={progress}
        onResetProgress={handleResetProgress}
      />

      {/* Floating Audio Narration Bar for Mister Jo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <AudioNarrationBar />
      </div>

      {/* Main Page Content Body */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6">
        {activePage === 'beranda' && (
          <HomeView
            progress={progress}
            onUpdateName={handleUpdateStudentName}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'petunjuk' && (
          <GuideView onNavigate={handleNavigate} />
        )}

        {activePage === 'peta' && (
          <TopicsView
            progress={progress}
            onNavigate={handleNavigate}
            onSelectQuestion={handleSelectQuestion}
          />
        )}

        {activePage === 'bank' && (
          <QuestionBankView
            progress={progress}
            onNavigate={handleNavigate}
            onSelectQuestion={handleSelectQuestion}
          />
        )}

        {activePage === 'latihan' && (
          <PracticeView
            currentQuestionId={currentQuestionId}
            onSelectQuestion={handleSelectQuestion}
            progress={progress}
            onSaveAnswer={handleSaveAnswer}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'pembahasan' && (
          <ExplanationView
            currentQuestionId={currentQuestionId}
            onSelectQuestion={handleSelectQuestion}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'hasil' && (
          <ResultsView
            progress={progress}
            onNavigate={handleNavigate}
            onSelectQuestion={handleSelectQuestion}
          />
        )}

        {activePage === 'progres' && (
          <ProgressView
            progress={progress}
            onNavigate={handleNavigate}
            onSelectQuestion={handleSelectQuestion}
            onResetProgress={handleResetProgress}
          />
        )}

        {activePage === 'rumus' && <FormulasView />}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-red-100 bg-white py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-3">
          <div className="flex items-center justify-center gap-2 font-black text-slate-800 text-sm tracking-tight uppercase">
            <span className="w-5 h-5 rounded-md bg-red-700 text-white flex items-center justify-center text-[10px]">FJ</span>
            <span>FISIKA JENIUS – TKA GELOMBANG BUNYI</span>
          </div>
          <p className="font-extrabold text-red-700 italic">
            "Taklukkan Gelombang Bunyi, Kuasai Penalaran Fisika!"
          </p>
          <p className="text-slate-400">
            Dikembangkan bersama <strong>MISTER JO</strong> • Dirancang khusus untuk persiapan TKA Fisika SMA & Seleksi Masuk Perguruan Tinggi Negeri.
          </p>
          <div className="pt-2 text-[11px] text-slate-400">
            30 Soal HOTS Berstandar Akademik • Siap Deployment Vercel • Offline-First Storage
          </div>
        </div>
      </footer>
    </div>
  );
}
