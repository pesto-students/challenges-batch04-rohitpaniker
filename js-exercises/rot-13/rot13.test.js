import { rot13 } from './rot13';

describe('rot13', () => {
  test('should correctly decipher the input', () => {
    const rot13Cipher = rot13();
    expect(rot13Cipher('SERR PBQR PNZC')).toEqual('FREE CODE CAMP');
    expect(rot13Cipher('SERR CVMMN!')).toEqual('FREE PIZZA!');
    expect(rot13Cipher('SERR YBIR?')).toEqual('FREE LOVE?');
    expect(rot13Cipher('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.')).toEqual('THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.');
  });
});
