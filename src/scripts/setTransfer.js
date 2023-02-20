import { data } from "../data";
import charts from "./charts";
import { arrStorage } from "./setStorage";
import { setCoast, arrCoast } from "./setCoast";
import { arrColors, setColors } from "./setColors";
import { transferRange } from "../app";

export let arrTransfer = [];

export function setTransfer() {
  const value = transferRange.value;

  arrTransfer = Object.keys(data).map((i) => {
    const transfer = data[i].transfer;

    if (typeof transfer === "object") {
      return (
        transfer.price * (value > transfer.free ? value - transfer.free : 0)
      );
    } else {
      return transfer * value;
    }
  });
  setCoast(arrTransfer, arrStorage);
  setColors(arrCoast, arrColors);
  charts(arrCoast, arrColors);
}