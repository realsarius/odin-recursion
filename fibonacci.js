const fibs = (num, arr = [0, 1], x = 0, y = 1, z = 0) => {
  for (let i = num; i > 3; i -= 1) {
    z = x + y; // 1 2 3 5 8 13
    x = y; // 1 1 2 3 5
    y = z; // 1 2 3 5 8
    arr.push(z);
  }
  let sum = 1;
  arr.forEach((nums) => {
    sum += nums;
  });
  return sum;
};

const fibsRec = (num) => (num < 3 ? 1 : fibsRec(num - 1) + fibsRec(num - 2));

console.log(fibs(10));
console.log(fibsRec(10));
