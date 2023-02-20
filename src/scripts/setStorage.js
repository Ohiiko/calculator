import { data } from "../data";
import charts from "./charts";
import { arrTransfer } from "./setTransfer";
import { bunnyActive } from "./getCheckedBunnyInput";
import { scalewayActive } from "./getCheckedScalewayInput";
import { setCoast, arrCoast } from "./setCoast";
import { arrColors, setColors } from "./setColors";
import { storageRange } from "../app";

export let arrStorage = [];

export function setStorage() {
  const value = storageRange.value;

  if (value === "0") {
    arrStorage = arrStorage.map(() => 0);
  } else {
    arrStorage = Object.keys(data).map((i) => {
      const storage = data[i].storage;

      if (typeof storage === "object") {
        return (
          storage[bunnyActive] * value 
          || countsValueWithFree(storage[scalewayActive], value)
        );
      } else {
        return storage * value;
      }
    });
  }
  setCoast(arrStorage, arrTransfer);
  setColors(arrCoast, arrColors);
  charts(arrCoast, arrColors);
}

function countsValueWithFree(item, value) {
  return item.price * (value > item.free ? value - item.free : 0);
}
