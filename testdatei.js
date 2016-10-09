/**
 * Created by Tobias on 09.10.2016.
 */
var show_test = function() {
	document.getElementById('ausgabeDiv').innerHTML = 'Button gedrückt';
}

window.onload = function() {
	document.getElementById('testButton').onclick = show_test;
}