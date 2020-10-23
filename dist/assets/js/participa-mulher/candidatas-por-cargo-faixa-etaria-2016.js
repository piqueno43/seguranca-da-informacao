const candidatasPorCargoFaixaEtaria2016 = {
  type: 'horizontalBar',
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
      '90 a 94 anos',
      '95 a 99 anos',
      '100 anos ou mais'
    ],
    datasets: [
      {
        label: 'Prefeito',
        data: [
          0,
          0,
          0,
          12,
          54,
          124,
          257,
          339,
          357,
          371,
          273,
          169,
          73,
          30,
          4,
          3,
          0,
          1,
          0,
          0
        ],
        backgroundColor: '#63314c',
        borderColor: '#63314c',
        borderWidth: 1
      },
      {
        label: 'Vereador',
        data: [
          312,
          888,
          1147,
          5800,
          10740,
          15949,
          20085,
          20802,
          20877,
          19014,
          13203,
          7805,
          3547,
          1280,
          437,
          144,
          31,
          8,
          1,
          1
        ],
        backgroundColor: '#bb631b',
        borderColor: '#bb631b',
        borderWidth: 1
      },
      {
        label: 'Vice-Prefeito',
        data: [
          0,
          0,
          0,
          46,
          132,
          211,
          338,
          368,
          430,
          440,
          346,
          238,
          140,
          49,
          20,
          6,
          1,
          0,
          0,
          0
        ],
        backgroundColor: '#bf9f4a',
        borderColor: '#bf9f4a',
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
      text: 'Candidaturas por cargo e faixa etária - Eleições 2016'
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
    .getElementById('candidatasPorCargoFaixaEtaria2016Chart')
    .getContext('2d')

  $('#candidatas-por-cargo-faixa-etaria-2016-tab').on('show.bs.tab', function (
    e
  ) {
    return new Chart(ctx, {
      type: candidatasPorCargoFaixaEtaria2016['type'],
      data: candidatasPorCargoFaixaEtaria2016['data'],
      options: candidatasPorCargoFaixaEtaria2016['options']
    })
  })
})
