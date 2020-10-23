const populacao = {
  type: 'pie',
  data: {
    labels: ['Homens', 'Mulheres'],
    datasets: [
      {
        label: '%',
        data: [48.3, 51.7],
        backgroundColor: ['#be9f4a', '#63304c'],
        borderColor: ['#806829', '#4a2539'],
        borderWidth: 1,
        fontSize: 30
      }
    ]
  },
  options: {
    plugins: {
      labels: {
        fontSize: 20,
        fontColor: '#ffffff',
      }
    },
    showline: false,
    responsive: true,
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      fontSize:22,
      text: 'Porcentagem da população por sexo (IBGE 2018)'
    }
  }
}

window.addEventListener('load', function () {
  var ctxPopulacaoChart = document
    .getElementById('populacaoChart')
    .getContext('2d')
  window.populacaoChart = new Chart(ctxPopulacaoChart, {
    // The type of chart we want to create
    type: populacao['type'],
    // The data for our dataset
    data: populacao['data'],
    // Configuration options go here
    options: populacao['options']
  })

  return window.populacaoChart
})
