const candidatasPorCorRaca2016 = {
  type: 'horizontalBar',
  data: {
    labels: ['Prefeito', 'Vereador', 'Vice-Prefeito'],
    datasets: [
      {
        label: 'Amarela',
        data: [17, 603, 26],
        backgroundColor: '#3b2b35',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Branca',
        data: [1395, 75.569, 1.753],
        backgroundColor: '#c9c7c8',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Indígena',
        data: [5, 417, 10],
        backgroundColor: '#bf9f4a',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Parda',
        data: [593, 53342, 841],
        backgroundColor: '#7d7479',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Preta',
        data: [57, 12140, 135],
        backgroundColor: '#63304c',
        borderColor: '#4a2539',
        borderWidth: 1
      }
    ]
  },
  options: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      fontSize: 22,
      text: 'Candidaturas por cor/raça e cargo - 2016'
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
  $('#candidatas-por-cor-raca-2016-tab').on('show.bs.tab', function (e) {
    var ctx = document
      .getElementById('candidatasPorCorRaca2016Chart')
      .getContext('2d')
    return new Chart(ctx, {
      type: candidatasPorCorRaca2016['type'],
      data: candidatasPorCorRaca2016['data'],
      options: candidatasPorCorRaca2016['options']
    })
  })
})
