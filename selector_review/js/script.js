console.log('I loaded');

var eventListener = function(){
	console.log("I am an event listener");
}
document.addEventListener("DOMContentLoaded", function (){
document.getElementsByTagName("h1")[0].addEventListener("click", eventListener); });