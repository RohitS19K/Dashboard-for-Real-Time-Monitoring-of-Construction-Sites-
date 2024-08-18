google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawVisualization);


const ctx = document.getElementById('myLineChart').getContext('2d');
const myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First dataset',
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: true,
    }]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true
      },
      y: {
        beginAtZero: true
      }
    }
  }
});
const ctx2 = document.getElementById('myLineChart2').getContext('2d');
const myLineChart2 = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['Cement' , 'Sand', 'Aggregate', 'Steel', 'tiles'],
    datasets: [{
      label: 'Material Usage',
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: true,
    }]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true
      },
      y: {
        beginAtZero: true
      }
    }
  }
});

function drawVisualization() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    ['Month', 'flooring', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
    ['2004/05', 165, 938, 522, 998, 450, 614.6],
    ['2005/06', 135, 1120, 599, 1268, 288, 682],
    ['2006/07', 157, 1167, 587, 807, 397, 623],
    ['2007/08', 139, 1110, 615, 968, 215, 609.4],
    ['2008/09', 136, 691, 629, 1026, 366, 569.6]
  ]);

  var options = {
    title: 'Monthly Project Completion Report by Labours',
    vAxis: { title: 'No. of Workers' },
    hAxis: { title: 'DAYS' },
    seriesType: 'bars',
    series: { 3: { type: 'line' } }
  };

  var chart = new google.visualization.ComboChart(document.getElementById('box1'));
  chart.draw(data, options);
}