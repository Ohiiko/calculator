import { data } from "../data";
export let arrCoast = [];

const objValues = Object.values(data);

export function setCoast(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    while (arr1.length !== arr2.length) {
      arr2.push(0);
    }
  }

  if (Math.max(...arr1) === 0 && Math.max(...arr2) === 0) {
    arrCoast = arrCoast.map((item, index) => (arrCoast[index] = 0));
  } else {
    arrCoast = arr1.map((value, index) => {
      if (
        Object.prototype.hasOwnProperty.call(objValues[index], "min")
          && objValues[index].min > value + arr2[index]
      ) {
        return objValues[index].min;
      } else if (
        Object.prototype.hasOwnProperty.call(objValues[index], "max") 
          && objValues[index].max < value + arr2[index]
      ) {
        return objValues[index].max;
      } else {
        return rounded(value + arr2[index]);
      }
    });
  }
}

function rounded(number) {
  return Math.round(parseFloat(number) * 100) / 100;
}
