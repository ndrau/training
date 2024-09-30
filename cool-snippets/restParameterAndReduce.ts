const add = (...params: number[]) => {
  const initialValue = 0;

  const result = params.reduce((currentValue, nextValue) => {
    return currentValue + nextValue;
  }, initialValue);

  return result;
};

console.log(add(2, 3, 4, 1, 5.5));
