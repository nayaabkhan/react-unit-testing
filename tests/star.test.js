import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import Star from '../app/star';

const test = addAssertions(tape, { jsxEquals });
const renderer = createRenderer();


// case 1 when it is set as active
test('Testing Star component output if isActive set', (assert) => {
  renderer.render(<Star isActive={true} />);

  const message = 'Should be active';
  const expected = <span className='star star--active'>★</span>;
  const actual = renderer.getRenderOutput();

  assert.jsxEquals(actual, expected, message);
  assert.end();
});

// case 2 when it is set as inactive
test('Testing Star component output if isActive not set', (assert) => {
  renderer.render(<Star isActive={false} />);

  const message = 'Should be inactive';
  const expected = <span className='star'>★</span>;
  const actual = renderer.getRenderOutput();

  assert.jsxEquals(actual, expected, message);
  assert.end();
});

// case 3 when isActive not specified
test('Testing Star component output if isActive not specified', (assert) => {
  renderer.render(<Star />);

  const message = 'Should be inactive';
  const expected = <span className='star'>★</span>;
  const actual = renderer.getRenderOutput();

  assert.jsxEquals(actual, expected, message);
  assert.end();
});
