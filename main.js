const button = document.getElementById('cont');
const button2 = document.getElementById('cont2');
const button1 = document.getElementById('cont1');
var show = true;

function toggle() {
	if (show) {
	    button.style.height = '0px';
	    show = false;
	    button.style.transition = '.3s ease';
	} else { 
		button.style.height = '200px';
	    show = true;
	    button.style.transition = '.3s ease';
	}
}
function toggle1() { 
	if (show) {
	    button1.style.height = '0px';
	    show = false;
	    button1.style.transition = '.3s ease';
	} else {
		button1.style.height = '200px';
	    show = true;
	    button1.style.transition = '.3s ease';
	}
}
function toggle2() {
	if (show) {
	    button2.style.height = '0px';
	    show = false;
	    button2.style.transition = '.3s ease';
	} else {
		button2.style.height = '200px';
	    show = true;
	    button2.style.transition = '.3s ease';
	}
}



toggle1();
toggle2();
toggle();

