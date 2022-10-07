// Задание 1
"use strict";
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      arr[i] = max;

      if (arr[i] < min)
        arr[i] = min;

      sum = sum + arr[i];

    }


    average = Number(sum / arr.length).toFixed(2)


    return { min: min, max: max, avg: avg };
  }

  // Задание 2
  function worker(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }

  function makeWork(arrOfArr, func) {
    let max = -Infinity;
    for (let i = 0; i < arrOfArr.length; i++) {
      const calculateElements = func(arrOfArr[i]);
      if (calculateElements > max) {
      }
    }

    return max;
  }

  // Задание 3
  function worker2(arr) {
    let res = getArrayParams(arr);
    return Math.abs(res.max - res.min);
  }
}