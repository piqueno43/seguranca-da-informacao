const candidatasPorCargo2018 = {
  type:'bar',
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
        label: 'Feminino',
        data: [2, 5, 28, 70, 57, 2423, 5025, 289, 82, 97],
        backgroundColor: '#63304c',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Masculino',
        data: [11, 8, 156, 115, 257, 5235, 11135, 629, 234, 221],
        backgroundColor: '#be9f4a',
        borderColor: '#806829',
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
      text: 'Candidaturas aptas por cargo - Eleições 2018'
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
  $('#candidatas-por-cargo-tab').on('show.bs.tab', function (e) {
    $('#candidatas-por-cargo-2018-tab').tab('show')
    var ctx = document
      .getElementById('candidatasPorCargo2018Chart')
      .getContext('2d')
    return new Chart(ctx, {
      type: candidatasPorCargo2018['type'],
      data: candidatasPorCargo2018['data'],
      options: candidatasPorCargo2018['options']
    })
  })
})
