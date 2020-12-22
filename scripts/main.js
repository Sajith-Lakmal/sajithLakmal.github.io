let image = document.querySelector('img');
image.setAttribute("height", "400px");
image.setAttribute("width", "400px");
image.onclick = function() {
	let imageSource = image.getAttribute('src');
	console.log(imageSource);
	if(imageSource === 'images/firefox-icon.png'){
		image.setAttribute('src','images/chrome-logo.jfif');
		}
	else{
		image.setAttribute('src', 'images/firefox-icon.png');
	}
}
let changeUserButton = document.querySelector("button");
console.log(changeUserButton);
changeUserButton.onclick = () => setUserName();
let heading = document.querySelector("h1");
function setUserName() {
	let  userName = prompt("Please enter your name");
	localStorage.setItem("userName",userName);
	heading.textContent = 'Mozilla is cool, ' + userName
}
if(!localStorage.getItem("userName")){
	setUserName();
} else{
	let storedName = localStorage.getItem("userName");
	heading.textContent = 'Mozilla is Cool, ' + storedName;
}