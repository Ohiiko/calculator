export const data = {
  backblaze: {
    min: 7,
    storage: 0.005,
    transfer: 0.01,
    color: "red",
  },
  bunny: {
    max: 10,
    storage: {
      HDD: 0.01,
      SDD: 0.02,
    },
    transfer: 0.01,
    color: "orange",
  },
  scaleway: {
    storage: {
      Multi: {
        price: 0.06,
        free: 75,
      },
      Single: {
        price: 0.03,
        free: 75,
      },
    },
    transfer: {
      price: 0.02,
      free: 75,
    },
    color: "purple",
  },
  vultr: {
    min: 5,
    storage: 0.01,
    transfer: 0.01,
    color: "blue",
  },
};