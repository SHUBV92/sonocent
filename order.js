const descendingOrder = (number) => {
  // Convert the input number into string
  const numberString = number.toString();

  // Convert the string above into an array
  const numberArray = numberString.split("");

  // Sort the values in a descending order inside the Array
  const orderedNumbers = numberArray.sort(
    (a, b) => {
      return b - a;
    }
  );
  // Return the a descended Array
  return orderedNumbers;
};

descendingOrder(126823823823);
descendingOrder(1268238243);

