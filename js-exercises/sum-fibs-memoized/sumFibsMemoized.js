function sumFibs(num) {
  let addOdds = 0;

  function sumFibz(numm) {
    if (numm === 0 || numm === 1) {
      return 1;
    }
    return sumFibz(numm - 1) + sumFibz(numm - 2);
  }

  for (let i = 0; i < num + 1; i += 1) {
    if (sumFibz(i) % 2 === 1 && sumFibz(i) <= 10) {
      addOdds += sumFibz(i);
    }
  }

  return addOdds;
}

function cacheFunction(fn) {
  const cache = {};
  return (...args) => {
    const stringifiedArgs = JSON.stringify(...args);
    if (stringifiedArgs in cache) {
      return cache[stringifiedArgs];
    }
    const result = fn(JSON.parse(stringifiedArgs));
    cache[stringifiedArgs] = result;
    return result;
  };
}

export { sumFibs, cacheFunction };
