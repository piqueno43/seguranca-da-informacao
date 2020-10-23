// Prefeito

/*const candidatasPorCargoPartido2016_prefeito = {
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
                data: [90, 1, 56, 0, 2, 106, 15, 25, 18, 308, 15, 147, 6, 40, 124, 45, 34, 16, 7, 142, 34, 190, 209, 9, 22, 44, 16, 132, 9, 84, 15, 19, 42, 20, 25],
                backgroundColor: '#63304c',
                borderColor: '#4a2539',
                borderWidth: 1,
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
            text: 'Candidaturas por cargo e partido - Eleições 2016 - Prefeito'
        },
    }
}*/


/*$(document).ready(function () {
    $('#candidatas-por-cargo-partido-2016-tab').on('show.bs.tab', function (e) {
        var ctx = document
            .getElementById('candidatasPorCargoPartido2016Chart_prefeito')
            .getContext('2d')
        return new Chart(ctx, {
            type: candidatasPorCargoPartido2016_prefeito['type'],
            data: candidatasPorCargoPartido2016_prefeito['data'],
            options: candidatasPorCargoPartido2016_prefeito['options']
        })
    })
})*/


new Chart(document.getElementById("candidatasPorCargoPartido2016Chart_prefeito"), {
    "type": "bar",
    "data": {
        "labels": [ "DEM", "NOVO", "PC do B", "PCB", "PCO", "PDT", "PEN", "PHS", "PMB", "PMDB", "PMN", "PP", "PPL", "PPS", "PR", "PRB", "PROS", "PRP", "PRTB", "PSB", "PSC", "PSD", "PSDB", "PSDC", "PSL", "PSOL", "PSTU", "PT", "PT do B", "PTB", "PTC", "PTN", "PV", "REDE", "SD" ],
        "datasets": [{
            "label": "Prefeito",
            "data": [90, 1, 56, 0, 2, 106, 15, 25, 18, 308, 15, 147, 6, 40, 124, 45, 34, 16, 7, 142, 34, 190, 209, 9, 22, 44, 16, 132, 9, 84, 15, 19, 42, 20, 25],
            "fill": true,
            "backgroundColor": "#63304c",
            "borderColor": "#4a2539",
            "pointBackgroundColor": "#4a2539",
            "pointBorderColor": "#fff",
            "pointHoverBackgroundColor": "#fff",
            "pointHoverBorderColor": "#4a2539"
        }]
    },
    "options": {
        "elements": {
            "line": {
                "tension": 0,
                "borderWidth": 3
            }
        },
        title: {
            display: true,
            fontSize: 22,
            text: 'Candidaturas por cargo e partido - Eleições 2016 - Prefeito'
        },
        legend: {
            display: false

        }
    }
});

// Vice Prefeito

/*const candidatasPorCargoPartido2016_vicePrefeito = {
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
        datasets: [{
                label: 'Feminino',
                data: [130, 0, 64, 4, 4, 138, 43, 52, 38, 269, 39, 152, 17, 74, 125, 75, 64, 41, 28, 144, 75, 172, 191, 31, 39, 100, 18, 200, 38, 150, 25, 41, 65, 44, 75],
                backgroundColor: '#63304c',
                borderColor: '#4a2539',
                borderWidth: 1
      },

    ]
    },
    options: {
        responsive: true,
        legend: {
            display: false

        },
        title: {
            display: true,
            fontSize: 22,
            text: 'Candidaturas por cargo e partido - Eleições 2016 - Vice-Prefeito'
        }
    }
}
$(document).ready(function () {
    $('#candidatas-por-cargo-partido-2016-tab').on('show.bs.tab', function (e) {
        var ctx = document
            .getElementById('candidatasPorCargoPartido2016Chart_vicePrefeito')
            .getContext('2d')
        return new Chart(ctx, {
            type: candidatasPorCargoPartido2016_vicePrefeito['type'],
            data: candidatasPorCargoPartido2016_vicePrefeito['data'],
            options: candidatasPorCargoPartido2016_vicePrefeito['options']
        })
    })
})*/

