import flipped from './flipArgs';

describe('flipArgs', () => {
  test('should return reversed parameters', () => {
    expect(flipped(10, { sleeve: 'Takeshi Kovacs' }, 'comfortablyNumb')).toEqual(JSON.stringify([10, { sleeve: 'Takeshi Kovac' }, 'comfortablyNumb'].reverse()));
  });

  test('should return null if no argument passed', () => {
    expect(flipped()).toEqual(null);
  });

  test('should return same argument if single argument passed', () => {
    expect(flipped({ sleeve: 'Takeshi Kovacs' })).toEqual(JSON.stringify([{ sleeve: 'Takeshi Kovac' }]));
  });
});
