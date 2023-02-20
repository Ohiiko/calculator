import { rangeStorage } from "./scripts/rangeStorage";
import { rangeTransfer } from "./scripts/rangeTransfer";
import { getCheckedBunnyInput } from "./scripts/getCheckedBunnyInput";
import { getCheckedScalewayInput } from "./scripts/getCheckedScalewayInput";

export const storageRange = document.querySelector(".storage__range");
export const transferRange = document.querySelector(".transfer__range");

const storageValue = document.querySelector(".storage__value");
const transferValue = document.querySelector(".transfer__value");

storageRange.addEventListener("input", () => rangeStorage(storageValue));

transferRange.addEventListener("input", () =>
  rangeTransfer(transferValue),
);

getCheckedBunnyInput();
getCheckedScalewayInput();
