//your JS code here. If required.
const btn = document.getElementById("enterBtn");
const para = document.getElementById("status");
btn.addEventListener("click", fun);
function fun(){
	para.innerText = "";
	const heading = document.createElement("h1");
	heading.innerText = "Entered Metaverse";
	heading.id = "status";
	const parent = document.getElementsByTagName("body")[0];
	para.appendChild(heading);
}