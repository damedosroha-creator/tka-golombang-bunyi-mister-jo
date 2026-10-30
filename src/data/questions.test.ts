import test from 'node:test';
import assert from 'node:assert/strict';
import { ALL_QUESTIONS } from './questions';

test('ALL_QUESTIONS: exactly 30 questions with unique continuous IDs 1 to 30', () => {
  assert.equal(ALL_QUESTIONS.length, 30);
  const ids = ALL_QUESTIONS.map((q) => q.id);
  const expectedIds = Array.from({ length: 30 }, (_, i) => i + 1);
  assert.deepEqual(ids, expectedIds);
});

test('Subtopic distribution matches exact mandate', () => {
  const counts: Record<number, number> = {};
  for (const q of ALL_QUESTIONS) {
    counts[q.subtopicId] = (counts[q.subtopicId] || 0) + 1;
  }

  assert.equal(counts[1], 3, 'Submateri 1 harus 3 soal');
  assert.equal(counts[2], 3, 'Submateri 2 harus 3 soal');
  assert.equal(counts[3], 3, 'Submateri 3 harus 3 soal');
  assert.equal(counts[4], 3, 'Submateri 4 harus 3 soal');
  assert.equal(counts[5], 3, 'Submateri 5 harus 3 soal');
  assert.equal(counts[6], 3, 'Submateri 6 harus 3 soal');
  assert.equal(counts[7], 3, 'Submateri 7 harus 3 soal');
  assert.equal(counts[8], 3, 'Submateri 8 harus 3 soal');
  assert.equal(counts[9], 2, 'Submateri 9 harus 2 soal');
  assert.equal(counts[10], 2, 'Submateri 10 harus 2 soal');
  assert.equal(counts[11], 2, 'Submateri 11 harus 2 soal');
});

test('Format distribution: 12 PG, 12 PGK, 6 BENAR_SALAH', () => {
  const pg = ALL_QUESTIONS.filter((q) => q.type === 'PG');
  const pgk = ALL_QUESTIONS.filter((q) => q.type === 'PGK');
  const bs = ALL_QUESTIONS.filter((q) => q.type === 'BENAR_SALAH');

  assert.equal(pg.length, 12, 'Pilihan Ganda harus tepat 12 soal');
  assert.equal(pgk.length, 12, 'Pilihan Ganda Kompleks harus tepat 12 soal');
  assert.equal(bs.length, 6, 'Benar-Salah harus tepat 6 soal');
});

test('Every question has complete 10-step explanation, stimulus, and voice scripts', () => {
  for (const q of ALL_QUESTIONS) {
    assert.ok(q.stimulusContext.length > 20, `Soal ${q.id} harus punya stimulus kuat`);
    assert.ok(q.explanation.memahamiMasalah, `Soal ${q.id} harus punya memahamiMasalah`);
    assert.ok(q.explanation.diketahui.length > 0, `Soal ${q.id} harus punya diketahui`);
    assert.ok(q.explanation.ditanyakan, `Soal ${q.id} harus punya ditanyakan`);
    assert.ok(q.explanation.rumusKunci, `Soal ${q.id} harus punya rumusKunci`);
    assert.ok(q.explanation.analisisKonsep, `Soal ${q.id} harus punya analisisKonsep`);
    assert.ok(q.explanation.penyelesaian, `Soal ${q.id} harus punya penyelesaian`);
    assert.ok(q.explanation.hasilAkhir, `Soal ${q.id} harus punya hasilAkhir`);
    assert.ok(q.explanation.kesimpulan, `Soal ${q.id} harus punya kesimpulan`);
    assert.ok(q.explanation.caraCepatMisterJo, `Soal ${q.id} harus punya caraCepatMisterJo`);
    assert.ok(q.explanation.jebakanKonsep, `Soal ${q.id} harus punya jebakanKonsep`);
    assert.ok(q.voiceScripts.preStimulus, `Soal ${q.id} harus punya voice preStimulus`);
    assert.ok(q.voiceScripts.onSolving, `Soal ${q.id} harus punya voice onSolving`);
    assert.ok(q.voiceScripts.explanation, `Soal ${q.id} harus punya voice explanation`);
    assert.ok(q.voiceScripts.caraCepat, `Soal ${q.id} harus punya voice caraCepat`);

    if (q.type === 'PG') {
      assert.ok(q.options && q.options.length === 5, `Soal PG ${q.id} harus 5 opsi`);
      assert.ok(q.correctAnswerSingle, `Soal PG ${q.id} harus ada correctAnswerSingle`);
    } else if (q.type === 'PGK') {
      assert.ok(q.options && q.options.length === 5, `Soal PGK ${q.id} harus 5 opsi`);
      assert.ok(
        q.correctAnswerMultiple && q.correctAnswerMultiple.length >= 2,
        `Soal PGK ${q.id} harus punya multiple answers`
      );
    } else if (q.type === 'BENAR_SALAH') {
      assert.ok(
        q.statements && q.statements.length === 3,
        `Soal Benar-Salah ${q.id} harus 3 pernyataan`
      );
    }
  }
});
