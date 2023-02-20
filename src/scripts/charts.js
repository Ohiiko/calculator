import Chart from "chart.js/auto";
Chart.defaults.font.size = 18;
Chart.defaults.outerWidth = 505;

const ctx = document.getElementById("myChart");

const chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["backblaze", "bunny", "scaleway", "vultr"],
    datasets: [
      {
        data: [],
        backgroundColor: [],
      },
    ],
  },
  options: {
    scales: {
      y: {
        ticks: {
          padding: 30,
        },
      },
      x: {
        ticks: {
          padding: 30,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    indexAxis: window.outerWidth < 768 ? "x" : "y",
  },
});

export default function charts(arrCoast, arrColors) {
  chart.data.datasets.forEach((dataset) => {
    (dataset.data = arrCoast), (dataset.backgroundColor = arrColors);
  });

  chart.update();
}

function changePosition() {
  chart.options = {
    scales: {
      y: {
        ticks: {
          padding: 30,
        },
      },
      x: {
        ticks: {
          padding: 30,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    indexAxis: window.outerWidth < 768 ? "x" : "y",
  };
  chart.update();
}

window.onresize = function() {
  changePosition();
};
