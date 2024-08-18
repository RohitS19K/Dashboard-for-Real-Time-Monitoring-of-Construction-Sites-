// const sideMenu = document.querySelector ('aside');
// const menuBtn = document.querySelector ('#menu_bar');
// const closeBtn = document.querySelector ('#close_btn');

// const themeToggler = document.querySelector('.theme-toggler');

// menuBtn.addEventListener('click', ()=>{
//    menuBtn.style.display = "block";
// })
// menuBtn.addEventListener('click', ()=>{
//    closeBtn.style.display = "none";
// });


google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    ['Month', 'WORKER', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
    ['2004/05',  165,      938,         522,             998,           450,      614.6],
    ['2005/06',  135,      1120,        599,             1268,          288,      682],
    ['2006/07',  157,      1167,        587,             807,           397,      623],
    ['2007/08',  139,      1110,        615,             968,           215,      609.4],
    ['2008/09',  136,      691,         629,             1026,          366,      569.6]
  ]);

  var options = {
    title : 'Monthly Progress',
    vAxis: {title: 'Workers'},
    hAxis: {title: 'Month'},
    seriesType: 'bars',
    series: {5: {type: 'line'}}
  };

  var chart = new google.visualization.ComboChart(document.getElementById('line'));
  chart.draw(data, options);
}
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Time', 'Hours per Day'],
          ['Cement',     11],
          ['Sand',      2],
          ['Bricks',  2],
          ['Steel', 2],
          ['Aggregate',    7]
        ]);

        var options = {
          title: 'Raw Material'
        };

        var chart = new google.visualization.PieChart(document.getElementById('bar'));

        chart.draw(data, options);
      }