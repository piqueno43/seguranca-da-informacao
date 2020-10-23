// Vice Presidente

const candidatasPorCargoOcupacao2018_pres = {
  type: 'bar',
  data: {
    labels: [
      'Presidente'
    ],
    datasets: [{
        label: 'Empresário',
        data: [0],
        backgroundColor: '#CCA142',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Advogado',
        data: [0],
        backgroundColor: '#CBC9CA',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Dona de casa',
        data: [0],
        backgroundColor: '#63304c',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Estudante, Bolsista, Estagiário e Assemelhados',
        data: [0],
        backgroundColor: '#2C9811',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Aposentado (Exceto servidor público)',
        data: [0],
        backgroundColor: '#D36311',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Outros',
        data: [2],
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
      text: 'Candidaturas por cargo e ocupação - Presidente - Eleições 2018'
    }
  }
}

$(document).ready(function () {
  $('#candidatas-por-cargo-ocupacao-tab').on('show.bs.tab', function (e) {
    $('#candidatas-por-cargo-ocupacao-2018-tab').tab('show')
    var ctx = document
      .getElementById('candidatasPorCargoOcupacao2018Chart_pres')
      .getContext('2d')
    return new Chart(ctx, {
      type: candidatasPorCargoOcupacao2018_pres['type'],
      data: candidatasPorCargoOcupacao2018_pres['data'],
      options: candidatasPorCargoOcupacao2018_pres['options']
    })
  })
})

// Vice Presidente

const candidatasPorCargoOcupacao2018_vicePres = {
  type: 'bar',
  data: {
    labels: [
      'Vice Presidente'
    ],
    datasets: [{
        label: 'Empresário',
        data: [0],
        backgroundColor: '#CCA142',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Advogado',
        data: [0],
        backgroundColor: '#CBC9CA',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Dona de casa',
        data: [0],
        backgroundColor: '#63304c',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Estudante, Bolsista, Estagiário e Assemelhados',
        data: [0],
        backgroundColor: '#2C9811',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Aposentado (Exceto servidor público)',
        data: [0],
        backgroundColor: '#D36311',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Outros',
        data: [5],
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
      text: 'Candidaturas por cargo e ocupação - Vice-Presidente - Eleições 2018'
    }
  }
}

$(document).ready(function () {
  $('#candidatas-por-cargo-ocupacao-tab').on('show.bs.tab', function (e) {
    $('#candidatas-por-cargo-ocupacao-2018-tab').tab('show')
    var ctx = document
      .getElementById('candidatasPorCargoOcupacao2018Chart_vicePres')
      .getContext('2d')
    return new Chart(ctx, {
      type: candidatasPorCargoOcupacao2018_vicePres['type'],
      data: candidatasPorCargoOcupacao2018_vicePres['data'],
      options: candidatasPorCargoOcupacao2018_vicePres['options']
    })
  })
})


// GOVERNADOR

const candidatasPorCargoOcupacao2018_gov = {
  type: 'bar',
  data: {
    labels: [
      'Governador'
    ],
    datasets: [{
        label: 'Empresário',
        data: [1],
        backgroundColor: '#CCA142',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Advogado',
        data: [2],
        backgroundColor: '#CBC9CA',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Dona de casa',
        data: [0],
        backgroundColor: '#63304c',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Estudante, Bolsista, Estagiário e Assemelhados',
        data: [0],
        backgroundColor: '#2C9811',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Aposentado (Exceto servidor público)',
        data: [1],
        backgroundColor: '#D36311',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Outros',
        data: [24],
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
      text: 'Candidaturas por cargo e ocupação - Governador - Eleições 2018'
    }
  }
}

$(document).ready(function () {
  $('#candidatas-por-cargo-ocupacao-tab').on('show.bs.tab', function (e) {
    $('#candidatas-por-cargo-ocupacao-2018-tab').tab('show')
    var ctx = document
      .getElementById('candidatasPorCargoOcupacao2018Chart_gov')
      .getContext('2d')
    return new Chart(ctx, {
      type: candidatasPorCargoOcupacao2018_gov['type'],
      data: candidatasPorCargoOcupacao2018_gov['data'],
      options: candidatasPorCargoOcupacao2018_gov['options']
    })
  })
})

// VICE-GOVERNADOR

const candidatasPorCargoOcupacao2018_vice = {
  type: 'bar',
  data: {
    labels: [
      'Vice-Governador',
    ],
    datasets: [{
        label: 'Empresário',
        data: [3],
        backgroundColor: '#CCA142',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Advogado',
        data: [5],
        backgroundColor: '#CBC9CA',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Dona de casa',
        data: [0],
        backgroundColor: '#63304c',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Estudante, Bolsista, Estagiário e Assemelhados',
        data: [1],
        backgroundColor: '#2C9811',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Aposentado (Exceto servidor público)',
        data: [4],
        backgroundColor: '#D36311',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Outros',
        data: [57],
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
      text: 'Candidaturas por cargo e ocupação - Vice-Governador - Eleições 2018'
    }
  }
}

$(document).ready(function () {
  $('#candidatas-por-cargo-ocupacao-tab').on('show.bs.tab', function (e) {
    $('#candidatas-por-cargo-ocupacao-2018-tab').tab('show')
    var ctx = document
      .getElementById('candidatasPorCargoOcupacao2018Chart_vice')
      .getContext('2d')
    return new Chart(ctx, {
      type: candidatasPorCargoOcupacao2018_vice['type'],
      data: candidatasPorCargoOcupacao2018_vice['data'],
      options: candidatasPorCargoOcupacao2018_vice['options']
    })
  })
})


// Senador

const candidatasPorCargoOcupacao2018_sen = {
  type: 'bar',
  data: {
    labels: [
      'Senador',
    ],
    datasets: [{
        label: 'Empresário',
        data: [1],
        backgroundColor: '#CCA142',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Advogado',
        data: [5],
        backgroundColor: '#CBC9CA',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Dona de casa',
        data: [0],
        backgroundColor: '#63304c',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Estudante, Bolsista, Estagiário e Assemelhados',
        data: [1],
        backgroundColor: '#2C9811',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Aposentado (Exceto servidor público)',
        data: [3],
        backgroundColor: '#D36311',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Outros',
        data: [47],
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
      text: 'Candidaturas por cargo e ocupação - Senador - Eleições 2018'
    }
  }
}

$(document).ready(function () {
  $('#candidatas-por-cargo-ocupacao-tab').on('show.bs.tab', function (e) {
    $('#candidatas-por-cargo-ocupacao-2018-tab').tab('show')
    var ctx = document
      .getElementById('candidatasPorCargoOcupacao2018Chart_sen')
      .getContext('2d')
    return new Chart(ctx, {
      type: candidatasPorCargoOcupacao2018_sen['type'],
      data: candidatasPorCargoOcupacao2018_sen['data'],
      options: candidatasPorCargoOcupacao2018_sen['options']
    })
  })
})

// DF

const candidatasPorCargoOcupacao2018_df = {
  type: 'bar',
  data: {
    labels: [
      'Deputado Federal',
    ],
    datasets: [{
        label: 'Empresário',
        data: [174],
        backgroundColor: '#CCA142',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Advogado',
        data: [183],
        backgroundColor: '#CBC9CA',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Dona de casa',
        data: [119],
        backgroundColor: '#63304c',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Estudante, Bolsista, Estagiário e Assemelhados',
        data: [92],
        backgroundColor: '#2C9811',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Aposentado (Exceto servidor público)',
        data: [82],
        backgroundColor: '#D36311',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Outros',
        data: [1773],
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
      text: 'Candidaturas por cargo e ocupação - Dep. Federal - Eleições 2018'
    }
  }
}

$(document).ready(function () {
  $('#candidatas-por-cargo-ocupacao-tab').on('show.bs.tab', function (e) {
    $('#candidatas-por-cargo-ocupacao-2018-tab').tab('show')
    var ctx = document
      .getElementById('candidatasPorCargoOcupacao2018Chart_df')
      .getContext('2d')
    return new Chart(ctx, {
      type: candidatasPorCargoOcupacao2018_df['type'],
      data: candidatasPorCargoOcupacao2018_df['data'],
      options: candidatasPorCargoOcupacao2018_df['options']
    })
  })
})


// DE

const candidatasPorCargoOcupacao2018_de = {
  type: 'bar',
  data: {
    labels: [
      'Deputado Estadual',
    ],
    datasets: [{
        label: 'Empresário',
        data: [319],
        backgroundColor: '#CCA142',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Advogado',
        data: [240],
        backgroundColor: '#CBC9CA',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Dona de casa',
        data: [269],
        backgroundColor: '#63304c',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Estudante, Bolsista, Estagiário e Assemelhados',
        data: [177],
        backgroundColor: '#2C9811',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Aposentado (Exceto servidor público)',
        data: [162],
        backgroundColor: '#D36311',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Outros',
        data: [3858],
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
      text: 'Candidaturas por cargo e ocupação - Dep. Estadual - Eleições 2018'
    }
  }
}

$(document).ready(function () {
  $('#candidatas-por-cargo-ocupacao-tab').on('show.bs.tab', function (e) {
    $('#candidatas-por-cargo-ocupacao-2018-tab').tab('show')
    var ctx = document
      .getElementById('candidatasPorCargoOcupacao2018Chart_de')
      .getContext('2d')
    return new Chart(ctx, {
      type: candidatasPorCargoOcupacao2018_de['type'],
      data: candidatasPorCargoOcupacao2018_de['data'],
      options: candidatasPorCargoOcupacao2018_de['options']
    })
  })
})


//DD

const candidatasPorCargoOcupacao2018_dd = {
  type: 'bar',
  data: {
    labels: [
      'Deputado Distrital'
    ],
    datasets: [{
        label: 'Empresário',
        data: [31],
        backgroundColor: '#CCA142',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Advogado',
        data: [18],
        backgroundColor: '#CBC9CA',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Dona de casa',
        data: [13],
        backgroundColor: '#63304c',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Estudante, Bolsista, Estagiário e Assemelhados',
        data: [6],
        backgroundColor: '#2C9811',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Aposentado (Exceto servidor público)',
        data: [5],
        backgroundColor: '#D36311',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Outros',
        data: [216],
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
      text: 'Candidaturas por cargo e ocupação - Dep. Distrital - Eleições 2018'
    }
  }
}

$(document).ready(function () {
  $('#candidatas-por-cargo-ocupacao-tab').on('show.bs.tab', function (e) {
    $('#candidatas-por-cargo-ocupacao-2018-tab').tab('show')
    var ctx = document
      .getElementById('candidatasPorCargoOcupacao2018Chart_dd')
      .getContext('2d')
    return new Chart(ctx, {
      type: candidatasPorCargoOcupacao2018_dd['type'],
      data: candidatasPorCargoOcupacao2018_dd['data'],
      options: candidatasPorCargoOcupacao2018_dd['options']
    })
  })
})

//1 sup

const candidatasPorCargoOcupacao2018_1sup = {
  type: 'bar',
  data: {
    labels: [
      '1º Suplente'
    ],
    datasets: [{
        label: 'Empresário',
        data: [8],
        backgroundColor: '#CCA142',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Advogado',
        data: [7],
        backgroundColor: '#CBC9CA',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Dona de casa',
        data: [6],
        backgroundColor: '#63304c',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Estudante, Bolsista, Estagiário e Assemelhados',
        data: [1],
        backgroundColor: '#2C9811',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Aposentado (Exceto servidor público)',
        data: [2],
        backgroundColor: '#D36311',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Outros',
        data: [58],
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
      text: 'Candidaturas por cargo e ocupação - 1º Suplente - Eleições 2018'
    }
  }
}

$(document).ready(function () {
  $('#candidatas-por-cargo-ocupacao-tab').on('show.bs.tab', function (e) {
    $('#candidatas-por-cargo-ocupacao-2018-tab').tab('show')
    var ctx = document
      .getElementById('candidatasPorCargoOcupacao2018Chart_1sup')
      .getContext('2d')
    return new Chart(ctx, {
      type: candidatasPorCargoOcupacao2018_1sup['type'],
      data: candidatasPorCargoOcupacao2018_1sup['data'],
      options: candidatasPorCargoOcupacao2018_1sup['options']
    })
  })
})

//2 sup

const candidatasPorCargoOcupacao2018_2sup = {
  type: 'bar',
  data: {
    labels: [
      '2º Suplente'
    ],
    datasets: [{
        label: 'Empresário',
        data: [9],
        backgroundColor: '#CCA142',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Advogado',
        data: [7],
        backgroundColor: '#CBC9CA',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Dona de casa',
        data: [7],
        backgroundColor: '#63304c',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Estudante, Bolsista, Estagiário e Assemelhados',
        data: [1],
        backgroundColor: '#2C9811',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Aposentado (Exceto servidor público)',
        data: [6],
        backgroundColor: '#D36311',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Outros',
        data: [67],
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
      text: 'Candidaturas por cargo e ocupação - 2º Suplente - Eleições 2018'
    }
  }
}

$(document).ready(function () {
  $('#candidatas-por-cargo-ocupacao-tab').on('show.bs.tab', function (e) {
    $('#candidatas-por-cargo-ocupacao-2018-tab').tab('show')
    var ctx = document
      .getElementById('candidatasPorCargoOcupacao2018Chart_2sup')
      .getContext('2d')
    return new Chart(ctx, {
      type: candidatasPorCargoOcupacao2018_2sup['type'],
      data: candidatasPorCargoOcupacao2018_2sup['data'],
      options: candidatasPorCargoOcupacao2018_2sup['options']
    })
  })
})




