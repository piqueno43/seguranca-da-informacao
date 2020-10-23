const candidatasZeroVoto = {
  type:'pie',
  data: {
    labels: ['Feminino', 'Masculino', 'Não divulgável'],
    datasets: [
      {
        label: 'Total',
        data: [14743, 1806, 2],
        backgroundColor: [
          '#63304c',
          '#bf9f4a',
          '#bb631b'
          
        ],
        borderColor: [
          '#63304c',
          '#bf9f4a',
          '#bb631b'
          
        ],
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
      text: 'Candidatas com zero votos 2016 - 2018'
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
  $('#candidatas-zero-voto-tab').on('show.bs.tab', function (e) {
    var ctx = document
      .getElementById('candidatasZeroVotoChart')
      .getContext('2d')
    return new Chart(ctx, {
      type: candidatasZeroVoto['type'],
      data: candidatasZeroVoto['data'],
      options: candidatasZeroVoto['options']
    })
  })
})
