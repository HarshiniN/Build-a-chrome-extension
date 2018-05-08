//document.body.style.backgroundColor = "blue";
var button = document.createElement("button");
button.icon = 'favicon.png';
	button.textContent = 'PRINT ON FRACTORY.IN';
	button.textFont = 'courier'
	button.style.height = '45px';
	button.style.width = '315px';
	button.style.backgroundColor = 'DodgerBlue';
	button.style.color = 'white';
	//button.appendChild(document.createTextNode ("\n"));
	//button.appendChild (document.createElement ("span"));
	//document.body.appendChild(button);
	//var d = document.getElementsByClassName("thing-download-btn");
	//var d = document.getElementsByClassName("thing-page-right");
	//d.insertBefore(button, d.firstChild);
	var gap = document.createElement("div");
	gap.width = '40px';
	gap.height = '40px';
	gap.margin = '20px';
	gap.textContent = "hello";
	gap.style.color = 'whitesmoke';
	document.getElementsByClassName("thing-page-right")[0].prepend(gap);
	document.getElementsByClassName("thing-page-right")[0].prepend(button);
/*
    var buttonOnSite = document.getElementById("buttonOnSite"),
    parent = buttonOnSite.parentElement,
    next = buttonOnSite.nextSibling,
    button = document.createElement("button"),
    text = document.createTextNode("test");

button.appendChild(text);
if (next) parent.insertBefore(button, next);
else parent.appendChild(button);
*/