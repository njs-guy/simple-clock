// Sets the clock displayed on screen

// Main function to set time
function setClock(){
	 const clock = document.getElementById("clock");
	 const clockText = document.getElementById("clock-text");

	 let twelveHrClock = true;
	 let currentTime = new Date();
	 let currentHour = currentTime.getHours();
	 let currentMinute = currentTime.getMinutes();
	 let currentSecond = currentTime.getSeconds();

	 let timeArr = [leadingZero(currentHour), leadingZero(currentMinute), leadingZero(currentSecond)];

	 let timeText = "";

	 if(twelveHrClock){
		 timeText = convertTo12Hr(timeArr);
	 } else {
		 timeText = createClockOutput(timeArr);
	 }

	clockText.innerHTML = timeText;
}

// Creates leading zeroes (ex: 14:05:07)
function leadingZero(x){
	if(x>=0 && x<=10){
		x = "0" + String(x);
		return x;
	} else {
		return String(x);
	}
}

// Creates the text that displays the time (ex: 00:00:00)
function createClockOutput(tArr){
	console.log(tArr.join(":"));
	return tArr.join(":");
}

// Converts the 24 hour time to 12 hour time (ex: 01:27:45 PM)
function convertTo12Hr(tArr) {
	h = parseInt(tArr[0]);
	output = "";

	if (h >= 13){
		h -= 12;
		output = createClockOutput([h,tArr[1],tArr[2]]);
		output += " PM";
	} else {
		output = createClockOutput(tArr);
		output += " AM";
	}

	return output;
}

setClock(); // sets clock as soon as the page loads

let i = setInterval(setClock, 1000); // sets clock every second
