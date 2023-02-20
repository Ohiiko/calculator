import { arrCoast } from "./setCoast";
import { data } from "../data";

export const arrColors = [];

export function setColors() {
  for (let i = 0; i < arrCoast.length; i++) {
    arrColors[i] = "grey";
  }

  const indexMinVal = arrCoast.indexOf(Math.min(...arrCoast));
  const colorMinVal = Object.values(data)[indexMinVal].color;

  arrColors[indexMinVal] = colorMinVal;
}
