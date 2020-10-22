function rot13() {
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const charMap = {};
  let i = 1;

  for (const letter of alphabets) {
    if (i < 27) {
      charMap[letter] = i;
      i += 1;
    }
  }

  return function (...args) {
    const chars = args[0].split('');
    let decryptedText = '';
    for (const char of chars) {
      if (char !== ' ' && charMap[char] !== undefined) {
        if (charMap[char] - 13 < 1) {
          const newPosition = (charMap[char] - 13) * -1;
          const identifiedCharacter = Object.keys(charMap).reverse()[newPosition];
          decryptedText += identifiedCharacter;
        } else {
          decryptedText += alphabets[(charMap[char] - 13) - 1];
        }
      } else {
        decryptedText += char;
      }
    }
    return decryptedText;
  };
}

export { rot13 };
