import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import RatingWidget from '../app/rating-widget';
import Star from '../app/star';

const test = addAssertions(tape, { jsxEquals });
const renderer = createRenderer();

test('Testing RatingWidget component output', (assert) => {
  renderer.render(<RatingWidget size="5" rating="2" />);

  const message = 'Should render correctly as per size and rating specified';
  const expected = (
    <ul className="rating-widget">
      <li key={0} className="star-item"><Star isActive={true}/></li>
      <li key={1} className="star-item"><Star isActive={true}/></li>
      <li key={2} className="star-item"><Star isActive={false}/></li>
      <li key={3} className="star-item"><Star isActive={false}/></li>
      <li key={4} className="star-item"><Star isActive={false}/></li>
    </ul>
  );
  const actual = renderer.getRenderOutput();

  assert.jsxEquals(actual, expected, message);
  assert.end();
});
