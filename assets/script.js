const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let dots = document.querySelector(".dots")
slides.forEach(function(value){
let div = document.createElement("div")
div.classList.add("dot")
dots.appendChild(div)
console.log(value.tagLine)
})


/* ceci est un test */ 

let flecheGaucheEvent = document.querySelector("#banner .arrow_left");
console.log(flecheGaucheEvent);

let flecheDroiteEvent = document.querySelector("#banner .arrow_right");
console.log(flecheDroiteEvent);

flecheGaucheEvent.addEventListener ("click", function(){ alert("fleche gauche cliqué")});

flecheDroiteEvent.addEventListener ("click", function(){alert("fleche droite cliqué")});

console.log(slides.length);

