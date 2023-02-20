import { storageRange } from "../app";
import { setStorage } from "./setStorage";

export function rangeStorage(target) {
  target.innerHTML = storageRange.value;
  setStorage();
}
