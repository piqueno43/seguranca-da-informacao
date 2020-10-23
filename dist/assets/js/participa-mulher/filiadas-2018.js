const filiadas2018 = {
  type: 'horizontalBar',
  data: {
    labels: ['AVANTE', 'DC', 'DEM', 'MDB', 'NOVO', 'PATRI', 'PC DO B', 'PCB', 'PCO', 'PDT', 'PHS', 'PL', 'PMB', 'PMN', 'PODE', 'PP', 'PPL', 'PPS', 'PRB', 'PROS', 'PRP', 'PRTB', 'PSB', 'PSC', 'PSD', 'PSDB', 'PSL', 'PSOL', 'PSTU', 'PT', 'PTB', 'PTC', 'PV', 'REDE', 'SOLIDARIEDADE'],
    datasets: [
      {
        label: 'Feminino',
        data: [84009, 83278, 475267, 1075564, 3944, 31667, 177978, 6573, 1468, 557570, 94901, 354885, 23642, 100177, 71344, 642176, 17510, 200741, 204491, 39281, 112267, 60135, 282994, 186099, 135425, 650337, 100125, 67715, 7851, 708061, 535740, 87043, 156918, 8994, 97752],
        backgroundColor: '#63304c',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Masculino',
        data: [102711, 103418, 609976, 1311252, 22272, 48394, 218658, 8009, 2260, 696641, 120001, 440966, 19228, 120776, 95432, 799745, 22812, 277672, 193713, 58117, 137755, 78290, 371513, 236267, 191786, 805275, 140173, 82500, 9286, 876873, 653180, 111857, 218864, 14898, 115383],
        backgroundColor: '#be9f4a',
        borderColor: '#806829',
        borderWidth: 1
      },
      {
        label: 'Não informado',
        data: [489, 435, 8489, 6497, 4, 24, 1161, 122, 2, 3198, 434, 1420, 16, 357, 456, 3123, 10, 2708, 487, 19, 634, 402, 1763, 867, 97, 4895, 854, 82, 15, 8036, 3208, 373, 903, 10, 64],
        backgroundColor: '#c9c7c8',
        borderColor: '#757475',
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
      text: 'Filiados segundo gênero e partido – Eleições 2018',
      fontSize:22
    },
    scales: {
      xAxes: [
        {
          stacked: true
        }
      ],
      yAxes: [
        {
          stacked: true
        }
      ]
    }
  }
}

$(document).ready(function () {
  $('#filiadas-tab').on('show.bs.tab', function (e) {    
    $('#filiadas-tab-2018').tab('show')
    var ctx2018 = document.getElementById('filiadasChart2018').getContext('2d')
    return new Chart(ctx2018, {
      type: filiadas2018['type'],
      data: filiadas2018['data'],
      options: filiadas2018['options']
    })
  })
})



