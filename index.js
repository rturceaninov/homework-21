var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");

first.addEventListener("click", function(){
	document.getElementById("result").innerText = "You clicked First button";
});

second.addEventListener("click", function(){
	document.getElementById("result").innerText = "You clicked Second button";
});

third.addEventListener("click", function(){
	document.getElementById("result").innerText = "You clicked Third button";
});