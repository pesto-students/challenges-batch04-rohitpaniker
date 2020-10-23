const limitFunctionCallCount = (func, maxExecutionLimit) => {
  let timesExecuted = 0;
  return function (...args) {
    if (timesExecuted < maxExecutionLimit) {
      timesExecuted += 1;
      return func(...args);
    }
    return null;
  };
};

export {
  limitFunctionCallCount,
};
