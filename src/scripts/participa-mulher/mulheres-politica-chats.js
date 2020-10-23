$(function () {
  $('a[data-toggle="tab"]').on('click', function (e) {
    localStorage.setItem('activeTab', $(e.target).attr('href'))
  })
  activeTab = localStorage.getItem('activeTab')
  if (activeTab) {
    $('a[href="' + activeTab + '"]').tab('show')
    localStorage.removeItem('activeTab')
  }

  // Checar as abas com a classe ativa
  if ($('a[data-toggle="tab"]').hasClass('active')) {
    const getIdTab = $('a[data-toggle="tab"].active')
      .attr('id')
      .replace(/-tab$/, '')

    const getChart = document
      .getElementById(getIdTab + 'Chart')
      .getContext('2d')

    if (getChart) {
      let novoResultados= []
      $.getJSON('js/' + getIdTab + '.json', function (data) {
        
      })      
      console.log(novoResultados);
    }
  }
})
