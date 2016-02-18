document.onreadystatechange = subSomething;
function subSomething(){
    if(document.readyState == "loading"){
        var buffer_icon = document.createElement('span');
		buffer_icon.className = "buffer-icon";
		buffer_icon.setAttribute("id", "buffer-icon");
		document.body.appendChild(buffer_icon);
    }
}