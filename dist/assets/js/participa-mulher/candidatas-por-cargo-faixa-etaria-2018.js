const candidatasPorCargoFaixaEtaria2018 = {
  type:'horizontalBar',
  data: {
    labels: [
      '18 anos',
      '19 anos',
      '20 anos',
      '21 a 24 anos',
      '25 a 29 anos',
      '30 a 34 anos',
      '35 a 39 anos',
      '40 a 44 anos',
      '45 a 49 anos',
      '50 a 54 anos',
      '55 a 59 anos',
      '60 a 64 anos',
      '65 a 69 anos',
      '70 a 74 anos',
      '75 a 79 anos',
      '80 a 84 anos',
      '85 a 89 anos',
      '90 a 94 anos'
    ],
    datasets: [
      {
        label: 'Presidente',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
        backgroundColor: '#3b2b35',
        borderColor: '#3b2b35',
        borderWidth: 1
      },
      {
        label: 'Vice-presidente',
        data: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0],
        backgroundColor: '#c9c7c8',
        borderColor: '#c9c7c8',
        borderWidth: 1
      },
      {
        label: 'Governador',
        data: [0, 0, 0, 0, 0, 3, 2, 3, 2, 6, 4, 1, 5, 2, 0, 0, 0, 0],
        backgroundColor: '#63304c',
        borderColor: '#63304c',
        borderWidth: 1
      },
      {
        label: 'Vice-governador',
        data: [0, 0, 0, 0, 0, 8, 5, 13, 11, 10, 11, 4, 6, 2, 0, 0, 0, 0],
        backgroundColor: '#bf9f4a',
        borderColor: '#bf9f4a',
        borderWidth: 1
      },
      {
        label: 'Senador',
        data: [0, 0, 0, 0, 0, 0, 8, 3, 13, 9, 12, 6, 3, 2, 1, 0, 0, 0],
        backgroundColor: '#7d7479',
        borderColor: '#7d7479',
        borderWidth: 1
      },
      {
        label: 'Deputado Federal',
        data: [
          0,
          0,
          0,
          49,
          129,
          220,
          307,
          369,
          345,
          368,
          308,
          179,
          100,
          38,
          9,
          2,
          0,
          0
        ],
        backgroundColor: '#5c971e',
        borderColor: '#5c971e',
        borderWidth: 1
      },
      {
        label: 'Deputado Estadual',
        data: [
          0,
          0,
          1,
          176,
          296,
          434,
          605,
          740,
          796,
          800,
          556,
          363,
          172,
          58,
          22,
          4,
          2,
          0
        ],
        backgroundColor: '#bb631b',
        borderColor: '#bb631b',
        borderWidth: 1
      },
      {
        label: 'Deputado Distrital',
        data: [0, 0, 0, 4, 8, 20, 44, 40, 55, 46, 40, 22, 6, 3, 1, 0, 0, 0],
        backgroundColor: '#4b5dbf',
        borderColor: '#4b5dbf',
        borderWidth: 1
      },
      {
        label: 'Senador 1º Suplente',
        data: [0, 0, 0, 0, 0, 0, 13, 13, 12, 8, 13, 11, 4, 4, 4, 0, 0, 0],
        backgroundColor: '#b55eb2',
        borderColor: '#b55eb2',
        borderWidth: 1
      },
      {
        label: 'Senador 2º Suplente',
        data: [0, 0, 0, 0, 0, 0, 13, 12, 12, 10, 21, 12, 8, 6, 2, 0, 1, 0],
        backgroundColor: '#5e93b5',
        borderColor: '#5e93b5',
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
      text: 'Candidaturas por cargo e faixa etária - Eleições 2018'
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
  $('#candidatas-por-cargo-faixa-etaria-tab').on('show.bs.tab', function (e) {
    $('#candidatas-por-cargo-faixa-etaria-2018-tab').tab('show')
    var ctx = document
      .getElementById('candidatasPorCargoFaixaEtaria2018Chart')
      .getContext('2d')
    return new Chart(ctx, {
      type: candidatasPorCargoFaixaEtaria2018['type'],
      data: candidatasPorCargoFaixaEtaria2018['data'],
      options: candidatasPorCargoFaixaEtaria2018['options']
    })
  })
})
