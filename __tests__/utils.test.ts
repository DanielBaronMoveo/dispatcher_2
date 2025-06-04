import {loremIpsum} from '../src/utils/utils';

describe('utils', () => {
  test('loremIpsum returns requested length', () => {
    expect(loremIpsum(5).length).toBe(5);
  });
});
