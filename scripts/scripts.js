window.onload = function () { 

	var updateTime = function() {
		var rawTime = new Date();
		var elem = document.getElementById("time");
		elem.innerText = rawTime;
		window.setTimeout(updateTime, 1000);
	}

	updateTime();

};