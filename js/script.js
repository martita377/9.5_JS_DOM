// JS - DOM

var buttonElem = document.getElementsByClassName('button');

var buttonElemLength = buttonElem.length;

for (i=0; i<buttonElemLength; i++) {
	alert(buttonElem[i].innerText);
}