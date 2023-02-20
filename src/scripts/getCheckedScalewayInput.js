import { arrStorage, setStorage } from "./setStorage";

const scalewayStorage = document.getElementsByName("scalewayStorage");

scalewayStorage.forEach((w) => {
  w.addEventListener("click", () => getCheckedScalewayInput());
});

export let scalewayActive;

export function getCheckedScalewayInput() {
  scalewayStorage.forEach((input) => {
    if (input.checked) {
      scalewayActive = input.value;
    }
  });

  if (arrStorage.length > 0 && Math.min(...arrStorage) > 0) {
    setStorage();
  }
}