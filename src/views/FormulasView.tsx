import React, { useState } from 'react';
import { FORMULA_BANK } from '../data/formulas';
import { MathView } from '../components/MathView';
import {
  Key,
  Search,
  Zap,
  BookOpen,
  Sparkles,
} from 'lucide-react';

export const FormulasView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFormulas = FORMULA_BANK.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.subtopicName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 py-4 animate-fadeIn max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-900 via-red-800 to-red-700 text-white rounded-3xl p-6 sm:p-8 shadow-md">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-red-200 mb-3">
          <Key className="w-4 h-4 text-amber-300" />
          <span>KOMPENDIUM FORMULA LENGKAP</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
          Rumus Kunci Gelombang Bunyi
        </h1>
        <p className="mt-2 text-sm sm:text-base text-red-100 max-w-2xl leading-relaxed">
          Kumpulan komprehensif rumus 11 submateri beserta keterangan simbol besaran fisika, satuan internasional (SI), dan trik nalar Cara Cepat Mister Jo.
        </p>

        {/* Search Input */}
        <div className="mt-6 max-w-md relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Cari rumus (contoh: Doppler, dawai, desibel, resonansi)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white text-slate-900 text-xs sm:text-sm font-medium rounded-xl placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-amber-400"
          />
        </div>
      </div>

      {/* Formula Cards List */}
      <div className="space-y-6">
        {filteredFormulas.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl border border-slate-200 shadow-xs hover:border-red-300 transition-all p-6 sm:p-8 space-y-5"
          >
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-100">
                {item.subtopicName}
              </span>
              <span className="text-xs text-slate-400 font-bold">
                Formula #{item.id}
              </span>
            </div>

            <h2 className="text-lg sm:text-xl font-black text-slate-900">
              {item.title}
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {item.description}
            </p>

            {/* Formula KaTeX Block Box */}
            <div className="p-4 bg-slate-50/90 rounded-2xl border border-slate-200 text-center">
              <MathView math={item.formulaLatex} block className="text-base sm:text-xl font-bold" />
            </div>

            {/* Variables and Units Table */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
                Keterangan Simbol & Satuan SI:
              </h3>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="min-w-full divide-y divide-slate-200 text-xs text-left">
                  <thead className="bg-slate-100 text-slate-700 font-bold">
                    <tr>
                      <th className="px-3.5 py-2 w-20">Simbol</th>
                      <th className="px-3.5 py-2">Nama Besaran Fisika</th>
                      <th className="px-3.5 py-2">Satuan SI</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {item.variables.map((v, vIdx) => (
                      <tr key={vIdx} className="hover:bg-slate-50">
                        <td className="px-3.5 py-2 font-mono font-bold text-red-700">
                          {v.symbol}
                        </td>
                        <td className="px-3.5 py-2 font-medium text-slate-800">
                          {v.name}
                        </td>
                        <td className="px-3.5 py-2 text-slate-500 font-mono">
                          {v.unit}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cara Cepat Mister Jo Note */}
            <div className="p-4 bg-gradient-to-r from-amber-50 to-amber-100/40 rounded-2xl border border-amber-200 flex items-start gap-3">
              <div className="p-1.5 bg-amber-400 text-red-950 rounded-lg shrink-0 mt-0.5">
                <Zap className="w-4 h-4 fill-current" />
              </div>
              <div>
                <span className="text-xs font-black text-amber-950 uppercase tracking-wider block">
                  Trik Cepat Mister Jo:
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-1 leading-relaxed">
                  <MathView text={item.misterJoShortcut} />
                </p>
              </div>
            </div>
          </div>
        ))}

        {filteredFormulas.length === 0 && (
          <div className="text-center py-12 bg-white rounded-3xl border border-slate-200">
            <p className="text-sm font-bold text-slate-600">
              Tidak ada rumus yang cocok dengan kata kunci "{searchTerm}".
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
