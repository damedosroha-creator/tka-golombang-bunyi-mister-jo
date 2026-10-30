import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluatePG, evaluatePGK, evaluateBenarSalah } from './scoring';

test('evaluatePG: returns 1 for correct answer and 0 for incorrect', () => {
  const correct = evaluatePG('C', 'C');
  assert.equal(correct.score, 1);
  assert.equal(correct.isFullyCorrect, true);

  const incorrect = evaluatePG('A', 'C');
  assert.equal(incorrect.score, 0);
  assert.equal(incorrect.isFullyCorrect, false);

  const undefinedAnswer = evaluatePG(undefined, 'C');
  assert.equal(undefinedAnswer.score, 0);
  assert.equal(undefinedAnswer.isFullyCorrect, false);
});

test('evaluatePGK: handles perfect match, partial match, and penalty for wrong options', () => {
  // Perfect match
  const perfect = evaluatePGK(['A', 'C', 'D'], ['A', 'C', 'D']);
  assert.equal(perfect.score, 1.0);
  assert.equal(perfect.isFullyCorrect, true);

  // Partial match: 2 out of 3 selected, 0 wrong choices
  const partial = evaluatePGK(['A', 'C'], ['A', 'C', 'D']);
  assert.equal(partial.isFullyCorrect, false);
  assert.ok(partial.score > 0 && partial.score < 1.0);
  assert.equal(partial.score, 0.67);

  // Selecting 2 correct and 1 wrong option
  const withPenalty = evaluatePGK(['A', 'C', 'B'], ['A', 'C', 'D']);
  assert.equal(withPenalty.isFullyCorrect, false);
  // (2 - 1) / 3 = 0.33
  assert.equal(withPenalty.score, 0.33);

  // Selecting only wrong options
  const allWrong = evaluatePGK(['B', 'E'], ['A', 'C', 'D']);
  assert.equal(allWrong.score, 0);
  assert.equal(allWrong.isFullyCorrect, false);
});

test('evaluateBenarSalah: handles all true, partial, and none matching', () => {
  const statements = [
    { id: 's1', isCorrect: true },
    { id: 's2', isCorrect: false },
    { id: 's3', isCorrect: true },
  ];

  // All 3 correct
  const allRight = evaluateBenarSalah({ s1: true, s2: false, s3: true }, statements);
  assert.equal(allRight.score, 1.0);
  assert.equal(allRight.isFullyCorrect, true);
  assert.equal(allRight.correctCount, 3);

  // 2 out of 3
  const twoRight = evaluateBenarSalah({ s1: true, s2: true, s3: true }, statements);
  assert.equal(twoRight.isFullyCorrect, false);
  assert.equal(twoRight.correctCount, 2);
  assert.equal(twoRight.score, 0.67);

  // 0 out of 3
  const zeroRight = evaluateBenarSalah({ s1: false, s2: true, s3: false }, statements);
  assert.equal(zeroRight.isFullyCorrect, false);
  assert.equal(zeroRight.correctCount, 0);
  assert.equal(zeroRight.score, 0);
});
