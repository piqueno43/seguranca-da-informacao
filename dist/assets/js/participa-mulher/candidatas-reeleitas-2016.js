const candidatasReeleitas2016 = {
  type:'horizontalBar',
  data: {
    labels: ['Prefeito', 'Vereador', 'Vice-prefeito'],
    datasets: [
      {
        label: 'Feminino',
        data: [140, 2071, 126],
        backgroundColor: '#63304c',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Masculino',
        data: [1097, 15771, 634],
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
      text: 'Reeleitas - Cargo e gênero - Eleições 2016'
    },
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{ stacked: true }]
    }
  }
}
$(document).ready(function () {
  $('#candidatas-reeleitas-2016-tab').on('show.bs.tab', function (e) {
    var ctx = document
      .getElementById('candidatasReeleitas2016Chart')
      .getContext('2d')
    return new Chart(ctx, {
      type: candidatasReeleitas2016['type'],
      data: candidatasReeleitas2016['data'],
      options: candidatasReeleitas2016['options']
    })
  })
})
