function digitalRoot(n) {
  const string = n.toString();

  // Base case: If the number is a single digit, return it
  if (string.length === 1) {
    return parseInt(string);
  }

  let result = 0;
  for (let i = 0; i < string.length; i++) {
    const number = parseInt(string[i]);
    result += number;
  }

  // Recursively call digitalRoot on the sum until it's a single digit
  return digitalRoot(result);
}
