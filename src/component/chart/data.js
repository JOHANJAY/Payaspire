
export const barChartData = {
    labels : ["week1", "week2", "week3", "week4"],
    datasets: [
        {
            label: "Income",
            data: [4900, 4700, 5500, 4500],
            backgroundColor: "#8937ED",
            barThickness: 30,
            
         
        },
        {
            label: "Project Levy",
            data: [3200, 1300, 1200, 1700],
            backgroundColor: "#00C989",
            barThickness: 30
        },
        {
            label: "Chancery Levy",
            data: [1500, 2700, 700, 1300],
            backgroundColor: "#9A9A0B",
            barThickness: 30
        },
    ]
}

export const options = {scales: {
    x: {
      grid: {
        display: false,
        categoryPercentage: 0.2
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
   plugins: {
    legend: {
      display: false,
    },
  },
};