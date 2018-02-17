//Change circle gauge (number,string id,number,number,boolean,string)
function changeCircle(value,displayAs,start,end,usePercent,unit='') {
	var spinCircle = document.getElementById("circleGauge" + displayAs);
	var gaugeText = document.getElementById("circleGaugeText" + displayAs);
	var startLimit = document.getElementById("startLimit" + displayAs);
	var endLimit = document.getElementById("endLimit" + displayAs);
	if (value > end) {
		value = end;
	}
	else if (value < start) {
		value = start;
	}
	startLimit.innerHTML = start;
	endLimit.innerHTML = end;

	//scale the start and end of the gauge to begin at 0
	end = end-start;
	start=0;
	console.log("Start is " + start + " and end is " + end);
	var newDegrees;
	var percentage = (((value/100)*end)/end);
	if (usePercent) {
		newDegrees = ((((value/100)*end)/end)*180)-90;
		gaugeText.innerHTML = value + "%";
	}
	//use the literal value
	else {
		gaugeText.innerHTML = value + unit;
		newDegrees = (value/end)*180-90;
		console.log(newDegrees + ", start is " + start + " end is " + end + ", value is " + value);
	}
    spinCircle.style.fill = "rgb(" + parseInt((((percentage) * 72) + 23)) + "," + parseInt((((percentage) * -124) + 197)) + "," + parseInt((((percentage) * -50) + 218)) + ")";
    spinCircle.style.transform = "translate3d(-00px,00px,0px) rotate(" + newDegrees + "deg)";
}
//Change boolean gauge (boolean,string id, boolean)
function changeSwitch(value,displayAs,on) {
	var green = document.getElementById("switchGreen" + displayAs);
	var red = document.getElementById("switchRed" + displayAs);
	if(on) {
		red.style.opacity = "100";
		green.style.opacity = "100";
		if (value) {
			console.log("ran1")
			red.style.transform = "translateY(-35px) translateX(-100px)"
			green.style.transform = "translateX(0px)";
		}
		else {
			console.log('ran2');
			green.style.transform = "translateX(100px)"
			red.style.transform = "translateY(-35px) translateX(0px)";
		}
	}
	else {
		red.style.opacity = "0";
		green.style.transform = "translateX(100px)";
		red.style.transform = "translateX(-100px) translateY(-35px)"
		green.style.opacity = "0";
	}
}
//Change numberIndicator (number,number,number,string id, string)
function changeNumber(value,limitLow,limitHigh, displayAs,unit) {
	var text = document.getElementById("numberReadoutValue" + displayAs);
	var element = document.getElementById("numberReadout" + displayAs);
	text.innerHTML = value + unit;
	textFit(element,{alignVert: true, alignHoriz: true});
	if (limitHigh != 0 && value > limitHigh) {
		element.style.background = "rgb(255,0,0)";
	}
	else if (limitLow != 0 && value < limitLow) {
		element.style.background = "rgb(255,0,0)";
	}
}
//Change arrow direction (boolean, string id)
function changeArrow(value,displayAs) {
	var arrow = document.getElementById("arrowUp" + displayAs);
	var box = document.getElementById("arrow" + displayAs);
	if (value) {
		box.style.transform = "rotate(0deg)";
		arrow.style.animationName = "pulseUp";
	}
	else {
		box.style.transform = "rotate(180deg)";
		arrow.style.animationName = "pulseDown";
	}
}
//Change lock value (string, string id)
function changeLock(value,displayAs) {
	var lock = document.getElementById("lock" + displayAs);
	if (value === "locked") {
		//to lock
		if (lock.classList.contains("fa-lock-open")) {
			lock.classList.remove("fa-lock-open");
			lock.classList.add("fa-lock");
		}
	}
	else if (value === "unlocked") {
		if (lock.classList.contains("fa-lock")) {
			lock.classList.remove("fa-lock");
			lock.classList.add("fa-lock-open");
		}
	}
}
//Change rotation of an element (degrees (centered at 0), string id)
function changeLevel(value,displayAs) {

}