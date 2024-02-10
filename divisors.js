function divisors(n) {
    const result = [];
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        result.push(i);
        if (i !== n / i) {
          result.push(n / i);
        }
      }
    }
    return result.length ? result.sort((a, b) => a - b) : `${n} is prime`;
  }