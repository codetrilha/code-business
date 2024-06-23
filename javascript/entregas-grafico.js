document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("entregasCanvas").getContext("2d");
  var entregasCanvas = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
      datasets: [
        {
          label: "Entregas do mês",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: ["#ff7017"],
          borderColor: ["#ff7017"],
          borderWidth: 2,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
