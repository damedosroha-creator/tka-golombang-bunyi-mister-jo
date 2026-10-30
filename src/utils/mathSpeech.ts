/**
 * Utility to convert raw mathematical or LaTeX strings into smooth, spoken Indonesian
 * so Mister Jo never reads raw symbols like '\frac', '\sqrt', '10^{-12}' etc.
 */

export function cleanLatexForSpeech(rawText: string): string {
  if (!rawText) return '';

  let text = rawText;

  // Remove KaTeX wrappers
  text = text.replace(/\\boxed\{([^}]+)\}/g, '$1');
  text = text.replace(/\\text\{([^}]+)\}/g, '$1');
  text = text.replace(/\\left\(/g, '(').replace(/\\right\)/g, ')');
  text = text.replace(/\\left\[/g, '[').replace(/\\right\]/g, ']');

  // Common physics expressions
  text = text.replace(/v\s*=\s*\\sqrt\{\\frac\{B\}\{\\rho\}\}/g, 'kelajuan v sama dengan akar dari B per rho');
  text = text.replace(/v\s*=\s*\\sqrt\{\\frac\{\\gamma\s*R\s*T\}\{M\}\}/g, 'kelajuan v sama dengan akar dari gamma kali R kali T per M');
  text = text.replace(/f_n\s*=\s*\\frac\{nv\}\{2L\}/g, 'frekuensi fn sama dengan n kali v dibagi dua L');
  text = text.replace(/f_n\s*=\s*\\frac\{\(2n\s*-\s*1\)v\}\{4L\}/g, 'frekuensi fn sama dengan 2n minus 1 kali v dibagi empat L');
  text = text.replace(/\\beta\s*=\s*10\s*\\log\\left\(\\frac\{I\}\{I_0\}\\right\)/g, 'taraf intensitas beta sama dengan sepuluh logaritma I per I nol');
  text = text.replace(/\\beta_\{total\}\s*=\s*\\beta_1\s*\+\s*10\s*\\log\s*N/g, 'taraf intensitas total sama dengan taraf intensitas satu ditambah sepuluh log N');
  text = text.replace(/I\s*=\s*\\frac\{P\}\{4\\pi\s*r\^2\}/g, 'intensitas I sama dengan daya P dibagi empat pi r kuadrat');
  text = text.replace(/v\s*=\s*\\sqrt\{\\frac\{F\}\{\\mu\}\}/g, 'kelajuan gelombang pada dawai v sama dengan akar gaya tegangan F dibagi miu');

  // Fractions: \frac{a}{b} -> a per b
  // Handle nested or simple \frac
  text = text.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1 per $2');

  // Square roots: \sqrt{a} -> akar dari a
  text = text.replace(/\\sqrt\{([^}]+)\}/g, 'akar dari $1');

  // Powers and scientific notation
  text = text.replace(/10\^\{-?12\}/g, 'sepuluh pangkat minus 12');
  text = text.replace(/10\^\{-?(\d+)\}/g, 'sepuluh pangkat minus $1');
  text = text.replace(/10\^(\d+)/g, 'sepuluh pangkat $1');
  text = text.replace(/r\^2/g, 'r kuadrat');
  text = text.replace(/(\w+)\^2/g, '$1 kuadrat');
  text = text.replace(/(\w+)\^3/g, '$1 pangkat tiga');

  // Greek letters
  text = text.replace(/\\lambda/g, 'lambda');
  text = text.replace(/\\rho/g, 'rho');
  text = text.replace(/\\beta/g, 'beta');
  text = text.replace(/\\gamma/g, 'gamma');
  text = text.replace(/\\pi/g, 'pi');
  text = text.replace(/\\mu/g, 'miu');
  text = text.replace(/\\Delta/g, 'delta');
  text = text.replace(/\\Omega/g, 'ohm');

  // Math symbols
  text = text.replace(/\\times/g, ' dikali ');
  text = text.replace(/\\cdot/g, ' dikali ');
  text = text.replace(/\\pm/g, ' plus minus ');
  text = text.replace(/\\mp/g, ' minus plus ');
  text = text.replace(/\\approx/g, ' kira-kira ');
  text = text.replace(/\\neq/g, ' tidak sama dengan ');
  text = text.replace(/\\le/g, ' kurang dari sama dengan ');
  text = text.replace(/\\ge/g, ' lebih dari sama dengan ');
  text = text.replace(/\\log/g, ' log ');
  text = text.replace(/\\%/g, ' persen ');

  // Subscripts: f_0, f_1, f_s, f_p, v_s, v_p, I_0, etc.
  text = text.replace(/f_s/g, 'frekuensi sumber f s');
  text = text.replace(/f_p/g, 'frekuensi pendengar f p');
  text = text.replace(/v_s/g, 'kecepatan sumber v s');
  text = text.replace(/v_p/g, 'kecepatan pendengar v p');
  text = text.replace(/I_0/g, 'I nol');
  text = text.replace(/([a-zA-Z])_([0-9a-zA-Z]+)/g, '$1 sub $2');

  // Units
  text = text.replace(/\bHz\b/g, 'Hertz');
  text = text.replace(/\bkHz\b/g, 'Kilo Hertz');
  text = text.replace(/\bm\/s\b/g, 'meter per sekon');
  text = text.replace(/\bW\/m\^2\b/g, 'Watt per meter kuadrat');
  text = text.replace(/\bW\/m²\b/g, 'Watt per meter kuadrat');
  text = text.replace(/\bdB\b/g, 'desibel');
  text = text.replace(/\bcm\b/g, 'sentimeter');
  text = text.replace(/\bkg\/m\^3\b/g, 'kilogram per meter kubik');
  text = text.replace(/\bN\/m\^2\b/g, 'Newton per meter kuadrat');

  // Strip residual backslashes and brackets
  text = text.replace(/[{}\\]/g, ' ');

  // Compress multiple spaces
  text = text.replace(/\s+/g, ' ').trim();

  return text;
}
