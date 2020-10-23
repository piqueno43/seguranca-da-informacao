const candidatasPorCargoOcupacao2016_prefeito = {
  type: 'bar',
  data: {
    labels: ['Prefeito'],
    datasets: [{
        label: 'Dona de casa',
        data: [55],
        backgroundColor: '#63304c',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Servidor Púb. Municipal',
        data: [124],
        backgroundColor: '#CCA142',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Agricultor',
        data: [27],
        backgroundColor: '#CBC9CA',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Professor Ens. Fundamental',
        data: [122],
        backgroundColor: '#2C9811',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Comerciante',
        data: [54],
        backgroundColor: '#D36311',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Outros',
        data: [1685],
        backgroundColor: '#D05EB6',
        borderColor: '#4a2539',
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom'
    },
    title: {
      display: true,
      fontSize: 22,
      text: 'Candidaturas por cargo e ocupação - Prefeito - Eleições 2016'
    }
  }
}

$(document).ready(function () {
  $('#candidatas-por-cargo-ocupacao-2016-tab').on('show.bs.tab', function (e) {
    var ctx = document
      .getElementById('candidatasPorCargoOcupacao2016Chart_prefeito')
      .getContext('2d')
    return new Chart(ctx, {
      type: candidatasPorCargoOcupacao2016_prefeito['type'],
      data: candidatasPorCargoOcupacao2016_prefeito['data'],
      options: candidatasPorCargoOcupacao2016_prefeito['options']
    })
  })
})


const candidatasPorCargoOcupacao2016_vereador = {
  type: 'bar',
  data: {
    labels: ['Vereador'],
    datasets: [{
        label: 'Dona de casa',
        data: [22068],
        backgroundColor: '#63304c',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Servidor Púb. Municipal',
        data: [9749],
        backgroundColor: '#CCA142',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Agricultor',
        data: [7156],
        backgroundColor: '#CBC9CA',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Professor Ens. Fundamental',
        data: [6701],
        backgroundColor: '#2C9811',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Comerciante',
        data: [6528],
        backgroundColor: '#D36311',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Outros',
        data: [89869],
        backgroundColor: '#D05EB6',
        borderColor: '#4a2539',
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom'
    },
    title: {
      display: true,
      fontSize: 22,
      text: 'Candidaturas por cargo e ocupação - Vereador - Eleições 2016'
    }
  }
}

$(document).ready(function () {
  $('#candidatas-por-cargo-ocupacao-2016-tab').on('show.bs.tab', function (e) {
    var ctx = document
      .getElementById('candidatasPorCargoOcupacao2016Chart_vereador')
      .getContext('2d')
    return new Chart(ctx, {
      type: candidatasPorCargoOcupacao2016_vereador['type'],
      data: candidatasPorCargoOcupacao2016_vereador['data'],
      options: candidatasPorCargoOcupacao2016_vereador['options']
    })
  })
})

const candidatasPorCargoOcupacao2016_vice = {
  type: 'bar',
  data: {
    labels: ['Vice-prefeito'],
    datasets: [{
        label: 'Dona de casa',
        data: [160],
        backgroundColor: '#63304c',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Servidor Púb. Municipal',
        data: [162],
        backgroundColor: '#CCA142',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Agricultor',
        data: [108],
        backgroundColor: '#CBC9CA',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Professor Ens. Fundamental',
        data: [180],
        backgroundColor: '#2C9811',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Comerciante',
        data: [115],
        backgroundColor: '#D36311',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Outros',
        data: [2040],
        backgroundColor: '#D05EB6',
        borderColor: '#4a2539',
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom'
    },
    title: {
      display: true,
      fontSize: 22,
      text: 'Candidaturas por cargo e ocupação - Vice-Prefeito - Eleições 2016'
    }
  }
}

$(document).ready(function () {
  $('#candidatas-por-cargo-ocupacao-2016-tab').on('show.bs.tab', function (e) {
    var ctx = document
      .getElementById('candidatasPorCargoOcupacao2016Chart_vice')
      .getContext('2d')
    return new Chart(ctx, {
      type: candidatasPorCargoOcupacao2016_vice['type'],
      data: candidatasPorCargoOcupacao2016_vice['data'],
      options: candidatasPorCargoOcupacao2016_vice['options']
    })
  })
})