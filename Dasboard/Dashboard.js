
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Maths',     11],
          ['English',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          title: 'Your subject wise marks'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piebar'));

        chart.draw(data, options);
      }



google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Maths',     11],
          ['English',      2],
          ['Hindi',  2],
          ['Science', 2],
          ['environmental',    7]
        ]);

        var options = {
          title: 'your Subject wise marks'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piebar'));

        chart.draw(data, options);
      }
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          title: 'My Daily Activities'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piebar'));

        chart.draw(data, options);
      }