const eleitoras = {
  type: 'horizontalBar',
  data: {
    labels: ['Mulheres', 'Homens', 'Não informado'],
    datasets: [
      {
        label: 'Brasil',
        data: [77047.366, 69694.781,63.401],
        backgroundColor: [
          '#3a2b33','#3a2b33','#3a2b33'
         
        ],
        borderColor: '#3a2b33',
        borderWidth: 1
      },
      {
        label: 'Exterior',
        data: [292.531, 208.196, 500.727],
        backgroundColor: [
          '#be9f4a','#be9f4a','#be9f4a'
        ],
        borderColor: [
          '#be9f4a', '#be9f4a','#be9f4a'
        ],
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
      text: 'Eleitoras no Brasil e no exterior - 2018'
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
  $('#eleitoras-tab').on('show.bs.tab', function (e) {
    var ctx = document.getElementById('eleitorasChart').getContext('2d')
    return new Chart(ctx, {
      type: eleitoras['type'],
      data: eleitoras['data'],
      options: eleitoras['options']
    })
  })
})
