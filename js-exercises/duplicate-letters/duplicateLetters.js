function duplicateLetters(...args) {
  const dupe = {};
  const chars = [...args[0]];
  for (let i = 0; i <= chars.length; i += 1) {
    if (dupe[chars[i]] === undefined) {
      dupe[chars[i]] = 1;
    } else {
      dupe[chars[i]] += 1;
    }
  }
  if (Math.max(...Object.values(dupe)) === 1) {
    return false;
  }
  return Math.max(...Object.values(dupe));
}

export { duplicateLetters };
