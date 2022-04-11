 function setClock(){
	 const clock = document.getElementById("clock");
	 let currentTime = new Date();
	 let currentHour = currentTime.getHours();
	 let currentMinute = currentTime.getMinutes();
	 let currentSeconds = currentTime.getSeconds();
	 let clockText = document.createTextNode(currentHour + " : " + currentMinute + " : " + currentSeconds);

	 console.log(clockText);
	 clock.appendChild(clockText);
 }

setClock();
