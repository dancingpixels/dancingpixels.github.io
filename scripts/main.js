

// change image on click
let myImage = document.querySelector('img');
myImage.onclick = function () {
	let mySrc = myImage.getAttribute('src')
	if (mySrc === 'images/real-madrid-image.jpg') {
		myImage.setAttribute('src','images/uefa-cl.jpg');
		myImage.setAttribute('alt','RealMadrid lifting the Champions Cup');
	} else {
		myImage.setAttribute('src','images/real-madrid-image.jpg');
	}
}

// adding a personalized welcome message
let myButton = document.querySelector('button');
let MyHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name.');
	if (!myName) {
		setUserName();
	} else {
        localStorage.setItem('name', 'myName');
	    MyHeading.textContent = 'RealMadrid are UEFA Champions Cup 2014 winners, ' + myName;
	}
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	MyHeading.textContent = 'RealMadrid UEFA Champions League Winner 2014 ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
