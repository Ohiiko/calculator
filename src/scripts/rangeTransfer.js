import { transferRange } from "../app";
import { setTransfer } from "./setTransfer";

export function rangeTransfer(target) {
  target.innerHTML = transferRange.value;
  setTransfer();
}
