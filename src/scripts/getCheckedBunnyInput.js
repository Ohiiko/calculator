import { arrStorage, setStorage } from "./setStorage";

const bunnyStorage = document.getElementsByName("bunnyStorage");

bunnyStorage.forEach((input) => {
  input.addEventListener("input", () => getCheckedBunnyInput());
});

export let bunnyActive;

export function getCheckedBunnyInput() {
  bunnyStorage.forEach((input) => {
    if (input.checked) {
      bunnyActive = input.value;
    }
  });

  if (arrStorage.length > 0 && Math.min(...arrStorage) > 0) {
    setStorage();
  }
}