import { Question } from '../../types';

export const QUESTIONS_19_TO_30: Question[] = [
  // SOAL 19: Submateri 7 - Intensitas Bunyi (PG, Menengah)
  {
    id: 19,
    subtopicId: 7,
    subtopicName: 'Intensitas Bunyi',
    type: 'PG',
    difficulty: 'Menengah',
    title: 'Penentuan Intensitas Akustik Sumber Isotropik pada Radius Tertentu',
    stimulusContext:
      'Sebuah pengeras suara uji di laboratorium akustik memancarkan daya gelombang bunyi sebesar P = 12,56 Watt secara seragam ke segala arah (sumber titik isotropik bola). Seorang pengamat meletakkan sensor mikrofon pengukur intensitas pada jarak r = 10 meter dari pusat pengeras suara tersebut. Anggap udara tidak menyerap energi bunyi secara signifikan (medium elastis tak terdisipasi) dan nilai π ≈ 3,14.',
    stimulusData: {
      type: 'table',
      headers: ['Besaran Akustik', 'Simbol', 'Nilai'],
      rows: [
        ['Daya Akustik Sumber', 'P', '12,56 Watt (≈ 4π Watt)'],
        ['Jarak Pengamatan', 'r', '10 meter'],
        ['Geometri Radiasi Muka Gelombang', 'Bola', 'Luas A = 4πr²'],
      ],
    },
    diagram: {
      type: 'sound_intensity',
      caption: 'Pancaran muka gelombang bunyi sferis isotropik menembus luasan bola 4πr².',
      params: { distance: '10 m' },
    },
    rumusKunciPreview: 'I = \\frac{P}{A} = \\frac{P}{4\\pi r^2}',
    questionPrompt:
      'Berapakah intensitas gelombang bunyi yang terdeteksi oleh sensor pada jarak 10 meter dari sumber bunyi tersebut?',
    options: [
      { key: 'A', text: '1,0 × 10⁻⁴ W/m²' },
      { key: 'B', text: '1,0 × 10⁻³ W/m²' },
      { key: 'C', text: '1,0 × 10⁻² W/m²' },
      { key: 'D', text: '2,5 × 10⁻² W/m²' },
      { key: 'E', text: '1,0 × 10⁻¹ W/m²' },
    ],
    correctAnswerSingle: 'C',
    explanation: {
      memahamiMasalah:
        'Menghitung intensitas gelombang bunyi (I) pada jarak r = 10 m dari sumber bunyi titik isotropik dengan daya akustik P = 12,56 Watt.',
      diketahui: [
        'Daya akustik sumber, P = 12,56 Watt ≈ 4π Watt (karena 4 × 3,14 = 12,56)',
        'Jarak dari sumber, r = 10 meter',
        'Bentuk muka gelombang: Permukaan bola dengan luas A = 4πr²',
      ],
      ditanyakan: 'Intensitas bunyi (I) dalam W/m²',
      rumusKunci: 'I = \\frac{P}{4\\pi r^2}',
      analisisKonsep:
        'Energi bunyi dari sumber isotropik merambat keluar menyebar ke seluruh permukaan bola 3 dimensi. Oleh karena itu, intensitas bunyi (daya per satuan luas tegak lurus arah rambat) memenuhi hukum kuadrat terbalik: I = P / (4πr²).',
      penyelesaian: `Substitusi nilai ke dalam rumus:
$$A = 4\\pi r^2 = 4 \\times 3{,}14 \\times (10)^2 = 12{,}56 \\times 100 = 1.256\\ \\text{m}^2$$
$$I = \\frac{P}{A} = \\frac{12{,}56\\ \\text{W}}{1.256\\ \\text{m}^2} = 0{,}01\\ \\text{W/m}^2 = 1{,}0 \\times 10^{-2}\\ \\text{W/m}^2$$`,
      hasilAkhir: '1,0 × 10⁻² W/m² (Pilihan C)',
      kesimpulan:
        'Intensitas bunyi terdistribusi merata pada permukaan bola seluas 1.256 m², menghasilkan intensitas tepat 0,01 W/m².',
      caraCepatMisterJo:
        'Perhatikan angka cantiknya! P = 12,56 Watt itu sama dengan 4π Watt! Rumus intensitas adalah P / (4π r²). Coret langsung 4π di atas dan di bawah: I = 1 / r² = 1 / 10² = 1 / 100 = 0,01 = 10⁻² W/m². Hitung tanpa coret-coret kertas!',
      jebakanKonsep:
        'Sering lupa menguadratkan jarak r (hanya membagi dengan 4πr), atau keliru menggunakan luas lingkaran πr² padahal gelombang merambat dalam ruang bola 4πr².',
    },
    voiceScripts: {
      preStimulus:
        'Perhatikan sumber bunyi isotropik ini. Gelombangnya merambat ke segala arah membentuk bola.',
      onSolving:
        'Lihat angkanya: 12,56 adalah empat dikali pi. Manfaatkan hubungan ini untuk menyederhanakan pecahan!',
      explanation:
        'Daya 12,56 Watt dibagi luas bola empat pi r kuadrat. Karena 12,56 adalah empat pi, maka empat pi saling mencoret. Tersisa satu per r kuadrat, yaitu satu per seratus atau sepuluh pangkat minus dua Watt per meter kuadrat.',
      caraCepat:
        'Trik kilat Mister Jo: 12,56 pas dengan 4π! Langsung coret, sehingga I = 1 / r kuadrat = 1 / 100 = 0,01 W/m²!',
    },
  },

  // SOAL 20: Submateri 7 - Intensitas Bunyi (PGK, Sulit)
  {
    id: 20,
    subtopicId: 7,
    subtopicName: 'Intensitas Bunyi',
    type: 'PGK',
    difficulty: 'Sulit',
    title: 'Analisis Penurunan Kuadrat Terbalik dan Penyerapan Daya Diafragma Akustik',
    stimulusContext:
      'Di panggung arena festival musik terbuka, sebuah sistem speaker sentral berdaya P memancarkan gelombang suara sferis ke arah penonton. Tim sound engineer menempatkan dua mikrofon pengukur: Mikrofon A berada pada jarak r_A = 20 meter dari speaker, sedangkan Mikrofon B berada pada jarak r_B = 60 meter segaris lurus dari speaker. Mikrofon A mencatat intensitas bunyi sebesar I_A = 9,0 × 10⁻³ W/m². Masing-masing mikrofon memiliki diafragma sensor berbentuk lingkaran dengan luas efektif A_sensor = 2,0 cm² = 2,0 × 10⁻⁴ m².',
    stimulusData: {
      type: 'comparison',
      content:
        'Posisi A: r_A = 20 m, I_A = 9,0 × 10⁻³ W/m².\nPosisi B: r_B = 60 m.\nLuas diafragma mikrofon: A_sensor = 2,0 × 10⁻⁴ m².',
    },
    diagram: {
      type: 'sound_intensity',
      caption: 'Distribusi energi bunyi pada dua radius pengamatan r_A dan r_B.',
      params: { distance: 'r_A = 20 m vs r_B = 60 m' },
    },
    rumusKunciPreview: '\\frac{I_A}{I_B} = \\left(\\frac{r_B}{r_A}\\right)^2, \\quad P_{\\text{diserap}} = I \\cdot A_{\\text{sensor}}',
    questionPrompt:
      'Berdasarkan data pengukuran akustik lapangan tersebut, manakah pernyataan-pernyataan berikut yang BENAR? (Pilihlah semua jawaban yang benar!)',
    options: [
      { key: 'A', text: 'Perbandingan intensitas bunyi di posisi A terhadap posisi B (I_A : I_B) adalah 9 : 1.' },
      { key: 'B', text: 'Intensitas bunyi yang diterima oleh Mikrofon B adalah 1,0 × 10⁻³ W/m².' },
      { key: 'C', text: 'Daya akustik total yang dipancarkan oleh speaker sentral tersebut adalah sekitar 45,2 Watt.' },
      { key: 'D', text: 'Daya gelombang bunyi yang ditangkap oleh permukaan diafragma Mikrofon A adalah 1,8 × 10⁻⁶ Watt.' },
      { key: 'E', text: 'Jika jarak pengamatan dilipatgandakan dari posisi A menjadi 40 meter, intensitas bunyi akan berkurang menjadi setengah dari nilai semula.' },
    ],
    correctAnswerMultiple: ['A', 'B', 'C', 'D'],
    explanation: {
      memahamiMasalah:
        'Menganalisis hukum kuadrat terbalik intensitas bunyi, menghitung intensitas di posisi B, daya total sumber, dan daya yang diserap diafragma mikrofon.',
      diketahui: [
        'r_A = 20 m, I_A = 9,0 × 10⁻³ W/m²',
        'r_B = 60 m',
        'A_sensor = 2,0 × 10⁻⁴ m²',
      ],
      ditanyakan: 'Kebenaran pernyataan A, B, C, D, dan E.',
      rumusKunci: '\\frac{I_A}{I_B} = \\frac{r_B^2}{r_A^2}, \\quad P_{\\text{total}} = I_A \\cdot 4\\pi r_A^2, \\quad P_{\\text{sensor}} = I \\cdot A_{\\text{sensor}}',
      analisisKonsep:
        '1. Rasio intensitas: I_A / I_B = (r_B / r_A)² = (60 / 20)² = 3² = 9. Jadi I_A : I_B = 9 : 1. (Opsi A BENAR)\n2. Intensitas di B: I_B = I_A / 9 = (9,0 × 10⁻³) / 9 = 1,0 × 10⁻³ W/m². (Opsi B BENAR)\n3. Daya total sumber: P = I_A × 4π r_A² = 9,0 × 10⁻³ × 4π × (20)² = 9,0 × 10⁻³ × 4π × 400 = 14,4π ≈ 14,4 × 3,1416 = 45,24 Watt ≈ 45,2 Watt. (Opsi C BENAR)\n4. Daya pada diafragma mikrofon A: P_sensor = I_A × A_sensor = (9,0 × 10⁻³ W/m²) × (2,0 × 10⁻⁴ m²) = 1,8 × 10⁻⁶ Watt. (Opsi D BENAR)\n5. Hukum kuadrat terbalik: jika jarak dilipatgandakan (2×), intensitas menjadi 1/2² = 1/4 (SEPEREMPAT) dari semula, bukan setengah! (Opsi E SALAH)',
      penyelesaian: `Detail matematis:
1. Rasio intensitas:
$$\\frac{I_A}{I_B} = \\left( \\frac{60}{20} \\right)^2 = 3^2 = 9 \\implies I_B = \\frac{9{,}0 \\times 10^{-3}}{9} = 1{,}0 \\times 10^{-3}\\ \\text{W/m}^2$$

2. Daya sumber akustik:
$$P = I_A \\cdot (4\\pi r_A^2) = 9{,}0 \\times 10^{-3} \\times 4\\pi \\times 400 = 14{,}4\\pi \\approx 45{,}2\\ \\text{Watt}$$

3. Daya pada diafragma:
$$P_{\\text{diafragma}} = I_A \\cdot A_{\\text{sensor}} = 9{,}0 \\times 10^{-3} \\times 2{,}0 \\times 10^{-4} = 1{,}8 \\times 10^{-6}\\ \\text{Watt}$$`,
      hasilAkhir: 'Pernyataan A, B, C, dan D bernilai BENAR.',
      kesimpulan:
        'Hukum kuadrat terbalik menyebabkan penurunan intensitas secara dramatis seiring bertambahnya jarak, di mana penambahan jarak 3 kali lipat menurunkan intensitas menjadi sepersembilan.',
      caraCepatMisterJo:
        'Eliminasi kilat Mister Jo: Opsi E langsung coret! Jarak naik 2 kali lipat itu intensitasnya turun jadi seperempat (1/2² = 1/4), BUKAN setengah. Jarak dari 20 ke 60 naik 3 kali lipat, jadi intensitas turun jadi 1/9 (yaitu 1,0 × 10⁻³ W/m²). Maka A, B, C, D semua benar!',
      jebakanKonsep:
        'Miskonsepsi pada opsi E: siswa sering salah menganggap intensitas berbanding terbalik linier (1/r) sehingga mengira jika jarak naik 2 kali lipat intensitas menjadi setengah.',
    },
    voiceScripts: {
      preStimulus:
        'Mari kita analisis hukum kuadrat terbalik pada intensitas bunyi di festival musik ini.',
      onSolving:
        'Ingat: intensitas berbanding terbalik dengan kuadrat jarak, bukan jarak linier.',
      explanation:
        'Perbandingan jarak 60 terhadap 20 adalah 3, dikuadratkan menjadi 9. Maka intensitas di posisi B adalah sepersembilan dari posisi A, yaitu satu koma nol kali sepuluh pangkat minus tiga. Opsi A, B, C, dan D benar.',
      caraCepat:
        'Trik cepat Mister Jo: buang opsi E karena kuadrat dari 2 adalah 4, jadi intensitas menjadi seperempat, bukan setengah. Sisanya tepat!',
    },
  },

  // SOAL 21: Submateri 7 - Intensitas Bunyi (BENAR-SALAH, Sangat Sulit)
  {
    id: 21,
    subtopicId: 7,
    subtopicName: 'Intensitas Bunyi',
    type: 'BENAR_SALAH',
    difficulty: 'Sangat Sulit',
    title: 'Evaluasi Fisis Rapat Energi dan Karakteristik Muka Gelombang Akustik',
    stimulusContext:
      'Dalam buku teks mekanika gelombang lanjut, seorang fisikawan memodelkan intensitas gelombang bunyi I sebagai hasil kali rapat energi rata-rata gelombang (u) dengan kelajuan rambat gelombang (v), yaitu I = u · v. Rapat energi gelombang bunyi harmonik sebanding dengan kuadrat frekuensi sudut (ω²) dan kuadrat amplitudo getaran partikel medium (A²). Fisikawan tersebut menguji pemahaman fisis mahasiswa mengenai keterkaitan antara intensitas, amplitudo partikel, dan geometri muka gelombang.',
    diagram: {
      type: 'sound_intensity',
      caption: 'Distribusi rapat fluks energi akustik melalui luasan muka gelombang bola.',
    },
    rumusKunciPreview: 'I = \\frac{1}{2}\\rho v \\omega^2 A^2, \\quad I \\propto \\frac{1}{r^2} \\implies A \\propto \\frac{1}{r}',
    questionPrompt:
      'Tentukan apakah masing-masing pernyataan berikut bernilai BENAR atau SALAH berdasarkan prinsip mekanika gelombang bunyi!',
    statements: [
      {
        id: 's21_1',
        statement:
          'Pada perambatan gelombang bunyi sferis tak teredam, amplitudo simpangan partikel medium (A) berkurang berbanding terbalik secara linier terhadap jarak dari sumber (A ∝ 1/r).',
        isCorrect: true,
        explanation:
          'Karena intensitas I ∝ A² dan untuk gelombang bola I ∝ 1/r², maka A² ∝ 1/r², yang berarti amplitudo partikel berkurang secara linier A ∝ 1/r.',
      },
      {
        id: 's21_2',
        statement:
          'Jika frekuensi gelombang bunyi digandakan menjadi 2 kali semula sementara intensitas bunyi dijaga tetap konstan pada suatu titik, maka amplitudo osilasi molekul udara di titik tersebut akan menjadi setengah dari nilai semula.',
        isCorrect: true,
        explanation:
          'Rumus intensitas: I = 1/2 ρ v ω² A² = 2π² ρ v f² A². Jika I konstan, maka f² A² = konstan, sehingga f · A = konstan. Ketika f menjadi 2 kali, amplitudo A harus turun menjadi 1/2 kali semula.',
      },
      {
        id: 's21_3',
        statement:
          'Pada gelombang silindris (seperti bunyi dari deretan kereta api panjang tak berhingga), intensitas bunyi berkurang berbanding terbalik dengan kuadrat jarak (I ∝ 1/r²).',
        isCorrect: false,
        explanation:
          'Salah. Luas selimut silinder adalah A = 2π r L, sehingga untuk sumber garis silindris tak berhingga, intensitas bunyi berkurang berbanding terbalik dengan jarak linier (I ∝ 1/r), bukan kuadrat jarak (1/r²).',
      },
    ],
    explanation: {
      memahamiMasalah:
        'Menganalisis hubungan mikroskopik intensitas terhadap amplitudo partikel dan frekuensi, serta geometri penyebaran gelombang silindris vs bola.',
      diketahui: [
        '$I = \\frac{1}{2} \\rho v \\omega^2 A^2$',
        'Gelombang bola: $I \\propto \\frac{1}{r^2}$',
        'Gelombang silindris: $A_{\\text{luas}} = 2\\pi r L$',
      ],
      ditanyakan: 'Status kebenaran pernyataan 1, 2, dan 3.',
      rumusKunci: 'I = 2\\pi^2 \\rho v f^2 A^2, \\quad I_{\\text{bola}} \\propto \\frac{1}{r^2}, \\quad I_{\\text{garis}} \\propto \\frac{1}{r}',
      analisisKonsep:
        '1. Pernyataan 1: $I \\propto A^2$ dan $I \\propto 1/r^2 \\implies A \\propto 1/r$. Amplitudo partikel berbanding terbalik secara linier terhadap jarak. (BENAR)\n2. Pernyataan 2: $I \\propto f^2 A^2$. Jika $I$ tetap, maka $f \\cdot A = \\text{konstan}$. Jika $f$ naik $2\\times$, maka $A$ turun menjadi $\\frac{1}{2}\\times$. (BENAR)\n3. Pernyataan 3: Sumber garis memancarkan muka gelombang silinder dengan luas selimut $2\\pi r L$. Maka intensitasnya $I = \\frac{P}{2\\pi r L} \\propto \\frac{1}{r}$. Bukan $1/r^2$! (SALAH)',
      penyelesaian: `Evaluasi analitis:
- Pernyataan 1: $A = \\sqrt{\\frac{2I}{\\rho v \\omega^2}} \\propto \\sqrt{I} \\propto \\sqrt{\\frac{1}{r^2}} = \\frac{1}{r}$. (BENAR)
- Pernyataan 2: $f_2 = 2f_1 \\implies A_2 = \\frac{f_1}{f_2} A_1 = \\frac{1}{2} A_1$. (BENAR)
- Pernyataan 3: Pada sumber garis silinder, $I \\propto \\frac{1}{r}$. (SALAH)`,
      hasilAkhir: 'Pernyataan 1: BENAR, Pernyataan 2: BENAR, Pernyataan 3: SALAH.',
      kesimpulan:
        'Geometri sumber bunyi menentukan laju pelemahan intensitas terhadap jarak: sumber titik melemah sebagai 1/r², sedangkan sumber garis memanjang melemah sebagai 1/r.',
      caraCepatMisterJo:
        'Kunci cepat Mister Jo: Ingat geometri! Titik -> Bola (Luas = 4π r²) -> I ~ 1/r². Garis memanjang -> Silinder (Luas = 2π r L) -> I ~ 1/r! Jadi pernyataan 3 yang menyebut silinder 1/r² pasti SALAH!',
      jebakanKonsep:
        'Banyak siswa mengira SEMUA gelombang bunyi di alam selalu melemah menurut 1/r². Padahal untuk sumber garis (seperti jalan tol padat atau lintasan kereta api), pelemahannya adalah 1/r!',
    },
    voiceScripts: {
      preStimulus:
        'Soal ini membahas geometri perambatan muka gelombang bunyi dan amplitudo getaran molekul medium.',
      onSolving:
        'Pikirkan bentuk luas selimut silinder versus luas permukaan bola.',
      explanation:
        'Pernyataan satu Benar karena amplitudo berbanding terbalik linier dengan jarak. Pernyataan dua Benar karena hasil kali frekuensi dan amplitudo bernilai konstan. Pernyataan tiga Salah karena sumber silinder melemah sebanding satu per r.',
      caraCepat:
        'Trik jitu Mister Jo: sumber garis berbentuk silinder memiliki luas dua pi r L, sehingga intensitasnya berbanding terbalik dengan r, bukan r kuadrat!',
    },
  },

  // SOAL 22: Submateri 8 - Taraf Intensitas Bunyi (PG, Menengah)
  {
    id: 22,
    subtopicId: 8,
    subtopicName: 'Taraf Intensitas Bunyi (Desibel)',
    type: 'PG',
    difficulty: 'Menengah',
    title: 'Pengukuran Tingkat Kebisingan Akustik Kamar Mesin Pembangkit Listrik',
    stimulusContext:
      'Di ruang mesin diesel pembangkit listrik turbin, seorang petugas K3 (Keselamatan dan Kesehatan Kerja) mengukur tingkat kebisingan lingkungan menggunakan alat Sound Level Meter terkalibrasi. Alat tersebut mengukur intensitas bunyi sebesar I = 1,0 × 10⁻⁴ W/m². Diketahui intensitas ambang pendengaran manusia pada frekuensi 1.000 Hz adalah I₀ = 1,0 × 10⁻¹² W/m².',
    stimulusData: {
      type: 'table',
      headers: ['Besaran Pengukuran', 'Simbol', 'Nilai'],
      rows: [
        ['Intensitas Terukur', 'I', '1,0 × 10⁻⁴ W/m²'],
        ['Intensitas Ambang Dengar Standar', 'I₀', '1,0 × 10⁻¹² W/m²'],
      ],
    },
    diagram: {
      type: 'intensity_level',
      caption: 'Skala desibel logaritmik terhadap ambang pendengaran manusia I₀.',
    },
    rumusKunciPreview: '\\beta = 10 \\log\\left( \\frac{I}{I_0} \\right)',
    questionPrompt:
      'Berapakah taraf intensitas bunyi (dalam satuan desibel, dB) di ruang mesin diesel tersebut?',
    options: [
      { key: 'A', text: '40 dB' },
      { key: 'B', text: '60 dB' },
      { key: 'C', text: '80 dB' },
      { key: 'D', text: '100 dB' },
      { key: 'E', text: '120 dB' },
    ],
    correctAnswerSingle: 'C',
    explanation: {
      memahamiMasalah:
        'Menghitung taraf intensitas bunyi (TI atau β) dalam satuan desibel (dB) dari nilai intensitas I = 10⁻⁴ W/m² terhadap ambang pendengaran I₀ = 10⁻¹² W/m².',
      diketahui: [
        'Intensitas bunyi, I = 1,0 × 10⁻⁴ W/m²',
        'Intensitas ambang pendengaran, I₀ = 1,0 × 10⁻¹² W/m²',
      ],
      ditanyakan: 'Taraf intensitas bunyi (β) dalam dB',
      rumusKunci: '\\beta = 10 \\log\\left( \\frac{I}{I_0} \\right)',
      analisisKonsep:
        'Taraf intensitas bunyi dihitung menggunakan skala logaritmik berbasis 10 karena telinga manusia merespons rangsangan intensitas bunyi secara logaritmik (Hukum Weber-Fechner). Rasio I/I₀ menunjukkan berapa kali lipat intensitas bunyi melampaui batas ambang dengar minimum manusia.',
      penyelesaian: `Substitusi nilai ke dalam rumus:
$$\\beta = 10 \\log\\left( \\frac{10^{-4}}{10^{-12}} \\right) = 10 \\log(10^{-4 - (-12)}) = 10 \\log(10^8)$$
$$\\beta = 10 \\times 8 = 80\\ \\text{dB}$$`,
      hasilAkhir: '80 dB (Pilihan C)',
      kesimpulan:
        'Taraf intensitas di ruang mesin adalah 80 dB, yang berada tepat di batas ambang batas aman paparan bising 8 jam kerja menurut regulasi K3.',
      caraCepatMisterJo:
        'Trik kilat Mister Jo: Cukup kurangkan eksponen pangkatnya! (-4) dikurangi (-12) sama dengan +8. Kalikan 10 langsung: 8 × 10 = 80 dB! Tidak perlu kalkulator, selesai dalam 3 detik.',
      jebakanKonsep:
        'Hati-hati dengan tanda minus pada pembagian pangkat eksponen: (-4) - (-12) = +8, bukan -16 atau 4.',
    },
    voiceScripts: {
      preStimulus:
        'Ayo kita hitung taraf intensitas bunyi dalam skala desibel logaritmik.',
      onSolving:
        'Gunakan rumus sepuluh log I per I nol. Perhatikan pembagian bilangan berpangkat.',
      explanation:
        'Sepuluh pangkat minus empat dibagi sepuluh pangkat minus dua belas menghasilkan sepuluh pangkat delapan. Logaritma dari sepuluh pangkat delapan adalah delapan. Dikalikan sepuluh, hasilnya tepat delapan puluh desibel.',
      caraCepat:
        'Trik kilat Mister Jo: kurangkan pangkat minus empat dengan minus dua belas, hasilnya delapan. Kalikan 10, langsung dapat 80 desibel!',
    },
  },

  // SOAL 23: Submateri 8 - Taraf Intensitas Bunyi (PGK, Sulit)
  {
    id: 23,
    subtopicId: 8,
    subtopicName: 'Taraf Intensitas Bunyi (Desibel)',
    type: 'PGK',
    difficulty: 'Sulit',
    title: 'Analisis Akustik Studio Rekaman Musik dan Skala Logaritmik Desibel',
    stimulusContext:
      'Di sebuah studio rekaman profesional, seorang produser musik membandingkan taraf intensitas bunyi saat seorang vokalis bernyanyi dengan suara lembut berbisik (Kondisi 1: β₁ = 40 dB) dan saat bernyanyi dengan suara lantang nada tinggi (Kondisi 2: β₂ = 70 dB). Produser tersebut menganalisis implikasi fisik kenaikan desibel tersebut terhadap fluks energi akustik, tekanan bunyi, dan persepsi pendengaran manusia.',
    stimulusData: {
      type: 'comparison',
      content:
        'Kondisi 1 (Lembut): β₁ = 40 dB.\nKondisi 2 (Lantang): β₂ = 70 dB.\nSelisih taraf intensitas: Δβ = 30 dB.\nAmbang dengar: I₀ = 10⁻¹² W/m².',
    },
    diagram: {
      type: 'intensity_level',
      caption: 'Pergeseran taraf intensitas desibel pada studio rekaman musik.',
    },
    rumusKunciPreview: '\\Delta\\beta = \\beta_2 - \\beta_1 = 10 \\log\\left( \\frac{I_2}{I_1} \\right) \\implies \\frac{I_2}{I_1} = 10^{\\frac{\\Delta\\beta}{10}}',
    questionPrompt:
      'Manakah dari analisis fisik kenaikan intensitas berikut yang BENAR? (Pilihlah semua jawaban yang benar!)',
    options: [
      { key: 'A', text: 'Intensitas bunyi pada kondisi 1 (suara lembut) adalah 1,0 × 10⁻⁸ W/m².' },
      { key: 'B', text: 'Intensitas bunyi pada kondisi 2 (suara lantang) adalah 1,0 × 10⁻⁵ W/m².' },
      { key: 'C', text: 'Intensitas gelombang bunyi suara lantang adalah 1.000 kali lebih besar dibandingkan intensitas suara lembut.' },
      { key: 'D', text: 'Amplitudo tekanan gelombang bunyi meningkat menjadi sekitar 31,6 kali lipat dari kondisi semula.' },
      { key: 'E', text: 'Karena kenaikan taraf intensitas adalah 30 dB (naik 75% dari 40 dB), maka energi yang dipancarkan vokalis per sekon juga meningkat sebesar 75%.' },
    ],
    correctAnswerMultiple: ['A', 'B', 'C', 'D'],
    explanation: {
      memahamiMasalah:
        'Menghitung nilai intensitas mutlak dari nilai taraf intensitas desibel, menentukan rasio kenaikan intensitas dan kenaikan amplitudo tekanan gelombang.',
      diketahui: [
        'β₁ = 40 dB',
        'β₂ = 70 dB',
        'I₀ = 10⁻¹² W/m²',
      ],
      ditanyakan: 'Validitas pernyataan A, B, C, D, dan E.',
      rumusKunci: 'I = I_0 \\times 10^{\\frac{\\beta}{10}}, \\quad \\frac{I_2}{I_1} = 10^{\\frac{\\Delta\\beta}{10}}, \\quad \\Delta p \\propto \\sqrt{I}',
      analisisKonsep:
        '1. Intensitas 1: I₁ = 10⁻¹² × 10^(40/10) = 10⁻¹² × 10⁴ = 10⁻⁸ W/m². (Opsi A BENAR)\n2. Intensitas 2: I₂ = 10⁻¹² × 10^(70/10) = 10⁻¹² × 10⁷ = 10⁻⁵ W/m². (Opsi B BENAR)\n3. Rasio intensitas: I₂ / I₁ = 10⁻⁵ / 10⁻⁸ = 10³ = 1.000 kali lipat. (Opsi C BENAR)\n4. Tekanan akustik: Intensitas bunyi sebanding dengan kuadrat amplitudo tekanan (I = Δp² / (2ρv)), sehingga Δp ∝ √I. Rasio amplitudo tekanan = √(I₂ / I₁) = √1000 ≈ 31,62 kali lipat. (Opsi D BENAR)\n5. Opsi E SALAH FATAL: Skala desibel adalah skala logaritmik! Kenaikan 30 dB bukan kenaikan linier 75%, melainkan lonjakan daya energi sebesar 1.000 kali lipat (100.000%)!',
      penyelesaian: `Evaluasi numerik:
1. $I_1 = 10^{-12} \\times 10^{4} = 10^{-8}\\ \\text{W/m}^2$ (BENAR)
2. $I_2 = 10^{-12} \\times 10^{7} = 10^{-5}\\ \\text{W/m}^2$ (BENAR)
3. $\\frac{I_2}{I_1} = 10^{\\frac{70 - 40}{10}} = 10^3 = 1.000\\times$ (BENAR)
4. $\\frac{\\Delta p_2}{\\Delta p_1} = \\sqrt{1.000} = 10\\sqrt{10} \\approx 31{,}62\\times$ (BENAR)
5. Kenaikan energi bukan 75%, melainkan $1.000\\times$ (SALAH)`,
      hasilAkhir: 'Pernyataan A, B, C, dan D bernilai BENAR.',
      kesimpulan:
        'Perbedaan 30 dB pada skala logaritmik merepresentasikan kelipatan seribu kali lipat energi fisik yang dihantarkan oleh gelombang bunyi.',
      caraCepatMisterJo:
        'Ingat aturan emas desibel Mister Jo: Setiap kenaikan +10 dB = intensitas kali 10. Kenaikan +20 dB = kali 100. Kenaikan +30 dB = kali 1.000! Jangan pernah hitung desibel dengan persentase aritmetika biasa. Coret opsi E!',
      jebakanKonsep:
        'Siswa sering terjebak berpikir linier seperti pada opsi E: mengira kenaikan dari 40 ke 70 dB adalah kenaikan 75%. Padahal energinya naik 1.000 kali lipat!',
    },
    voiceScripts: {
      preStimulus:
        'Perhatikan studio rekaman ini. Kenaikan desibel tampak kecil, namun memiliki dampak energi yang luar biasa besar.',
      onSolving:
        'Ingat: setiap penambahan sepuluh desibel berarti intensitas berlipat sepuluh kali.',
      explanation:
        'Selisih tiga puluh desibel berarti intensitas meningkat sepuluh pangkat tiga, yaitu seribu kali lipat. Amplitudo tekanannya naik akar seribu yaitu tiga puluh satu koma enam. Opsi A, B, C, dan D benar.',
      caraCepat:
        'Aturan emas Mister Jo: naik 30 dB artinya 10 pangkat 3 sama dengan 1.000 kali lipat! Jangan terkecoh persentase biasa pada opsi E.',
    },
  },

  // SOAL 24: Submateri 8 - Taraf Intensitas Bunyi (BENAR-SALAH, Sangat Sulit)
  {
    id: 24,
    subtopicId: 8,
    subtopicName: 'Taraf Intensitas Bunyi (Desibel)',
    type: 'BENAR_SALAH',
    difficulty: 'Sangat Sulit',
    title: 'Evaluasi Fisis Skala Desibel dan Ambang Nyeri Pendengaran Manusia',
    stimulusContext:
      'Dalam ilmu audiologi dan psikoakustik, kepekaan telinga manusia berkisar dari intensitas terlemah yang masih dapat dideteksi (ambang pendengaran I₀ = 10⁻¹² W/m² yang bersesuaian dengan 0 dB) hingga intensitas yang memicu kerusakan jaringan dan sensasi nyeri fisik pada koklea (ambang rasa nyeri pada taraf intensitas 120 dB). Dokter spesialis THT menguji pemahaman fisis mengenai batas-batas aman skala desibel.',
    diagram: {
      type: 'intensity_level',
      caption: 'Rentang dinamis pendengaran manusia dari 0 dB (ambang dengar) hingga 120 dB (ambang nyeri).',
    },
    rumusKunciPreview: '\\beta = 10 \\log\\left( \\frac{I}{I_0} \\right), \\quad I_{\\text{nyeri}} = 10^{-12} \\times 10^{120/10} = 1\\ \\text{W/m}^2',
    questionPrompt:
      'Tentukan apakah masing-masing pernyataan berikut bernilai BENAR atau SALAH berdasarkan prinsip fisika dan audiologi!',
    statements: [
      {
        id: 's24_1',
        statement:
          'Taraf intensitas 0 dB menandakan bahwa di ruangan tersebut sama sekali tidak ada energi gelombang bunyi dan molekul udara diam mutlak (vakum akustik mutlak).',
        isCorrect: false,
        explanation:
          'Salah. Taraf 0 dB BUKAN berarti ketiadaan bunyi, melainkan intensitas bunyi tersebut tepat sama dengan nilai ambang pendengaran acuan standar manusia, yaitu I = I₀ = 10⁻¹² W/m² (karena log(1) = 0).',
      },
      {
        id: 's24_2',
        statement:
          'Intensitas gelombang bunyi pada ambang rasa nyeri (120 dB) adalah tepat sebesar 1,0 W/m².',
        isCorrect: true,
        explanation:
          'Benar. β = 10 log(I/I₀) = 120 → log(I/I₀) = 12 → I = I₀ × 10¹² = 10⁻¹² × 10¹² = 1,0 W/m².',
      },
      {
        id: 's24_3',
        statement:
          'Bunyi dengan taraf intensitas negatif (misalnya -5 dB) secara matematis dan fisik dimungkinkan terjadi di alam, yang mengindikasikan bunyi dengan intensitas lebih kecil dari ambang dengar manusia standar.',
        isCorrect: true,
        explanation:
          'Benar. Jika I < I₀ (misalnya I = 10⁻¹³ W/m²), maka log(I/I₀) bernilai negatif sehingga menghasilkan nilai desibel negatif. Bunyi ini tetap ada namun tidak terdengar oleh pendengaran manusia normal.',
      },
    ],
    explanation: {
      memahamiMasalah:
        'Menganalisis definisi fisis skala desibel relatif terhadap acuan I₀, nilai intensitas ambang nyeri 120 dB, dan kemungkinan fisis desibel bernilai negatif.',
      diketahui: [
        '$I_0 = 10^{-12}\\ \\text{W/m}^2$',
        'Ambang nyeri = 120 dB',
      ],
      ditanyakan: 'Status kebenaran pernyataan 1, 2, dan 3.',
      rumusKunci: '\\beta = 10 \\log\\left( \\frac{I}{I_0} \\right)',
      analisisKonsep:
        '1. Pernyataan 1: Desibel adalah skala RELATIF, bukan absolut. 0 dB artinya I = I₀ = 10⁻¹² W/m², bukan I = 0! (SALAH)\n2. Pernyataan 2: Pada 120 dB: $I = 10^{-12} \\times 10^{12} = 1{,}0\\ \\text{W/m}^2$. Telinga manusia dapat menangani rentang intensitas seluas satu triliun (10¹²) kali lipat! (BENAR)\n3. Pernyataan 3: Ruang anechoic chamber (kedap suara mutlak) sering mencatat tingkat bising -9 dB hingga -20 dB, yang berarti intensitasnya di bawah 10⁻¹² W/m². Hewan seperti burung hantu atau anjing mampu mendengarnya. (BENAR)',
      penyelesaian: `Evaluasi analitis:
- Pernyataan 1: $\\beta = 0 \\iff 10\\log(I/I_0) = 0 \\iff I = I_0 = 10^{-12}\\ \\text{W/m}^2 \\neq 0$. (SALAH)
- Pernyataan 2: $I = 10^{-12} \\times 10^{120/10} = 10^0 = 1{,}0\\ \\text{W/m}^2$. (BENAR)
- Pernyataan 3: Jika $I < 10^{-12}$, maka $\\beta < 0\\ \\text{dB}$. Sah secara matematis dan fisis. (BENAR)`,
      hasilAkhir: 'Pernyataan 1: SALAH, Pernyataan 2: BENAR, Pernyataan 3: BENAR.',
      kesimpulan:
        'Skala desibel adalah ukuran logaritmik nisbi terhadap batas acuan manusia; nilai nol atau negatif tetap memiliki makna intensitas fisis riil.',
      caraCepatMisterJo:
        'Pahami konsep inti Mister Jo: Skala dB itu seperti skala Celcius! 0°C bukan berarti tidak ada suhu, melainkan titik beku air. Begitu juga 0 dB bukan berarti tidak ada bunyi, melainkan batas ambang dengar manusia (I = 10⁻¹² W/m²). Maka pernyataan 1 SALAH!',
      jebakanKonsep:
        'Banyak orang mengira angka 0 dB berarti hening total tanpa partikel bergerak sama sekali. Itu keliru!',
    },
    voiceScripts: {
      preStimulus:
        'Perhatikan soal konsep batas skala desibel ini. Pahami sifat logaritmik relatifnya.',
      onSolving:
        'Ingat perumpamaan Mister Jo: nol desibel mirip seperti nol derajat Celsius, bukan ketiadaan mutlak.',
      explanation:
        'Pernyataan satu Salah karena nol desibel masih memiliki intensitas sepuluh pangkat minus dua belas. Pernyataan dua Benar karena pada seratus dua puluh desibel intensitasnya satu Watt per meter kuadrat. Pernyataan tiga Benar karena desibel negatif sah untuk intensitas di bawah ambang dengar.',
      caraCepat:
        'Trik logika Mister Jo: 0 dB bukan ketiadaan suara, melainkan batas ambang dengar manusia. Pernyataan 1 pasti Salah!',
    },
  },

  // SOAL 25: Submateri 9 - TI n Sumber Bunyi (PG, Menengah)
  {
    id: 25,
    subtopicId: 9,
    subtopicName: 'Taraf Intensitas n Sumber Bunyi Identik',
    type: 'PG',
    difficulty: 'Menengah',
    title: 'Superposisi Bising dari Ratusan Mesin Tenun Identik di Pabrik Tekstil',
    stimulusContext:
      'Sebuah pabrik tekstil modern mengoperasikan sejumlah mesin tenun berkecepatan tinggi di dalam satu aula produksi yang luas. Ketika hanya ada 1 (satu) buah mesin tenun yang beroperasi, taraf intensitas bunyi kebisingan yang terukur pada jarak tertentu adalah 65 dB. Karena tingginya permintaan pasar, manajemen pabrik menyalakan sebanyak 100 (seratus) buah mesin tenun yang identik secara serempak. Anggap gelombang bunyi dari masing-masing mesin bersifat inkoheren (fase acak) sehingga intensitas akustiknya dapat dijumlahkan secara langsung.',
    stimulusData: {
      type: 'table',
      headers: ['Kondisi Pabrik', 'Jumlah Mesin Tenun (N)', 'Taraf Intensitas (dB)'],
      rows: [
        ['1 Mesin Aktif', 'N₁ = 1', 'β₁ = 65 dB'],
        ['100 Mesin Aktif', 'N₂ = 100', 'β_total = ?'],
      ],
    },
    diagram: {
      type: 'n_sources',
      caption: 'Penjumlahan taraf intensitas N sumber bunyi identik tak koheren.',
      params: { nSources: 100 },
    },
    rumusKunciPreview: '\\beta_{\\text{total}} = \\beta_1 + 10 \\log N',
    questionPrompt:
      'Berapakah taraf intensitas total kebisingan di aula produksi ketika 100 mesin tenun tersebut beroperasi bersamaan?',
    options: [
      { key: 'A', text: '75 dB' },
      { key: 'B', text: '85 dB' },
      { key: 'C', text: '95 dB' },
      { key: 'D', text: '165 dB' },
      { key: 'E', text: '6.500 dB' },
    ],
    correctAnswerSingle: 'B',
    explanation: {
      memahamiMasalah:
        'Menghitung taraf intensitas gabungan (β_total) dari N = 100 sumber bunyi identik yang masing-masing menghasilkan taraf intensitas β₁ = 65 dB.',
      diketahui: [
        'Taraf intensitas 1 mesin, β₁ = 65 dB',
        'Jumlah mesin identik, N = 100',
        'Sifat sumber: inkoheren (intensitas total = N × I₁)',
      ],
      ditanyakan: 'Taraf intensitas total (β_total)',
      rumusKunci: '\\beta_{\\text{total}} = \\beta_1 + 10 \\log N',
      analisisKonsep:
        'Karena sumber bunyi bersifat inkoheren, intensitas total adalah penjumlahan skalar dari intensitas masing-masing sumber: I_total = N · I₁. Mengubahnya ke dalam skala taraf intensitas logaritmik menghasilkan rumus: β_total = 10 log(I_total / I₀) = 10 log(N · I₁ / I₀) = β₁ + 10 log N. Jangan pernah menjumlahkan angka desibel secara langsung!',
      penyelesaian: `Substitusi nilai ke dalam rumus:
$$\\beta_{\\text{total}} = \\beta_1 + 10 \\log N$$
$$\\beta_{\\text{total}} = 65 + 10 \\log(100)$$
Karena $\\log(100) = \\log(10^2) = 2$, maka:
$$\\beta_{\\text{total}} = 65 + 10(2) = 65 + 20 = 85\\ \\text{dB}$$`,
      hasilAkhir: '85 dB (Pilihan B)',
      kesimpulan:
        'Pengoperasian 100 mesin identik menaikkan taraf intensitas sebesar 20 dB, menghasilkan kebisingan total 85 dB.',
      caraCepatMisterJo:
        'Trik kilat Mister Jo: Hitung jumlah angka nol pada N! N = 100 memiliki 2 angka nol. Kalikan jumlah nol itu dengan 10: 2 × 10 = +20 dB. Langsung tambahkan: 65 + 20 = 85 dB! Selesai dalam 2 detik tanpa corat-coret.',
      jebakanKonsep:
        'Jebakan paling konyol: mengalikan 65 dB × 100 = 6.500 dB (Pilihan E). Ingat, desibel adalah skala logaritmik, penambahan sumber hanya menambah kelipatan log N!',
    },
    voiceScripts: {
      preStimulus:
        'Soal ini membahas superposisi taraf intensitas banyak sumber bunyi identik di pabrik tekstil.',
      onSolving:
        'Ingat rumus penjumlahan logaritmik: beta total sama dengan beta satu ditambah sepuluh log N.',
      explanation:
        'Logaritma dari seratus adalah dua. Dikalikan sepuluh didapat penambahan dua puluh desibel. Enam puluh lima ditambah dua puluh menghasilkan delapan puluh lima desibel.',
      caraCepat:
        'Trik super cepat Mister Jo: 100 punya dua nol, jadi tambah 20 dB. 65 ditambah 20 sama dengan 85 desibel!',
    },
  },

  // SOAL 26: Submateri 9 - TI n Sumber Bunyi (PGK, Sulit)
  {
    id: 26,
    subtopicId: 9,
    subtopicName: 'Taraf Intensitas n Sumber Bunyi Identik',
    type: 'PGK',
    difficulty: 'Sulit',
    title: 'Evaluasi Regulasi Ambang Kebisingan K3 untuk Kluster Pompa Hidrolik',
    stimulusContext:
      'Di sebuah kawasan industri berat, sebuah ruangan instalasi memuat kluster pompa hidrolik identik. Berdasarkan pengukuran awal, ketika 10 buah pompa dioperasikan serentak, taraf intensitas bunyi di ruang kontrol terukur sebesar 70 dB. Standar K3 nasional menetapkan bahwa batas kebisingan maksimum yang diizinkan tanpa alat pelindung telinga (earmuff) untuk durasi 8 jam kerja adalah 85 dB. Manajer teknik berencana menambah jumlah pompa yang beroperasi menjadi 1.000 buah pompa untuk ekspansi kapasitas produksi.',
    stimulusData: {
      type: 'comparison',
      content:
        'Kondisi 1: N₁ = 10 pompa, β(10) = 70 dB.\nKondisi 2 Target: N₂ = 1.000 pompa.\nBatas regulasi K3 untuk 8 jam kerja: 85 dB.',
    },
    diagram: {
      type: 'n_sources',
      caption: 'Pertambahan taraf intensitas kebisingan akibat lonjakan jumlah unit mesin industri.',
    },
    rumusKunciPreview: '\\beta_N = \\beta_1 + 10 \\log N \\implies \\beta_{N_2} = \\beta_{N_1} + 10 \\log\\left( \\frac{N_2}{N_1} \\right)',
    questionPrompt:
      'Berdasarkan data dan analisis akustik industri tersebut, pernyataan-pernyataan manakah di bawah ini yang BENAR? (Pilihlah semua jawaban yang benar!)',
    options: [
      { key: 'A', text: 'Taraf intensitas yang dihasilkan oleh 1 (satu) buah pompa hidrolik tunggal adalah 60 dB.' },
      { key: 'B', text: 'Ketika 1.000 buah pompa beroperasi bersamaan, taraf intensitas kebisingan ruangan meningkat menjadi 90 dB.' },
      { key: 'C', text: 'Penambahan pompa dari 10 menjadi 1.000 buah menaikkan intensitas bunyi sebesar 100 kali lipat.' },
      { key: 'D', text: 'Jumlah pompa maksimum yang boleh dinyalakan bersamaan agar kebisingan tidak melampaui batas aman K3 (85 dB) adalah sekitar 316 buah pompa.' },
      { key: 'E', text: 'Dengan 1.000 buah pompa aktif, pekerja di ruangan tersebut masih diizinkan bekerja tanpa pelindung telinga selama 8 jam penuh.' },
    ],
    correctAnswerMultiple: ['A', 'B', 'C', 'D'],
    explanation: {
      memahamiMasalah:
        'Menentukan taraf intensitas 1 pompa, taraf intensitas 1.000 pompa, rasio kenaikan intensitas, kapasitas batas maksimum pompa sesuai regulasi K3 (85 dB), dan kelayakan keselamatan kerja.',
      diketahui: [
        'N₁ = 10, β₁₀ = 70 dB',
        'N₂ = 1.000',
        'Batas K3 = 85 dB',
      ],
      ditanyakan: 'Validitas pernyataan A, B, C, D, dan E.',
      rumusKunci: '\\beta_N = \\beta_1 + 10 \\log N, \\quad \\beta_{N_2} - \\beta_{N_1} = 10 \\log(N_2 / N_1)',
      analisisKonsep:
        '1. Untuk 1 pompa: β₁₀ = β₁ + 10 log(10) → 70 = β₁ + 10(1) → β₁ = 60 dB. (Opsi A BENAR)\n2. Untuk 1.000 pompa: β₁₀₀₀ = β₁ + 10 log(1.000) = 60 + 10(3) = 90 dB. (Opsi B BENAR)\n3. Rasio kenaikan intensitas: I₂ / I₁ = N₂ / N₁ = 1.000 / 10 = 100 kali lipat. (Opsi C BENAR)\n4. Pompa maksimum untuk 85 dB:\n85 = β₁ + 10 log N_maks → 85 = 60 + 10 log N_maks → 25 = 10 log N_maks → log N_maks = 2,5 → N_maks = 10^(2,5) = 10² · 10^0,5 = 100 × √10 ≈ 100 × 3,162 = 316,2 ≈ 316 buah pompa. (Opsi D BENAR)\n5. Opsi E SALAH: Karena 1.000 pompa menghasilkan 90 dB (melebihi batas aman 85 dB), pekerja WAJIB memakai pelindung telinga (earmuff/earplug)!',
      penyelesaian: `Langkah analisis:
1. TI satu pompa:
$$\\beta_1 = 70 - 10\\log(10) = 70 - 10 = 60\\ \\text{dB}$$

2. TI 1.000 pompa:
$$\\beta_{1000} = 60 + 10\\log(1000) = 60 + 30 = 90\\ \\text{dB}$$

3. Batas aman K3 85 dB:
$$85 = 60 + 10\\log N \\implies \\log N = 2{,}5 \\implies N = 10^{2{,}5} \\approx 316\\ \\text{pompa}$$`,
      hasilAkhir: 'Pernyataan A, B, C, dan D bernilai BENAR.',
      kesimpulan:
        'Pengoperasian 1.000 pompa menghasilkan kebisingan 90 dB yang berbahaya tanpa APD, dengan kapasitas operasi aman tanpa pelindung maksimum 316 unit.',
      caraCepatMisterJo:
        'Gunakan trik rasio Mister Jo: Dari 10 ke 1.000 pompa itu naik 100 kali lipat. Log 100 = 2, jadi taraf bertambah 10 × 2 = +20 dB! Dari 70 dB langsung jadi 90 dB. Karena 90 dB > 85 dB, opsi E pasti SALAH. Sisanya A, B, C, D terbukti benar!',
      jebakanKonsep:
        'Siswa sering mengira 90 dB hanya berbeda sedikit dari 85 dB sehingga menganggap aman. Padahal setiap kenaikan 3 dB menggandakan energi bising dan memotong batas waktu paparan menjadi separuhnya!',
    },
    voiceScripts: {
      preStimulus:
        'Soal ini menghubungkan konsep fisika taraf intensitas dengan standar keselamatan kerja K3 industri.',
      onSolving:
        'Cari dulu taraf intensitas satu pompa, lalu analisis ambang batas 85 desibel.',
      explanation:
        'Satu pompa menghasilkan 60 desibel. Seribu pompa menghasilkan 90 desibel. Batas 85 desibel membatasi jumlah pompa maksimum sekitar 316 unit. Opsi A, B, C, dan D benar.',
      caraCepat:
        'Trik kilat Mister Jo: jumlah mesin naik 100 kali lipat, berarti taraf intensitas naik 20 dB dari 70 menjadi 90 dB. Karena melampaui 85 dB, pekerja wajib pakai pelindung. Coret opsi E!',
    },
  },

  // SOAL 27: Submateri 10 - TI Perbedaan Jarak (PG, Menengah)
  {
    id: 27,
    subtopicId: 10,
    subtopicName: 'Taraf Intensitas Bunyi Berdasarkan Perbedaan Jarak',
    type: 'PG',
    difficulty: 'Menengah',
    title: 'Pelemahan Taraf Intensitas Sirene Peringatan Dini terhadap Pertambahan Jarak',
    stimulusContext:
      'Sebuah menara sirene peringatan dini tsunami memancarkan bunyi berkekuatan tinggi secara isotropik ke segala arah. Pada pos jaga pertama yang berjarak r₁ = 10 meter dari menara, alat pengukur mencatat taraf intensitas bunyi sebesar 80 dB. Seorang relawan kebencanaan berada di pos jaga kedua yang berjarak r₂ = 100 meter dari menara sirene tersebut. Anggap medium udara di pantai serba sama dan tidak ada pantulan dinding.',
    stimulusData: {
      type: 'table',
      headers: ['Posisi Pengamatan', 'Jarak dari Menara (r)', 'Taraf Intensitas (TI)'],
      rows: [
        ['Pos Jaga 1', 'r₁ = 10 meter', 'β₁ = 80 dB'],
        ['Pos Jaga 2', 'r₂ = 100 meter', 'β₂ = ?'],
      ],
    },
    diagram: {
      type: 'distance_falloff',
      caption: 'Pelemahan taraf intensitas bunyi seiring pertambahan jarak pengamatan.',
      params: { r1: '10 m', r2: '100 m' },
    },
    rumusKunciPreview: '\\beta_2 = \\beta_1 - 20 \\log\\left( \\frac{r_2}{r_1} \\right)',
    questionPrompt:
      'Berapakah taraf intensitas bunyi sirene yang didengar oleh relawan di pos jaga kedua pada jarak 100 meter tersebut?',
    options: [
      { key: 'A', text: '40 dB' },
      { key: 'B', text: '60 dB' },
      { key: 'C', text: '70 dB' },
      { key: 'D', text: '78 dB' },
      { key: 'E', text: '8 dB' },
    ],
    correctAnswerSingle: 'B',
    explanation: {
      memahamiMasalah:
        'Menghitung taraf intensitas bunyi pada jarak r₂ = 100 m jika pada jarak r₁ = 10 m taraf intensitasnya β₁ = 80 dB.',
      diketahui: [
        'r₁ = 10 m, β₁ = 80 dB',
        'r₂ = 100 m',
      ],
      ditanyakan: 'Taraf intensitas pada jarak kedua (β₂)',
      rumusKunci: '\\beta_2 = \\beta_1 - 20 \\log\\left( \\frac{r_2}{r_1} \\right)',
      analisisKonsep:
        'Karena intensitas berbanding terbalik dengan kuadrat jarak (I₂ / I₁ = (r₁ / r₂)²), substitusi ke rumus desibel menghasilkan faktor pengali 20: β₂ - β₁ = 10 log(I₂ / I₁) = 10 log( (r₁ / r₂)² ) = -20 log(r₂ / r₁). Makin jauh dari sumber bunyi, taraf intensitas PASTI berkurang.',
      penyelesaian: `Substitusi nilai ke dalam rumus:
$$\\beta_2 = \\beta_1 - 20 \\log\\left( \\frac{r_2}{r_1} \\right)$$
$$\\beta_2 = 80 - 20 \\log\\left( \\frac{100}{10} \\right)$$
$$\\beta_2 = 80 - 20 \\log(10) = 80 - 20(1) = 60\\ \\text{dB}$$`,
      hasilAkhir: '60 dB (Pilihan B)',
      kesimpulan:
        'Pertambahan jarak 10 kali lipat menyebabkan penurunan taraf intensitas tepat sebesar 20 dB, sehingga taraf intensitas di pos jaga kedua adalah 60 dB.',
      caraCepatMisterJo:
        'Hafalan sakti Mister Jo: Setiap jarak bertambah 10 kali lipat, taraf intensitas selalu berkurang tepat 20 dB! Dari 10 m ke 100 m itu naik 10 kali lipat, jadi langsung kurangkan: 80 - 20 = 60 dB! Jawaban instan dalam 2 detik.',
      jebakanKonsep:
        'Sering keliru memakai koefisien 10 (seperti pada rumus n sumber bunyi) sehingga menghitung 80 - 10 log(10) = 70 dB (opsi C). Ingat, untuk JARAK koefisiennya adalah 20 karena adanya pangkat kuadrat (r²)!',
    },
    voiceScripts: {
      preStimulus:
        'Perhatikan soal pelemahan taraf intensitas akibat perbedaan jarak ini.',
      onSolving:
        'Hati-hati: untuk rumus perbedaan jarak pengalinya adalah dua puluh log, bukan sepuluh log!',
      explanation:
        'Jarak bertambah sepuluh kali lipat. Dua puluh dikali logaritma sepuluh adalah dua puluh. Delapan puluh dikurangi dua puluh menghasilkan enam puluh desibel.',
      caraCepat:
        'Kaidah emas Mister Jo: jarak naik 10 kali lipat, desibel selalu turun 20 dB. 80 dikurangi 20 sama dengan 60 dB!',
    },
  },

  // SOAL 28: Submateri 10 - TI Perbedaan Jarak (PGK, Sulit)
  {
    id: 28,
    subtopicId: 10,
    subtopicName: 'Taraf Intensitas Bunyi Berdasarkan Perbedaan Jarak',
    type: 'PGK',
    difficulty: 'Sulit',
    title: 'Zonasi Akustik dan Jarak Aman Paparan Bising Pesawat Jet Lepas Landas',
    stimulusContext:
      'Di landasan pacu bandara internasional, sebuah pesawat jet komersial sedang melakukan uji mesin dorong penuh (full thrust take-off). Pada jarak r₁ = 50 meter dari mesin jet, seorang teknisi dengan pelindung telinga khusus mengukur taraf intensitas bunyi yang sangat ekstrem, yaitu β₁ = 130 dB. Otoritas penerbangan ingin menetapkan batas perimeter zona aman di mana masyarakat umum tanpa pelindung telinga dapat beraktivitas dengan taraf intensitas aman maksimum 90 dB.',
    stimulusData: {
      type: 'comparison',
      content:
        'Titik Uji 1: r₁ = 50 m, β₁ = 130 dB (ambang bahaya pendengaran).\nTitik Target Aman: β₂ = 90 dB (batas aman masyarakat).\nPenurunan taraf intensitas yang diinginkan: Δβ = 40 dB.',
    },
    diagram: {
      type: 'distance_falloff',
      caption: 'Zonasi radius pengamatan aman dari sumber kebisingan mesin jet.',
      params: { r1: '50 m', target: '90 dB' },
    },
    rumusKunciPreview: '\\beta_1 - \\beta_2 = 20 \\log\\left( \\frac{r_2}{r_1} \\right) \\implies \\log\\left( \\frac{r_2}{r_1} \\right) = \\frac{\\Delta\\beta}{20}',
    questionPrompt:
      'Berdasarkan prinsip pelemahan akustik jarak, pernyataan-pernyataan manakah di bawah ini yang BENAR? (Pilihlah semua jawaban yang benar!)',
    options: [
      { key: 'A', text: 'Penurunan taraf intensitas yang ditargetkan dari 130 dB ke 90 dB adalah sebesar 40 dB.' },
      { key: 'B', text: 'Intensitas bunyi pada jarak 50 meter dari mesin jet adalah 10 W/m².' },
      { key: 'C', text: 'Agar taraf intensitas turun menjadi 90 dB, intensitas bunyi harus turun menjadi 1/10.000 kali dari intensitas semula.' },
      { key: 'D', text: 'Jarak perimeter minimum agar masyarakat umum aman (taraf intensitas ≤ 90 dB) adalah 500 meter dari mesin pesawat jet.' },
      { key: 'E', text: 'Jarak perimeter minimum agar masyarakat umum aman (taraf intensitas ≤ 90 dB) adalah 5.000 meter (5 km) dari mesin pesawat jet.' },
    ],
    correctAnswerMultiple: ['A', 'B', 'C', 'E'],
    explanation: {
      memahamiMasalah:
        'Menghitung jarak aman r₂ agar taraf intensitas jet turun dari 130 dB menjadi 90 dB, serta menganalisis penurunan intensitas dan daya akustik.',
      diketahui: [
        'r₁ = 50 m, β₁ = 130 dB',
        'Target β₂ = 90 dB',
        'Δβ = 130 - 90 = 40 dB',
      ],
      ditanyakan: 'Kebenaran pernyataan A, B, C, D, dan E.',
      rumusKunci: '\\beta_1 - \\beta_2 = 20 \\log\\left( \\frac{r_2}{r_1} \\right)',
      analisisKonsep:
        '1. Penurunan desibel: 130 - 90 = 40 dB. (Opsi A BENAR)\n2. Intensitas pada 130 dB: I₁ = I₀ × 10^(130/10) = 10⁻¹² × 10¹³ = 10 W/m². (Opsi B BENAR)\n3. Penurunan intensitas untuk 40 dB: Δβ = 10 log(I₁ / I₂) = 40 → log(I₁ / I₂) = 4 → I₁ / I₂ = 10⁴ = 10.000. Maka I₂ = 1/10.000 I₁. (Opsi C BENAR)\n4. Menentukan jarak r₂:\n40 = 20 log(r₂ / r₁) → log(r₂ / r₁) = 2 → r₂ / r₁ = 10² = 100.\nMaka r₂ = 100 × r₁ = 100 × 50 m = 5.000 meter = 5 km. (Opsi E BENAR, Opsi D SALAH)',
      penyelesaian: `Substitusi matematis:
$$130 - 90 = 20 \\log\\left( \\frac{r_2}{50} \\right)$$
$$40 = 20 \\log\\left( \\frac{r_2}{50} \\right) \\implies 2 = \\log\\left( \\frac{r_2}{50} \\right)$$
$$\\frac{r_2}{50} = 10^2 = 100 \\implies r_2 = 50 \\times 100 = 5.000\\ \\text{meter} = 5\\ \\text{km}$$`,
      hasilAkhir: 'Pernyataan A, B, C, dan E bernilai BENAR.',
      kesimpulan:
        'Untuk menurunkan taraf intensitas sebesar 40 dB, jarak harus diperjauh sebanyak 100 kali lipat, yaitu menjadi 5 kilometer dari sumber.',
      caraCepatMisterJo:
        'Trik kilat Mister Jo: Target turun 40 dB. Ingat bahwa setiap 20 dB jarak naik 10 kali lipat. Jadi turun 40 dB (20 + 20) berarti jarak naik 10 × 10 = 100 kali lipat! Langsung kalikan: 50 m × 100 = 5.000 m = 5 km. Pilih E dan coret D!',
      jebakanKonsep:
        'Jebakan pada opsi D: siswa sering keliru membagi 40 dengan 10 (mengira rasio jarak 10^4 atau 10^1 = 10 sehingga mengalikan 50 × 10 = 500 m). Ingat rumus jarak memakai pembagi 20!',
    },
    voiceScripts: {
      preStimulus:
        'Perhatikan perhitungan zonasi jarak aman dari kebisingan mesin jet pesawat terbang ini.',
      onSolving:
        'Gunakan rumus: selisih desibel dibagi dua puluh menghasilkan pangkat sepuluh rasio jarak.',
      explanation:
        'Selisih empat puluh desibel dibagi dua puluh adalah dua. Sepuluh pangkat dua adalah seratus. Lima puluh meter dikalikan seratus menghasilkan lima ribu meter atau lima kilometer. Opsi A, B, C, dan E benar.',
      caraCepat:
        'Kaidah cepat Mister Jo: turun 40 dB artinya dua kali 20 dB, sehingga jarak membesar 10 kuadrat yaitu 100 kali lipat. 50 dikali 100 sama dengan 5.000 meter!',
    },
  },

  // SOAL 29: Submateri 11 - Sifat Gelombang Bunyi (PG, Menengah)
  {
    id: 29,
    subtopicId: 11,
    subtopicName: 'Sifat-Sifat Gelombang Bunyi',
    type: 'PG',
    difficulty: 'Menengah',
    title: 'Analisis Pembiasan Akustik Atmosferik pada Malam Hari',
    stimulusContext:
      'Warga sebuah desa yang berjarak 5 kilometer dari stasiun kereta api mengamati suatu fenomena akustik yang konsisten: pada siang hari yang terik, suara gemuruh dan klakson lokomotif kereta api hampir tidak terdengar sama sekali. Namun, pada malam hari yang sunyi dan dingin, suara kereta api tersebut terdengar sangat jelas dan keras seolah-olah stasiun berada sangat dekat. Tim BMKG menjelaskan fenomena ini berdasarkan profil gradien temperatur udara vertikal (inversi suhu malam hari) dan pembiasan gelombang bunyi (refraksi).',
    diagram: {
      type: 'sound_properties',
      caption: 'Refraksi pembelokan berkas gelombang bunyi akibat gradien suhu vertikal udara.',
    },
    rumusKunciPreview: 'v = \\sqrt{\\frac{\\gamma R T}{M}} \\implies T_{\\text{bawah}} < T_{\\text{atas}} \\implies v_{\\text{bawah}} < v_{\\text{atas}}',
    questionPrompt:
      'Manakah penjelasan ilmiah yang paling tepat mengapa bunyi merambat lebih jauh dan jelas pada malam hari dibandingkan siang hari?',
    options: [
      {
        key: 'A',
        text: 'Pada malam hari udara lebih dingin di dekat tanah sehingga kelajuan bunyi di lapisan bawah lebih lambat daripada lapisan atas, menyebabkan muka gelombang bunyi dibiaskan melengkung ke arah bawah mendekati permukaan tanah.',
      },
      {
        key: 'B',
        text: 'Pada malam hari tidak ada cahaya matahari yang menyerap energi foton gelombang bunyi sehingga intensitas bunyi tidak terdisipasi.',
      },
      {
        key: 'C',
        text: 'Massa jenis udara di lapisan bawah pada malam hari menjadi nol sehingga gelombang bunyi merambat tanpa hambatan inersia.',
      },
      {
        key: 'D',
        text: 'Udara dingin di malam hari memantulkan bunyi secara difus ke luar angkasa sehingga bunyi terperangkap di atmosfer hampa.',
      },
      {
        key: 'E',
        text: 'Gelombang bunyi mengalami polarisasi linier sempurna akibat penurunan suhu drastis di malam hari.',
      },
    ],
    correctAnswerSingle: 'A',
    explanation: {
      memahamiMasalah:
        'Menjelaskan fenomena fisis mengapa bunyi merambat lebih jauh dan terdengar lebih keras di malam hari berdasarkan refraksi gelombang bunyi akibat gradien suhu udara.',
      diketahui: [
        'Hubungan kelajuan bunyi dengan suhu gas: $v \\propto \\sqrt{T}$',
        'Kondisi malam hari: Lapisan udara dekat tanah lebih dingin dibandingkan lapisan udara di atasnya (inversi suhu: $T_{\\text{bawah}} < T_{\\text{atas}}$)',
      ],
      ditanyakan: 'Mekanisme fisis yang benar',
      rumusKunci: 'v \\propto \\sqrt{T}, \\quad \\frac{\\sin \\theta_1}{v_1} = \\frac{\\sin \\theta_2}{v_2}',
      analisisKonsep:
        'Gelombang selalu dibiaskan membelok ke arah medium yang memiliki kelajuan rambat LEBIH LAMBAT. Pada malam hari, permukaan bumi melepas kalor radiasi dengan cepat sehingga lapisan udara dekat tanah lebih dingin ($T_{\\text{bawah}} < T_{\\text{atas}}$). Akibatnya kelajuan bunyi di bawah lebih lambat daripada di atas ($v_{\\text{bawah}} < v_{\\text{atas}}$). Bagian atas muka gelombang merambat lebih cepat dari bagian bawah, menyebabkan berkas gelombang bunyi melengkung (dibiaskan) turun kembali ke arah permukaan tanah, sehingga terdengar jauh lebih keras bagi pendengar di tanah.',
      penyelesaian: `Analisis ilmiah:
1. Hubungan termodinamika kecepatan bunyi:
$$v = \\sqrt{\\frac{\\gamma R T}{M}} \\implies v \\propto \\sqrt{T}$$

2. Pada malam hari (inversi termal):
$$T_{\\text{permukaan}} < T_{\\text{atas}} \\implies v_{\\text{permukaan}} < v_{\\text{atas}}$$

3. Berdasarkan Hukum Snellius pembiasan gelombang:
Muka gelombang bagian atas yang lebih cepat mendahului muka gelombang bawah, membelokkan arah vektor rambat gelombang (ray) melengkung ke bawah menuju tanah.`,
      hasilAkhir: 'Pilihan A',
      kesimpulan:
        'Inversi temperatur malam hari menciptakan pandu gelombang akustik alami (acoustic wave ducting) yang membiaskan gelombang bunyi melengkung ke arah tanah.',
      caraCepatMisterJo:
        'Hafalan cerdas Mister Jo: Bunyi selalu membelok ke arah udara yang LEBIH DINGIN (tempat kelajuan lebih lambat)! Di malam hari udara dingin ada di BAWAH, maka bunyi membelok ke BAWAH (terdengar jelas). Di siang hari udara dingin ada di ATAS, maka bunyi membelok ke ATAS (hilang ke langit). Opsi B, C, D, E salah total secara fisika!',
      jebakanKonsep:
        'Pengecoh pada opsi E: gelombang bunyi adalah gelombang longitudinal, sehingga TIDAK PERNAH dapat mengalami polarisasi (hanya gelombang transversal yang dapat dipolarisasi)!',
    },
    voiceScripts: {
      preStimulus:
        'Perhatikan fenomena pembiasan bunyi di malam hari ini. Fenomena sehari-hari yang sangat indah dijelaskan oleh fisika.',
      onSolving:
        'Ingat prinsip pembiasan: gelombang selalu membelok ke arah medium yang kelajuannya lebih lambat atau suhunya lebih dingin.',
      explanation:
        'Pada malam hari udara dekat permukaan tanah lebih dingin sehingga laju rambat bunyi di bawah lebih lambat. Hal ini membiaskan berkas gelombang bunyi melengkung ke arah permukaan tanah sehingga terdengar lebih jelas.',
      caraCepat:
        'Kaidah emas Mister Jo: bunyi selalu membelok ke arah udara yang lebih dingin! Di malam hari dingin ada di bawah, maka bunyi melengkung ke bawah.',
    },
  },

  // SOAL 30: Submateri 11 - Sifat Gelombang Bunyi (PGK, Sangat Sulit)
  {
    id: 30,
    subtopicId: 11,
    subtopicName: 'Sifat-Sifat Gelombang Bunyi',
    type: 'PGK',
    difficulty: 'Sangat Sulit',
    title: 'Analisis Interferensi Spasial Dua Pengeras Suara Koheren',
    stimulusContext:
      'Dua buah pengeras suara kecil, S₁ dan S₂, ditempatkan terpisah pada jarak d = 3,0 meter di atas panggung terbuka. Kedua speaker dihubungkan ke generator audio tunggal sehingga berosilasi secara sefase (in phase) memancarkan gelombang bunyi harmonik murni dengan frekuensi f = 680 Hz. Kelajuan perambatan bunyi di udara adalah v = 340 m/s. Seorang pengamat berjalan di sepanjang garis lurus yang sejajar dengan garis penghubung kedua speaker pada jarak tegak lurus L = 4,0 meter dari garis speaker.',
    stimulusData: {
      type: 'table',
      headers: ['Parameter Interferensi', 'Simbol', 'Nilai'],
      rows: [
        ['Frekuensi Sumber', 'f', '680 Hz'],
        ['Kelajuan Bunyi', 'v', '340 m/s'],
        ['Jarak Pisah Antar Speaker', 'd', '3,0 meter'],
        ['Jarak Layar/Lintasan Deteksi', 'L', '4,0 meter'],
      ],
    },
    diagram: {
      type: 'sound_properties',
      caption: 'Pola interferensi konstruktif dan destruktif dari dua sumber bunyi koheren.',
      params: { f: '680 Hz', d: '3,0 m', L: '4,0 m' },
    },
    rumusKunciPreview: '\\lambda = \\frac{v}{f}, \\quad \\Delta s = |d_2 - d_1| = m\\lambda \\; (\\text{Konstruktif}), \\quad \\Delta s = (m + 0{,}5)\\lambda \\; (\\text{Destruktif})',
    questionPrompt:
      'Manakah pernyataan-pernyataan berikut yang BENAR terkait pola intensitas bunyi yang didengar oleh pengamat? (Pilihlah semua jawaban yang benar!)',
    options: [
      { key: 'A', text: 'Panjang gelombang bunyi yang dipancarkan oleh kedua speaker adalah 0,50 meter.' },
      { key: 'B', text: 'Di titik tepat di tengah garis lintasan (garis simetri tegak lurus), pengamat mendengar bunyi yang sangat kuat (interferensi konstruktif maksimum sentral).' },
      { key: 'C', text: 'Pelemahan bunyi pertama (interferensi destruktif minimum pertama) terjadi ketika selisih jarak lintasan tempuh gelombang dari kedua speaker adalah 0,25 meter.' },
      { key: 'D', text: 'Gelombang bunyi di udara dapat mengalami polarisasi linier jika melewati celah sempit di antara kedua speaker.' },
      { key: 'E', text: 'Jika frekuensi dinaikkan menjadi 1.360 Hz, jarak spasial antara dua titik bunyi keras yang berturutan pada garis lintasan akan menjadi lebih rapat (menyempit).' },
    ],
    correctAnswerMultiple: ['A', 'B', 'C', 'E'],
    explanation: {
      memahamiMasalah:
        'Menganalisis pola interferensi dua sumber bunyi koheren: panjang gelombang, syarat interferensi konstruktif dan destruktif, serta sifat fisis polarisasi gelombang longitudinal.',
      diketahui: [
        'f = 680 Hz, v = 340 m/s',
        'd = 3,0 m, L = 4,0 m',
        'Sumber sefase',
      ],
      ditanyakan: 'Validitas pernyataan A, B, C, D, dan E.',
      rumusKunci: '\\lambda = \\frac{v}{f}, \\quad \\Delta s = m\\lambda \\; (\\text{Maksimum}), \\quad \\Delta s = \\left(m + \\frac{1}{2}\\right)\\lambda \\; (\\text{Minimum})',
      analisisKonsep:
        '1. Panjang gelombang: λ = v/f = 340 / 680 = 0,50 m = 50 cm. (Opsi A BENAR)\n2. Di titik pusat simetri: Jarak ke S₁ sama dengan jarak ke S₂ (d₁ = d₂), sehingga beda lintasan Δs = 0. Ini adalah syarat maksimum sentral (m = 0), menghasilkan interferensi konstruktif bunyi keras. (Opsi B BENAR)\n3. Destruktif minimum pertama (m = 0): Δs = (0 + 1/2)λ = 0,5 × 0,50 m = 0,25 m. (Opsi C BENAR)\n4. Opsi D SALAH BESAR: Gelombang bunyi di udara adalah gelombang longitudinal (arah getar sejajar dengan arah rambat). Gelombang longitudinal TIDAK DAPAT MENGALAMI POLARISASI! Polarisasi hanya bisa terjadi pada gelombang transversal.\n5. Jarak antar pita interferensi: Δy ≈ (L/d) λ = (L/d) (v/f). Jika f naik menjadi 2 kali lipat, λ mengecil menjadi setengahnya sehingga jarak antartitik keras Δy menyempit (lebih rapat). (Opsi E BENAR)',
      penyelesaian: `Evaluasi analitis:
1. $\\lambda = \\frac{340}{680} = 0{,}50\\ \\text{m}$ (BENAR)
2. $\\Delta s = 0 = 0 \\cdot \\lambda \\implies$ Interferensi Konstruktif Maksimum (BENAR)
3. Minimum ke-1: $\\Delta s = \\frac{1}{2}\\lambda = \\frac{1}{2}(0{,}50) = 0{,}25\\ \\text{m}$ (BENAR)
4. Gelombang bunyi longitudinal TIDAK BISA dipolarisasi. (SALAH)
5. $\\Delta y \\propto \\lambda \\propto \\frac{1}{f} \\implies$ jika $f$ naik, $\\Delta y$ mengecil (rapat). (BENAR)`,
      hasilAkhir: 'Pernyataan A, B, C, dan E bernilai BENAR.',
      kesimpulan:
        'Interferensi akustik spasial membagi ruangan menjadi zona penguatan dan zona pembatalan fase, sementara sifat longitudinal bunyi menghalangi terjadinya fenomena polarisasi.',
      caraCepatMisterJo:
        'Coret opsi D dalam hitungan 1 detik! Mengapa? Karena bunyi adalah gelombang LONGITUDINAL, dan gelombang longitudinal mustahil dipolarisasi! Setelah D dicoret, periksa opsi A (340/680 = 0,5 m -> benar), B (simetri pasti keras -> benar), C (setengah lambda = 0,25 m -> benar), E (frekuensi naik membuat garis rapat -> benar). Selesai!',
      jebakanKonsep:
        'Pengecoh klasik ujian TKA/UTBK: menyisipkan opsi "polarisasi gelombang bunyi". Ingat baik-baik: polarisasi HANYA untuk gelombang transversal (cahaya, dawai, gelombang EM)!',
    },
    voiceScripts: {
      preStimulus:
        'Soal terakhir ini menguji pemahaman komprehensif tentang sifat interferensi dan batasan sifat gelombang bunyi.',
      onSolving:
        'Waspada terhadap sifat gelombang: apakah gelombang longitudinal seperti bunyi dapat mengalami polarisasi?',
      explanation:
        'Panjang gelombangnya adalah nol koma lima meter. Titik tengah merupakan interferensi konstruktif kuat. Minimum pertama terjadi pada beda lintasan nol koma dua lima meter. Bunyi tidak dapat dipolarisasi karena longitudinal. Opsi A, B, C, dan E benar.',
      caraCepat:
        'Trik kilat Mister Jo: eliminasi opsi D seketika! Bunyi adalah gelombang longitudinal sehingga tidak bisa dipolarisasi. Pernyataan A, B, C, dan E terbukti benar!',
    },
  },
];