new Chart(document.getElementById("candidatasPorCargoPartido2016Chart_vicePrefeito"), {
    "type": "bar",
    "data": {
        "labels": [ "DEM", "NOVO", "PC do B", "PCB", "PCO", "PDT", "PEN", "PHS", "PMB", "PMDB", "PMN", "PP", "PPL", "PPS", "PR", "PRB", "PROS", "PRP", "PRTB", "PSB", "PSC", "PSD", "PSDB", "PSDC", "PSL", "PSOL", "PSTU", "PT", "PT do B", "PTB", "PTC", "PTN", "PV", "REDE", "SD" ],
        "datasets": [{
            "label": "Vice Prefeito",
            "data": [130, 0, 64, 4, 4, 138, 43, 52, 38, 269, 39, 152, 17, 74, 125, 75, 64, 41, 28, 144, 75, 172, 191, 31, 39, 100, 18, 200, 38, 150, 25, 41, 65, 44, 75],
            "fill": true,
            "backgroundColor": "#63304c",
            "borderColor": "#4a2539",
            "pointBackgroundColor": "#4a2539",
            "pointBorderColor": "#fff",
            "pointHoverBackgroundColor": "#fff",
            "pointHoverBorderColor": "#4a2539"
        }]
    },
    "options": {
        "elements": {
            "line": {
                "tension": 0,
                "borderWidth": 3
            }            
        },
        title: {
            display: true,
            fontSize: 22,
            text: 'Candidaturas por cargo e partido - Eleições 2016 - Vice-Prefeito'
        },
        legend: {
            display: false

        }
    }
});

// Vereador

/*const candidatasPorCargoPartido2016_vereador = {
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
        datasets: [{
                label: 'Feminino',
                data: [6317, 43, 3576, 68, 11, 7281, 2970, 3417, 1750, 12819, 2125, 8026, 1011, 4706, 6421, 5217, 3064, 2468, 1838, 7535, 4665, 8179, 10194, 2172, 3033, 1438, 86, 7330, 2156, 6427, 2573, 2835, 4967, 1024, 4329],
                backgroundColor: '#63304c',
                borderColor: '#4a2539',
                borderWidth: 1
      },

    ]
    },
    options: {
        responsive: true,
        legend: {
            display: false

        },
        title: {
            display: true,
            fontSize: 22,
            text: 'Candidaturas por cargo e partido - Eleições 2016 - Vereador'
        }
    }
}
$(document).ready(function () {
    $('#candidatas-por-cargo-partido-2016-tab').on('show.bs.tab', function (e) {
        var ctx = document
            .getElementById('candidatasPorCargoPartido2016Chart_vereador')
            .getContext('2d')
        return new Chart(ctx, {
            type: candidatasPorCargoPartido2016_vereador['type'],
            data: candidatasPorCargoPartido2016_vereador['data'],
            options: candidatasPorCargoPartido2016_vereador['options']
        })
    })
})*/

new Chart(document.getElementById("candidatasPorCargoPartido2016Chart_vereador"), {
    "type": "bar",
    "data": {
        "labels": [ "DEM", "NOVO", "PC do B", "PCB", "PCO", "PDT", "PEN", "PHS", "PMB", "PMDB", "PMN", "PP", "PPL", "PPS", "PR", "PRB", "PROS", "PRP", "PRTB", "PSB", "PSC", "PSD", "PSDB", "PSDC", "PSL", "PSOL", "PSTU", "PT", "PT do B", "PTB", "PTC", "PTN", "PV", "REDE", "SD" ],
        "datasets": [{
            "label": "Feminino",
            "data": [6317, 43, 3576, 68, 11, 7281, 2970, 3417, 1750, 12819, 2125, 8026, 1011, 4706, 6421, 5217, 3064, 2468, 1838, 7535, 4665, 8179, 10194, 2172, 3033, 1438, 86, 7330, 2156, 6427, 2573, 2835, 4967, 1024, 4329],
            "fill": true,
            "backgroundColor": "#63304c",
            "borderColor": "#4a2539",
            "pointBackgroundColor": "#4a2539",
            "pointBorderColor": "#fff",
            "pointHoverBackgroundColor": "#fff",
            "pointHoverBorderColor": "#4a2539"
        }]
    },
    "options": {
        "elements": {
            "line": {
                "tension": 0,
                "borderWidth": 3
            }
        },
        title: {
            display: true,
            fontSize: 22,
            text: 'Candidaturas por cargo e partido - Eleições 2016 - Vereador'
        },
        legend: {
            display: false

        }
    }
});