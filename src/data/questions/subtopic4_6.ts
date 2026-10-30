import { Question } from '../../types';

export const QUESTIONS_10_TO_18: Question[] = [
  // SOAL 10: Submateri 4 - Dawai & Melde (PG, Menengah)
  {
    id: 10,
    subtopicId: 4,
    subtopicName: 'Gelombang Bunyi pada Dawai (Hukum Melde & Sonometer)',
    type: 'PG',
    difficulty: 'Menengah',
    title: 'Penentuan Nada Dasar pada Sonometer Laboratorium Fisika',
    stimulusContext:
      'Pada praktikum hukum Melde dan dawai sonometer, seorang siswa membentangkan kawat baja sepanjang 80 cm di atas dua baji penumpu. Kawat tersebut memiliki massa total 16 gram. Salah satu ujung kawat dihubungkan ke penggantung beban melalui katrol licin, dan diberi gaya tegangan sebesar 200 N. Kawat kemudian dipetik tepat di bagian tengahnya sehingga membentuk gelombang berdiri nada dasar (harmonik pertama).',
    stimulusData: {
      type: 'table',
      headers: ['Besaran Fisika Kawat Dawai', 'Nilai Terukur', 'Satuan SI'],
      rows: [
        ['Panjang Dawai Bergetar (L)', '80 cm', '0,80 m'],
        ['Massa Dawai (m)', '16 gram', '0,016 kg'],
        ['Gaya Tegangan Kawat (F)', '200', 'Newton (N)'],
      ],
    },
    diagram: {
      type: 'string_melde',
      caption: 'Aparatus sonometer dawai dengan beban penegang kawat.',
      params: { tension: '200 N', length: '0,80 m' },
    },
    rumusKunciPreview: 'v = \\sqrt{\\frac{F}{\\mu}}, \\quad \\mu = \\frac{m}{L}, \\quad f_1 = \\frac{v}{2L}',
    questionPrompt:
      'Berapakah frekuensi nada dasar yang dihasilkan oleh getaran kawat sonometer tersebut?',
    options: [
      { key: 'A', text: '50,0 Hz' },
      { key: 'B', text: '62,5 Hz' },
      { key: 'C', text: '75,0 Hz' },
      { key: 'D', text: '100,0 Hz' },
      { key: 'E', text: '125,0 Hz' },
    ],
    correctAnswerSingle: 'B',
    explanation: {
      memahamiMasalah:
        'Menentukan frekuensi getaran nada dasar (f₁) kawat dawai sonometer berdasarkan panjang (L), massa (m), dan gaya tegangan (F).',
      diketahui: [
        'Panjang dawai, L = 80 cm = 0,80 m',
        'Massa dawai, m = 16 gram = 0,016 kg = 1,6 × 10⁻² kg',
        'Gaya tegangan dawai, F = 200 N',
      ],
      ditanyakan: 'Frekuensi nada dasar dawai (f₁)',
      rumusKunci: 'v = \\sqrt{\\frac{F}{\\mu}}, \\quad \\mu = \\frac{m}{L}, \\quad f_1 = \\frac{v}{2L}',
      analisisKonsep:
        'Kelajuan gelombang transversal pada dawai memenuhi Hukum Melde: v = √(F/μ), di mana μ adalah massa per satuan panjang dawai (kg/m). Pada nada dasar dawai (n = 1), panjang dawai sama dengan setengah panjang gelombang (L = λ/2), sehingga frekuensinya adalah f₁ = v / (2L).',
      penyelesaian: `Langkah 1: Menghitung massa jenis linier dawai (μ)
$$\\mu = \\frac{m}{L} = \\frac{0{,}016\\ \\text{kg}}{0{,}80\\ \\text{m}} = 0{,}02\\ \\text{kg/m} = 2 \\times 10^{-2}\\ \\text{kg/m}$$

Langkah 2: Menghitung kelajuan rambat gelombang pada dawai (v)
$$v = \\sqrt{\\frac{F}{\\mu}} = \\sqrt{\\frac{200}{0{,}02}} = \\sqrt{10.000} = 100\\ \\text{m/s}$$

Langkah 3: Menghitung frekuensi nada dasar dawai (f₁)
$$f_1 = \\frac{v}{2L} = \\frac{100}{2 \\times 0{,}80} = \\frac{100}{1{,}60} = 62{,}5\\ \\text{Hz}$$`,
      hasilAkhir: '62,5 Hz (Pilihan B)',
      kesimpulan:
        'Dengan massa jenis linier 0,02 kg/m dan tegangan 200 N, gelombang transversal merambat dengan laju 100 m/s pada dawai, menghasilkan nada dasar 62,5 Hz.',
      caraCepatMisterJo:
        'Hitung cepat μ = 16/80 = 0,2 g/cm = 0,02 kg/m. v = √(200 / 0,02) = √10000 = 100 m/s. Langsung f = 100 / (2 × 0,8) = 100 / 1,6 = 62,5 Hz! Angka bulat dan rapi.',
      jebakanKonsep:
        'Sering lupa mengubah satuan massa gram ke kilogram (m = 0,016 kg), atau lupa mengalikan panjang L dengan 2 pada penyebut f = v / (2L).',
    },
    voiceScripts: {
      preStimulus:
        'Perhatikan dawai sonometer ini. Hubungkan massa, panjang, dan gaya tegangannya.',
      onSolving:
        'Ingat: konversikan 16 gram menjadi nol koma nol satu enam kilogram sebelum menghitung massa per satuan panjang.',
      explanation:
        'Massa per satuan panjang adalah nol koma nol dua kilogram per meter. Kelajuan gelombangnya seratus meter per sekon. Dibagi dua kali nol koma delapan, didapat frekuensi enam puluh dua koma lima Hertz.',
      caraCepat:
        'Trik cepat Mister Jo: akar dari 200 dibagi 0,02 adalah 100 m/s. Bagi langsung dengan 1,6 m, hasilnya tepat 62,5 Hertz!',
    },
  },

  // SOAL 11: Submateri 4 - Dawai & Melde (PGK, Sulit)
  {
    id: 11,
    subtopicId: 4,
    subtopicName: 'Gelombang Bunyi pada Dawai (Hukum Melde & Sonometer)',
    type: 'PGK',
    difficulty: 'Sulit',
    title: 'Analisis Penyetelan Nada Dawai Senar Gitar Konser',
    stimulusContext:
      'Seorang musisi sedang menala (tuning) senar gitar nomor 5 (nada A2 dengan frekuensi standar 110 Hz). Panjang senar yang bebas bergetar antara bridge dan nut adalah L = 64 cm dengan gaya tegangan awal F₁. Musisi tersebut ingin menaikkan frekuensi nada dasar senar tersebut menjadi nada C3 (132 Hz) untuk memainkan komposisi khusus. Ia mempertimbangkan dua metode alternatif: (1) memutar tuner pasak untuk memperbesar tegangan dawai menjadi F₂, atau (2) menekan fret senar dengan jari sehingga panjang dawai yang bergetar memendek menjadi L₂ pada tegangan tetap F₁.',
    stimulusData: {
      type: 'comparison',
      content:
        'Kondisi 1: f₁ = 110 Hz, F₁, L₁ = 64 cm.\nKondisi 2 Target: f₂ = 132 Hz.\nMetode A: Mengubah F (L tetap = 64 cm).\nMetode B: Mengubah L (F tetap = F₁).',
    },
    diagram: {
      type: 'string_melde',
      caption: 'Penalaan frekuensi senar dawai melalui perubahan tegangan dan pemendekan panjang fret.',
    },
    rumusKunciPreview: 'f = \\frac{1}{2L}\\sqrt{\\frac{F}{\\mu}} \\implies f \\propto \\frac{\\sqrt{F}}{L}',
    questionPrompt:
      'Manakah dari analisis teknik penalaan senar berikut yang BENAR secara fisika? (Pilihlah semua jawaban yang benar!)',
    options: [
      { key: 'A', text: 'Rasio frekuensi nada target terhadap nada awal (f₂ : f₁) adalah 6 : 5.' },
      { key: 'B', text: 'Jika penalaan dilakukan hanya dengan memutar pasak tegangan (L tetap), maka gaya tegangan dawai harus dinaikkan sebesar 44% dari nilai semula.' },
      { key: 'C', text: 'Jika penalaan dilakukan hanya dengan memendekkan dawai menggunakan fret (tegangan tetap), maka panjang dawai yang bergetar harus diatur menjadi 53,3 cm.' },
      { key: 'D', text: 'Kelajuan perambatan gelombang pada dawai meningkat jika musisi menaikkan nada dengan metode penekanan fret.' },
      { key: 'E', text: 'Jika kawat diganti dengan kawat sejenis yang jari-jari penampangnya dua kali lebih besar pada panjang dan tegangan yang sama, frekuensi nada dasarnya akan menjadi setengah dari semula.' },
    ],
    correctAnswerMultiple: ['A', 'B', 'C', 'E'],
    explanation: {
      memahamiMasalah:
        'Menganalisis hubungan antara frekuensi dawai dengan tegangan F, panjang L, dan massa jenis linier μ (jari-jari kawat).',
      diketahui: [
        'f₁ = 110 Hz, f₂ = 132 Hz',
        'L₁ = 64 cm',
      ],
      ditanyakan: 'Validitas pernyataan A, B, C, D, dan E.',
      rumusKunci: 'f = \\frac{1}{2L}\\sqrt{\\frac{F}{\\mu}}, \\quad \\mu = \\rho \\cdot A = \\rho \\cdot \\pi r^2',
      analisisKonsep:
        '1. Rasio frekuensi: f₂/f₁ = 132 / 110 = (11 × 12) / (11 × 10) = 12/10 = 6/5 = 1,2. (Opsi A BENAR)\n2. Jika L tetap: f ∝ √F → F₂/F₁ = (f₂/f₁)² = (1,2)² = 1,44. Kenaikan tegangan = (1,44 - 1) × 100% = 44%. (Opsi B BENAR)\n3. Jika F tetap: f ∝ 1/L → L₂/L₁ = f₁/f₂ = 5/6. L₂ = (5/6) × 64 cm = 320 / 6 = 53,33 cm ≈ 53,3 cm. (Opsi C BENAR)\n4. Menekan fret (Metode B): Kelajuan gelombang dawai adalah v = √(F/μ). Karena F dan kawat (μ) tidak berubah saat ditekan pada fret, kelajuan gelombang v TETAP KONSTAN! Yang berubah hanya panjang gelombangnya (λ = 2L). (Opsi D SALAH)\n5. Pengaruh jari-jari dawai: μ = ρ · π r², sehingga f ∝ 1/√μ ∝ 1/r. Jika r menjadi 2 kali lipat, f menjadi 1/2 kali semula. (Opsi E BENAR)',
      penyelesaian: `Evaluasi Opsi:
- Opsi A: $\\frac{132}{110} = \\frac{6}{5} = 1{,}2$ (BENAR)
- Opsi B: $\\frac{F_2}{F_1} = \\left(\\frac{132}{110}\\right)^2 = (1{,}2)^2 = 1{,}44 \\implies \\Delta F = +44\\%$ (BENAR)
- Opsi C: $L_2 = L_1 \\times \\frac{f_1}{f_2} = 64 \\times \\frac{5}{6} = 53{,}33\\ \\text{cm}$ (BENAR)
- Opsi D: $v = \\sqrt{F/\\mu}$ tetap konstan karena $F$ dan $\\mu$ tidak berubah saat menekan fret. (SALAH)
- Opsi E: $f \\propto \\frac{1}{r} \\implies$ jika $r$ naik $2\\times$, $f$ turun menjadi $\\frac{1}{2}\\times$. (BENAR)`,
      hasilAkhir: 'Pernyataan A, B, C, dan E bernilai BENAR.',
      kesimpulan:
        'Kelajuan gelombang pada dawai adalah sifat medium yang hanya bergantung pada tegangan dan massa persatuan panjang, tidak bergantung pada letak penekanan fret.',
      caraCepatMisterJo:
        'Eliminasi cepat: ingat bahwa kelajuan gelombang pada senar v = √(F/μ). Menekan senar di fret gitar sama sekali tidak mengubah tegangan F maupun jenis senar μ, jadi v pasti tetap! Opsi D salah, sisanya A, B, C, E benar!',
      jebakanKonsep:
        'Banyak siswa mengira bahwa karena frekuensi naik saat senar dipendekkan di fret gitar, maka kelajuan gelombangnya juga ikut meningkat. Itu salah! Kelajuan gelombang tetap, hanya panjang gelombangnya yang mengecil!',
    },
    voiceScripts: {
      preStimulus:
        'Perhatikan dua cara menaikkan nada pada senar gitar: mengubah tegangan dan memendekkan dawai.',
      onSolving:
        'Cermati perbedaan antara kelajuan gelombang pada dawai dan frekuensi getaran saat dawai dipendekkan.',
      explanation:
        'Pernyataan D salah karena menekan fret hanya memendekkan dawai, tanpa mengubah kelajuan rambat gelombangnya. Pernyataan A, B, C, dan E terbukti tepat.',
      caraCepat:
        'Trik cepat Mister Jo: kelajuan gelombang pada dawai hanya bergantung pada tegangan dan massa senar. Menekan jari pada fret tidak mengubah keduanya, jadi v konstan. Coret D!',
    },
  },

  // SOAL 12: Submateri 4 - Dawai & Melde (BENAR-SALAH, Sangat Sulit)
  {
    id: 12,
    subtopicId: 4,
    subtopicName: 'Gelombang Bunyi pada Dawai (Hukum Melde & Sonometer)',
    type: 'BENAR_SALAH',
    difficulty: 'Sangat Sulit',
    title: 'Evaluasi Fisis Eksperimen Melde pada Gelombang Berdiri Transversal',
    stimulusContext:
      'Dalam eksperimen Melde, seutas tali kawat ringan dihubungkan ke garpu tala elektromagnetik yang bergetar dengan frekuensi konstan f. Ujung lain tali dilewatkan pada katrol licin dan digantungi beban bermassa M. Terbentuk pola gelombang berdiri dengan n gelung (perut gelombang) di sepanjang tali sepanjang L. Mahasiswa fisika melakukan analisis terhadap pengaruh variasi massa beban M terhadap jumlah gelung gelombang berdiri yang teramati.',
    diagram: {
      type: 'string_melde',
      caption: 'Pola gelombang berdiri eksperimen Melde dengan n gelung.',
    },
    rumusKunciPreview: 'L = n \\frac{\\lambda}{2}, \\quad \\lambda = \\frac{v}{f} = \\frac{1}{f}\\sqrt{\\frac{M \\cdot g}{\\mu}}',
    questionPrompt:
      'Tentukan apakah masing-masing pernyataan berikut BENAR atau SALAH berdasarkan analisis mekanika gelombang eksperimen Melde!',
    statements: [
      {
        id: 's12_1',
        statement:
          'Jumlah gelung gelombang berdiri (n) berbanding terbalik dengan akar kuadrat massa beban penegang tali (n ∝ 1/√M).',
        isCorrect: true,
        explanation:
          'Panjang tali L = n·λ/2 = n/(2f) · √(Mg/μ). Karena L, f, g, dan μ konstan, maka n · √M = konstan, sehingga n ∝ 1/√M.',
      },
      {
        id: 's12_2',
        statement:
          'Jika massa beban penegang tali dinaikkan menjadi 4 kali semula, maka jumlah gelung gelombang berdiri yang terbentuk di sepanjang tali akan bertambah menjadi 2 kali semula.',
        isCorrect: false,
        explanation:
          'Karena n ∝ 1/√M, jika massa beban M dinaikkan menjadi 4 kali semula, jumlah gelung n justru berkurang menjadi 1/√4 = 1/2 kali semula (gelung menjadi lebih sedikit dan lebih lebar).',
      },
      {
        id: 's12_3',
        statement:
          'Pada setiap simpul gelombang berdiri di sepanjang tali, energi mekanik gelombang tersimpan sepenuhnya dalam bentuk energi potensial elastis maksimum, sedangkan energi kinetiknya bernilai nol setiap saat.',
        isCorrect: false,
        explanation:
          'Pada simpul sejati gelombang berdiri, simpangan tali selalu nol setiap saat (partikel tidak berosilasi sama sekali), sehingga baik energi kinetik maupun energi potensial simpangan partikel di titik simpul selalu nol. Aliran daya netto melewati titik simpul adalah nol.',
      },
    ],
    explanation: {
      memahamiMasalah:
        'Mengevaluasi relasi jumlah gelung pada percobaan Melde terhadap massa beban penegang tali dan perilaku energi pada titik simpul gelombang berdiri.',
      diketahui: [
        'Eksperimen Melde: f tetap, L tetap, μ tetap',
        'Gaya tegangan: F = M · g',
      ],
      ditanyakan: 'Status kebenaran pernyataan 1, 2, dan 3.',
      rumusKunci: 'L = \\frac{n}{2f}\\sqrt{\\frac{Mg}{\\mu}} \\implies n \\sqrt{M} = \\text{konstan}',
      analisisKonsep:
        '1. Pernyataan 1: Dari persamaan Melde, $n = 2Lf \\sqrt{\\frac{\\mu}{Mg}} \\propto \\frac{1}{\\sqrt{M}}$. (BENAR)\n2. Pernyataan 2: Jika M menjadi 4M, maka $n_2 = n_1 / \\sqrt{4} = n_1 / 2$. Jumlah gelung berkurang menjadi setengahnya, bukan bertambah dua kali lipat. (SALAH)\n3. Pernyataan 3: Pada simpul gelombang berdiri (node), tali diam mutlak (y = 0 dan dy/dt = 0). Tidak ada osilasi partikel pada titik simpul, sehingga energi getarannya nol. (SALAH)',
      penyelesaian: `Evaluasi matematis:
- Pernyataan 1: $n \\propto \\frac{1}{\\sqrt{M}}$. (BENAR)
- Pernyataan 2: $n_2 = \\frac{n_1}{\\sqrt{4}} = \\frac{1}{2} n_1$. (SALAH)
- Pernyataan 3: Pada simpul, amplitudo getaran partikel adalah nol konstan, sehingga $E_k = 0$ dan energi gelombang tidak tersimpan di titik simpul. (SALAH)`,
      hasilAkhir: 'Pernyataan 1: BENAR, Pernyataan 2: SALAH, Pernyataan 3: SALAH.',
      kesimpulan:
        'Makin kencang tegangan tali, makin cepat gelombang merambat, makin panjang gelombangnya, sehingga jumlah gelung yang muat di sepanjang tali makin sedikit.',
      caraCepatMisterJo:
        'Trik logika Mister Jo: tali ditarik makin tegang (beban makin berat) pasti makin kaku dan gelombangnya makin melebar. Kalau gelombangnya makin melebar, pasti jumlah gelungnya MAKIN SEDIKIT, bukan makin banyak! Maka pernyataan 2 otomatis SALAH!',
      jebakanKonsep:
        'Siswa sering mengira makin berat beban maka gelombangnya makin banyak (tertukar hubungan sebanding dengan berbanding terbalik).',
    },
    voiceScripts: {
      preStimulus:
        'Cermati fenomena gelombang berdiri pada percobaan Melde ini.',
      onSolving:
        'Pikirkan logika fisis: jika tali ditarik lebih kuat, apakah jumlah gelung bertambah atau berkurang?',
      explanation:
        'Pernyataan satu Benar karena n berbanding terbalik dengan akar massa beban. Pernyataan dua Salah karena jika massa empat kali lipat jumlah gelung menjadi setengahnya. Pernyataan tiga Salah karena pada simpul amplitudonya selalu nol.',
      caraCepat:
        'Ingat rumus praktis Mister Jo: n dikali akar M sama dengan konstan. Beban naik empat kali, gelung turun menjadi setengahnya!',
    },
  },

  // SOAL 13: Submateri 5 - Resonansi Kolom Udara (PG, Menengah)
  {
    id: 13,
    subtopicId: 5,
    subtopicName: 'Resonansi Bunyi Tingkat ke-n (Tabung Resonansi)',
    type: 'PG',
    difficulty: 'Menengah',
    title: 'Pengukuran Kelajuan Bunyi Menggunakan Tabung Resonansi Air',
    stimulusContext:
      'Di laboratorium fisika sekolah, sebuah tabung kaca vertikal diisi air yang permukaannya dapat diatur naik-turun menggunakan reservoir bejana berhubungan. Sebuah garpu tala dengan frekuensi tetap 500 Hz digetarkan di atas mulut tabung. Saat permukaan air diturunkan perlahan, bunyi dengung penguatan (resonansi) pertama terdengar sangat keras ketika panjang kolom udara di atas air adalah L₁ = 17,0 cm. Permukaan air terus diturunkan hingga resonansi kedua terdengar pada panjang kolom udara L₂ = 51,0 cm.',
    stimulusData: {
      type: 'table',
      headers: ['Tahap Resonansi', 'Tingkat Resonansi (n)', 'Panjang Kolom Udara (L)'],
      rows: [
        ['Resonansi Pertama', 'n = 1', '17,0 cm = 0,17 m'],
        ['Resonansi Kedua', 'n = 2', '51,0 cm = 0,51 m'],
      ],
    },
    diagram: {
      type: 'resonance_tube',
      caption: 'Tabung resonansi kolom udara dengan permukaan air sebagai batas ujung tertutup.',
    },
    rumusKunciPreview: '\\Delta L = L_2 - L_1 = \\frac{\\lambda}{2} \\implies \\lambda = 2(L_2 - L_1), \\quad v = f \\cdot \\lambda',
    questionPrompt:
      'Berdasarkan data eksperimen resonansi tersebut, berapakah kelajuan perambatan gelombang bunyi di udara laboratorium tersebut?',
    options: [
      { key: 'A', text: '320 m/s' },
      { key: 'B', text: '330 m/s' },
      { key: 'C', text: '340 m/s' },
      { key: 'D', text: '350 m/s' },
      { key: 'E', text: '360 m/s' },
    ],
    correctAnswerSingle: 'C',
    explanation: {
      memahamiMasalah:
        'Menentukan kelajuan bunyi di udara (v) dari selisih panjang kolom udara dua resonansi berturutan (L₁ dan L₂) dengan frekuensi garpu tala f = 500 Hz.',
      diketahui: [
        'Frekuensi garpu tala, f = 500 Hz',
        'Panjang kolom udara resonansi ke-1, L₁ = 17,0 cm = 0,17 m',
        'Panjang kolom udara resonansi ke-2, L₂ = 51,0 cm = 0,51 m',
      ],
      ditanyakan: 'Kelajuan rambat bunyi di udara (v)',
      rumusKunci: '\\Delta L = L_2 - L_1 = \\frac{\\lambda}{2} \\implies \\lambda = 2(L_2 - L_1), \\quad v = f \\cdot \\lambda',
      analisisKonsep:
        'Permukaan air berperan sebagai ujung tertutup (simpul), sedangkan mulut tabung adalah ujung terbuka (perut). Selisih panjang kolom udara antara dua resonansi yang berurutan (L₂ - L₁) selalu tepat sama dengan setengah panjang gelombang (λ/2). Metode selisih ini sangat unggul karena secara otomatis menghilangkan galat koreksi ujung pipa (end-correction factor)!',
      penyelesaian: `Langkah 1: Menghitung panjang gelombang bunyi (λ)
$$L_2 - L_1 = \\frac{\\lambda}{2}$$
$$0{,}51 - 0{,}17 = 0{,}34\\ \\text{m} = \\frac{\\lambda}{2}$$
$$\\lambda = 2 \\times 0{,}34 = 0{,}68\\ \\text{m}$$

Langkah 2: Menghitung kelajuan bunyi (v)
$$v = f \\cdot \\lambda = 500\\ \\text{Hz} \\times 0{,}68\\ \\text{m} = 340\\ \\text{m/s}$$`,
      hasilAkhir: '340 m/s (Pilihan C)',
      kesimpulan:
        'Kelajuan gelombang bunyi di udara laboratorium terukur secara akurat sebesar 340 m/s.',
      caraCepatMisterJo:
        'Trik kilat Mister Jo: Kurangkan langsung 51 - 17 = 34 cm. Kalikan dua: λ = 68 cm = 0,68 m. Kalikan dengan frekuensi 500: 500 × 0,68 sama dengan setengah dari 680, yaitu 340 m/s! Selesai dalam 10 detik.',
      jebakanKonsep:
        'Banyak siswa langsung menghitung λ = 4 × L₁ = 4 × 17 = 68 cm tanpa menyadari adanya faktor koreksi ujung mulut tabung. Walaupun hasilnya kebetulan sama pada data ideal ini, rumus yang sahih dan bebas galat adalah selisih ΔL = λ/2!',
    },
    voiceScripts: {
      preStimulus:
        'Ini eksperimen tabung resonansi klasik. Perhatikan selisih panjang kolom udara antara dua dengung pertama dan kedua.',
      onSolving:
        'Gunakan rumus selisih: L dua dikurangi L satu sama dengan setengah lambda.',
      explanation:
        'Selisih panjang kolom adalah 34 sentimeter, sehingga panjang gelombang lambda adalah dua kalinya, yaitu 68 sentimeter atau 0,68 meter. Dikalikan frekuensi 500 Hertz, didapatkan kelajuan bunyi 340 meter per sekon.',
      caraCepat:
        'Kunci cepat Mister Jo: kurangkan 51 dengan 17 didapat 34. Dua kalinya adalah 68 cm. Kalikan 500, langsung dapat 340 meter per sekon!',
    },
  },

  // SOAL 14: Submateri 5 - Resonansi Kolom Udara (PGK, Sulit)
  {
    id: 14,
    subtopicId: 5,
    subtopicName: 'Resonansi Bunyi Tingkat ke-n (Tabung Resonansi)',
    type: 'PGK',
    difficulty: 'Sulit',
    title: 'Analisis Koreksi Ujung dan Resonansi Tingkat Lanjut pada Kolom Akustik',
    stimulusContext:
      'Pada pengukuran presisi tinggi di laboratorium akustik, sebuah tabung resonansi berdiameter dalam d = 4,0 cm (jari-jari r = 2,0 cm = 0,02 m) digunakan untuk mengukur frekuensi garpu tala tak dikenal. Dalam teori akustik nyata, perut simpangan gelombang tidak terbentuk persis di bibir tabung, melainkan berada sedikit di luar mulut tabung sejauh faktor koreksi ujung e = 0,6 r. Kelajuan bunyi di udara saat itu adalah v = 344 m/s. Resonansi pertama terjadi pada ketinggian kolom udara terukur L₁ = 20,3 cm.',
    stimulusData: {
      type: 'table',
      headers: ['Parameter Tabung Resonansi', 'Nilai Fisis'],
      rows: [
        ['Jari-jari Tabung (r)', '2,0 cm = 0,02 m'],
        ['Faktor Koreksi Ujung (e = 0,6 r)', '0,6 × 2,0 = 1,2 cm = 0,012 m'],
        ['Panjang Kolom Resonansi Pertama (L₁)', '20,3 cm = 0,203 m'],
        ['Kelajuan Bunyi (v)', '344 m/s'],
      ],
    },
    diagram: {
      type: 'resonance_tube',
      caption: 'Koreksi ujung akustik (e) di atas mulut tabung resonansi kolom udara.',
    },
    rumusKunciPreview: 'L_1 + e = \\frac{\\lambda}{4}, \\quad e = 0{,}6r, \\quad L_2 + e = \\frac{3\\lambda}{4}',
    questionPrompt:
      'Berdasarkan data eksperimen presisi tersebut, manakah pernyataan-pernyataan berikut yang BENAR? (Pilihlah semua jawaban yang benar!)',
    options: [
      { key: 'A', text: 'Panjang efektif kolom udara pada resonansi pertama adalah 21,5 cm.' },
      { key: 'B', text: 'Panjang gelombang bunyi yang dipancarkan oleh garpu tala adalah 86,0 cm.' },
      { key: 'C', text: 'Frekuensi getaran garpu tala tersebut adalah 400 Hz.' },
      { key: 'D', text: 'Resonansi kedua akan teramati ketika panjang kolom udara L₂ bernilai 64,5 cm.' },
      { key: 'E', text: 'Resonansi kedua akan teramati ketika panjang kolom udara L₂ bernilai 63,3 cm.' },
    ],
    correctAnswerMultiple: ['A', 'B', 'C', 'E'],
    explanation: {
      memahamiMasalah:
        'Menghitung panjang efektif, panjang gelombang, frekuensi, dan posisi resonansi kedua dengan memperhitungkan faktor koreksi ujung (end correction e = 0,6r).',
      diketahui: [
        'r = 2,0 cm = 0,02 m',
        'e = 0,6 r = 0,6 × 2,0 cm = 1,2 cm = 0,012 m',
        'L₁ = 20,3 cm = 0,203 m',
        'v = 344 m/s',
      ],
      ditanyakan: 'Kombinasi pernyataan ilmiah yang benar.',
      rumusKunci: 'L_1 + e = \\frac{\\lambda}{4}, \\quad L_2 + e = \\frac{3\\lambda}{4}, \\quad v = f \\cdot \\lambda',
      analisisKonsep:
        '1. Panjang efektif kolom resonansi pertama:\nL_{1,\\text{efektif}} = L₁ + e = 20,3 + 1,2 = 21,5 cm = 0,215 m. (Opsi A BENAR)\n2. Panjang gelombang:\nλ/4 = L_{1,\\text{efektif}} = 21,5 cm → λ = 4 × 21,5 = 86,0 cm = 0,86 m. (Opsi B BENAR)\n3. Frekuensi garpu tala:\nf = v / λ = 344 / 0,86 = 400 Hz. (Opsi C BENAR)\n4. Resonansi kedua:\nL₂ + e = 3λ/4 = 3 × 21,5 cm = 64,5 cm.\nMaka panjang kolom fisik yang terukur adalah L₂ = 64,5 - e = 64,5 - 1,2 = 63,3 cm. (Opsi E BENAR, Opsi D SALAH)',
      penyelesaian: `Langkah per langkah:
1. Koreksi ujung tabung:
$$e = 0{,}6 \\times 2{,}0\\ \\text{cm} = 1{,}2\\ \\text{cm}$$
$$L_{1,\\text{efektif}} = 20{,}3 + 1{,}2 = 21{,}5\\ \\text{cm} = 0{,}215\\ \\text{m}$$

2. Panjang gelombang:
$$\\lambda = 4 \\times L_{1,\\text{efektif}} = 4 \\times 21{,}5\\ \\text{cm} = 86{,}0\\ \\text{cm} = 0{,}86\\ \\text{m}$$

3. Frekuensi:
$$f = \\frac{v}{\\lambda} = \\frac{344\\ \\text{m/s}}{0{,}86\\ \\text{m}} = 400\\ \\text{Hz}$$

4. Resonansi kedua ($L_2$ terukur):
$$L_{2,\\text{efektif}} = \\frac{3\\lambda}{4} = 64{,}5\\ \\text{cm}$$
$$L_2 = 64{,}5 - e = 64{,}5 - 1{,}2 = 63{,}3\\ \\text{cm}$$`,
      hasilAkhir: 'Pernyataan A, B, C, dan E bernilai BENAR.',
      kesimpulan:
        'Koreksi ujung memperbesar panjang efektif kolom udara, sehingga panjang tabung fisik yang terukur selalu lebih pendek sejauh e dibanding panjang teoritis gelombang berdiri.',
      caraCepatMisterJo:
        'Perhatikan trik Mister Jo: Panjang efektif resonansi kedua adalah 3 × 21,5 = 64,5 cm. Tapi awas! Itu panjang EFEKTIF. Untuk mencari panjang kolom tabung nyata L₂, harus dikurangi koreksi ujung 1,2 cm menjadi 63,3 cm. Jadi pilih E dan coret D!',
      jebakanKonsep:
        'Jebakan fatal terjadi pada opsi D: siswa sering lupa mengurangkan faktor koreksi ujung e saat menghitung panjang fisik tabung L₂.',
    },
    voiceScripts: {
      preStimulus:
        'Soal ini membahas faktor koreksi ujung tabung resonansi, materi HOTS yang sering muncul pada seleksi masuk perguruan tinggi.',
      onSolving:
        'Bedakan antara panjang kolom udara efektif dengan panjang kolom udara fisik yang terukur pada skala tabung.',
      explanation:
        'Panjang efektif resonansi pertama adalah 21,5 sentimeter, menghasilkan panjang gelombang 86 sentimeter dan frekuensi 400 Hertz. Pada resonansi kedua, panjang terukur adalah 64,5 dikurangi 1,2 yaitu 63,3 sentimeter.',
      caraCepat:
        'Ingat trik Mister Jo: panjang tabung nyata selalu dikurangi koreksi ujung sebesar 1,2 cm. 64,5 dikurangi 1,2 adalah 63,3 cm!',
    },
  },

  // SOAL 15: Submateri 5 - Resonansi Kolom Udara (BENAR-SALAH, Sangat Sulit)
  {
    id: 15,
    subtopicId: 5,
    subtopicName: 'Resonansi Bunyi Tingkat ke-n (Tabung Resonansi)',
    type: 'BENAR_SALAH',
    difficulty: 'Sangat Sulit',
    title: 'Evaluasi Fisis Resonansi Bunyi dan Deret Resonansi Tabung Uji',
    stimulusContext:
      'Peneliti akustik menguji fenomena resonansi kolom udara tabung tertutup satu ujungnya menggunakan sumber audio multifrekuensi. Peneliti mencatat hubungan antara panjang kolom resonansi berturutan (L₁, L₂, L₃, ...), frekuensi eksitasi, kelajuan rambat gelombang bunyi, dan energi akustik yang ditransmisikan.',
    diagram: {
      type: 'resonance_tube',
      caption: 'Pola gelombang berdiri resonansi berturutan dalam tabung uji.',
    },
    rumusKunciPreview: 'L_n = (2n - 1)\\frac{\\lambda}{4}, \\quad \\Delta L = L_{n+1} - L_n = \\frac{\\lambda}{2}',
    questionPrompt:
      'Tentukan apakah masing-masing pernyataan berikut bernilai BENAR atau SALAH berdasarkan prinsip resonansi gelombang bunyi!',
    statements: [
      {
        id: 's15_1',
        statement:
          'Selisih panjang kolom udara antara sembarang dua resonansi yang berurutan pada tabung resonansi air selalu sama dengan setengah panjang gelombang (ΔL = λ/2), berapapun tingkat resonansinya.',
        isCorrect: true,
        explanation:
          'L_{n+1} - L_n = [ (2n+1)λ/4 ] - [ (2n-1)λ/4 ] = 2λ/4 = λ/2. Nilai ini selalu konstan untuk setiap pasangan resonansi berurutan.',
      },
      {
        id: 's15_2',
        statement:
          'Jika frekuensi garpu tala yang digetarkan di atas mulut tabung dilipatduakan, maka jarak selisih antar-resonansi berturutan (ΔL) akan menjadi dua kali lebih besar.',
        isCorrect: false,
        explanation:
          'Jika f dilipatduakan pada kelajuan v konstan, maka λ = v/f menjadi setengah dari semula. Karena ΔL = λ/2, maka ΔL justru berkurang menjadi setengah dari semula, bukan dua kali lebih besar.',
      },
      {
        id: 's15_3',
        statement:
          'Saat resonansi terjadi, frekuensi alami kolom udara tepat berimpit dengan frekuensi garpu tala sehingga terjadi transfer energi maksimum yang menghasilkan amplitudo bunyi paling keras.',
        isCorrect: true,
        explanation:
          'Ini adalah definisi murni fenomena resonansi mekanik akustik: kondisi transfer daya osilasi optimal saat frekuensi pendorong sama dengan salah satu frekuensi eigen (alami) sistem kolom udara.',
      },
    ],
    explanation: {
      memahamiMasalah:
        'Menganalisis sifat invarian selisih resonansi berurutan, ketergantungan panjang gelombang terhadap frekuensi eksitasi, dan konsep dasar resonansi transfer daya maksimum.',
      diketahui: [
        'Tabung resonansi tertutup satu ujung',
        'Deret panjang kolom: $L_n = (2n-1)\\frac{\\lambda}{4}$',
      ],
      ditanyakan: 'Status kebenaran pernyataan 1, 2, dan 3.',
      rumusKunci: '\\Delta L = \\frac{\\lambda}{2} = \\frac{v}{2f}',
      analisisKonsep:
        '1. Pernyataan 1: Selisih antara $L_{n+1}$ dan $L_n$ selalu tepat $\\lambda / 2$. (BENAR)\n2. Pernyataan 2: $\\Delta L = \\frac{v}{2f}$. Hubungannya adalah BERBANDING TERBALIK dengan frekuensi. Jika frekuensi $f$ naik $2\\times$, maka $\\Delta L$ menjadi $\\frac{1}{2}\\times$. (SALAH)\n3. Pernyataan 3: Resonansi terjadi saat frekuensi sumber sama dengan frekuensi alami sistem, menyebabkan amplitudo getaran molekul udara melonjak maksimum. (BENAR)',
      penyelesaian: `Evaluasi matematis:
- Pernyataan 1: $\\Delta L = L_{n+1} - L_n = \\frac{\\lambda}{2}$ (BENAR)
- Pernyataan 2: $\\Delta L = \\frac{v}{2f} \\implies \\Delta L \\propto \\frac{1}{f}$. Jika $f' = 2f$, maka $\\Delta L' = \\frac{\\Delta L}{2}$ (SALAH)
- Pernyataan 3: Karakteristik transfer energi maksimum pada resonansi akustik (BENAR)`,
      hasilAkhir: 'Pernyataan 1: BENAR, Pernyataan 2: SALAH, Pernyataan 3: BENAR.',
      kesimpulan:
        'Frekuensi yang lebih tinggi menghasilkan panjang gelombang yang lebih rapat, sehingga titik-titik resonansi berikutnya berada lebih dekat satu sama lain.',
      caraCepatMisterJo:
        'Logika cepat Mister Jo: Frekuensi makin tinggi -> bunyi makin melengking -> gelombang makin rapat -> selisih resonansi (ΔL) makin pendek! Jadi pernyataan 2 yang bilang makin besar jelas SALAH!',
      jebakanKonsep:
        'Siswa sering terkecoh mengira frekuensi tinggi membuat jarak resonansi makin panjang. Ingat: v = f · λ, jika f naik maka λ turun!',
    },
    voiceScripts: {
      preStimulus:
        'Perhatikan soal evaluasi resonansi ini. Pahami definisi dan hubungan antarvariabel frekuensi dan panjang gelombang.',
      onSolving:
        'Gunakan hubungan berbanding terbalik antara frekuensi dan panjang gelombang bunyi.',
      explanation:
        'Pernyataan satu Benar karena selisih dua resonansi berturutan selalu setengah lambda. Pernyataan dua Salah karena frekuensi naik membuat selisih resonansi mengecil. Pernyataan tiga Benar sesuai prinsip resonansi.',
      caraCepat:
        'Trik kilat Mister Jo: frekuensi tinggi berarti gelombang rapat, sehingga jarak resonansi makin sempit. Pernyataan dua pasti Salah!',
    },
  },

  // SOAL 16: Submateri 6 - Efek Doppler (PG, Menengah)
  {
    id: 16,
    subtopicId: 6,
    subtopicName: 'Efek Doppler',
    type: 'PG',
    difficulty: 'Menengah',
    title: 'Deteksi Frekuensi Sirene Ambulans Bergerak Mendekati Pengamat Diam',
    stimulusContext:
      'Sebuah mobil ambulans melaju darurat di jalan raya lurus dengan kelajuan konstan 72 km/jam (20 m/s) sambil membunyikan sirene dengan frekuensi 680 Hz. Di tepi jalan, seorang petugas polisi lalu lintas berdiri diam menunggu ambulans tersebut melintas. Kelajuan rambat gelombang bunyi di udara sekitar pada saat itu adalah 340 m/s.',
    stimulusData: {
      type: 'table',
      headers: ['Objek / Parameter', 'Kecepatan / Nilai', 'Keterangan Arah'],
      rows: [
        ['Sumber Bunyi (Sirene Ambulans)', 'vs = 20 m/s', 'Bergerak mendekati pendengar'],
        ['Pengamat (Petugas Polisi)', 'vp = 0 m/s', 'Diam di tepi jalan'],
        ['Frekuensi Sumber (fs)', '680 Hz', 'Frekuensi sirene asli'],
        ['Kelajuan Bunyi di Udara (v)', '340 m/s', 'Medium rambat tenang'],
      ],
    },
    diagram: {
      type: 'doppler_effect',
      caption: 'Sumber bunyi bergerak mendekati pengamat yang diam di depan lintasan.',
    },
    rumusKunciPreview: 'f_p = f_s \\left( \\frac{v \\pm v_p}{v \\mp v_s} \\right) \\implies f_p = f_s \\left( \\frac{v}{v - v_s} \\right)',
    questionPrompt:
      'Berapakah frekuensi nada sirene yang didengar oleh petugas polisi lalu lintas saat ambulans sedang bergerak mendekatinya?',
    options: [
      { key: 'A', text: '640,0 Hz' },
      { key: 'B', text: '680,0 Hz' },
      { key: 'C', text: '700,0 Hz' },
      { key: 'D', text: '722,5 Hz' },
      { key: 'E', text: '760,0 Hz' },
    ],
    correctAnswerSingle: 'D',
    explanation: {
      memahamiMasalah:
        'Menghitung frekuensi bunyi yang diterima oleh pendengar diam (v_p = 0) ketika sumber bunyi mendekat dengan kecepatan v_s = 20 m/s.',
      diketahui: [
        'Frekuensi sirene sumber, f_s = 680 Hz',
        'Kelajuan ambulans (sumber), v_s = 72 km/jam = 20 m/s (mendekati pendengar)',
        'Kelajuan pendengar, v_p = 0 m/s (diam)',
        'Kelajuan bunyi di udara, v = 340 m/s',
      ],
      ditanyakan: 'Frekuensi yang didengar pengamat (f_p)',
      rumusKunci: 'f_p = f_s \\left(\\frac{v + v_p}{v - v_s}\\right)',
      analisisKonsep:
        'Berdasarkan Efek Doppler, ketika sumber bunyi bergerak MENDEKATI pendengar, muka gelombang bunyi di depan sumber akan terdorong dan memampat (panjang gelombang teramati memendek: λ_p = (v - v_s)/f_s). Akibatnya, frekuensi yang didengar oleh pengamat menjadi LEBIH TINGGI daripada frekuensi sumber asli. Tanda pada penyebut untuk sumber mendekat adalah MINUS (-).',
      penyelesaian: `Substitusi nilai ke dalam rumus Doppler:
$$f_p = f_s \\left(\\frac{v}{v - v_s}\\right)$$
$$f_p = 680 \\times \\left(\\frac{340}{340 - 20}\\right) = 680 \\times \\left(\\frac{340}{320}\\right)$$
$$f_p = 680 \\times \\frac{17}{16} = \\frac{11.560}{16} = 722{,}5\\ \\text{Hz}$$`,
      hasilAkhir: '722,5 Hz (Pilihan D)',
      kesimpulan:
        'Frekuensi teramati naik dari 680 Hz menjadi 722,5 Hz karena sumber bunyi bergerak mendekat memampatkan panjang gelombang akustik.',
      caraCepatMisterJo:
        'Trik kilat Mister Jo: Rasio kecepatan adalah 340 / 320 = 17 / 16. Bagi 680 dengan 16 didapat 42,5. Kalikan 17: 42,5 × 17 = 722,5 Hz! Selalu pastikan hasilnya LEBIH BESAR dari 680 Hz karena sumber mendekat.',
      jebakanKonsep:
        'Jebakan tanda Doppler: jika menggunakan tanda plus (+) di penyebut (v + v_s = 360), hasilnya menjadi 680 × 340/360 = 642,2 Hz (keliru menganggap frekuensi turun saat mendekat).',
    },
    voiceScripts: {
      preStimulus:
        'Ayo kita analisis Efek Doppler pada sirene ambulans yang melaju mendekat.',
      onSolving:
        'Ingat konvensi tanda Mister Jo: jika sumber mendekat, penyebut bertanda minus agar frekuensi teramati menjadi lebih tinggi.',
      explanation:
        'Tiga ratus empat puluh dibagi tiga ratus dua puluh menghasilkan tujuh belas per enam belas. Dikalikan enam ratus delapan puluh Hertz, didapatkan frekuensi tujuh ratus dua puluh dua koma lima Hertz.',
      caraCepat:
        'Tips cepat Mister Jo: sumber mendekat pasti membuat nada terdengar lebih tinggi. 680 dikali 17 dibagi 16 langsung menghasilkan 722,5 Hertz!',
    },
  },

  // SOAL 17: Submateri 6 - Efek Doppler (PGK, Sulit)
  {
    id: 17,
    subtopicId: 6,
    subtopicName: 'Efek Doppler',
    type: 'PGK',
    difficulty: 'Sulit',
    title: 'Interaksi Doppler Kompleks Dua Kendaraan Bergerak Berpapasan',
    stimulusContext:
      'Dua buah kendaraan, Mobil A dan Mobil B, melaju pada lintasan lurus yang sama dengan arah saling mendekat. Mobil A melaju dengan kelajuan tetap v_A = 25 m/s sambil membunyikan klakson dengan frekuensi f_A = 630 Hz. Mobil B melaju menyongsong Mobil A dengan kelajuan v_B = 15 m/s. Kelajuan perambatan bunyi di udara saat itu adalah v = 340 m/s. Setelah keduanya berpapasan, kedua kendaraan tetap melaju dengan kelajuan konstan masing-masing saling menjauhi.',
    stimulusData: {
      type: 'comparison',
      content:
        'Fase 1 (Saling Mendekat): v_A = 25 m/s (mendekat), v_B = 15 m/s (mendekat), f_A = 630 Hz.\nFase 2 (Saling Menjauh): v_A = 25 m/s (menjauh), v_B = 15 m/s (menjauh).\nKelajuan bunyi di udara: v = 340 m/s.',
    },
    diagram: {
      type: 'doppler_effect',
      caption: 'Dua kendaraan bergerak saling mendekati pada fase pertama dan saling menjauhi pada fase kedua.',
    },
    rumusKunciPreview: 'f_p = f_s \\left(\\frac{v \\pm v_p}{v \\mp v_s}\\right)',
    questionPrompt:
      'Manakah pernyataan-pernyataan berikut yang BENAR terkait pengamatan frekuensi oleh pengemudi Mobil B? (Pilihlah semua jawaban yang benar!)',
    options: [
      { key: 'A', text: 'Pada saat kedua kendaraan saling mendekat, frekuensi bunyi klakson Mobil A yang didengar oleh pengemudi Mobil B adalah 710 Hz.' },
      { key: 'B', text: 'Panjang gelombang bunyi di udara di antara kedua mobil saat saling mendekat adalah sekitar 0,50 meter.' },
      { key: 'C', text: 'Pada saat kedua kendaraan saling menjauhi setelah berpapasan, frekuensi yang didengar oleh pengemudi Mobil B adalah 561 Hz.' },
      { key: 'D', text: 'Selisih frekuensi yang didengar pengemudi Mobil B antara saat sebelum dan sesudah berpapasan adalah 149 Hz.' },
      { key: 'E', text: 'Kelajuan perambatan gelombang bunyi klakson di udara diukur oleh pengemudi Mobil B menjadi 365 m/s karena efek gerak relatif.' },
    ],
    correctAnswerMultiple: ['A', 'B', 'C', 'D'],
    explanation: {
      memahamiMasalah:
        'Menganalisis Efek Doppler pada dua kondisi: saling mendekat dan saling menjauh, serta menguji konsep kelajuan perambatan gelombang bunyi di medium udara.',
      diketahui: [
        'Sumber (Mobil A): v_s = 25 m/s, f_s = 630 Hz',
        'Pendengar (Mobil B): v_p = 15 m/s',
        'Kelajuan bunyi udara, v = 340 m/s',
      ],
      ditanyakan: 'Kebenaran pernyataan A, B, C, D, dan E.',
      rumusKunci: 'f_{p,\\text{dekat}} = f_s \\frac{v + v_p}{v - v_s}, \\quad f_{p,\\text{jauh}} = f_s \\frac{v - v_p}{v + v_s}',
      analisisKonsep:
        '1. Saling mendekat:\n$f_{p,\\text{dekat}} = 630 \\times \\frac{340 + 15}{340 - 25} = 630 \\times \\frac{355}{315} = 2 \\times 355 = 710\\ \\text{Hz}$. (Opsi A BENAR)\n2. Panjang gelombang di depan sumber:\n$\\lambda = \\frac{v - v_s}{f_s} = \\frac{340 - 25}{630} = \\frac{315}{630} = 0{,}50\\ \\text{m}$. (Opsi B BENAR)\n3. Saling menjauh:\n$f_{p,\\text{jauh}} = 630 \\times \\frac{340 - 15}{340 + 25} = 630 \\times \\frac{325}{365} = 630 \\times 0{,}8904 \\approx 560{,}96\\ \\text{Hz} \\approx 561\\ \\text{Hz}$. (Opsi C BENAR)\n4. Selisih frekuensi:\n$\\Delta f = 710 - 561 = 149\\ \\text{Hz}$. (Opsi D BENAR)\n5. Kelajuan bunyi di udara HANYA ditentukan oleh sifat elastisitas dan inersia medium udara (v = 340 m/s), bukan oleh kecepatan gerak pengamat atau sumber. Pengamat bergerak hanya mengubah laju relatif relatif terhadap dirinya, tetapi perambatan gelombang di medium tetap v = 340 m/s. (Opsi E SALAH)',
      penyelesaian: `Langkah detail:
1. Kondisi Saling Mendekat:
$$f_{p1} = 630 \\left( \\frac{340 + 15}{340 - 25} \\right) = 630 \\left( \\frac{355}{315} \\right) = 2 \\times 355 = 710\\ \\text{Hz}$$

2. Panjang gelombang terkompresi di medium:
$$\\lambda' = \\frac{v - v_s}{f_s} = \\frac{315}{630} = 0{,}50\\ \\text{m}$$

3. Kondisi Saling Menjauh:
$$f_{p2} = 630 \\left( \\frac{340 - 15}{340 + 25} \\right) = 630 \\left( \\frac{325}{365} \\right) \\approx 561\\ \\text{Hz}$$

4. Selisih frekuensi:
$$\\Delta f = 710 - 561 = 149\\ \\text{Hz}$$`,
      hasilAkhir: 'Pernyataan A, B, C, dan D bernilai BENAR.',
      kesimpulan:
        'Efek Doppler menghasilkan lonjakan frekuensi saat mendekat dan penurunan tajam saat menjauh. Selisih 149 Hz menimbulkan sensasi penurunan nada dramatis saat berpapasan.',
      caraCepatMisterJo:
        'Lihat angka manisnya: 630 / 315 tepat sama dengan 2! Jadi frekuensi mendekat langsung 2 × 355 = 710 Hz. Untuk menjauh, hitung 630 × 325 / 365 ≈ 561 Hz. Selisihnya 710 - 561 = 149 Hz. Coret opsi E karena laju bunyi di medium selalu 340 m/s!',
      jebakanKonsep:
        'Pengecoh pada opsi E: siswa sering keliru menerapkan penjumlahan kecepatan klasik Galileo pada laju gelombang bunyi di medium perambatan.',
    },
    voiceScripts: {
      preStimulus:
        'Soal ini menguji pemahaman Efek Doppler pada dua kondisi gerak sekaligus: saat saling mendekat dan saat saling menjauh.',
      onSolving:
        'Perhatikan angka 630 dibagi 315 yang menghasilkan angka 2. Manfaatkan penyederhanaan ini!',
      explanation:
        'Saat saling mendekat, frekuensi yang didengar adalah 710 Hertz. Saat saling menjauh frekuensinya turun menjadi 561 Hertz. Selisihnya adalah 149 Hertz. Opsi A, B, C, dan D benar.',
      caraCepat:
        'Trik jitu Mister Jo: 630 dibagi 315 langsung sama dengan 2. Kalikan 355 hasilnya 710 Hz. Sangat mudah dan menghemat waktu!',
    },
  },

  // SOAL 18: Submateri 6 - Efek Doppler (BENAR-SALAH, Sangat Sulit)
  {
    id: 18,
    subtopicId: 6,
    subtopicName: 'Efek Doppler',
    type: 'BENAR_SALAH',
    difficulty: 'Sangat Sulit',
    title: 'Evaluasi Fisis Mekanisme Gelombang dan Simetri Efek Doppler Akustik',
    stimulusContext:
      'Seorang guru besar fisika mempresentasikan perbedaan fundamental antara Efek Doppler pada gelombang mekanik bunyi di udara dengan Efek Doppler pada gelombang elektromagnetik cahaya di ruang hampa. Beliau menguji pemahaman konseptual mahasiswa tentang asimetri rumus Doppler akustik saat sumber bergerak versus saat pengamat bergerak.',
    diagram: {
      type: 'doppler_effect',
      caption: 'Distribusi muka gelombang akustik akibat gerak sumber versus gerak pengamat.',
    },
    rumusKunciPreview: 'f_p = f_s \\left( \\frac{v \\pm v_p}{v \\mp v_s} \\right)',
    questionPrompt:
      'Tentukan apakah masing-masing pernyataan berikut bernilai BENAR atau SALAH berdasarkan prinsip fisika gelombang Efek Doppler!',
    statements: [
      {
        id: 's18_1',
        statement:
          'Efek Doppler akustik bersifat asimetris: perubahan frekuensi teramati ketika sumber bergerak mendekati pendengar diam TIDAK SAMA besarnya dengan perubahan frekuensi ketika pendengar bergerak mendekati sumber diam dengan kelajuan yang persis sama.',
        isCorrect: true,
        explanation:
          'Akustik membutuhkan medium udara sebagai acuan diam. Jika sumber bergerak: fp = fs [v/(v - u)]. Jika pendengar bergerak: fp = fs [(v + u)/v]. Karena v/(v - u) ≠ (v + u)/v untuk u > 0, efeknya asimetris!',
      },
      {
        id: 's18_2',
        statement:
          'Ketika sumber bunyi bergerak mendekati pengamat yang diam, perubahan frekuensi terjadi karena panjang gelombang bunyi di udara secara fisik memendek (mengalami kompresi spasial).',
        isCorrect: true,
        explanation:
          'Benar. Gerak sumber menyebabkan pusat setiap muka gelombang baru bergeser maju, sehingga jarak fisik antara dua puncak gelombang berturutan mengecil: λ\' = (v - vs)/fs.',
      },
      {
        id: 's18_3',
        statement:
          'Ketika pengamat bergerak mendekati sumber bunyi yang diam, panjang gelombang bunyi di udara ikut memendek secara fisik persis seperti saat sumber yang bergerak.',
        isCorrect: false,
        explanation:
          'Salah. Ketika sumber diam, panjang gelombang fisik di udara tetap konstan λ = v/fs. Yang berubah hanyalah laju relatif pengamat dalam menyapu puncak-puncak gelombang (v_rel = v + vp).',
      },
    ],
    explanation: {
      memahamiMasalah:
        'Menganalisis penyebab mikroskopik pergeseran frekuensi Doppler (perubahan panjang gelombang spasial vs kelajuan relatif sapuan gelombang) dan sifat asimetri akustik.',
      diketahui: [
        'Kelajuan gelombang di medium udara = v',
        'Kelajuan relatif = u',
      ],
      ditanyakan: 'Status kebenaran pernyataan 1, 2, dan 3.',
      rumusKunci: '\\lambda\' = \\frac{v - v_s}{f_s}, \\quad f_p = \\frac{v + v_p}{\\lambda}',
      analisisKonsep:
        '1. Pernyataan 1: Misalkan v = 340 m/s dan u = 34 m/s. Jika sumber bergerak: fp = fs × (340/306) = 1,111 fs (+11,1%). Jika pendengar bergerak: fp = fs × (374/340) = 1,100 fs (+10,0%). Keduanya berbeda! Ini membuktikan Efek Doppler bunyi bersifat ASIMETRIS karena keberadaan medium udara. (BENAR)\n2. Pernyataan 2: Gerak sumber memampatkan jarak antarmuka gelombang di medium, sehingga λ fisik mengecil. (BENAR)\n3. Pernyataan 3: Jika sumber diam, panjang gelombang di udara sama sekali TIDAK berubah. Pengamat hanya merasakan frekuensi lebih tinggi karena memotong lebih banyak puncak gelombang per detik. (SALAH)',
      penyelesaian: `Bukti asimetri matematis:
$$\\frac{v}{v - u} \\neq \\frac{v + u}{v} \\iff v^2 \\neq v^2 - u^2 \\quad (\\text{selisih } u^2 > 0)$$
Karena ada beda fisis antara medium pembawa gelombang dan kerangka acuan.`,
      hasilAkhir: 'Pernyataan 1: BENAR, Pernyataan 2: BENAR, Pernyataan 3: SALAH.',
      kesimpulan:
        'Sumber bergerak mengubah panjang gelombang spasial di udara, sedangkan pengamat bergerak hanya mengubah frekuensi sapuan tanpa mengubah panjang gelombang fisik di medium.',
      caraCepatMisterJo:
        'Kunci konsep brilian Mister Jo: Siapa yang bergerak menentukan apa yang berubah! Sumber bergerak -> mengubah panjang gelombang λ. Pengamat bergerak -> TIDAK mengubah λ di udara, hanya menyapu gelombang lebih cepat. Jadi pernyataan 3 pasti SALAH!',
      jebakanKonsep:
        'Banyak siswa beranggapan Efek Doppler hanya peduli kelajuan relatif (seperti relativitas cahaya). Pada bunyi, medium udara menjadi patokan mutlak, sehingga gerak sumber berbeda mekanismenya dengan gerak pengamat!',
    },
    voiceScripts: {
      preStimulus:
        'Soal ini membahas fisika konseptual tingkat tinggi mengenai asimetri efek Doppler.',
      onSolving:
        'Pikirkan secara cermat: apakah gerak pengamat dapat mengubah panjang gelombang fisik bunyi yang merambat di udara bebas?',
      explanation:
        'Pernyataan satu Benar karena efek Doppler mekanik asimetris. Pernyataan dua Benar karena gerak sumber memendekkan panjang gelombang. Pernyataan tiga Salah karena gerak pengamat tidak mengubah panjang gelombang di udara.',
      caraCepat:
        'Tips penalaran Mister Jo: panjang gelombang di udara hanya berubah jika sumbernya bergerak. Jika pengamat yang bergerak, gelombangnya tetap!',
    },
  },
];
