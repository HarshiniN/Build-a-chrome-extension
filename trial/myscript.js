var button = document.createElement("button");
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
	gap.style.color = "whitesmoke";
	document.getElementsByClassName("thing-page-right")[0].prepend(gap);
	document.getElementsByClassName("thing-page-right")[0].prepend(button);
	//button.addEventListener('click', newScript.js);
	button.addEventListener("click", function(){
		var url = document.baseURI;
    console.log(url);
    var links = document.getElementsByClassName("thing-file-download-link");
    var len = links.length;
    var i;
    var file = [];
    var index=0;
    for(i=0;i<len;i++)
    {
    	var n = (links[i].innerHTML);
    	if((n.indexOf(".stl")!=-1)||(n.indexOf(".STL")!=-1)) {    	
    	file[index] = {name: n.substring((n.indexOf("filename")+10),((n.indexOf(".stl")+4)||(n.indexOf(".STL")+4))), id: links[i].href.substring(links[i].href.lastIndexOf(":")+1), url: links[i].href};
    	index = index + 1;
    }
    }

    var bundle = {name: document.title, id: url.substring((url.lastIndexOf(":")+1),(url.lastIndexOf("/"))), ref: 'thingiverse', files: file};
    console.log(bundle);
    for(i=0;i<index;i++)
    {
    var link = document.createElement("a");
    link.download = file[i].name;
    link.href = file[i].url;
    link.click();

    }
    
    });