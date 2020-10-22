const fliped = function (...args) {
  if (args.length === 0) {
    return null;
  }

  return JSON.stringify(args.reverse());
};

export default fliped;
