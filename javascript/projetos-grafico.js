document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("projetosCanvas").getContext("2d");

  var totalValue = [12, 19, 3, 5, 2, 3].reduce((a, b) => a + b, 0);

  var percentageValues = [12, 20, 3, 5, 2, 3].map(
    (value) => (value / totalValue) * 100
  );

  var projetosCanvas = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Projeto 1",
        "Projeto 2",
        "Projeto 3",
        "Projeto 4",
        "Projeto 5",
        "Projeto 6",
      ],
      datasets: [
        {
          label: "Projetos do semestre",
          data: percentageValues,
          backgroundColor: [
            "rgba(153, 102, 255, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(54, 162, 235, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 100, // Set the maximum value to 100
        },
      },
    },
  });
});
