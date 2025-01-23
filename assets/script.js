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



let currentIndex = 0; /*Ici je définis ma diapositive de départ, cette variable va m'aider à suivre la diapositive actuelle*/

/* Puis je crée mes bullets point en fonction des slides */
let dots = document.querySelector(".dots")

slides.forEach(function(value, index){
	let div = document.createElement("div")
	div.classList.add("dot")

/* Avec la fonction if j'ajoute la classe dot_selected au premier point */	
	if (index===0) {
		div.classList.add("dot_selected");
	}

	dots.appendChild(div)
	console.log(value.tagLine) /* le console log me permet de vérifier que mes points sont bien créer et pointe bien vers les slides correspondant */


})


/* fonction pour le changement du bullet sélectionné */ 


function ChangementDotSelected(index) {
	const allDots = document.querySelectorAll(".dot");

	/* Je retire la classe dot_selected à tous mes points */

	allDots.forEach(function(dot) {
		dot.classList.remove("dot_selected");
	});

	/* Puis j'ajoute la classe dot_selected au point correspondant à l'index */

	allDots[index].classList.add("dot_selected");

	

	const slideContent = slides[index];

	/* Ajout de l'image en fonction de l'index */

	const slideImage = document.getElementById("slide-img");
	slideImage.src= "./assets/images/slideshow/"+ slideContent.image;

	/* Ajout de la tag line en fonction de l'index */ 

	const slideTagline = document.getElementById("slide-tagline");
	slideTagline.innerHTML = slideContent.tagLine;

	/* Et je met à jour l'index de la diapo courante */
	currentIndex = index;
}


let flecheGaucheEvent = document.querySelector("#banner .arrow_left");
console.log(flecheGaucheEvent);

let flecheDroiteEvent = document.querySelector("#banner .arrow_right");
console.log(flecheDroiteEvent);

flecheGaucheEvent.addEventListener("click", function() {
   /* Utilisation d'un modulo pour avoir un carrousel circulaire , en effet grace à % slides.length me permet de revenir à la dernière diapo lorsque je suis au début et à l'index 0 lorsque je suis à la fin */
    let index = (currentIndex - 1 + slides.length) % slides.length; 
    ChangementDotSelected(index);
});

flecheDroiteEvent.addEventListener("click", function() {
    
    let index = (currentIndex + 1) % slides.length; 
    ChangementDotSelected(index);
});



console.log(slides.length);

/*test fonctionnement event listeners 

flecheGaucheEvent.addEventListener ("click", function(){ alert("fleche gauche cliqué")});

flecheDroiteEvent.addEventListener ("click", function(){alert("fleche droite cliqué")});

*/
