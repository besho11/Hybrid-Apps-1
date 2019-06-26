	watchID = null;

	$(document).ready(function(){ 

	onDeviceReady(); });
     
	function onDeviceReady() {
	
     	startWatch();
    }
	
	function startWatch() {
	previousReading = {
    x: null,
    y: null,
    z: null
  }
	
var options = { frequency: 200 };
        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);	
		
    }

    function onSuccess(acceleration) {
						
			
var changes = {};
bound = 4;
if (previousReading.x !== null)  //not first time

{
      changes.x = Math.abs(previousReading.x, acceleration.x);
      changes.y = Math.abs(previousReading.y, acceleration.y);
   }
    if (changes.x > bound ) {
      
      stopWatch();
	rolldice();
	
    }
	

    previousReading = {
      x: acceleration.x,
      y: acceleration.y,
      z: acceleration.z
    }			 
	}
	
	
	function stopWatch() {
        if (watchID) {  
            navigator.accelerometer.clearWatch(watchID);
	 		countMe = 0;
            watchID = null;
			
			
        }
    }

	
	
    // onError: Failed to get the acceleration
    function onError() {
       $('#status').text('OnError has happened...').css('color','red');
    }
	
	//rollDice
function rolldice()
{

    var randomdice = Math.round(Math.random()*5+1)
     var randomdice2 = Math.round(Math.random()*5+1)
	 mydice.src= "d"+randomdice+".gif";
	 mydice2.src= "d"+randomdice2+".gif"
	
    die1.innerHTML = randomdice;
    die2.innerHTML = randomdice2;
    if(randomdice == randomdice2){
      messages.innerHTML = " DOUBLES! You Win";
      var SuccMedia = new Media('/android_asset/www/win.wav');		
         SuccMedia.play();
		}
		else{
		messages.innerHTML = "You loss! Play again";
		
		}
		

}

function exitFromApp()
             {
                navigator.app.exitApp();
             }
