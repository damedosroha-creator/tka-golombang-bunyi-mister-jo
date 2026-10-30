export interface FormulaItem {
  id: number;
  subtopicName: string;
  title: string;
  formulaLatex: string;
  description: string;
  variables: { symbol: string; name: string; unit: string }[];
  misterJoShortcut: string;
  notes?: string;
}

export const FORMULA_BANK: FormulaItem[] = [
  {
    id: 1,
    subtopicName: 'Kelajuan Bunyi dalam Berbagai Medium',
    title: 'Kelajuan Bunyi pada Zat Cair (Modulus Bulk)',
    formulaLatex: 'v = \\sqrt{\\frac{B}{\\rho}}',
    description: 'Menghitung kelajuan perambatan gelombang bunyi longitudinal di dalam fluida atau zat cair.',
    variables: [
      { symbol: 'v', name: 'Kelajuan rambat bunyi', unit: 'm/s' },
      { symbol: 'B', name: 'Modulus elastisitas Bulk', unit: 'N/m² atau Pa' },
      { symbol: 'ρ', name: 'Massa jenis fluida', unit: 'kg/m³' },
    ],
    misterJoShortcut: 'Makin kaku (B besar) dan makin enteng (ρ kecil) zat cairnya, bunyi merambat makin kencang!',
  },
  {
    id: 2,
    subtopicName: 'Kelajuan Bunyi dalam Berbagai Medium',
    title: 'Kelajuan Bunyi pada Gas Ideal (Termodinamika Laplace)',
    formulaLatex: 'v = \\sqrt{\\frac{\\gamma R T}{M}} = \\sqrt{\\frac{\\gamma P}{\\rho}}',
    description: 'Menghitung kelajuan gelombang bunyi pada medium gas ideal yang merambat secara adiabatik.',
    variables: [
      { symbol: 'γ', name: 'Konstanta Laplace (Cp/Cv)', unit: 'tanpa satuan (gas monoatomik = 5/3, diatomik = 7/5)' },
      { symbol: 'R', name: 'Tetapan umum gas ideal', unit: '8,314 J/(mol·K)' },
      { symbol: 'T', name: 'Temperatur MUTLAK gas', unit: 'Kelvin (K = °C + 273)' },
      { symbol: 'M', name: 'Massa molar gas', unit: 'kg/mol' },
      { symbol: 'P', name: 'Tekanan statis gas', unit: 'N/m² (Pa)' },
      { symbol: 'ρ', name: 'Kerapatan massa gas', unit: 'kg/m³' },
    ],
    misterJoShortcut: 'Ingat! v sebanding dengan akar Kelvin (T). Jangan pernah pakai derajat Celsius langsung!',
  },
  {
    id: 3,
    subtopicName: 'Kelajuan Bunyi dalam Berbagai Medium',
    title: 'Kelajuan Bunyi pada Zat Padat (Batang)',
    formulaLatex: 'v = \\sqrt{\\frac{E}{\\rho}}',
    description: 'Menghitung kelajuan gelombang longitudinal pada batang padat elastis.',
    variables: [
      { symbol: 'v', name: 'Kelajuan bunyi pada zat padat', unit: 'm/s' },
      { symbol: 'E', name: 'Modulus elastisitas Young', unit: 'N/m²' },
      { symbol: 'ρ', name: 'Massa jenis zat padat', unit: 'kg/m³' },
    ],
    misterJoShortcut: 'Logam memiliki modulus Young raksasa (10¹¹ N/m²), itu sebabnya bunyi merambat tercepat di rel baja (~5.000 m/s).',
  },
  {
    id: 4,
    subtopicName: 'Gelombang Bunyi pada Pipa Organa Terbuka',
    title: 'Frekuensi Harmonik Pipa Organa Terbuka',
    formulaLatex: 'f_n = \\frac{n \\cdot v}{2L}, \\quad n = 1, 2, 3, \\dots',
    description: 'Kedua ujung terbuka menghasilkan perut simpangan. Membentuk seluruh deret bilangan bulat alami.',
    variables: [
      { symbol: 'fn', name: 'Frekuensi harmonik ke-n', unit: 'Hz' },
      { symbol: 'n', name: 'Indeks harmonik (n=1: dasar, n=2: nada atas 1, n=3: nada atas 2)', unit: 'bilangan bulat' },
      { symbol: 'v', name: 'Kelajuan bunyi di udara', unit: 'm/s' },
      { symbol: 'L', name: 'Panjang kolom pipa', unit: 'meter (m)' },
    ],
    misterJoShortcut: 'Perbandingan frekuensi harmonik pipa terbuka: f₁ : f₂ : f₃ = 1 : 2 : 3 : 4 (lengkap semua nomor!).',
  },
  {
    id: 5,
    subtopicName: 'Gelombang Bunyi pada Pipa Organa Tertutup',
    title: 'Frekuensi Harmonik Pipa Organa Tertutup',
    formulaLatex: 'f_n = \\frac{(2n - 1) \\cdot v}{4L}, \\quad n = 1, 2, 3, \\dots',
    description: 'Satu ujung terbuka (perut) dan satu ujung tertutup (simpul). Hanya menghasilkan harmonik ganjil!',
    variables: [
      { symbol: 'fn', name: 'Frekuensi harmonik ganjil', unit: 'Hz' },
      { symbol: 'n', name: 'Indeks tingkat nada (n=1: dasar, n=2: nada atas 1)', unit: 'bilangan bulat' },
      { symbol: 'L', name: 'Panjang pipa tertutup', unit: 'meter (m)' },
    ],
    misterJoShortcut: 'Pipa tertutup itu pelit! Pembaginya 4L (bukan 2L) dan hanya punya nada ganjil: 1 : 3 : 5 : 7. Tidak ada harmonik genap!',
  },
  {
    id: 6,
    subtopicName: 'Gelombang Bunyi pada Dawai (Hukum Melde & Sonometer)',
    title: 'Hukum Melde dan Frekuensi Dawai',
    formulaLatex: 'v = \\sqrt{\\frac{F}{\\mu}}, \\quad \\mu = \\frac{m}{L}, \\quad f_n = \\frac{n}{2L}\\sqrt{\\frac{F}{\\mu}}',
    description: 'Kelajuan transversal dan frekuensi resonansi dawai atau senar gitar bertumpuan ganda.',
    variables: [
      { symbol: 'F', name: 'Gaya tegangan dawai/kawat', unit: 'Newton (N)' },
      { symbol: 'μ', name: 'Massa linier per satuan panjang (m/L)', unit: 'kg/m' },
      { symbol: 'L', name: 'Panjang dawai yang bergetar', unit: 'meter (m)' },
    ],
    misterJoShortcut: 'Makin kencang ditarik (F besar) -> nada makin tinggi. Senar makin tebal (μ besar) -> nada makin rendah (bass).',
  },
  {
    id: 7,
    subtopicName: 'Resonansi Bunyi Tingkat ke-n (Tabung Resonansi)',
    title: 'Resonansi Kolom Udara Tabung Air',
    formulaLatex: 'L_n = (2n - 1)\\frac{\\lambda}{4}, \\quad \\Delta L = L_{n+1} - L_n = \\frac{\\lambda}{2}',
    description: 'Penguatan dengung suara saat panjang kolom udara di atas air beresonansi dengan garpu tala.',
    variables: [
      { symbol: 'Ln', name: 'Panjang kolom udara saat resonansi ke-n', unit: 'meter (m)' },
      { symbol: 'λ', name: 'Panjang gelombang bunyi di udara', unit: 'meter (m)' },
      { symbol: 'ΔL', name: 'Selisih jarak dua resonansi berturutan', unit: 'meter (m)' },
    ],
    misterJoShortcut: 'Gunakan selisih: L₂ - L₁ = λ/2! Kalikan selisih itu dengan 2 untuk langsung mendapat λ tanpa pusing koreksi ujung pipa.',
  },
  {
    id: 8,
    subtopicName: 'Efek Doppler',
    title: 'Pergeseran Frekuensi Doppler Akustik',
    formulaLatex: 'f_p = f_s \\left( \\frac{v \\pm v_p}{v \\mp v_s} \\right)',
    description: 'Perubahan frekuensi yang didengar oleh pengamat akibat gerak relatif sumber dan pengamat terhadap medium udara.',
    variables: [
      { symbol: 'fp', name: 'Frekuensi yang didengar pengamat (pendengar)', unit: 'Hz' },
      { symbol: 'fs', name: 'Frekuensi asli yang dipancarkan sumber bunyi', unit: 'Hz' },
      { symbol: 'v', name: 'Kelajuan rambat gelombang bunyi di udara', unit: 'm/s (umumnya 340 m/s)' },
      { symbol: 'vp', name: 'Kecepatan gerak pengamat/pendengar', unit: 'm/s (+ jika mendekat, - jika menjauh)' },
      { symbol: 'vs', name: 'Kecepatan gerak sumber bunyi', unit: 'm/s (- jika mendekat, + jika menjauh)' },
    ],
    misterJoShortcut: 'Kaidah praktis Mister Jo: "Mendekat = Frekuensi NAIK, Menjauh = Frekuensi TURUN". Atur tanda (+) atau (-) agar pecahan membesar saat mendekat!',
  },
  {
    id: 9,
    subtopicName: 'Intensitas Bunyi',
    title: 'Hukum Kuadrat Terbalik Intensitas Sferis',
    formulaLatex: 'I = \\frac{P}{A} = \\frac{P}{4\\pi r^2} \\implies \\frac{I_1}{I_2} = \\left(\\frac{r_2}{r_1}\\right)^2',
    description: 'Fluks daya gelombang per satuan luas permukaan bola isotropik.',
    variables: [
      { symbol: 'I', name: 'Intensitas gelombang bunyi', unit: 'Watt/m² (W/m²)' },
      { symbol: 'P', name: 'Daya akustik keluaran sumber', unit: 'Watt (W)' },
      { symbol: 'r', name: 'Jarak radius dari pusat sumber titik', unit: 'meter (m)' },
    ],
    misterJoShortcut: 'Jarak mundur 2 kali lipat -> intensitas anjlok jadi 1/4. Jarak mundur 3 kali lipat -> intensitas anjlok jadi 1/9!',
  },
  {
    id: 10,
    subtopicName: 'Taraf Intensitas Bunyi (Desibel)',
    title: 'Taraf Intensitas Logaritmik (Desibel)',
    formulaLatex: '\\beta = 10 \\log\\left( \\frac{I}{I_0} \\right)',
    description: 'Skala sensasi pendengaran manusia terhadap intensitas acuan ambang dengar I₀ = 10⁻¹² W/m².',
    variables: [
      { symbol: 'β', name: 'Taraf intensitas bunyi', unit: 'desibel (dB)' },
      { symbol: 'I', name: 'Intensitas bunyi fisik', unit: 'W/m²' },
      { symbol: 'I₀', name: 'Intensitas ambang pendengaran manusia (10⁻¹² W/m²)', unit: 'W/m²' },
    ],
    misterJoShortcut: 'Trik eksponen Mister Jo: Kurangkan pangkat I dengan (-12), lalu kalikan 10. Jika I = 10⁻⁴ W/m², (-4) - (-12) = 8 -> langsung 80 dB!',
  },
  {
    id: 11,
    subtopicName: 'Taraf Intensitas n Sumber Bunyi Identik',
    title: 'Superposisi Bising N Mesin Identik',
    formulaLatex: '\\beta_{\\text{total}} = \\beta_1 + 10 \\log N',
    description: 'Penjumlahan taraf intensitas akustik dari N sumber tak koheren yang bekerja bersamaan.',
    variables: [
      { symbol: 'β_total', name: 'Taraf intensitas gabungan N sumber', unit: 'dB' },
      { symbol: 'β₁', name: 'Taraf intensitas 1 sumber tunggal', unit: 'dB' },
      { symbol: 'N', name: 'Banyaknya sumber bunyi identik', unit: 'unit mesin' },
    ],
    misterJoShortcut: 'Hitung angka nol pada N! N = 10 (+10 dB), N = 100 (+20 dB), N = 1.000 (+30 dB). Tambahkan ke nilai satu mesin!',
  },
  {
    id: 12,
    subtopicName: 'Taraf Intensitas Bunyi Berdasarkan Perbedaan Jarak',
    title: 'Pelemahan Taraf Intensitas terhadap Jarak',
    formulaLatex: '\\beta_2 = \\beta_1 - 20 \\log\\left( \\frac{r_2}{r_1} \\right)',
    description: 'Penurunan angka desibel saat pengamat menjauhi sumber bunyi titik.',
    variables: [
      { symbol: 'β₁', name: 'Taraf intensitas pada jarak r₁', unit: 'dB' },
      { symbol: 'β₂', name: 'Taraf intensitas pada jarak r₂', unit: 'dB' },
      { symbol: 'r₁, r₂', name: 'Jarak pertama dan kedua dari sumber', unit: 'meter (m)' },
    ],
    misterJoShortcut: 'Pengali untuk JARAK adalah 20 log (bukan 10 log). Jarak naik 10 kali lipat -> desibel selalu turun 20 dB!',
  },
  {
    id: 13,
    subtopicName: 'Sifat-Sifat Gelombang Bunyi',
    title: 'Interferensi Dua Sumber Koheren dan Pelayangan Bunyi',
    formulaLatex: '\\Delta s = m \\cdot \\lambda \\; (\\text{Konstruktif}), \\quad \\Delta s = \\left(m + \\frac{1}{2}\\right)\\lambda \\; (\\text{Destruktif}), \\quad f_{\\text{layang}} = |f_1 - f_2|',
    description: 'Syarat beda lintasan untuk penguatan/pelemahan bunyi serta frekuensi pelayangan getaran.',
    variables: [
      { symbol: 'Δs', name: 'Selisih panjang lintasan tempuh gelombang (|d₁ - d₂|)', unit: 'meter (m)' },
      { symbol: 'm', name: 'Orde interferensi (0, 1, 2, ...)', unit: 'bilangan bulat' },
      { symbol: 'flayang', name: 'Frekuensi pelayangan ketukan bunyi per sekon', unit: 'Hz' },
    ],
    misterJoShortcut: 'Pelayangan adalah selisih mutlak frekuensi |f₁ - f₂|. Dua garpu tala 440 Hz dan 443 Hz bergetar menghasilkan 3 ketukan denyut per sekon!',
  },
];
