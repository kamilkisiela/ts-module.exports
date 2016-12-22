import isBoolean from 'lodash/isBoolean';

function test(): Boolean {
  return isBoolean(true);
}

export = test;