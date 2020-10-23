const candidatasPorCargo2016 = {
  type:'bar',
  data: {
    labels: ['Prefeito', 'Vereador', 'Vice-prefeito'],
    datasets: [
      {
        label: 'Feminino',
        data: [2067, 142071, 2765],
        backgroundColor: '#63304c',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Masculino',
        data: [13688, 295459, 13045],
        backgroundColor: '#be9f4a',
        borderColor: '#806829',
        borderWidth: 1
      },
      {
        label: 'Não divulgável',
        data: [3, 32, 4],
        backgroundColor: '#c9c7c8',
        borderColor: '#757475',
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      fontSize: 22,
      text: 'Candidaturas aptas por cargo - Eleições 2016'
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
}

$(document).ready(function () {
  var ctx = document
    .getElementById('candidatasPorCargo2016Chart')
    .getContext('2d')
  $('#candidatas-por-cargo-tab').on('show.bs.tab', function (e) {
    return new Chart(ctx, {
      type: candidatasPorCargo2016['type'],
      data: candidatasPorCargo2016['data'],
      options: candidatasPorCargo2016['options']
    })
  })
})
