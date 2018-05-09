//document.body.style.backgroundColor = "blue";
var button = document.createElement("button");
button.icon = 'favicon.png';
	button.textContent = 'PRINT ON FRACTORY.IN';
	button.textFont = 'courier'
	button.style.height = '45px';
	button.style.width = '315px';
	button.style.backgroundColor = 'DodgerBlue';
	button.style.color = 'white';
	var gap = document.createElement("div");
	gap.width = '40px';
	gap.height = '40px';
	gap.margin = '20px';
	gap.textContent = "hello";
	gap.style.color = 'whitesmoke';
	document.getElementsByClassName("thing-page-right")[0].prepend(gap);
	document.getElementsByClassName("thing-page-right")[0].prepend(button);