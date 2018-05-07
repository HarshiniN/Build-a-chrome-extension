addButton();

function addButton()
{
        var aButton = document.createElement('button');
    aButton.id = "aButton";
    aButton.setAttribute('name','Click');
aButton.setAttribute('value','Click me');
    wrapper.appendChild(aButton);
//    var aScript = document.createElement("script");
  //  aScript.src="aButtonHandler.js";
    //thatDiv.appendChild(aScript);  
}

document.addEventListener('DOMContentLoaded', function() {
    var theButton = document.getElementById('aButton');
    theButton.style.backgroundColor = "lightblue";
    theButton.style.width="300px";
    theButton.style.height="300px";
    theButton.addEventListener('click', function() {
        alert('damn');
    });
});