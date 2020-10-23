const candidatasPorPartido2016 = {
  type: 'bar',
  data: {
    labels: [
      'DEM',
      'NOVO',
      'PC do B',
      'PCB',
      'PCO',
      'PDT',
      'PEN',
      'PHS',
      'PMB',
      'PMDB',
      'PMN',
      'PP',
      'PPL',
      'PPS',
      'PR',
      'PRB',
      'PROS',
      'PRP',
      'PRTB',
      'PSB',
      'PSC',
      'PSD',
      'PSDB',
      'PSDC',
      'PSL',
      'PSOL',
      'PSTU',
      'PT',
      'PT do B',
      'PTB',
      'PTC',
      'PTN',
      'PV',
      'REDE',
      'SD'
    ],
    datasets: [
      {
        label: 'Feminino',
        data: [
          6537,
          44,
          3696,
          72,
          17,
          7525,
          3028,
          3494,
          1806,
          13396,
          2179,
          8325,
          1034,
          4820,
          6670,
          5337,
          3162,
          2525,
          1873,
          7821,
          4774,
          8541,
          10594,
          2212,
          3094,
          1582,
          120,
          7662,
          2203,
          6661,
          2613,
          2895,
          5074,
          1088,
          4429
        ],
        backgroundColor: '#63304c',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Masculino',
        data: [
          14249,
          94,
          7829,
          154,
          45,
          17351,
          6592,
          7711,
          2381,
          29045,
          4743,
          18458,
          2307,
          11050,
          14891,
          11645,
          7259,
          5505,
          4239,
          17860,
          10805,
          19527,
          23497,
          4868,
          6821,
          3277,
          186,
          15133,
          4809,
          14796,
          5606,
          6267,
          10972,
          2520,
          9700
        ],
        backgroundColor: '#be9f4a',
        borderColor: '#806829',
        borderWidth: 1
      },
      {
        label: 'Não informado',
        data: [
          3,
          0,
          3,
          0,
          0,
          0,
          0,
          2,
          0,
          2,
          1,
          0,
          0,
          17,
          3,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          1,
          1,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          1,
          3
        ],
        backgroundColor: '#c9c7c8',
        borderColor: '#757475',

        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      responsive: true,
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        fontSize: 22,
        text: 'Candidaturas por partido - Eleições 2016'
      }
    }
  }
}

$(document).ready(function () {
  $('#candidatas-por-partido-2016-tab').on('show.bs.tab', function (e) {
    var ctx = document
      .getElementById('candidatasPorPartido2016Chart')
      .getContext('2d')
    return new Chart(ctx, {
      type: candidatasPorPartido2016['type'],
      data: candidatasPorPartido2016['data'],
      options: candidatasPorPartido2016['options']
    })
  })
})
