const candidatasReeleitas2018 = {
  type: 'horizontalBar',
  data: {
    labels: [
      'Governador',
      'Vice-governador',
      'Senador',
      'Deputado Federal',
      'Deputado Estadual',
      'Deputado Distrital',
      '1º Suplente',
      '2º Suplente'
    ],
    datasets: [
      {
        label: 'Feminino',
        data: [0, 2, 0, 30, 66, 0, 1, 1],
        backgroundColor: '#63304c',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Masculino',
        data: [10, 4, 8, 211, 487, 7, 0, 0],
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
      text: 'Reeleitas - Cargo e gênero - Eleições 2018'
    },
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{ stacked: true }]
    }
  }
}

$(document).ready(function () {
  $('#candidatas-reeleitas-tab').on('show.bs.tab', function (e) {
    $('#candidatas-reeleitas-2018-tab').tab('show')
    var ctx = document
      .getElementById('candidatasReeleitas2018Chart')
      .getContext('2d')
    return new Chart(ctx, {
      type: candidatasReeleitas2018['type'],
      data: candidatasReeleitas2018['data'],
      options: candidatasReeleitas2018['options']
    })
  })
})
