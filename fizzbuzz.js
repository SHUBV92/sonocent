
const FizzBuzz = (num) => {
  if (num % 3 === 0) {
    return  "fizz";
  }
  if (num % 4 === 0) {
    return "buzz";
  } else {
    return num;
  }
};

FizzBuzz(20);
