const eleitas = {
  type: 'horizontalBar',
  data: {
    labels: [
      'Presidente',
      'Vice-presidente',
      'Governador',
      'Vice-Governador',
      'Senador',
      'Deputado Federal',
      'Deputado Estadual',
      'Deputado Distrital',
      'Senador 1º Suplente',
      'Senador 2º Suplente'
    ],
    datasets: [
      {
        label: 'Feminino',
        data: [0, 0, 1, 7, 6, 77, 161, 3, 11, 21],
        backgroundColor: '#63304c',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Masculino',
        data: [1, 1, 25, 19, 46, 436, 874, 21, 41, 31],
        backgroundColor: '#be9f4a',
        borderColor: '#806829',
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
      text: 'Eleitas - 2018'
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
  $('#eleitas-tab').on('show.bs.tab', function (e) {
    var ctx = document.getElementById('eleitasChart').getContext('2d')
    return new Chart(ctx, {
      type: eleitas['type'],
      data: eleitas['data'],
      options: eleitas['options']
    })
  })
})
