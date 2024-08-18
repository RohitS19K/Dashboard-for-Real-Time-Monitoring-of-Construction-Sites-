// Replace with your OpenWeatherMap API key
const apiKey = '8e7d514b9b9f283a3bc7d85b44d64b46';
const city = 'Indore';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

async function fetchWeatherData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Extract necessary data
        const temperature = data.main.temp;
        const condition = data.weather[0].description;
        const currentTime = new Date().toLocaleTimeString();

        // Update HTML content
        document.getElementById('UNITS').textContent = `${temperature}°C`;
        document.getElementById('Condition').textContent = condition.charAt(0).toUpperCase() + condition.slice(1);
        document.getElementById('Time').textContent = currentTime;
        document.getElementById('')
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Call the function to fetch weather data
fetchWeatherData();

//   var chart = new CanvasJS.Chart("chartContainer", {            
//     title:{
//       text: "Weekly Weather Forecast"              
//     },
//     axisY: {
//       suffix: " °C",
//       maximum: 40,
//       gridThickness: 0
//     },
//     toolTip:{
//       shared: true,
//       content: "{name} </br> <strong>Temperature: </strong> </br> Min: {y[0]} °C, Max: {y[1]} °C"
//     },
//     data: [{
//       type: "rangeSplineArea",
//       fillOpacity: 0.1,
//       color: "#91AAB1",
//       indexLabelFormatter: formatter,
//       dataPoints: [
//         { label: "Monday", y: [15, 26], name: "rainy" },
//         { label: "Tuesday", y: [15, 27], name: "rainy" },
//         { label: "Wednesday", y: [13, 27], name: "sunny" },
//         { label: "Thursday", y: [14, 27], name: "sunny" },
//         { label: "Friday", y: [15, 26], name: "cloudy" },
//         { label: "Saturday", y: [17, 26], name: "sunny" },
//         { label: "Sunday", y: [16, 27], name: "rainy" }
//       ]
//     }]
//   });
//   chart.render();
  
//   var images = [];    
  
//   addImages(chart);
  
//   function addImages(chart) {
//     for(var i = 0; i < chart.data[0].dataPoints.length; i++){
//       var dpsName = chart.data[0].dataPoints[i].name;
//       if(dpsName == "cloudy"){
//         images.push($("<img>").attr("src", "https://canvasjs.com/wp-content/uploads/images/gallery/gallery-overview/cloudy.png"));
//       } else if(dpsName == "rainy"){
//       images.push($("<img>").attr("src", "https://canvasjs.com/wp-content/uploads/images/gallery/gallery-overview/rainy.png"));
//       } else if(dpsName == "sunny"){
//         images.push($("<img>").attr("src", "https://canvasjs.com/wp-content/uploads/images/gallery/gallery-overview/sunny.png"));
//       }
  
//     images[i].attr("class", dpsName).appendTo($("#chartContainer>.canvasjs-chart-container"));
//     positionImage(images[i], i);
//     }
//   }
  
//   function positionImage(image, index) {
//     var imageCenter = chart.axisX[0].convertValueToPixel(chart.data[0].dataPoints[index].x);
//     var imageTop =  chart.axisY[0].convertValueToPixel(chart.axisY[0].maximum);
  
//     image.width("40px")
//     .css({ "left": imageCenter - 20 + "px",
//     "position": "absolute","top":imageTop + "px",
//     "position": "absolute"});
//   }
  
//   $( window ).resize(function() {
//     var cloudyCounter = 0, rainyCounter = 0, sunnyCounter = 0;    
//     var imageCenter = 0;
//     for(var i=0;i<chart.data[0].dataPoints.length;i++) {
//       imageCenter = chart.axisX[0].convertValueToPixel(chart.data[0].dataPoints[i].x) - 20;
//       if(chart.data[0].dataPoints[i].name == "cloudy") {					
//         $(".cloudy").eq(cloudyCounter++).css({ "left": imageCenter});
//       } else if(chart.data[0].dataPoints[i].name == "rainy") {
//         $(".rainy").eq(rainyCounter++).css({ "left": imageCenter});  
//       } else if(chart.data[0].dataPoints[i].name == "sunny") {
//         $(".sunny").eq(sunnyCounter++).css({ "left": imageCenter});  
//       }                
//     }
//   });
  
//   function formatter(e) { 
//     if(e.index === 0 && e.dataPoint.x === 0) {
//       return " Min " + e.dataPoint.y[e.index] + "°";
//     } else if(e.index == 1 && e.dataPoint.x === 0) {
//       return " Max " + e.dataPoint.y[e.index] + "°";
//     } else{
//       return e.dataPoint.y[e.index] + "°";
//     }
//   } 
  
//   }