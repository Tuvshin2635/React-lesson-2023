export default function Exercises() {
  //  negdvger bodlogo
  function findMax(a, b) {
    return Math.max(a, b);
  }
  //   console.log(findMax(2, 3));

  //   2rdugaar bodlogo
  function findNumberInArray(arr, num) {
    for (let i = 0; i < arr.length; i++) {
      if (num === arr[i]) {
        return i;
      }
    }
    return -1;
  }

  //   3r dugaar bodlogo

  const a = [1, 2, 4, 6];
  const b = ["a", "g", "r", "l"];
  //   console.log(findNumberInArray(a, 1));
  //   console.log(findNumberInArray(a, 6));

  function randomNumber(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    const c = Math.floor(Math.random() * (max - min + 1) + min);
    return c;
  }
  //   console.log(randomNumber(2, 5));

  //   5r bodlogo
  function findAverage(arr) {
    let sum = 0;
    arr.map((n) => {
      sum += n;
    });
    return sum / arr.length;
  }
  console.log(findAverage(a));

  // 8r bodlogo

  function strToLowerCase(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].toUpperCase();
    }
    return arr;
  }

  console.log(b);
  console.log(strToLowerCase(b));

  function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
  console.log(isPrime(5));
  console.log(isPrime(10));

  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  console.log(isPrime(11)); // true
  console.log(isPrime(15)); // false

  return (
    <div>
      <h1> Day41 Exercises</h1>

      {/* JS function Funkts zoxiox */}
    </div>
  );
}
