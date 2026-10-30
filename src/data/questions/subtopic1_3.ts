import { Question } from '../../types';

export const QUESTIONS_1_TO_9: Question[] = [
  // SOAL 1: Submateri 1 - Kelajuan Bunyi (PG, Menengah)
  {
    id: 1,
    subtopicId: 1,
    subtopicName: 'Kelajuan Bunyi dalam Berbagai Medium',
    type: 'PG',
    difficulty: 'Menengah',
    title: 'Penentuan Kedalaman Palung Laut dengan Sistem Sonar Aktif',
    stimulusContext:
      'Sebuah kapal riset oseanografi nasional sedang memetakan batimetri palung laut menggunakan transduser sonar aktif berkekuatan tinggi. Transduser mengirimkan pulsa gelombang ultrasonik secara vertikal ke dasar laut. Diketahui bahwa air laut di wilayah tersebut memiliki modulus elastisitas Bulk (B) sebesar 2,25 × 10⁹ N/m² dan massa jenis (ρ) sebesar 1.000 kg/m³. Sinyal pantulan gema (echo) dari dasar palung laut terdeteksi kembali oleh hidrofon kapal tepat 3,2 sekon setelah pulsa pertama kali dipancarkan.',
    stimulusData: {
      type: 'table',
      headers: ['Parameter Oseanografi', 'Nilai Besaran', 'Satuan SI'],
      rows: [
        ['Modulus Bulk Air Laut (B)', '2,25 × 10⁹', 'N/m² (Pa)'],
        ['Massa Jenis Air Laut (ρ)', '1.000', 'kg/m³'],
        ['Waktu Tempuh Bolak-Balik (t)', '3,2', 'sekon (s)'],
      ],
    },
    diagram: {
      type: 'medium_speed',
      caption: 'Pemancaran pulsa sonar ultrasonik menembus medium air laut dan dipantulkan oleh dasar laut.',
      params: { distanceLabel: 'Kedalaman (d)' },
    },
    rumusKunciPreview: 'v = \\sqrt{\\frac{B}{\\rho}} \\quad \\text{dan} \\quad d = \\frac{v \\cdot t}{2}',
    questionPrompt:
      'Berdasarkan data oseanografi tersebut, berapakah kedalaman palung laut yang sedang diukur oleh kapal riset tersebut?',
    options: [
      { key: 'A', text: '1.200 meter' },
      { key: 'B', text: '1.800 meter' },
      { key: 'C', text: '2.400 meter' },
      { key: 'D', text: '3.600 meter' },
      { key: 'E', text: '4.800 meter' },
    ],
    correctAnswerSingle: 'C',
    explanation: {
      memahamiMasalah:
        'Soal menuntut penentuan kedalaman palung laut (d) berdasarkan waktu rambat bolak-balik pulsa sonar (t = 3,2 s) dan kelajuan rambat gelombang bunyi dalam fluida yang ditentukan oleh modulus Bulk (B) serta massa jenis (ρ).',
      diketahui: [
        'Modulus Bulk air laut, B = 2,25 × 10⁹ N/m²',
        'Massa jenis air laut, ρ = 1.000 kg/m³ = 10³ kg/m³',
        'Waktu tempuh bolak-balik pulsa gelombang, t = 3,2 s',
      ],
      ditanyakan: 'Kedalaman palung laut (d)',
      rumusKunci: 'v = \\sqrt{\\frac{B}{\\rho}} \\quad \\text{dan} \\quad d = \\frac{v \\cdot t}{2}',
      analisisKonsep:
        'Kelajuan gelombang bunyi longitudinal di dalam fluida (cair/gas) bergantung langsung pada akar perbandingan modulus elastisitas volume (modulus Bulk B) terhadap kerapatan medium (ρ). Karena pulsa sonar merambat turun ke dasar laut dan memantul kembali ke atas, jarak total yang ditempuh gelombang adalah dua kali kedalaman palung (2d = v · t).',
      penyelesaian: `Langkah 1: Menghitung kelajuan rambat gelombang bunyi di dalam air laut
$$v = \\sqrt{\\frac{B}{\\rho}} = \\sqrt{\\frac{2{,}25 \\times 10^9}{10^3}} = \\sqrt{2{,}25 \\times 10^6} = 1{,}5 \\times 10^3 = 1.500\\ \\text{m/s}$$

Langkah 2: Menghitung kedalaman palung laut (jarak searah)
$$d = \\frac{v \\cdot t}{2} = \\frac{1.500 \\times 3{,}2}{2} = 1.500 \\times 1{,}6 = 2.400\\ \\text{meter}$$`,
      hasilAkhir: '2.400 meter (Pilihan C)',
      kesimpulan:
        'Dengan kelajuan bunyi di air laut sebesar 1.500 m/s, pulsa gelombang menempuh jarak bolak-balik sejauh 4.800 m dalam waktu 3,2 s, sehingga kedalaman palung laut adalah tepat 2.400 meter.',
      caraCepatMisterJo:
        'Ingat trik Mister Jo! Hitung cepat v = √(2,25 × 10⁶) = 1.500 m/s. Karena waktu bolak-balik t = 3,2 s, waktu tempuh satu arah cukup dibagi dua menjadi 1,6 s. Langsung kalikan: 1.500 × 1,6 = 2.400 m. Hemat waktu 30 detik tanpa rumus bertele-tele!',
      jebakanKonsep:
        'Banyak siswa lupa membagi dua waktu tempuh (t), sehingga langsung mengalikan v × t = 1.500 × 3,2 = 4.800 meter (Pilihan E). Ingat, bunyi sonar bergerak bolak-balik!',
    },
    voiceScripts: {
      preStimulus:
        'Halo para juara! Perhatikan stimulus sistem sonar kapal riset ini. Kita diberikan modulus Bulk dan massa jenis medium perambatan.',
      onSolving:
        'Cari dulu kelajuan rambat gelombang bunyi v, kemudian ingat bahwa waktu yang diberikan adalah waktu bolak-balik.',
      explanation:
        'Pertama, hitung kelajuan bunyi v dengan akar modulus Bulk dibagi massa jenis, didapatkan seribu lima ratus meter per sekon. Kemudian kalikan dengan setengah dari waktu tempuh, yaitu satu koma enam sekon, sehingga hasilnya dua ribu empat ratus meter.',
      caraCepat:
        'Trik cepat Mister Jo: bagikan waktu 3,2 sekon menjadi 1,6 sekon, lalu kalikan langsung dengan kelajuan 1.500 meter per sekon. Didapat 2.400 meter!',
    },
  },

  // SOAL 2: Submateri 1 - Kelajuan Bunyi (PG, Sulit)
  {
    id: 2,
    subtopicId: 1,
    subtopicName: 'Kelajuan Bunyi dalam Berbagai Medium',
    type: 'PG',
    difficulty: 'Sulit',
    title: 'Analisis Termodinamika Akustik pada Gas Argon dalam Ruang Uji',
    stimulusContext:
      'Di laboratorium termofisika, sebuah tabung uji akustik diisi dengan gas Argon murni (gas monoatomik dengan tetapan Laplace γ = 5/3 dan massa molar M = 40 g/mol = 40 × 10⁻³ kg/mol). Pada kondisi awal, gas berada pada temperatur 27°C dengan kelajuan rambat bunyi terukur sebesar v₁. Tabung pemanas kemudian diaktifkan hingga temperatur mutlak gas meningkat menjadi 147°C. Diketahui tetapan umum gas R = 8,31 J/(mol·K).',
    stimulusData: {
      type: 'table',
      headers: ['Kondisi Gas', 'Temperatur Celcius', 'Temperatur Mutlak (Kelvin)'],
      rows: [
        ['Kondisi Awal (1)', '27°C', '300 K'],
        ['Kondisi Akhir (2)', '147°C', '420 K'],
      ],
    },
    diagram: {
      type: 'medium_speed',
      caption: 'Perambatan gelombang bunyi termal dalam tabung gas monoatomik.',
      params: { distanceLabel: 'Kolom Gas Argon' },
    },
    rumusKunciPreview: 'v = \\sqrt{\\frac{\\gamma R T}{M}} \\implies \\frac{v_2}{v_1} = \\sqrt{\\frac{T_2}{T_1}}',
    questionPrompt:
      'Perbandingan kelajuan gelombang bunyi pada kondisi akhir terhadap kondisi awal (v₂ : v₁) di dalam tabung gas Argon tersebut adalah...',
    options: [
      { key: 'A', text: '√7 : √5' },
      { key: 'B', text: '7 : 5' },
      { key: 'C', text: '√147 : √27' },
      { key: 'D', text: '49 : 25' },
      { key: 'E', text: '√5 : √7' },
    ],
    correctAnswerSingle: 'A',
    explanation: {
      memahamiMasalah:
        'Menentukan perbandingan kelajuan gelombang bunyi (v₂ : v₁) ketika suhu gas ideal monoatomik dinaikkan dari 27°C menjadi 147°C.',
      diketahui: [
        'Temperatur awal, T₁ = 27°C = 27 + 273 = 300 K',
        'Temperatur akhir, T₂ = 147°C = 147 + 273 = 420 K',
        'Jenis gas sama (Argon), sehingga tetapan Laplace γ dan massa molar M konstan.',
      ],
      ditanyakan: 'Rasio v₂ : v₁',
      rumusKunci: 'v = \\sqrt{\\frac{\\gamma R T}{M}} \\implies \\frac{v_2}{v_1} = \\sqrt{\\frac{T_2}{T_1}}',
      analisisKonsep:
        'Kelajuan bunyi dalam gas ideal berbanding lurus dengan akar temperatur MUTLAK gas (T dalam Kelvin), bukan temperatur Celcius. Karena medium gas dan komposisi kimianya tetap, faktor γ, R, dan M saling meniadakan saat dibandingkan.',
      penyelesaian: `Langkah 1: Konversi temperatur ke skala Kelvin (SI)
$$T_1 = 27 + 273 = 300\\ \\text{K}$$
$$T_2 = 147 + 273 = 420\\ \\text{K}$$

Langkah 2: Menghitung rasio kelajuan bunyi
$$\\frac{v_2}{v_1} = \\sqrt{\\frac{T_2}{T_1}} = \\sqrt{\\frac{420}{300}} = \\sqrt{\\frac{42}{30}} = \\sqrt{\\frac{7}{5}} = \\frac{\\sqrt{7}}{\\sqrt{5}}$$

Maka rasio perbandingan $v_2 : v_1 = \\sqrt{7} : \\sqrt{5}$.`,
      hasilAkhir: '√7 : √5 (Pilihan A)',
      kesimpulan:
        'Kelajuan gelombang bunyi meningkat seiring kenaikan temperatur mutlak medium gas karena energi kinetik rata-rata partikel gas yang mentransmisikan osilasi akustik semakin tinggi.',
      caraCepatMisterJo:
        'Jangan hitung nilai R dan M jika tidak perlu! Cukup ubah Celsius ke Kelvin: 300 K dan 420 K. Rasio kuadratik: 420 / 300 disederhanakan bagi 60 menjadi 7/5. Akarkan langsung: √7 : √5. Cepat dan tepat!',
      jebakanKonsep:
        'Jebakan fatal: langsung menggunakan angka Celsius tanpa konversi ke Kelvin sehingga memilih √(147/27) = √(49/9) = 7/3 atau 49 : 25. Fisika gelombang bunyi pada gas selalu menuntut temperatur mutlak Kelvin!',
    },
    voiceScripts: {
      preStimulus:
        'Perhatikan soal nomor dua. Ada perubahan temperatur gas. Hati-hati dengan satuan derajat Celsius!',
      onSolving:
        'Selalu ubah temperatur Celcius ke Kelvin terlebih dahulu dengan menambahkan 273.',
      explanation:
        'Suhu awal adalah 300 Kelvin dan suhu akhir 420 Kelvin. Kelajuan bunyi berbanding lurus dengan akar temperatur Kelvin, sehingga rasionya adalah akar dari 420 per 300, yang disederhanakan menjadi akar 7 dibanding akar 5.',
      caraCepat:
        'Trik cepat Mister Jo: abaikan tetapan gas, langsung bandingkan 420 terhadap 300, bagi 60 menjadi 7 per 5, lalu pasang akar: akar 7 banding akar 5.',
    },
  },

  // SOAL 3: Submateri 1 - Kelajuan Bunyi (PGK, Sangat Sulit)
  {
    id: 3,
    subtopicId: 1,
    subtopicName: 'Kelajuan Bunyi dalam Berbagai Medium',
    type: 'PGK',
    difficulty: 'Sangat Sulit',
    title: 'Evaluasi Fisis Kecepatan Perambatan Akustik Antar-Fase Materi',
    stimulusContext:
      'Tim penguji material akustik melakukan serangkaian eksperimen untuk membandingkan karakteristik perambatan gelombang bunyi pada tiga fase zat yang berbeda pada suhu 20°C: batang rel baja padat (modulus Young E = 2,0 × 10¹¹ N/m², ρ = 7.800 kg/m³), air raksa cair (modulus Bulk B = 2,85 × 10¹⁰ N/m², ρ = 13.600 kg/m³), dan gas helium (γ = 5/3, M = 4 × 10⁻³ kg/mol pada tekanan 1 atm). Tim memformulasikan hubungan antara kerapatan partikel, ikatan elastis molekuler, dan kecepatan penjalaran energi mekanik longitudinal.',
    diagram: {
      type: 'medium_speed',
      caption: 'Diagram transmisi getaran partikel pada zat padat berikatan kovalen/logam rapat versus gas renggang.',
    },
    rumusKunciPreview: 'v_{\\text{padat}} = \\sqrt{\\frac{E}{\\rho}}, \\quad v_{\\text{cair}} = \\sqrt{\\frac{B}{\\rho}}, \\quad v_{\\text{gas}} = \\sqrt{\\frac{\\gamma R T}{M}}',
    questionPrompt:
      'Berdasarkan teori kinetik dan elastisitas materi, manakah pernyataan-pernyataan di bawah ini yang BENAR secara ilmiah? (Pilihlah semua pernyataan yang benar!)',
    options: [
      {
        key: 'A',
        text: 'Secara umum, kelajuan bunyi pada zat padat lebih tinggi daripada zat cair dan gas karena modulus elastisitas zat padat jauh melampaui kerapatannya.',
      },
      {
        key: 'B',
        text: 'Kelajuan rambat bunyi dalam gas ideal bergantung secara signifikan pada perubahan tekanan statis gas pada temperatur konstan (isotermal).',
      },
      {
        key: 'C',
        text: 'Pada temperatur yang sama, kelajuan bunyi di dalam gas Helium lebih cepat dibandingkan di dalam gas Oksigen (M = 32 g/mol).',
      },
      {
        key: 'D',
        text: 'Bila kerapatan suatu medium padat bertambah besar tanpa adanya peningkatan modulus Young, maka kelajuan perambatan gelombang bunyi pada medium tersebut justru akan menurun.',
      },
      {
        key: 'E',
        text: 'Gelombang bunyi di dalam gas merambat secara proses adiabatik, bukan isotermal, sehingga digunakan tetapan Laplace γ > 1.',
      },
    ],
    correctAnswerMultiple: ['A', 'C', 'D', 'E'],
    explanation: {
      memahamiMasalah:
        'Menganalisis prinsip fisis perambatan gelombang bunyi longitudinal pada zat padat, cair, dan gas ideal, termasuk pengaruh modulus elastisitas, massa molar, kerapatan, dan proses termodinamika perambatan cepat (adiabatik).',
      diketahui: [
        'Zat padat: $v = \\sqrt{E/\\rho}$',
        'Zat cair: $v = \\sqrt{B/\\rho}$',
        'Gas ideal: $v = \\sqrt{\\gamma R T / M} = \\sqrt{\\gamma P / \\rho}$',
      ],
      ditanyakan: 'Kombinasi pernyataan ilmiah yang bernilai benar.',
      rumusKunci: 'v = \\sqrt{\\frac{E}{\\rho}}, \\quad v = \\sqrt{\\frac{\\gamma R T}{M}}',
      analisisKonsep:
        'Analisis setiap opsi:\n- Opsi A BENAR: Modulus elastisitas zat padat (10¹¹ N/m²) sangat besar dibandingkan zat cair (10⁹ N/m²) dan gas (10⁵ N/m²), sehingga v_padat > v_cair > v_gas.\n- Opsi B SALAH: Pada suhu konstan (isotermal), peningkatan tekanan P juga menaikkan massa jenis ρ sebanding (P/ρ = konstan), sehingga v_gas tidak berubah oleh tekanan jika T tetap.\n- Opsi C BENAR: v ∝ 1/√M. Karena M_Helium (4 g/mol) jauh lebih kecil dari M_Oksigen (32 g/mol), bunyi di helium jauh lebih cepat.\n- Opsi D BENAR: v = √(E/ρ), karena ρ di penyebut, kenaikan ρ dengan E tetap akan memperkecil v.\n- Opsi E BENAR: Rapatan dan renggangan bunyi berlangsung amat cepat tanpa sempat bertukar kalor dengan lingkungan sekitar (proses adiabatik Laplace).',
      penyelesaian: `Evaluasi Opsi:
1. Opsi A: $v_{\\text{padat}} > v_{\\text{cair}} > v_{\\text{gas}}$ karena faktor elastisitas mendominasi kerapatan. (BENAR)
2. Opsi B: $v = \\sqrt{\\frac{\\gamma P}{\\rho}}$. Berdasarkan hukum gas ideal, $\\frac{P}{\\rho} = \\frac{RT}{M}$. Jika $T$ konstan, perubahan $P$ tidak mengubah kelajuan bunyi. (SALAH)
3. Opsi C: $v \\propto \\frac{1}{\\sqrt{M}}$. Karena $M_{\\text{He}} < M_{\\text{O}_2}$, maka $v_{\\text{He}} > v_{\\text{O}_2}$. (BENAR)
4. Opsi D: $v = \\sqrt{\\frac{E}{\\rho}}$, hubungan berbanding terbalik terhadap $\\sqrt{\\rho}$. (BENAR)
5. Opsi E: Laplace membuktikan perambatan bunyi adalah adiabatik dengan faktor $\\gamma = C_p / C_v$. (BENAR)`,
      hasilAkhir: 'Pernyataan A, C, D, dan E bernilai BENAR.',
      kesimpulan:
        'Kelajuan gelombang bunyi adalah fungsi elastisitas dan inersia medium. Pada gas, perambatan berlangsung adiabatik dan kelajuan ditentukan oleh suhu mutlak serta massa molar.',
      caraCepatMisterJo:
        'Kunci cepat eliminasi: Opsi B pasti SALAH karena pada suhu tetap, jika P naik 2x lipat, massa jenis gas juga naik 2x lipat sehingga rasio P/ρ konstan. Coret B, maka sisanya A, C, D, E semuanya benar!',
      jebakanKonsep:
        'Siswa sering terjebak mengira jika tekanan gas dinaikkan maka kelajuan bunyi pasti meningkat (keliru mengira v sebanding √P tanpa sadar bahwa ρ juga ikut naik).',
    },
    voiceScripts: {
      preStimulus:
        'Ini adalah tipe Pilihan Ganda Kompleks. Uji setiap pernyataan secara mandiri menggunakan konsep dasar fisis.',
      onSolving:
        'Perhatikan baik-baik: apakah kelajuan bunyi dalam gas bergantung pada tekanan jika temperaturnya tetap? Hati-hati!',
      explanation:
        'Pernyataan B salah karena perbandingan tekanan terhadap massa jenis bernilai konstan selama suhu tetap. Pernyataan A, C, D, dan E semuanya tepat secara fisis.',
      caraCepat:
        'Eliminasi cepat: buang pernyataan B, karena pada suhu konstan laju bunyi tidak terpengaruh oleh tekanan. Jawaban tepat adalah A, C, D, dan E!',
    },
  },

  // SOAL 4: Submateri 2 - Pipa Organa Terbuka (PG, Menengah)
  {
    id: 4,
    subtopicId: 2,
    subtopicName: 'Gelombang Bunyi pada Pipa Organa Terbuka',
    type: 'PG',
    difficulty: 'Menengah',
    title: 'Harmonisasi Nada Atas Pertama pada Pipa Organa Terbuka Konser',
    stimulusContext:
      'Sebuah pipa organa terbuka di sebuah katedral dirancang untuk menghasilkan nada tertentu saat udara bertekanan ditiupkan ke dalamnya. Panjang fisik pipa tersebut adalah 85 cm. Kelajuan perambatan bunyi di udara ruangan gereja pada saat pertunjukan berlangsung adalah 340 m/s. Pipa ini ditiup dengan tekanan tertentu sehingga beresonansi menghasilkan NADA ATAS PERTAMA (harmonik kedua).',
    stimulusData: {
      type: 'table',
      headers: ['Parameter Akustik Pipa', 'Simbol', 'Nilai'],
      rows: [
        ['Panjang Kolom Pipa', 'L', '85 cm = 0,85 m'],
        ['Kelajuan Bunyi di Udara', 'v', '340 m/s'],
        ['Tingkat Nada Harmonik', 'n', 'Nada Atas Pertama (n = 2)'],
      ],
    },
    diagram: {
      type: 'open_pipe',
      caption: 'Pola gelombang berdiri pada pipa organa terbuka: perut pada kedua ujung pipa.',
      params: { pipeLength: '0,85 m', harmonic: 2 },
    },
    rumusKunciPreview: 'f_n = \\frac{nv}{2L}, \\quad \\text{untuk } n = 1, 2, 3, \\dots',
    questionPrompt:
      'Berapakah frekuensi nada atas pertama yang dihasilkan oleh pipa organa terbuka tersebut?',
    options: [
      { key: 'A', text: '200 Hz' },
      { key: 'B', text: '300 Hz' },
      { key: 'C', text: '400 Hz' },
      { key: 'D', text: '500 Hz' },
      { key: 'E', text: '600 Hz' },
    ],
    correctAnswerSingle: 'C',
    explanation: {
      memahamiMasalah:
        'Menghitung frekuensi nada atas pertama (harmonik kedua, n = 2) dari pipa organa terbuka dengan panjang L = 0,85 m dan kelajuan bunyi v = 340 m/s.',
      diketahui: [
        'Panjang pipa organa terbuka, L = 85 cm = 0,85 m',
        'Kelajuan gelombang bunyi di udara, v = 340 m/s',
        'Tingkat nada: Nada Atas Pertama → n = 2 (Harmonik ke-2)',
      ],
      ditanyakan: 'Frekuensi nada atas pertama (f₁ atau f₂)',
      rumusKunci: 'f_n = \\frac{nv}{2L}',
      analisisKonsep:
        'Pada pipa organa terbuka, kedua ujung pipa merupakan perut simpangan gelombang (displacement antinodes). Pola harmoniknya memenuhi deret bilangan bulat positif: n = 1 (nada dasar), n = 2 (nada atas ke-1), n = 3 (nada atas ke-2), dan seterusnya. Untuk nada atas pertama, n = 2.',
      penyelesaian: `Substitusi nilai ke dalam rumus harmonik pipa terbuka:
$$f_2 = \\frac{2 \\cdot v}{2 \\cdot L} = \\frac{v}{L}$$
$$f_2 = \\frac{340}{0{,}85} = \\frac{34.000}{85} = 400\\ \\text{Hz}$$`,
      hasilAkhir: '400 Hz (Pilihan C)',
      kesimpulan:
        'Pipa organa terbuka dengan panjang 85 cm menghasilkan nada atas pertama berfrekuensi tepat 400 Hz.',
      caraCepatMisterJo:
        'Perhatikan: untuk nada atas pertama pipa terbuka, n = 2 sehingga 2/2 saling mencoret! Rumusnya langsung menjadi f = v / L. 340 dibagi 0,85 sama dengan 340 dibagi (17/20) = 20 × 20 = 400 Hz dalam 5 detik!',
      jebakanKonsep:
        'Seringkali siswa salah menganggap nada atas pertama adalah n = 1 (itu nada dasar, f = 200 Hz) sehingga memilih opsi A. Ingat: nada dasar n = 1, nada atas pertama n = 2!',
    },
    voiceScripts: {
      preStimulus:
        'Ayo perhatikan pipa organa terbuka berikut. Ingat karakteristik kedua ujungnya yang terbuka.',
      onSolving:
        'Hati-hati dalam menentukan indeks harmonik. Nada atas pertama berarti harmonik kedua, atau n sama dengan dua.',
      explanation:
        'Pada nada atas pertama pipa terbuka, panjang gelombang sama dengan panjang pipa, sehingga frekuensi langsung dihitung dengan v dibagi L. Tiga ratus empat puluh dibagi nol koma delapan lima menghasilkan empat ratus Hertz.',
      caraCepat:
        'Rumus kilat Mister Jo: untuk nada atas pertama pipa terbuka, angka dua di pembilang dan penyebut saling menghilangkan. Langsung bagi v dengan L: 340 dibagi 0,85 sama dengan 400 Hertz!',
    },
  },

  // SOAL 5: Submateri 2 - Pipa Organa Terbuka (PGK, Sulit)
  {
    id: 5,
    subtopicId: 2,
    subtopicName: 'Gelombang Bunyi pada Pipa Organa Terbuka',
    type: 'PGK',
    difficulty: 'Sulit',
    title: 'Analisis Akustik Pipa Organa Terbuka pada Fluktuasi Suhu Ruangan',
    stimulusContext:
      'Sebuah pipa organa terbuka di ruang auditorium memiliki panjang tetap L = 1,00 m. Pada saat gladi bersih di pagi hari yang sejuk dengan temperatur T₁ = 289 K (16°C), kelajuan bunyi di udara adalah v₁ = 340 m/s. Pada malam hari saat konser dipadati ribuan penonton, pemanasan lampu dan kalor tubuh menaikkan temperatur ruangan menjadi T₂ = 324 K (51°C). Tim teknisi akustik meneliti bagaimana pergeseran temperatur mempengaruhi frekuensi nada dasar (f₀) dan nada-nada harmonik pipa tersebut.',
    stimulusData: {
      type: 'comparison',
      content:
        'Kondisi 1: T₁ = 289 K, v₁ = 340 m/s, L = 1,00 m.\nKondisi 2: T₂ = 324 K, L tetap = 1,00 m.\nIngat bahwa kelajuan bunyi di udara memenuhi v ∝ √T.',
    },
    diagram: {
      type: 'open_pipe',
      caption: 'Pipa organa terbuka dengan panjang 1,0 meter menghasilkan gelombang berdiri.',
      params: { pipeLength: '1,0 m', harmonic: 1 },
    },
    rumusKunciPreview: 'f_1 = \\frac{v}{2L}, \\quad v \\propto \\sqrt{T} \\implies \\frac{f_2}{f_1} = \\sqrt{\\frac{T_2}{T_1}}',
    questionPrompt:
      'Manakah dari analisis perubahan frekuensi berikut yang BENAR terkait performa akustik pipa organa terbuka tersebut? (Pilihlah semua jawaban yang benar!)',
    options: [
      {
        key: 'A',
        text: 'Frekuensi nada dasar pipa pada saat gladi bersih pagi hari (T = 289 K) adalah 170 Hz.',
      },
      {
        key: 'B',
        text: 'Kelajuan gelombang bunyi di udara pada malam hari (T = 324 K) meningkat menjadi 360 m/s.',
      },
      {
        key: 'C',
        text: 'Frekuensi nada dasar pipa saat konser malam hari mengalami kenaikan menjadi 180 Hz.',
      },
      {
        key: 'D',
        text: 'Rasio antara frekuensi nada atas ke-2 terhadap nada dasar pada pipa terbuka selalu bernilai 3 : 1, baik pada kondisi pagi maupun malam hari.',
      },
      {
        key: 'E',
        text: 'Panjang gelombang nada dasar (λ₀) di dalam pipa organa terbuka berubah secara signifikan ketika suhu udara meningkat.',
      },
    ],
    correctAnswerMultiple: ['A', 'B', 'C', 'D'],
    explanation: {
      memahamiMasalah:
        'Mengevaluasi pengaruh kenaikan suhu udara terhadap kelajuan bunyi, frekuensi nada dasar, perbandingan harmonik, dan panjang gelombang pada pipa organa terbuka.',
      diketahui: [
        'L = 1,00 m (konstan)',
        'T₁ = 289 K, v₁ = 340 m/s',
        'T₂ = 324 K',
      ],
      ditanyakan: 'Pernyataan-pernyataan yang benar.',
      rumusKunci: 'f_n = \\frac{nv}{2L}, \\quad \\frac{v_2}{v_1} = \\sqrt{\\frac{T_2}{T_1}}',
      analisisKonsep:
        '- Opsi A: f₁ = v₁/(2L) = 340 / (2 × 1) = 170 Hz. (BENAR)\n- Opsi B: v₂/v₁ = √(324/289) = 18/17. v₂ = 340 × (18/17) = 20 × 18 = 360 m/s. (BENAR)\n- Opsi C: f₂ = v₂/(2L) = 360 / (2 × 1) = 180 Hz. (BENAR)\n- Opsi D: Pada pipa terbuka deret frekuensi adalah f₁ : f₂ : f₃ = 1 : 2 : 3. Nada atas ke-2 adalah n = 3 (f₃ = 3f₁), sehingga rasio f₃ : f₁ = 3 : 1. Rasio ini independen terhadap suhu. (BENAR)\n- Opsi E: Panjang gelombang nada dasar ditentukan oleh geometri pipa: λ₀ = 2L. Karena panjang pipa L dianggap tidak memuai secara signifikan, λ₀ tetap = 2 m. (SALAH)',
      penyelesaian: `1. Uji Opsi A:
$$f_{1,\\text{pagi}} = \\frac{v_1}{2L} = \\frac{340}{2(1{,}0)} = 170\\ \\text{Hz} \\quad (\\text{BENAR})$$

2. Uji Opsi B:
$$v_2 = v_1 \\sqrt{\\frac{T_2}{T_1}} = 340 \\sqrt{\\frac{324}{289}} = 340 \\times \\frac{18}{17} = 360\\ \\text{m/s} \\quad (\\text{BENAR})$$

3. Uji Opsi C:
$$f_{1,\\text{malam}} = \\frac{v_2}{2L} = \\frac{360}{2(1{,}0)} = 180\\ \\text{Hz} \\quad (\\text{BENAR})$$

4. Uji Opsi D:
$$f_3 = \\frac{3v}{2L} = 3 f_1 \\implies \\frac{f_3}{f_1} = \\frac{3}{1} \\quad (\\text{BENAR})$$

5. Uji Opsi E:
$$\\lambda_1 = 2L = 2(1{,}0) = 2{,}0\\ \\text{m} \\quad (\\text{SALAH, karena panjang gelombang tetap, hanya frekuensinya yang berubah})$$`,
      hasilAkhir: 'Pernyataan A, B, C, dan D bernilai BENAR.',
      kesimpulan:
        'Kenaikan temperatur meningkatkan kelajuan bunyi dan frekuensi resonansi pipa, namun panjang gelombang berdiri tetap dikunci oleh dimensi fisik panjang pipa.',
      caraCepatMisterJo:
        'Trik eliminasi pintar: ingat bahwa panjang gelombang pola berdiri pada pipa organa hanya ditentukan oleh panjang pipa (λ = 2L/n). Suhu hanya mengubah kelajuan v dan frekuensi f, TIDAK mengubah λ! Maka opsi E langsung gugur.',
      jebakanKonsep:
        'Banyak siswa beranggapan jika f naik maka λ pasti turun. Dalam tabung organa dengan ujung terbuka, posisi perut gelombang terikat pada ujung pipa sehingga panjang gelombang tetap 2L!',
    },
    voiceScripts: {
      preStimulus:
        'Soal ini menggabungkan konsep termodinamika suhu dan akustik pipa organa terbuka.',
      onSolving:
        'Perhatikan apa yang terjadi pada panjang gelombang ketika suhu ruangan berubah sementara panjang pipa tetap.',
      explanation:
        'Akar 324 per 289 adalah 18 per 17, menghasilkan kelajuan 360 meter per sekon dan frekuensi 180 Hertz. Panjang gelombangnya tidak berubah karena terikat panjang tabung.',
      caraCepat:
        'Ingat rumus Mister Jo: panjang gelombang pada pipa ditentukan oleh panjang pipa itu sendiri. Karena pipa tidak memuai, panjang gelombang konstan. Coret opsi E!',
    },
  },

  // SOAL 6: Submateri 2 - Pipa Organa Terbuka (PGK, Sangat Sulit)
  {
    id: 6,
    subtopicId: 2,
    subtopicName: 'Gelombang Bunyi pada Pipa Organa Terbuka',
    type: 'PGK',
    difficulty: 'Sangat Sulit',
    title: 'Harmonisasi Resonansi Silang Dua Pipa Organa Terbuka Berbeda Dimensi',
    stimulusContext:
      'Dua buah pipa organa terbuka, Pipa X dan Pipa Y, diletakkan berdampingan di laboratorium akustik dengan kelajuan bunyi di udara v = 340 m/s. Panjang Pipa X adalah L_X = 60 cm. Pipa Y memiliki panjang L_Y yang dapat diatur menggunakan mekanisme sambungan geser teleskopik. Peneliti mengamati bahwa nada atas kedua (harmonik ke-3) dari Pipa X beresonansi dengan frekuensi yang tepat sama dengan nada atas ketiga (harmonik ke-4) dari Pipa Y.',
    diagram: {
      type: 'open_pipe',
      caption: 'Penyamaan frekuensi harmonik antara dua pipa organa terbuka dengan panjang berbeda.',
      params: { pipeLength: 'L_X vs L_Y' },
    },
    rumusKunciPreview: 'f_n = \\frac{nv}{2L} \\implies f_{3,X} = f_{4,Y} \\implies \\frac{3v}{2L_X} = \\frac{4v}{2L_Y}',
    questionPrompt:
      'Berdasarkan kondisi kesamaan frekuensi tersebut, pernyataan manakah yang BENAR? (Pilihlah semua pernyataan yang benar!)',
    options: [
      { key: 'A', text: 'Frekuensi nada atas kedua Pipa X adalah 850 Hz.' },
      { key: 'B', text: 'Panjang Pipa Y yang terpasang adalah 80 cm.' },
      { key: 'C', text: 'Perbandingan panjang Pipa X terhadap Pipa Y adalah 3 : 4.' },
      { key: 'D', text: 'Frekuensi nada dasar Pipa Y adalah 212,5 Hz.' },
      { key: 'E', text: 'Jika kedua pipa ditiup secara bersamaan pada nada dasarnya masing-masing, akan terjadi frekuensi pelayangan sebesar 70,8 Hz.' },
    ],
    correctAnswerMultiple: ['A', 'B', 'C', 'D', 'E'],
    explanation: {
      memahamiMasalah:
        'Menganalisis kesamaan frekuensi antara nada atas ke-2 pipa X (n = 3) dan nada atas ke-3 pipa Y (n = 4), menentukan panjang pipa Y, frekuensi nada dasar, dan pelayangan.',
      diketahui: [
        'Pipa organa terbuka X: L_X = 60 cm = 0,6 m',
        'Kelajuan bunyi udara, v = 340 m/s',
        'Nada atas ke-2 pipa X → n = 3',
        'Nada atas ke-3 pipa Y → n = 4',
        'Kondisi: f_{3,X} = f_{4,Y}',
      ],
      ditanyakan: 'Validitas pernyataan A, B, C, D, dan E.',
      rumusKunci: 'f_n = \\frac{nv}{2L}, \\quad f_{\\text{layang}} = |f_{1,X} - f_{1,Y}|',
      analisisKonsep:
        '1. Frekuensi nada atas ke-2 pipa X: f_{3,X} = (3 × 340)/(2 × 0,6) = 1020 / 1,2 = 850 Hz. (Opsi A BENAR)\n2. Kesetaraan frekuensi: 3v/(2L_X) = 4v/(2L_Y) → 3/L_X = 4/L_Y → L_Y = (4/3) L_X = (4/3) × 60 cm = 80 cm = 0,8 m. (Opsi B BENAR)\n3. Rasio panjang: L_X / L_Y = 60 / 80 = 3/4. (Opsi C BENAR)\n4. Nada dasar pipa Y (n = 1): f_{1,Y} = v / (2L_Y) = 340 / (2 × 0,8) = 340 / 1,6 = 212,5 Hz. (Opsi D BENAR)\n5. Nada dasar pipa X: f_{1,X} = 340 / (2 × 0,6) = 340 / 1,2 = 283,33 Hz. Frekuensi pelayangan = |283,33 - 212,50| = 70,83 Hz ≈ 70,8 Hz. (Opsi E BENAR)',
      penyelesaian: `Perhitungan lengkap tiap besaran:
1. Frekuensi nada atas ke-2 pipa X (harmonik ke-3):
$$f_{3,X} = \\frac{3 \\cdot 340}{2 \\times 0{,}6} = \\frac{1020}{1{,}2} = 850\\ \\text{Hz}$$

2. Menentukan panjang $L_Y$:
$$\\frac{3}{L_X} = \\frac{4}{L_Y} \\implies L_Y = \\frac{4}{3} L_X = \\frac{4}{3} (60\\ \\text{cm}) = 80\\ \\text{cm} = 0{,}8\\ \\text{m}$$

3. Rasio panjang pipa:
$$\\frac{L_X}{L_Y} = \\frac{60}{80} = \\frac{3}{4}$$

4. Nada dasar pipa Y:
$$f_{1,Y} = \\frac{340}{2 \\times 0{,}8} = 212{,}5\\ \\text{Hz}$$

5. Frekuensi pelayangan nada dasar:
$$f_{1,X} = \\frac{340}{1{,}2} = 283{,}33\\ \\text{Hz}$$
$$f_{\\text{layang}} = 283{,}33 - 212{,}50 = 70{,}83\\ \\text{Hz} \\approx 70{,}8\\ \\text{Hz}$$`,
      hasilAkhir: 'Semua opsi (A, B, C, D, dan E) bernilai BENAR!',
      kesimpulan:
        'Hubungan matematis antara tingkat harmonik dan panjang tabung menghasilkan rasio linier sempurna, di mana semua kesimpulan numerik konsisten.',
      caraCepatMisterJo:
        'Kunci cepat: n_X / L_X = n_Y / L_Y. Masukkan langsung 3 / 60 = 4 / L_Y. Secara proporsi langsung L_Y = 80 cm! Rasio 3:4. Dari sini seluruh opsi terbukti konsisten.',
      jebakanKonsep:
        'Hati-hati: nada atas ke-2 adalah n = 3, sedangkan nada atas ke-3 adalah n = 4. Jangan tertukar menganggap nada atas ke-2 sebagai n = 2!',
    },
    voiceScripts: {
      preStimulus:
        'Perhatikan korelasi antara dua pipa terbuka dengan panjang berbeda yang frekuensinya saling beresonansi.',
      onSolving:
        'Gunakan rumus kesetaraan: tiga per L_X sama dengan empat per L_Y. Hitung dengan teliti!',
      explanation:
        'Dari persamaan frekuensi yang sama, panjang pipa Y ditemukan delapan puluh sentimeter. Seluruh opsi A sampai E setelah diuji ternyata semuanya benar!',
      caraCepat:
        'Cara cepat Mister Jo: buat perbandingan 3 per 60 sama dengan 4 per L_Y. Terlihat jelas L_Y adalah 80 sentimeter. Sangat cepat!',
    },
  },

  // SOAL 7: Submateri 3 - Pipa Organa Tertutup (PG, Menengah)
  {
    id: 7,
    subtopicId: 3,
    subtopicName: 'Gelombang Bunyi pada Pipa Organa Tertutup',
    type: 'PG',
    difficulty: 'Menengah',
    title: 'Frekuensi Nada Atas Pertama pada Pipa Organa Tertutup Silindris',
    stimulusContext:
      'Sebuah alat tiup tradisional terbuat dari tabung bambu yang salah satu ujungnya tertutup oleh buku ruas bambu alami, sedangkan ujung lainnya dibiarkan terbuka tempat meniupkan udara. Panjang kolom udara di dalam tabung tersebut adalah 60 cm. Udara di dalam ruangan memiliki suhu dengan kelajuan rambat bunyi v = 340 m/s. Siswa meniup tabung tersebut sehingga terbentuk gelombang berdiri nada atas pertama (harmonik ketiga).',
    diagram: {
      type: 'closed_pipe',
      caption: 'Pola gelombang berdiri pada pipa organa tertutup: simpul di ujung tertutup dan perut di mulut pipa.',
      params: { pipeLength: '0,60 m', harmonic: 2 },
    },
    rumusKunciPreview: 'f_n = \\frac{(2n - 1)v}{4L}, \\quad \\text{dengan } n = 1, 2, 3, \\dots',
    questionPrompt:
      'Berapakah frekuensi nada atas pertama yang dihasilkan oleh pipa organa tertutup tersebut?',
    options: [
      { key: 'A', text: '141,7 Hz' },
      { key: 'B', text: '283,3 Hz' },
      { key: 'C', text: '425,0 Hz' },
      { key: 'D', text: '566,7 Hz' },
      { key: 'E', text: '708,3 Hz' },
    ],
    correctAnswerSingle: 'C',
    explanation: {
      memahamiMasalah:
        'Menghitung frekuensi nada atas pertama dari sebuah pipa organa tertutup yang memiliki panjang L = 0,60 m dengan kelajuan bunyi v = 340 m/s.',
      diketahui: [
        'Panjang pipa organa tertutup, L = 60 cm = 0,60 m',
        'Kelajuan bunyi di udara, v = 340 m/s',
        'Tingkat nada: Nada Atas Pertama → n = 2 (deret ganjil 2n - 1 = 3)',
      ],
      ditanyakan: 'Frekuensi nada atas pertama (f_atas1)',
      rumusKunci: 'f_n = \\frac{(2n - 1)v}{4L}',
      analisisKonsep:
        'Pada pipa organa tertutup, ujung tertutup selalu menjadi simpul simpangan gelombang (displacement node), sedangkan mulut yang terbuka menjadi perut simpangan gelombang (antinode). Oleh karena itu, hanya harmonik bernomor GANJIL yang dapat terbentuk (1, 3, 5, 7, ...). Untuk nada atas pertama (n = 2), faktor pengalinya adalah (2(2) - 1) = 3.',
      penyelesaian: `Substitusi nilai ke dalam rumus harmonik pipa tertutup:
$$f_2 = \\frac{(2(2) - 1) \\cdot v}{4L} = \\frac{3 \\cdot v}{4L}$$
$$f_2 = \\frac{3 \\times 340}{4 \\times 0{,}60} = \\frac{1.020}{2{,}40} = 425{,}0\\ \\text{Hz}$$`,
      hasilAkhir: '425,0 Hz (Pilihan C)',
      kesimpulan:
        'Nada atas pertama pada pipa organa tertutup memiliki panjang gelombang λ = 4L/3 = 0,8 m, menghasilkan frekuensi resonansi sebesar 425 Hz.',
      caraCepatMisterJo:
        'Trik kilat Mister Jo: Nada dasar pipa tertutup adalah v/(4L) = 340 / 2,4 = 141,67 Hz. Karena pipa tertutup hanya memiliki harmonik ganjil (1 : 3 : 5), nada atas pertama langsung kalikan 3: 141,67 × 3 = 425 Hz!',
      jebakanKonsep:
        'Jebakan paling sering: menggunakan pembagi 2L seperti pipa terbuka, atau mengira nada atas pertama dikalikan 2. Ingat, pipa tertutup pembaginya 4L dan harmoniknya ganjil (1, 3, 5)!',
    },
    voiceScripts: {
      preStimulus:
        'Mari kita periksa pipa organa tertutup. Ingat, ada simpul di ujung tertutup dan perut di ujung terbuka.',
      onSolving:
        'Hati-hati! Pembagi pipa tertutup adalah empat L, dan harmoniknya melompat ganjil.',
      explanation:
        'Nada atas pertama pada pipa tertutup adalah harmonik ketiga. Tiga dikali tiga ratus empat puluh dibagi empat kali nol koma enam menghasilkan empat ratus dua puluh lima Hertz.',
      caraCepat:
        'Trik cepat Mister Jo: hitung nada dasarnya yaitu 340 dibagi 2,4 didapat 141,7 Hz. Karena melompat ke harmonik ganjil, langsung kali 3: hasilnya tepat 425 Hertz!',
    },
  },

  // SOAL 8: Submateri 3 - Pipa Organa Tertutup (PGK, Sulit)
  {
    id: 8,
    subtopicId: 3,
    subtopicName: 'Gelombang Bunyi pada Pipa Organa Tertutup',
    type: 'PGK',
    difficulty: 'Sulit',
    title: 'Analisis Komparatif Resonansi Pipa Organa Tertutup dan Terbuka',
    stimulusContext:
      'Di laboratorium fisika gelombang, sebuah pipa organa tertutup (Pipa T) dengan panjang L_T dan sebuah pipa organa terbuka (Pipa B) dengan panjang L_B diuji bersama-sama pada suhu ruang yang sama (v = 340 m/s). Melalui osiloskop, tercatat bahwa nada atas pertama pipa organa tertutup memiliki frekuensi yang tepat sama dengan frekuensi nada dasar pipa organa terbuka.',
    stimulusData: {
      type: 'comparison',
      content:
        'Kondisi Resonansi:\nFrekuensi nada atas pertama Pipa Tertutup (f_{T,1}) = Frekuensi nada dasar Pipa Terbuka (f_{B,0}).\nKelajuan bunyi udara sama di kedua pipa.',
    },
    diagram: {
      type: 'closed_pipe',
      caption: 'Perbandingan panjang gelombang berdiri pipa tertutup terhadap pipa terbuka.',
      params: { pipeLength: 'L_T vs L_B' },
    },
    rumusKunciPreview: 'f_{T,1} = \\frac{3v}{4L_T}, \\quad f_{B,0} = \\frac{v}{2L_B} \\implies \\frac{3v}{4L_T} = \\frac{v}{2L_B}',
    questionPrompt:
      'Berdasarkan kondisi kesetaraan frekuensi tersebut, pernyataan-pernyataan manakah di bawah ini yang BENAR? (Pilihlah semua pernyataan yang benar!)',
    options: [
      { key: 'A', text: 'Rasio panjang pipa tertutup terhadap pipa terbuka (L_T : L_B) bernilai 3 : 2.' },
      { key: 'B', text: 'Jika panjang pipa terbuka L_B = 40 cm, maka panjang pipa tertutup L_T adalah 60 cm.' },
      { key: 'C', text: 'Jika kedua pipa memiliki panjang fisik yang sama (L_T = L_B), maka frekuensi nada dasar pipa terbuka adalah dua kali frekuensi nada dasar pipa tertutup.' },
      { key: 'D', text: 'Pipa tertutup dapat menghasilkan nada harmonik genap jika ditiup dengan kecepatan aliran udara yang sangat tinggi.' },
      { key: 'E', text: 'Panjang gelombang nada dasar pada pipa terbuka bernilai 2L_B, sedangkan pada pipa tertutup bernilai 4L_T.' },
    ],
    correctAnswerMultiple: ['A', 'B', 'C', 'E'],
    explanation: {
      memahamiMasalah:
        'Membandingkan sifat resonansi gelombang berdiri pipa organa tertutup dan terbuka berdasarkan kesamaan frekuensi dan relasi panjang tabung.',
      diketahui: [
        'Pipa Tertutup nada atas pertama: $f_{T,1} = \\frac{3v}{4L_T}$',
        'Pipa Terbuka nada dasar: $f_{B,0} = \\frac{v}{2L_B}$',
        'Kondisi: $f_{T,1} = f_{B,0}$',
      ],
      ditanyakan: 'Pernyataan yang bernilai benar.',
      rumusKunci: '\\frac{3v}{4L_T} = \\frac{v}{2L_B}',
      analisisKonsep:
        '1. Hubungan panjang pipa:\n$\\frac{3}{4L_T} = \\frac{1}{2L_B} \\implies 4L_T = 6L_B \\implies \\frac{L_T}{L_B} = \\frac{6}{4} = \\frac{3}{2}$. (Opsi A BENAR)\n2. Jika L_B = 40 cm, maka L_T = 1,5 × 40 = 60 cm. (Opsi B BENAR)\n3. Jika L_T = L_B = L:\n$f_{B,0} = \\frac{v}{2L}$ dan $f_{T,0} = \\frac{v}{4L}$. Maka $f_{B,0} / f_{T,0} = \\frac{v/(2L)}{v/(4L)} = 2$. (Opsi C BENAR)\n4. Pipa organa tertutup secara teoritis TIDAK BISA menghasilkan harmonik genap karena batas fisis: satu ujung selalu simpul dan satu ujung selalu perut simpangan, sehingga panjang kolom selalu memuat kelipatan ganjil seperempat panjang gelombang. (Opsi D SALAH)\n5. Rumus panjang gelombang nada dasar: $\\lambda_{B,0} = 2L_B$ dan $\\lambda_{T,0} = 4L_T$. (Opsi E BENAR)',
      penyelesaian: `Evaluasi matematis:
$$\\frac{3v}{4L_T} = \\frac{v}{2L_B} \\implies \\frac{L_T}{L_B} = \\frac{3}{2} = 1{,}5$$
Jika $L_B = 40\\ \\text{cm}$, maka:
$$L_T = 1{,}5 \\times 40 = 60\\ \\text{cm}$$
Untuk panjang sama $L$:
$$f_{B,0} = \\frac{v}{2L} = 2 \\left(\\frac{v}{4L}\\right) = 2 f_{T,0}$$`,
      hasilAkhir: 'Pernyataan A, B, C, dan E bernilai BENAR.',
      kesimpulan:
        'Pipa terbuka selalu memiliki frekuensi nada dasar dua kali lipat dibanding pipa tertutup jika panjangnya sama, dan pipa tertutup tidak pernah memancarkan harmonik genap.',
      caraCepatMisterJo:
        'Trik cepat Mister Jo: samakan rumus 3 / 4L_T = 1 / 2L_B. Kalikan silang: 6 L_B = 4 L_T -> L_T / L_B = 3 / 2. Untuk opsi D langsung coret, karena pipa tertutup haram menghasilkan harmonik genap!',
      jebakanKonsep:
        'Pengecoh pada opsi D: banyak yang mengira tiupan keras bisa memunculkan nada genap pada pipa tertutup. Tidak bisa, struktur batas simpul-perut hanya memungkinkan kelipatan ganjil (1, 3, 5, 7)!',
    },
    voiceScripts: {
      preStimulus:
        'Perhatikan perbandingan pipa organa tertutup dan terbuka berikut ini.',
      onSolving:
        'Ingat prinsip batas fisis: apakah pipa organa tertutup bisa menghasilkan harmonik genap?',
      explanation:
        'Dari persamaan frekuensi diperoleh rasio panjang pipa tertutup terhadap terbuka adalah tiga banding dua. Pipa tertutup tidak pernah menghasilkan harmonik genap.',
      caraCepat:
        'Eliminasi instan: coret opsi D karena pipa tertutup hanya mengenal harmonik ganjil. Opsi A, B, C, dan E terbukti benar!',
    },
  },

  // SOAL 9: Submateri 3 - Pipa Organa Tertutup (BENAR-SALAH, Sangat Sulit)
  {
    id: 9,
    subtopicId: 3,
    subtopicName: 'Gelombang Bunyi pada Pipa Organa Tertutup',
    type: 'BENAR_SALAH',
    difficulty: 'Sangat Sulit',
    title: 'Evaluasi Fisis Karakteristik Gelombang Berdiri pada Pipa Tertutup',
    stimulusContext:
      'Sebuah silinder akustik tertutup satu ujungnya digunakan dalam kalibrasi frekuensi sensor ultrasonik. Tim peneliti menganalisis posisi simpul (nodes) dan perut (antinodes) simpangan udara di sepanjang tabung untuk nada atas kedua (harmonik ke-5). Panjang tabung adalah L. Gelombang berdiri yang terbentuk menghasilkan variasi tekanan akustik maksimum pada posisi-posisi tertentu di dalam kolom udara.',
    diagram: {
      type: 'closed_pipe',
      caption: 'Distribusi simpul dan perut simpangan pada pipa organa tertutup harmonik ke-5.',
      params: { pipeLength: 'L', harmonic: 3 },
    },
    rumusKunciPreview: 'f_n = \\frac{(2n - 1)v}{4L}, \\quad L = \\frac{(2n - 1)\\lambda}{4}',
    questionPrompt:
      'Tentukan apakah masing-masing pernyataan berikut bernilai BENAR atau SALAH berdasarkan prinsip fisika gelombang berdiri pada pipa organa tertutup!',
    statements: [
      {
        id: 's9_1',
        statement:
          'Pada nada atas kedua pipa organa tertutup, di dalam tabung terbentuk tepat 3 simpul simpangan dan 3 perut simpangan.',
        isCorrect: true,
        explanation:
          'Nada atas kedua adalah n = 3 (harmonik ke-5). Jumlah simpul simpangan = n = 3, dan jumlah perut simpangan = n = 3. Panjang pipa L = 5λ/4.',
      },
      {
        id: 's9_2',
        statement:
          'Titik di mana simpangan molekul udara bernilai nol (simpul simpangan) merupakan titik di mana fluktuasi tekanan udara bernilai minimum (nol).',
        isCorrect: false,
        explanation:
          'Secara fisis, simpul simpangan bertepatan dengan perut tekanan (fluktuasi tekanan MAKSIMUM), bukan minimum. Di ujung tertutup, molekul tidak dapat bergeser sehingga gradien tekanan paling ekstrem.',
      },
      {
        id: 's9_3',
        statement:
          'Jika ujung pipa yang tertutup dibuka sehingga berubah menjadi pipa organa terbuka dengan panjang yang sama, frekuensi nada dasarnya akan naik menjadi dua kali lipat dari frekuensi nada dasar semula.',
        isCorrect: true,
        explanation:
          'Frekuensi nada dasar pipa tertutup adalah v/(4L), sedangkan pipa terbuka adalah v/(2L) = 2 × (v/(4L)). Jadi frekuensi naik 2 kali lipat.',
      },
    ],
    explanation: {
      memahamiMasalah:
        'Menganalisis jumlah simpul-perut nada atas ke-2 pipa tertutup, hubungan fase antara simpangan dan tekanan akustik, serta perubahan frekuensi saat tutup pipa dilepas.',
      diketahui: [
        'Pipa organa tertutup panjang L',
        'Nada atas ke-2 → n = 3 (harmonik ke-5)',
      ],
      ditanyakan: 'Status Benar atau Salah dari ketiga pernyataan.',
      rumusKunci: 'L = (2n - 1)\\frac{\\lambda}{4}, \\quad f_{\\text{terbuka}} = 2 f_{\\text{tertutup}}',
      analisisKonsep:
        '1. Pernyataan 1: Untuk pipa tertutup, pada nada atas ke-(n-1), jumlah simpul = n dan jumlah perut = n. Pada nada atas ke-2 (n = 3), ada 3 simpul dan 3 perut simpangan. (BENAR)\n2. Pernyataan 2: Gelombang simpangan dan gelombang tekanan berbeda fase 90° (π/2 radian). Simpul simpangan (molekul diam terhambat dinding) justru mengalami kompresi-rapatan tekanan paling kuat, sehingga menjadi PERUT TEKANAN. (SALAH)\n3. Pernyataan 3: f₀_tertutup = v/(4L), f₀_terbuka = v/(2L). Maka f₀_terbuka = 2 × f₀_tertutup. (BENAR)',
      penyelesaian: `Evaluasi Pernyataan:
- Pernyataan 1: $n = 3 \\implies$ Simpul $= 3$, Perut $= 3$. Panjang $L = \\frac{5}{4}\\lambda$. (BENAR)
- Pernyataan 2: Simpul simpangan adalah PERUT tekanan (tekanan maksimum), bukan minimum. (SALAH)
- Pernyataan 3: $\\frac{f_{\\text{terbuka}}}{f_{\\text{tertutup}}} = \\frac{v / 2L}{v / 4L} = 2$. (BENAR)`,
      hasilAkhir: 'Pernyataan 1: BENAR, Pernyataan 2: SALAH, Pernyataan 3: BENAR.',
      kesimpulan:
        'Hubungan fase antara perpindahan partikel dan tekanan akustik adalah ortogonal (beda fase 90 derajat), konsep esensial yang sering menguji pemahaman mendalam siswa.',
      caraCepatMisterJo:
        'Hafalan cerdas Mister Jo: Simpul simpangan = Perut tekanan! Di dinding tertutup partikel tidak bisa bergerak (simpangan 0), akibatnya tabrakan partikel paling hebat (tekanan MAKSIMUM). Jadi pernyataan 2 pasti SALAH!',
      jebakanKonsep:
        'Siswa sering menganggap simpul simpangan sama dengan simpul tekanan. Padahal simpul simpangan adalah perut tekanan, dan sebaliknya!',
    },
    voiceScripts: {
      preStimulus:
        'Soal Benar-Salah ini menguji pemahaman mendalam tentang hubungan antara simpangan partikel dan tekanan udara.',
      onSolving:
        'Ingat baik-baik: apakah simpul simpangan berarti tekanannya juga nol? Renungkan tumbukan partikel pada dinding pipa.',
      explanation:
        'Pernyataan satu Benar karena nada atas kedua memiliki tiga simpul dan tiga perut. Pernyataan dua Salah karena simpul simpangan adalah perut tekanan. Pernyataan tiga Benar karena frekuensi nada dasar berlipat ganda.',
      caraCepat:
        'Tips Mister Jo: partikel yang mentok di dinding tertutup tidak bisa bergerak tetapi tertekan sangat kuat, jadi tekanannya maksimum!',
    },
  },
];
