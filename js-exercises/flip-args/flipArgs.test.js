import fliped from './flipArgs';

describe('flipArgs', () => {
  test('should return reversed parameters', () => {
    expect(fliped(10, { sleeve: 'Takeshi Kovacs' }, 'comfortablyNumb')).toEqual(JSON.stringify([10, { sleeve: 'Takeshi Kovac' }, 'comfortablyNumb'].reverse()));
  });

  test('should return a null if no argument passed', () => {
    expect(fliped()).toEqual(null);
  });

  test('should return the same argument if single argument passed', () => {
    expect(fliped({ sleeve: 'Takeshi Kovacs' })).toEqual(JSON.stringify([{ sleeve: 'Takeshi Kovac' }]));
  });
});
