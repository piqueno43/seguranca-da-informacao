const candidatasPorPartido2018 = {
  type: 'bar',
  data: {
    labels: [
      'AVANTE',
      'DC',
      'DEM',
      'MDB',
      'NOVO',
      'PATRI',
      'PC do B',
      'PCB',
      'PCO',
      'PDT',
      'PHS',
      'PMB',
      'PMN',
      'PODE',
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
      'PSL',
      'PSOL',
      'PSTU',
      'PT',
      'PTB',
      'PTC',
      'PV',
      'REDE',
      'SOLIDARIEDADE'
    ],
    datasets: [
      {
        label: 'Feminino',
        data: [
          270,
          196,
          186,
          340,
          128,
          325,
          255,
          24,
          12,
          263,
          267,
          155,
          198,
          241,
          210,
          151,
          182,
          207,
          257,
          300,
          269,
          254,
          266,
          244,
          192,
          284,
          391,
          420,
          73,
          382,
          196,
          208,
          276,
          233,
          223
        ],
        backgroundColor: '#63304c',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Masculino',
        data: [
          669,
          453,
          458,
          676,
          281,
          753,
          500,
          57,
          22,
          608,
          627,
          232,
          459,
          604,
          496,
          374,
          417,
          467,
          550,
          703,
          594,
          592,
          598,
          558,
          450,
          584,
          983,
          844,
          116,
          782,
          401,
          473,
          549,
          575,
          496
        ],
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
      text: 'Candidaturas por partido - Eleições 2018'
    }
  }
}
$(document).ready(function () {
  $('#filiadas-tab').on('show.bs.tab', function (e) {
    $('#candidatas-por-partido-2018-tab').tab('show')
    var ctx = document
      .getElementById('candidatasPorPartido2018Chart')
      .getContext('2d')
    return new Chart(ctx, {
      type: candidatasPorPartido2018['type'],
      data: candidatasPorPartido2018['data'],
      options: candidatasPorPartido2018['options']
    })
  })
})
