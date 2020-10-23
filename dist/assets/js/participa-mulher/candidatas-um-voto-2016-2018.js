var candidatasUmVoto = {
  type:'bar',
  data: {
    labels: ['Total'],
    datasets: [
      {
        label: 'Feminino',
        data: [6773],
        backgroundColor: '#63304c',
        borderColor: '#4a2539',
        borderWidth: 1
      },
      {
        label: 'Masculino',
        data: [1046],
        backgroundColor: '#be9f4a',
        borderColor: '#806829',
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
      text: 'Candidatas com um voto - 2018 e 2016'
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
  $('#candidatas-um-voto-tab').on('show.bs.tab', function (e) {
    var ctx = document
      .getElementById('candidatasUmVotoChart')
      .getContext('2d')
    return new Chart(ctx, {
      type: candidatasUmVoto['type'],
      data: candidatasUmVoto['data'],
      options: candidatasUmVoto['options']
    })
  })
})
