 function setClock(){
	 const clock = document.getElementById("clock");
	 const clockText = document.getElementById("clock-text");

	 let currentTime = new Date();
	 let currentHour = currentTime.getHours();
	 let currentMinute = currentTime.getMinutes();
	 let currentSecond = currentTime.getSeconds();
	 let timeText  = currentHour + " : " + currentMinute + " : " + currentSecond;
	 clockText.innerHTML = timeText;
}
setClock(); // sets clock as soon as the page loads

let i = setInterval(setClock, 1000); // sets clock every second
