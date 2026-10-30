import React, { useState, useEffect } from 'react';
import { Question, UserProgress, UserAnswer } from '../types';
import { ALL_QUESTIONS } from '../data/questions';
import { MathView } from '../components/MathView';
import { QuestionDiagram } from '../components/QuestionDiagram';
import { soundService } from '../utils/soundService';
import { evaluatePG, evaluatePGK, evaluateBenarSalah } from '../utils/scoring';
import {
  Volume2,
  Key,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  XCircle,
  HelpCircle,
  BookOpen,
  ArrowRight,
  Sparkles,
  Zap,
} from 'lucide-react';
import { ActivePage } from '../components/Navbar';

interface Props {
  currentQuestionId: number;
  onSelectQuestion: (id: number) => void;
  progress: UserProgress;
  onSaveAnswer: (questionId: number, answer: UserAnswer) => void;
  onNavigate: (page: ActivePage) => void;
}

export const PracticeView: React.FC<Props> = ({
  currentQuestionId,
  onSelectQuestion,
  progress,
  onSaveAnswer,
  onNavigate,
}) => {
  const question: Question =
    ALL_QUESTIONS.find((q) => q.id === currentQuestionId) || ALL_QUESTIONS[0];

  const existingAnswer = progress.answers[question.id];

  // Local state for options
  const [selectedSingle, setSelectedSingle] = useState<'A' | 'B' | 'C' | 'D' | 'E' | undefined>(
    existingAnswer?.singleAnswer
  );
  const [selectedMultiple, setSelectedMultiple] = useState<('A' | 'B' | 'C' | 'D' | 'E')[]>(
    existingAnswer?.multipleAnswers || []
  );
  const [selectedStatements, setSelectedStatements] = useState<Record<string, boolean>>(
    existingAnswer?.statementAnswers || {}
  );
  const [showFormulaDrawer, setShowFormulaDrawer] = useState(false);

  // Sync state when question changes
  useEffect(() => {
    const ans = progress.answers[question.id];
    setSelectedSingle(ans?.singleAnswer);
    setSelectedMultiple(ans?.multipleAnswers || []);
    setSelectedStatements(ans?.statementAnswers || {});
    setShowFormulaDrawer(false);

    // Speak pre-stimulus narration when opening the question if audio is active
    if (progress.soundEnabled) {
      soundService.speak(question.voiceScripts.preStimulus);
    }
  }, [question.id]);

  const handlePlayStimulusVoice = () => {
    soundService.speak(question.voiceScripts.preStimulus);
  };

  const handlePlaySolvingVoice = () => {
    soundService.speak(question.voiceScripts.onSolving);
  };

  const handleSelectMultipleOption = (key: 'A' | 'B' | 'C' | 'D' | 'E') => {
    if (existingAnswer?.isSubmitted) return;
    if (selectedMultiple.includes(key)) {
      setSelectedMultiple(selectedMultiple.filter((k) => k !== key));
    } else {
      setSelectedMultiple([...selectedMultiple, key]);
    }
  };

  const handleStatementChoice = (stmtId: string, value: boolean) => {
    if (existingAnswer?.isSubmitted) return;
    setSelectedStatements({
      ...selectedStatements,
      [stmtId]: value,
    });
  };

  const handleSubmitAnswer = () => {
    let score = 0;
    let isFullyCorrect = false;

    if (question.type === 'PG') {
      const res = evaluatePG(selectedSingle, question.correctAnswerSingle);
      score = res.score;
      isFullyCorrect = res.isFullyCorrect;
    } else if (question.type === 'PGK') {
      const res = evaluatePGK(selectedMultiple, question.correctAnswerMultiple);
      score = res.score;
      isFullyCorrect = res.isFullyCorrect;
    } else if (question.type === 'BENAR_SALAH') {
      const res = evaluateBenarSalah(selectedStatements, question.statements);
      score = res.score;
      isFullyCorrect = res.isFullyCorrect;
    }

    const answerRecord: UserAnswer = {
      questionId: question.id,
      singleAnswer: selectedSingle,
      multipleAnswers: selectedMultiple,
      statementAnswers: selectedStatements,
      isSubmitted: true,
      score,
      isFullyCorrect,
      timeSpentSeconds: 0,
    };

    onSaveAnswer(question.id, answerRecord);

    // Provide encouraging voice feedback
    if (isFullyCorrect) {
      soundService.speak('Mantap, penalaranmu semakin tajam!');
    } else {
      soundService.speak('Tidak apa-apa salah, yang penting kamu memahami letak kesalahannya bersama Mister Jo.');
    }
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

  const isAnswerReady = () => {
    if (question.type === 'PG') return !!selectedSingle;
    if (question.type === 'PGK') return selectedMultiple.length > 0;
    if (question.type === 'BENAR_SALAH') {
      return question.statements?.every((s) => selectedStatements[s.id] !== undefined);
    }
    return false;
  };

  return (
    <div className="space-y-6 py-4 animate-fadeIn max-w-5xl mx-auto">
      {/* Question Number Quick Strip */}
      <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs overflow-x-auto">
        <div className="flex items-center gap-1.5 min-w-max pb-1">
          <span className="text-xs font-bold text-slate-500 mr-2">Pilih Nomor:</span>
          {ALL_QUESTIONS.map((q) => {
            const a = progress.answers[q.id];
            const isCurr = q.id === question.id;
            const isSub = a?.isSubmitted;
            const isRight = a?.isFullyCorrect;

            let badgeClass = 'bg-slate-100 text-slate-700 hover:bg-slate-200';
            if (isSub) {
              badgeClass = isRight
                ? 'bg-emerald-600 text-white font-bold'
                : 'bg-red-600 text-white font-bold';
            }
            if (isCurr) {
              badgeClass = 'ring-3 ring-amber-400 bg-red-800 text-white font-extrabold scale-110';
            }

            return (
              <button
                key={q.id}
                type="button"
                onClick={() => onSelectQuestion(q.id)}
                className={`w-8 h-8 rounded-xl text-xs flex items-center justify-center transition-all ${badgeClass}`}
                aria-label={`Buka soal nomor ${q.id}`}
              >
                {q.id}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-5 sm:p-8">
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <span className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-red-800 to-red-600 text-white flex items-center justify-center font-black text-base shadow-sm ring-2 ring-red-200">
              #{question.id}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-red-800">
                  Submateri #{question.subtopicId}: {question.subtopicName}
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-black text-slate-900">
                {question.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
              {question.type === 'PG'
                ? 'Pilihan Ganda'
                : question.type === 'PGK'
                ? 'Pilihan Ganda Kompleks'
                : 'Benar - Salah'}
            </span>
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full ${
                question.difficulty === 'Menengah'
                  ? 'bg-blue-100 text-blue-800'
                  : question.difficulty === 'Sulit'
                  ? 'bg-amber-100 text-amber-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {question.difficulty}
            </span>
          </div>
        </div>

        {/* Voice Coaching Buttons */}
        <div className="mt-4 flex flex-wrap items-center gap-2.5 py-2.5 px-4 bg-red-50/70 rounded-2xl border border-red-100">
          <div className="flex items-center gap-1.5 text-xs font-bold text-red-950 mr-2">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Panduan Mister Jo:</span>
          </div>
          <button
            type="button"
            onClick={handlePlayStimulusVoice}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-red-100 text-red-800 text-xs font-bold rounded-xl border border-red-200 transition-colors shadow-2xs"
          >
            <Volume2 className="w-3.5 h-3.5 text-red-600" />
            <span>Ajakan Membaca Stimulus</span>
          </button>
          <button
            type="button"
            onClick={handlePlaySolvingVoice}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-red-100 text-red-800 text-xs font-bold rounded-xl border border-red-200 transition-colors shadow-2xs"
          >
            <Volume2 className="w-3.5 h-3.5 text-amber-600" />
            <span>Petunjuk Bernalar</span>
          </button>
        </div>

        {/* Stimulus Context Section */}
        <div className="mt-6 bg-slate-50/80 p-5 rounded-2xl border border-slate-200">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            STIMULUS SOAL & INFORMASI RIIL:
          </div>
          <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
            <MathView text={question.stimulusContext} />
          </p>

          {/* Table Data if present */}
          {question.stimulusData?.type === 'table' && question.stimulusData.headers && (
            <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white">
              <table className="min-w-full divide-y divide-slate-200 text-xs text-left">
                <thead className="bg-slate-100 text-slate-700 font-bold">
                  <tr>
                    {question.stimulusData.headers.map((h, i) => (
                      <th key={i} className="px-3.5 py-2">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {question.stimulusData.rows?.map((row, rIdx) => (
                    <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="px-3.5 py-2 font-medium text-slate-800">
                          {String(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Scientific Diagram if present */}
          {question.diagram && <QuestionDiagram diagram={question.diagram} />}
        </div>

        {/* Formula Drawer Toggle Button */}
        <div className="mt-4">
          <button
            type="button"
            onClick={() => setShowFormulaDrawer(!showFormulaDrawer)}
            className="flex items-center gap-2 text-xs font-bold text-red-700 hover:text-red-900 hover:underline"
          >
            <Key className="w-4 h-4" />
            <span>
              {showFormulaDrawer ? 'Tutup Rumus Kunci' : 'Butuh Bantuan? Buka Rumus Kunci Soal Ini'}
            </span>
          </button>

          {showFormulaDrawer && (
            <div className="mt-2.5 p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs animate-fadeIn">
              <span className="font-bold text-amber-950 block mb-1">
                Rumus / Konsep Kunci:
              </span>
              <div className="py-2 text-center text-sm">
                <MathView math={question.rumusKunciPreview} block />
              </div>
              <p className="text-slate-600 mt-1 italic">
                Tips Mister Jo: Gunakan konsep di atas untuk menganalisis hubungan antarvariabel sebelum menghitung.
              </p>
            </div>
          )}
        </div>

        {/* Specific Question Prompt */}
        <div className="mt-6 pt-5 border-t border-slate-200">
          <div className="text-xs font-bold uppercase tracking-wider text-red-700 mb-2">
            PERTANYAAN PENALARAN:
          </div>
          <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
            <MathView text={question.questionPrompt} />
          </p>
        </div>

        {/* Answer Selection Controls */}
        <div className="mt-6 space-y-3">
          {/* Format 1: Pilihan Ganda (PG) */}
          {question.type === 'PG' && question.options && (
            <div className="space-y-2.5" role="radiogroup" aria-label="Pilihan jawaban">
              {question.options.map((opt) => {
                const isSelected = selectedSingle === opt.key;
                return (
                  <button
                    key={opt.key}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    disabled={existingAnswer?.isSubmitted}
                    onClick={() => setSelectedSingle(opt.key)}
                    className={`w-full flex items-center gap-3.5 p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-red-600 bg-red-50/80 ring-2 ring-red-400/50 shadow-xs'
                        : 'border-slate-200 hover:border-red-300 hover:bg-slate-50'
                    }`}
                  >
                    <span
                      className={`w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-red-700 text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {opt.key}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-slate-900 flex-1">
                      <MathView text={opt.text} />
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Format 2: Pilihan Ganda Kompleks (PGK) */}
          {question.type === 'PGK' && question.options && (
            <div className="space-y-3">
              <div className="text-xs font-bold text-amber-800 bg-amber-50 px-3 py-2 rounded-xl border border-amber-200 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>
                  Perhatian: Soal ini adalah <strong>Pilihan Ganda Kompleks</strong>. Pilihlah SEMUA opsi (bisa lebih dari satu) yang benar!
                </span>
              </div>
              {question.options.map((opt) => {
                const isChecked = selectedMultiple.includes(opt.key);
                return (
                  <button
                    key={opt.key}
                    type="button"
                    role="checkbox"
                    aria-checked={isChecked}
                    disabled={existingAnswer?.isSubmitted}
                    onClick={() => handleSelectMultipleOption(opt.key)}
                    className={`w-full flex items-start gap-3.5 p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      isChecked
                        ? 'border-red-600 bg-red-50/80 ring-2 ring-red-400/50 shadow-xs'
                        : 'border-slate-200 hover:border-red-300 hover:bg-slate-50'
                    }`}
                  >
                    <span
                      className={`w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                        isChecked
                          ? 'bg-red-700 text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {isChecked ? '✓' : opt.key}
                    </span>
                    <div className="flex-1">
                      <span className="text-sm sm:text-base font-semibold text-slate-900">
                        <MathView text={opt.text} />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Format 3: Benar - Salah (3 Pernyataan) */}
          {question.type === 'BENAR_SALAH' && question.statements && (
            <div className="space-y-4">
              <div className="text-xs font-bold text-blue-800 bg-blue-50 px-3 py-2 rounded-xl border border-blue-200 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                <span>
                  Tentukan apakah masing-masing pernyataan berikut bernilai <strong>BENAR</strong> atau <strong>SALAH</strong>!
                </span>
              </div>

              {question.statements.map((stmt, sIdx) => {
                const userVal = selectedStatements[stmt.id];
                return (
                  <div
                    key={stmt.id}
                    className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {sIdx + 1}
                      </span>
                      <p className="text-sm font-medium text-slate-800 leading-relaxed flex-1">
                        <MathView text={stmt.statement} />
                      </p>
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-200/60">
                      <button
                        type="button"
                        disabled={existingAnswer?.isSubmitted}
                        onClick={() => handleStatementChoice(stmt.id, true)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                          userVal === true
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : 'bg-white border border-slate-300 text-slate-700 hover:border-emerald-500'
                        }`}
                      >
                        BENAR
                      </button>
                      <button
                        type="button"
                        disabled={existingAnswer?.isSubmitted}
                        onClick={() => handleStatementChoice(stmt.id, false)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                          userVal === false
                            ? 'bg-red-600 text-white shadow-xs'
                            : 'bg-white border border-slate-300 text-slate-700 hover:border-red-500'
                        }`}
                      >
                        SALAH
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Submit or Result Status Card */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          {!existingAnswer?.isSubmitted ? (
            <button
              type="button"
              disabled={!isAnswerReady()}
              onClick={handleSubmitAnswer}
              className="flex items-center gap-2 px-6 py-3.5 bg-red-700 hover:bg-red-800 disabled:opacity-50 text-white font-black text-sm rounded-2xl shadow-md transition-all transform active:scale-95"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>SIMPAN & PERIKSA JAWABAN</span>
            </button>
          ) : (
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                {existingAnswer.isFullyCorrect ? (
                  <div className="flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-900 rounded-xl font-black text-sm border border-emerald-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Jawaban Tepat (Skor: 1.0)</span>
                  </div>
                ) : existingAnswer.score > 0 ? (
                  <div className="flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-900 rounded-xl font-black text-sm border border-amber-300">
                    <HelpCircle className="w-5 h-5 text-amber-600" />
                    <span>Jawaban Parsial (Skor: {existingAnswer.score})</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-900 rounded-xl font-black text-sm border border-red-300">
                    <XCircle className="w-5 h-5 text-red-600" />
                    <span>Jawaban Kurang Tepat (Skor: 0.0)</span>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => onNavigate('pembahasan')}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-red-950 font-black text-xs sm:text-sm rounded-xl shadow-xs transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span>BACA PEMBAHASAN & CARA CEPAT</span>
              </button>
            </div>
          )}

          {/* Navigation Prev & Next */}
          <div className="flex items-center gap-2 ml-auto">
            <button
              type="button"
              disabled={question.id === 1}
              onClick={handlePrevious}
              className="flex items-center gap-1 px-4 py-2 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-800 font-bold text-xs rounded-xl transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>
            <button
              type="button"
              disabled={question.id === ALL_QUESTIONS.length}
              onClick={handleNext}
              className="flex items-center gap-1 px-4 py-2 bg-red-700 hover:bg-red-800 disabled:opacity-40 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
            >
              <span>Berikutnya</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
