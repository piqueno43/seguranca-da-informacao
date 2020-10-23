const eleitas2016 = {
  type: 'horizontalBar',
  data: {
    labels: [
      'Prefeito',
      'Vereador',
      'vice-prefeito'
    ],
    datasets: [
      {
        label: 'Feminino',
        data: [636, 7816, 791],
        backgroundColor: '#63304c',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Masculino',
        data: [4827, 50099, 4671],
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
      text: 'Eleitas - 2016'
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
  $('#eleitas2016-tab').on('show.bs.tab', function (e) {
    var ctx2016 = document.getElementById('eleitasChart2016').getContext('2d')
    return new Chart(ctx2016, {
      type: eleitas2016['type'],
      data: eleitas2016['data'],
      options: eleitas2016['options']
    })
  })
})
