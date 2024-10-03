let s_CarouselCounter = 0;
let carousel = document.getElementsByTagName("body");
let images = document.getElementsByTagName("main");

function ImageCarouselPrevious() {
	images[s_CarouselCounter--].style.display = "none";
	
	if (s_CarouselCounter < 0)
		s_CarouselCounter = images.length - 1;

	images[s_CarouselCounter].style.display = "block";
}

function ImageCarouselNext() {
	console.log("Next");
	images[s_CarouselCounter++].style.display = "none";

	if (s_CarouselCounter > images.length - 1)
		s_CarouselCounter = 0;

	images[s_CarouselCounter].style.display = "block";
}

function main() {
	carousel = document.getElementsByClassName("carousel")[0];
	images = carousel.getElementsByTagName("img");
	images[0].style.display = "block";
}

window.onload = main;
