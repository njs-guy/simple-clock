 function setClock(){
	 const clock = document.getElementById("clock");
	 const clockText = document.getElementById("clock-text");

	 let currentTime = new Date();
	 let currentHour = currentTime.getHours();
	 let currentMinute = currentTime.getMinutes();
	 let currentSecond = currentTime.getSeconds();

	 let timeArr = [leadingZero(currentHour), leadingZero(currentMinute), leadingZero(currentSecond)];
	 console.log(timeArr);

	 let timeText  = timeArr[0] + " : " + timeArr[1] + " : " + timeArr[2];
	 clockText.innerHTML = timeText;
}

function leadingZero(x){
	if(x>=0 && x<=10 ){
		x = "0" + String(x);
		return x;
	} else {
		return String(x);
	}
}

setClock(); // sets clock as soon as the page loads

let i = setInterval(setClock, 1000); // sets clock every second
