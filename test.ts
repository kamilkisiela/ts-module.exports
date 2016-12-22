import { assert } from 'chai';

import test from './index';

describe('test', () => {
  it('should return true', () => {
    assert.isTrue(test(), 'yes it is!');
  });
});
