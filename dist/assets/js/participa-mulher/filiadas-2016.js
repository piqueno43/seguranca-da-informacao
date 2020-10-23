const filiadas2016 = {
  type: 'horizontalBar',
  data: {
    labels: ['AVANTE', 'DC', 'DEM', 'MDB', 'NOVO', 'PATRI', 'PC DO B', 'PCB', 'PCO', 'PDT', 'PHS', 'PL', 'PMB', 'PMN', 'PODE', 'PP', 'PPL', 'PPS', 'PRB', 'PROS', 'PRP', 'PRTB', 'PSB', 'PSC', 'PSD', 'PSDB', 'PSL', 'PSOL', 'PSTU', 'PT', 'PTB', 'PTC', 'PV', 'REDE', 'SOLIDARIEDADE'],
    datasets: [
      {
        label: 'Feminino',
        data: [83192,82689, 475743, 1076582, 957, 29341, 174577, 6615, 1211, 552959, 92036,355.192,20.959, 100564, 68927, 636906, 17171, 200728, 198808, 36424, 111992,59101, 278015, 185176, 129750, 643091, 98286, 53030, 7943, 702968, 534771, 86550, 156080, 6214, 81281],
        backgroundColor: '#63304c',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Masculino',
        data: [101775, 103090, 611655, 1317555, 7862, 43274, 216141, 8089, 1721, 693969, 117836, 442428, 17265, 122461, 92084, 797346, 22340, 278800, 189908, 54534, 137699, 76653, 368218, 235413, 187369, 797859, 127295, 69366, 9439, 875029, 654417, 111382, 219285, 11435 , 99645],
        backgroundColor: '#be9f4a',
        borderColor: '#806829',
        borderWidth: 1
      },
      {
        label: 'Não informado',
        data: [540, 483, 8858, 7419, 3, 30, 1267, 126, 5, 3544, 460, 1681, 18, 474, 497, 3635, 20, 2887, 573, 26, 717, 435, 1.964, 991, 145, 5361, 922, 109, 21, 8524, 3676, 446, 992, 12, 84],
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
      text: 'Filiados segundo gênero e partido – Eleições 2016',
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
  $('#filiadas2016-tab').on('show.bs.tab', function (e) {
    var ctx2016 = document.getElementById('filiadasChart2016').getContext('2d')
    return new Chart(ctx2016, {
      type: filiadas2016['type'],
      data: filiadas2016['data'],
      options: filiadas2016['options']
    })
  })
})
