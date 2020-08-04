var numberOfScenes = 5;
var generated = [];
var dataConflict = [];
var dataEmotion = [];
var dataTime = [];


window.addEventListener('load', function () {
	generateSceneArray(numberOfScenes);
	drawConflictGraph();
	drawEmotionGraph();	
	drawTimeGraph();	
})


function generateSceneArray(numberOfScenes) {
	for (var i = 0; i <= numberOfScenes; i++) {
		generated.push("Scene " + (i + 1));
		dataConflict.push(Math.floor((Math.random() * 5)));
		dataEmotion.push(Math.floor((Math.random() * 6)));
		dataTime.push(Math.round((Math.random() * 1)));

	}



}





function drawConflictGraph() {
	var options = {
        type: 'line',
        data: {
          labels: generated,
          datasets: [{
              label: 'Conflict Degrees',
              data: dataConflict,
              borderWidth: 1,
              pointHitRadius: 25,
              borderColor: 'rgba(0,191,255, 0.8)',
              borderWidth: 6,
              pointBackgroundColor: 'rgba(255, 255, 255, 0.9)',
              pointBorderColor: 'rgba(65,105,225, 0.9)',
              pointRadius: 6
            }
            
          ]
        },
        options: {
          scales: {
            yAxes: [{

              ticks: {
                reverse: false,
                min: 0,
                max: 5.49,
                stepSize: 1,
                callback: function(label, index, labels) {
	            switch (label) {
	            case 0:
	                return '0';
	            case 1:
	                return '1';
	            case 2:
	                return '2';
	            case 3:
	                return '3';
	            case 4:
	                return '4';
	            case 5:
	                return '5';
                case 5.49:
                    return '';
	            
              }}}
            }]
          },
          dragData: true,
          dragDataRound: 1,
          dragOptions: {
            showTooltip: true,
            magnet: {
                to: Math.round
              }
          },
          onDragStart: function(e) {
            // console.log(e)
          },
          onDrag: function(e, datasetIndex, index, value) {
            e.target.style.cursor = 'grabbing'
            // console.log(datasetIndex, index, value)
          },
          onDragEnd: function(e, datasetIndex, index, value) {
            e.target.style.cursor = 'default' 
            console.log(datasetIndex, index, value)
          },
          hover: {
            onHover: function(e) {
              const point = this.getElementAtEvent(e)
              if (point.length) e.target.style.cursor = 'grab'
              else e.target.style.cursor = 'default'
            }
          }
        }
      }

      var ctx = document.getElementById('conflict-canvas').getContext('2d');
      window.conflictCanvas = new Chart(ctx, options);
      conflictCanvas.canvas.parentNode.style.height = '300px';
      conflictCanvas.canvas.parentNode.style.width = '800px';
      conflictCanvas.responsive = true;
}


function drawEmotionGraph() {
	var options = {
        type: 'line',
        data: {
          labels: generated,
          datasets: [{
              label: 'Emotion Degrees',
              data: dataEmotion,
              borderWidth: 1,
              pointHitRadius: 25,
              borderColor: 'rgba(0,191,255, 0.8)',
              borderWidth: 6,
              pointBackgroundColor: 'rgba(255, 255, 255, 0.9)',
              pointBorderColor: 'rgba(65,105,225, 0.9)',
              pointRadius: 6
            }
            
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                reverse: false,
                min: 0,
                max: 5.49,
                callback: function(label, index, labels) {
	            switch (label) {
	            case 0:
	                return 'HAPPY';
	            case 1:
	                return 'NEUTRAL';
	            case 2:
	                return 'SAD';
	            case 3:
	                return 'DISGUSTED';
	            case 4:
	                return 'FEAR';
	            case 5:
	                return 'ANGRY';
                case 5.49:
                    return '';

        		}
    }
              }
            }]
          },
          dragData: true,
          dragDataRound: 1,
          dragOptions: {
            showTooltip: true,
            magnet: {
                to: Math.round
              }
          },
          onDragStart: function(e) {
            // console.log(e)
          },
          onDrag: function(e, datasetIndex, index, value) {
            e.target.style.cursor = 'grabbing'
            // console.log(datasetIndex, index, value)
          },
          onDragEnd: function(e, datasetIndex, index, value) {
            e.target.style.cursor = 'default' 
            console.log(datasetIndex, index, value)
          },
          hover: {
            onHover: function(e) {
              const point = this.getElementAtEvent(e)
              if (point.length) e.target.style.cursor = 'grab'
              else e.target.style.cursor = 'default'
            }
          }
        }
      }

      var ctx = document.getElementById('emotion-canvas').getContext('2d');
      window.emotionCanvas = new Chart(ctx, options);
      emotionCanvas.canvas.parentNode.style.height = '300px';
      emotionCanvas.canvas.parentNode.style.width = '800px';
      emotionCanvas.responsive = true;
}

function drawTimeGraph() {
	var options = {
        type: 'line',
        data: {
          labels: generated,
          datasets: [{
              label: 'Time Degrees',
              data: dataTime,
              borderWidth: 1,
              pointHitRadius: 25,
              borderColor: 'rgba(0,191,255, 0.8)',
              borderWidth: 6,
              pointBackgroundColor: 'rgba(255, 255, 255, 0.9)',
              pointBorderColor: 'rgba(65,105,225, 0.9)',
              pointRadius: 6
            }
            
          ]
        },
        options: {
          scales: {
            yAxes: [{

              ticks: {
                reverse: false,
                min: 0,
                max: 1.49,
                suggestedMax: 1.5,
                callback: function(label, index, labels) {
	            switch (label) {
	            case 0:
	                return 'NIGHT';
	            case 1:
	                return 'DAY';
	            case 1.49:
	                return '';   
	            
        		}
    }
              }
            }]
          },
          dragData: true,
          dragDataRound: 1,
          dragOptions: {
            showTooltip: true,
            magnet: {
                to: Math.round
              }
          },
          onDragStart: function(e) {
            // console.log(e)
          },
          onDrag: function(e, datasetIndex, index, value) {
            e.target.style.cursor = 'grabbing'
            // console.log(datasetIndex, index, value)
          },
          onDragEnd: function(e, datasetIndex, index, value) {
            e.target.style.cursor = 'default' 
            console.log(datasetIndex, index, value)
          },
          hover: {
            onHover: function(e) {
              const point = this.getElementAtEvent(e)
              if (point.length) e.target.style.cursor = 'grab'
              else e.target.style.cursor = 'default'
            }
          }
        }
      }

      var ctx = document.getElementById('time-canvas').getContext('2d');
      window.timeCanvas = new Chart(ctx, options);
      timeCanvas.canvas.parentNode.style.height = '300px';
      timeCanvas.canvas.parentNode.style.width = '800px';
      timeCanvas.responsive = true;
}