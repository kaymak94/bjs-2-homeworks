"use strict";
function solveEquation(a, b, c) {
  const arr = [];
  const d = b ** 2 - 4 * a * c;
  if (d > 0) {
    let ans1 = (-b + Math.sqrt(d)) / (2 * a);
    let ans2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(ans1, ans2);
  }
  else if (d === 0) {
    let ans1 = -b / (2 * a);
    arr.push(ans1);
  }
  else if (d < 0) {

  }
  return arr;
}

//function calculateTotalMortgage(percent, contribution, amount, date) {
 // let totalAmount;

  // код для задачи №2 писать здесь

 // return totalAmount;

