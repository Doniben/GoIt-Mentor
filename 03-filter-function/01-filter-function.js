const filter = (arr, fn) => {
  return arr.reduce((filteredArr, element) => {
    return fn(element) ? [...filteredArr] : [...filteredArr, element];
  }, []);
};

const isEven = (n) => {
    return n % 2 === 0
}

console.log(filter([1, 2, 3, 4, 5, 6], isEven)); // [1, 3, 5]
