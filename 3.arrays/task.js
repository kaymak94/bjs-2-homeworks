"use strict"
//задача 1
function compareArrays(arr1, arr2) {
  let answer;

  answer = (arr1.length === arr2.length) && arr1.every((elment, index) => elment === arr2[index])



  return result; // boolean
}

//задача 2
function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter((number) => number > 0).filter((number) => number % 3 === 0).map((number) => number * 10)

  return resultArr; // array
}
