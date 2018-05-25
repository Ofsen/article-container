
function showLess(object) {
	object.querySelector("#imgB").style.transform = "initial";
	object.querySelector(".txt").style.bottom = "-4em";
	object.querySelector(".txt").style.background = "none";
	object.querySelector("#txtA").style.color = "white";
	object.querySelector("#txtP").style.color = "#eee";
	object.querySelector("#txtPspan2").style.visibility = "hidden";
	object.querySelector("#txtPspan2").style.opacity = "0";
	object.querySelector(".extra").style.background = "none";
	object.querySelector(".exL").style.display = "none"
}

function showMore(object) {
	object.querySelector("#imgB").style.transform = "scale(1.5) translateY(-10%)";
	object.querySelector(".txt").style.bottom = "1.9em";
	object.querySelector(".txt").style.background = "white";
	object.querySelector("#txtA").style.color = "#2196f3";
	object.querySelector("#txtP").style.color= "#424242";
	object.querySelector("#txtPspan2").style.visibility = "visible";
	object.querySelector("#txtPspan2").style.opacity = "1";
	object.querySelector(".extra").style.background = "#2196f3";
	object.querySelector(".exL").style.display = "initial"
}