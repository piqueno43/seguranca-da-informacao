const candidatasPorCorRaca2018 = {
  type: 'horizontalBar',
  data: {
    labels: [
      'Presidente',
      'Vice-presidente',
      'Governador',
      'Vice-governador',
      'Senador',
      'Deputado Federal',
      'Deputado Estadual',
      'Deputado Distrital',
      'Senador 1º Suplente',
      'Senador 2º Suplente'
    ],
    datasets: [
      {
        label: 'Amarela',
        data: [0, 0, 0, 0, 0, 24, 25, 2, 1, 0],
        backgroundColor: '#3b2b35',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Branca',
        data: [0, 4, 16, 36, 41, 1342, 2499, 118, 49, 65],
        backgroundColor: '#c9c7c8',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Indígena',
        data: [0, 1, 1, 1, 1, 14, 26, 1, 0, 3],
        backgroundColor: '#bf9f4a',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Parda',
        data: [0, 0, 3, 18, 6, 704, 1822, 133, 20, 16],
        backgroundColor: '#7d7479',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Preta',
        data: [2, 0, 8, 15, 9, 339, 653, 35, 12, 13],
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
      text: 'Candidaturas por cor/raça e cargo - 2018'
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
  $('#candidatas-por-cor-raca-tab').on('show.bs.tab', function (e) {
    var ctx = document
      .getElementById('candidatasPorCorRaca2018Chart')
      .getContext('2d')
    $('#candidatas-por-cor-raca-2018-tab').tab('show')
    return new Chart(ctx, {
      type: candidatasPorCorRaca2018['type'],
      data: candidatasPorCorRaca2018['data'],
      options: candidatasPorCorRaca2018['options']
    })
  })
})
