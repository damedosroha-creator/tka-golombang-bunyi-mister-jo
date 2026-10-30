import React from 'react';
import { QuestionDiagramInfo } from '../types';

interface Props {
  diagram: QuestionDiagramInfo;
}

export const QuestionDiagram: React.FC<Props> = ({ diagram }) => {
  const { type, caption, params = {} } = diagram;

  const renderContent = () => {
    switch (type) {
      case 'medium_speed': {
        return (
          <svg viewBox="0 0 540 180" className="w-full max-w-lg mx-auto select-none">
            <defs>
              <linearGradient id="solidGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#cbd5e1" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
              <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#dc2626" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            {/* Medium Block */}
            <rect x="70" y="35" width="400" height="100" rx="8" fill="url(#solidGrad)" opacity="0.4" stroke="#475569" strokeWidth="2" strokeDasharray="4 2" />
            
            {/* Ultrasonic Transducer Source */}
            <rect x="35" y="55" width="35" height="60" rx="4" fill="#991b1b" stroke="#7f1d1d" strokeWidth="2" />
            <text x="52" y="90" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Tx</text>
            <text x="52" y="130" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="600">Pemancar</text>

            {/* Ultrasonic Receiver / Reflector */}
            <rect x="470" y="55" width="35" height="60" rx="4" fill="#1e3a8a" stroke="#172554" strokeWidth="2" />
            <text x="487" y="90" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Rx</text>
            <text x="487" y="130" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="600">Penerima</text>

            {/* Longitudinal compression wave lines */}
            {[110, 130, 160, 200, 240, 290, 340, 390, 430].map((cx, i) => (
              <g key={i}>
                <line x1={cx} y1="45" x2={cx} y2="125" stroke="#dc2626" strokeWidth={i % 2 === 0 ? "3" : "1.5"} opacity="0.75" />
                <circle cx={cx} cy="85" r="2.5" fill="#dc2626" />
              </g>
            ))}

            {/* Length marker */}
            <line x1="70" y1="150" x2="470" y2="150" stroke="#0f172a" strokeWidth="1.5" />
            <line x1="70" y1="145" x2="70" y2="155" stroke="#0f172a" strokeWidth="1.5" />
            <line x1="470" y1="145" x2="470" y2="155" stroke="#0f172a" strokeWidth="1.5" />
            <text x="270" y="165" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
              {params.distanceLabel ? String(params.distanceLabel) : 'Jarak Lintasan (d)'}
            </text>
          </svg>
        );
      }

      case 'open_pipe': {
        const harmonic = Number(params.harmonic || 2);
        return (
          <svg viewBox="0 0 540 160" className="w-full max-w-lg mx-auto select-none">
            {/* Tube body (open both ends) */}
            <rect x="60" y="40" width="420" height="70" fill="#f8fafc" stroke="#334155" strokeWidth="3" />
            <line x1="60" y1="40" x2="60" y2="110" stroke="#94a3b8" strokeDasharray="3 3" strokeWidth="1.5" />
            <line x1="480" y1="40" x2="480" y2="110" stroke="#94a3b8" strokeDasharray="3 3" strokeWidth="1.5" />

            {/* Standing wave envelope in open pipe: antinodes at both ends */}
            <path
              d={
                harmonic === 1
                  ? "M 60,45 Q 270,75 480,45 M 60,105 Q 270,75 480,105"
                  : harmonic === 2
                  ? "M 60,45 Q 165,75 270,105 Q 375,75 480,45 M 60,105 Q 165,75 270,45 Q 375,75 480,105"
                  : "M 60,45 Q 130,75 200,105 Q 270,75 340,45 Q 410,75 480,105 M 60,105 Q 130,75 200,45 Q 270,75 340,105 Q 410,75 480,45"
              }
              fill="none"
              stroke="#dc2626"
              strokeWidth="2.5"
            />

            {/* Labels */}
            <text x="60" y="30" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="bold">Perut (A)</text>
            <text x="480" y="30" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="bold">Perut (A)</text>
            <text x="270" y="30" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="600">Pipa Organa Terbuka</text>

            {/* Pipe length marker */}
            <line x1="60" y1="130" x2="480" y2="130" stroke="#0f172a" strokeWidth="1.5" />
            <line x1="60" y1="125" x2="60" y2="135" stroke="#0f172a" strokeWidth="1.5" />
            <line x1="480" y1="125" x2="480" y2="135" stroke="#0f172a" strokeWidth="1.5" />
            <text x="270" y="145" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold">
              {params.pipeLength ? `L = ${params.pipeLength}` : 'Panjang Pipa (L)'}
            </text>
          </svg>
        );
      }

      case 'closed_pipe': {
        const harmonic = Number(params.harmonic || 1);
        return (
          <svg viewBox="0 0 540 160" className="w-full max-w-lg mx-auto select-none">
            {/* Tube body (open left, closed right) */}
            <rect x="60" y="40" width="420" height="70" fill="#f8fafc" stroke="#334155" strokeWidth="3" />
            {/* Closed wall on the right */}
            <rect x="475" y="38" width="12" height="74" fill="#475569" stroke="#1e293b" strokeWidth="2" />
            <line x1="60" y1="40" x2="60" y2="110" stroke="#94a3b8" strokeDasharray="3 3" strokeWidth="1.5" />

            {/* Standing wave envelope in closed pipe: antinode at open end, node at closed end */}
            <path
              d={
                harmonic === 1
                  ? "M 60,45 Q 350,60 475,75 M 60,105 Q 350,90 475,75"
                  : "M 60,45 Q 200,85 330,45 Q 420,70 475,75 M 60,105 Q 200,65 330,105 Q 420,80 475,75"
              }
              fill="none"
              stroke="#dc2626"
              strokeWidth="2.5"
            />

            {/* Labels */}
            <text x="60" y="30" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="bold">Ujung Terbuka (Perut)</text>
            <text x="475" y="30" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="bold">Ujung Tertutup (Simpul)</text>

            {/* Length marker */}
            <line x1="60" y1="130" x2="475" y2="130" stroke="#0f172a" strokeWidth="1.5" />
            <line x1="60" y1="125" x2="60" y2="135" stroke="#0f172a" strokeWidth="1.5" />
            <line x1="475" y1="125" x2="475" y2="135" stroke="#0f172a" strokeWidth="1.5" />
            <text x="267" y="145" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold">
              {params.pipeLength ? `L = ${params.pipeLength}` : 'Panjang Pipa (L)'}
            </text>
          </svg>
        );
      }

      case 'string_melde': {
        return (
          <svg viewBox="0 0 540 180" className="w-full max-w-lg mx-auto select-none">
            {/* Vibrator / Sumber getar Melde */}
            <rect x="40" y="55" width="45" height="50" rx="4" fill="#334155" stroke="#0f172a" strokeWidth="2" />
            <text x="62" y="85" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Vibrator</text>
            <line x1="85" y1="80" x2="100" y2="80" stroke="#dc2626" strokeWidth="3" />

            {/* String loops (2 loops) */}
            <path
              d="M 100,80 Q 180,45 260,80 Q 340,115 420,80 M 100,80 Q 180,115 260,80 Q 340,45 420,80"
              fill="none"
              stroke="#dc2626"
              strokeWidth="2.5"
            />

            {/* Pulley (Katrol licin) */}
            <circle cx="425" cy="80" r="14" fill="#94a3b8" stroke="#334155" strokeWidth="2" />
            <circle cx="425" cy="80" r="4" fill="#334155" />

            {/* Hanging string and Mass (Beban) */}
            <line x1="439" y1="80" x2="439" y2="135" stroke="#dc2626" strokeWidth="2" />
            <rect x="424" y="135" width="30" height="25" rx="3" fill="#64748b" stroke="#334155" strokeWidth="2" />
            <text x="439" y="152" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">m</text>

            {/* Length marker */}
            <line x1="100" y1="120" x2="420" y2="120" stroke="#0f172a" strokeWidth="1.5" />
            <line x1="100" y1="115" x2="100" y2="125" stroke="#0f172a" strokeWidth="1.5" />
            <line x1="420" y1="115" x2="420" y2="125" stroke="#0f172a" strokeWidth="1.5" />
            <text x="260" y="136" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold">Panjang Dawai Bergetar (L)</text>
          </svg>
        );
      }

      case 'resonance_tube': {
        return (
          <svg viewBox="0 0 540 180" className="w-full max-w-lg mx-auto select-none">
            {/* Tuning Fork */}
            <g transform="translate(110, 10)">
              <rect x="0" y="25" width="6" height="30" fill="#64748b" />
              <path d="M 3,25 C 3,12 -8,10 -8,-2 M 3,25 C 3,12 14,10 14,-2" fill="none" stroke="#64748b" strokeWidth="4" />
              {/* Vibration arcs */}
              <path d="M -15, -6 C -18,2 -18,8 -15,14" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="2 2" />
              <path d="M 21, -6 C 24,2 24,8 21,14" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="2 2" />
              <text x="3" y="-12" textAnchor="middle" fill="#dc2626" fontSize="11" fontWeight="bold">f garpu tala</text>
            </g>

            {/* Resonance Glass Tube */}
            <rect x="80" y="55" width="70" height="110" fill="#f8fafc" stroke="#475569" strokeWidth="2.5" />
            
            {/* Water Column inside Tube */}
            <rect x="82" y="115" width="66" height="48" fill="#60a5fa" opacity="0.6" />
            <line x1="82" y1="115" x2="148" y2="115" stroke="#2563eb" strokeWidth="2" />
            
            {/* Standing sound wave in air column */}
            <path d="M 85,55 Q 115,85 115,115 M 145,55 Q 115,85 115,115" fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="3 2" />

            {/* Height Air column marker L1 */}
            <line x1="170" y1="55" x2="170" y2="115" stroke="#0f172a" strokeWidth="1.5" />
            <line x1="165" y1="55" x2="175" y2="55" stroke="#0f172a" strokeWidth="1.5" />
            <line x1="165" y1="115" x2="175" y2="115" stroke="#0f172a" strokeWidth="1.5" />
            <text x="210" y="88" fill="#0f172a" fontSize="12" fontWeight="bold">L₁ (Kolom Udara)</text>

            {/* Connecting hose & Reservoir */}
            <path d="M 115,165 Q 115,175 240,175 Q 360,175 360,140" fill="none" stroke="#94a3b8" strokeWidth="6" />
            <rect x="340" y="70" width="40" height="80" rx="4" fill="#93c5fd" stroke="#3b82f6" strokeWidth="2" opacity="0.8" />
            <text x="360" y="60" textAnchor="middle" fill="#1e3a8a" fontSize="10" fontWeight="bold">Reservoir Air</text>
          </svg>
        );
      }

      case 'doppler_effect': {
        return (
          <svg viewBox="0 0 540 180" className="w-full max-w-lg mx-auto select-none">
            {/* Moving Source (Ambulans / Sumber S) */}
            <g transform="translate(180, 75)">
              {/* Sound waves emitted while moving right */}
              <circle cx="-10" cy="15" r="35" fill="none" stroke="#dc2626" strokeWidth="1.5" opacity="0.8" />
              <circle cx="-35" cy="15" r="70" fill="none" stroke="#dc2626" strokeWidth="1.5" opacity="0.6" />
              <circle cx="-65" cy="15" r="105" fill="none" stroke="#dc2626" strokeWidth="1.5" opacity="0.4" />
              <circle cx="-100" cy="15" r="140" fill="none" stroke="#dc2626" strokeWidth="1.2" opacity="0.3" />

              {/* Vehicle body */}
              <rect x="0" y="0" width="55" height="28" rx="4" fill="#991b1b" stroke="#7f1d1d" strokeWidth="1.5" />
              <circle cx="12" cy="28" r="6" fill="#1e293b" />
              <circle cx="43" cy="28" r="6" fill="#1e293b" />
              {/* Siren */}
              <rect x="23" y="-6" width="9" height="6" fill="#ef4444" />
              {/* Speed arrow vs */}
              <line x1="60" y1="14" x2="95" y2="14" stroke="#dc2626" strokeWidth="2.5" />
              <polygon points="95,14 87,10 87,18" fill="#dc2626" />
              <text x="75" y="6" textAnchor="middle" fill="#dc2626" fontSize="11" fontWeight="bold">vs →</text>
            </g>

            {/* Stationary Observer P (Pendengar) on the right */}
            <g transform="translate(450, 70)">
              <circle cx="15" cy="10" r="10" fill="#334155" />
              <path d="M 5,42 Q 15,22 25,42 Z" fill="#475569" />
              <text x="15" y="-5" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold">Pengamat (P)</text>
              <text x="15" y="58" textAnchor="middle" fill="#64748b" fontSize="10">vp</text>
            </g>

            <text x="140" y="165" textAnchor="middle" fill="#475569" fontSize="11">Gelombang merapat (λ' lebih pendek)</text>
            <text x="450" y="165" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="bold">Frekuensi teramati fp</text>
          </svg>
        );
      }

      case 'sound_intensity':
      case 'distance_falloff': {
        return (
          <svg viewBox="0 0 540 180" className="w-full max-w-lg mx-auto select-none">
            {/* Point Sound Source */}
            <circle cx="80" cy="90" r="10" fill="#dc2626" stroke="#991b1b" strokeWidth="2" />
            <text x="80" y="118" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="bold">Sumber (P)</text>

            {/* Spherical Wavefronts */}
            <circle cx="80" cy="90" r="60" fill="none" stroke="#2563eb" strokeWidth="2" opacity="0.8" />
            <circle cx="80" cy="90" r="130" fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="5 3" opacity="0.6" />

            {/* Detector at r1 */}
            <rect x="135" y="83" width="12" height="14" rx="2" fill="#1e3a8a" />
            <text x="141" y="75" textAnchor="middle" fill="#1e3a8a" fontSize="11" fontWeight="bold">Posisi 1 (I₁)</text>

            {/* Detector at r2 */}
            <rect x="205" y="83" width="12" height="14" rx="2" fill="#1e3a8a" />
            <text x="211" y="75" textAnchor="middle" fill="#1e3a8a" fontSize="11" fontWeight="bold">Posisi 2 (I₂)</text>

            {/* Radius indicators */}
            <line x1="80" y1="90" x2="140" y2="90" stroke="#0f172a" strokeWidth="1.5" />
            <line x1="80" y1="90" x2="210" y2="90" stroke="#0f172a" strokeWidth="1.5" />
            <text x="110" y="105" textAnchor="middle" fill="#0f172a" fontSize="10">r₁</text>
            <text x="175" y="105" textAnchor="middle" fill="#0f172a" fontSize="10">r₂</text>

            {/* Formula badge */}
            <g transform="translate(300, 45)">
              <rect x="0" y="0" width="200" height="90" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
              <text x="100" y="25" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold">Hukum Kuadrat Terbalik</text>
              <text x="100" y="52" textAnchor="middle" fill="#dc2626" fontSize="13" fontWeight="bold">I ∝ 1 / r²</text>
              <text x="100" y="75" textAnchor="middle" fill="#475569" fontSize="11">Luas Muka Gelombang: 4πr²</text>
            </g>
          </svg>
        );
      }

      case 'n_sources': {
        return (
          <svg viewBox="0 0 540 180" className="w-full max-w-lg mx-auto select-none">
            {/* Cluster of industrial sound sources */}
            {[
              { x: 70, y: 50 },
              { x: 130, y: 50 },
              { x: 190, y: 50 },
              { x: 70, y: 110 },
              { x: 130, y: 110 },
              { x: 190, y: 110 },
            ].map((pt, i) => (
              <g key={i}>
                <rect x={pt.x - 18} y={pt.y - 18} width="36" height="36" rx="6" fill="#f1f5f9" stroke="#991b1b" strokeWidth="2" />
                <circle cx={pt.x} cy={pt.y} r="8" fill="#dc2626" />
                <path d={`M ${pt.x + 8},${pt.y - 8} Q ${pt.x + 16},${pt.y} ${pt.x + 8},${pt.y + 8}`} fill="none" stroke="#dc2626" strokeWidth="1.5" />
                <text x={pt.x} y={pt.y + 26} textAnchor="middle" fill="#475569" fontSize="9">Mesin {i + 1}</text>
              </g>
            ))}

            {/* Summation Arrow */}
            <line x1="230" y1="80" x2="280" y2="80" stroke="#0f172a" strokeWidth="2" />
            <polygon points="285,80 275,75 275,85" fill="#0f172a" />
            <text x="255" y="70" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold">N Mesin</text>

            {/* Decibel Meter Sensor */}
            <g transform="translate(320, 45)">
              <rect x="0" y="0" width="180" height="90" rx="8" fill="#1e293b" />
              <text x="90" y="28" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">Sound Level Meter</text>
              <rect x="25" y="38" width="130" height="34" rx="4" fill="#0f172a" stroke="#334155" />
              <text x="90" y="60" textAnchor="middle" fill="#22c55e" fontSize="14" fontFamily="monospace" fontWeight="bold">TI_total (dB)</text>
            </g>
          </svg>
        );
      }

      case 'sound_properties':
      default: {
        return (
          <svg viewBox="0 0 540 180" className="w-full max-w-lg mx-auto select-none">
            {/* Two acoustic speakers for interference */}
            <g transform="translate(60, 40)">
              <rect x="0" y="0" width="30" height="40" rx="4" fill="#1e293b" />
              <polygon points="30,8 45,0 45,40 30,32" fill="#475569" />
              <text x="15" y="55" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold">Speaker 1</text>
            </g>
            <g transform="translate(60, 110)">
              <rect x="0" y="0" width="30" height="40" rx="4" fill="#1e293b" />
              <polygon points="30,8 45,0 45,40 30,32" fill="#475569" />
              <text x="15" y="55" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold">Speaker 2</text>
            </g>

            {/* Path lines d1 and d2 to listener point P */}
            <line x1="105" y1="60" x2="420" y2="85" stroke="#dc2626" strokeWidth="2" strokeDasharray="5 3" />
            <line x1="105" y1="130" x2="420" y2="85" stroke="#2563eb" strokeWidth="2" strokeDasharray="5 3" />

            {/* Point P (Detektor / Mikrofon) */}
            <circle cx="420" cy="85" r="8" fill="#0f172a" />
            <text x="420" y="115" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold">Titik Uji (P)</text>
            <text x="420" y="130" textAnchor="middle" fill="#475569" fontSize="10">Beda Lintasan Δs = |d₂ - d₁|</text>

            <text x="250" y="55" textAnchor="middle" fill="#dc2626" fontSize="11" fontWeight="600">Lintasan d₁</text>
            <text x="250" y="125" textAnchor="middle" fill="#2563eb" fontSize="11" fontWeight="600">Lintasan d₂</text>
          </svg>
        );
      }
    }
  };

  return (
    <div className="my-4 p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
      <div className="flex justify-center items-center py-2 bg-slate-50 rounded-lg">
        {renderContent()}
      </div>
      <p className="text-center text-xs text-slate-500 mt-2 italic font-medium">
        Gambar: {caption}
      </p>
    </div>
  );
};
