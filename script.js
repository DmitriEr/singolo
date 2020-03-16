"use strict"
// task 1

// Section - header
let header = document.querySelector(".header");
let navigation = header.querySelector("ul");
let list = navigation.querySelectorAll("li");

// По клику удаляем класс active и добавляем класс active к элементу (по которому произошошел клик)
list.forEach(a => {
    a.addEventListener("click", function() {
        navigation.querySelector(".active").classList.remove("active");

    a.classList.add("active");
    });
});

// Section - slider

// change color
let background = document.querySelector(".slider");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

left.onclick = function() {
    background.classList.toggle("background-1");
    background.classList.toggle("background-2");
}

right.onclick = function() {
    background.classList.toggle("background-1");
    background.classList.toggle("background-2");
}

// slider

let items = document.querySelectorAll('.carousel .item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

document.querySelector('.control.left').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.control.right').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});

// border in portfolio

const portfolio = document.querySelector(".portfolio");
const portfolioList = portfolio.querySelector(".portfolio__list");
const portfolioItem = portfolioList.querySelectorAll(".portfolio__item");

portfolioItem.forEach(a => {
	a.addEventListener("click", function() {
		a.classList.toggle("border");
	})
})
/*
// переключение табов

const portfolioTag = document.querySelector(".portfolio__tags");
const tag = portfolioTag.querySelectorAll(".tag");

portfolioTag.addEventListener("click", () => {
	portfolioTag.querySelectorAll("button").forEach(a => a.classList.remove("activeTag"));
	event.target.classList.add("activeTag");
})
*/
// картинки !!!!!!!!!!!!!!!!!!!!!!1

window.onload = function() {
	// Tags
	addTagsClickHandler();
}

const addTagsClickHandler = () => {
	document.querySelector(".portfolio__tags").addEventListener("click", (e) => {
		if(e.target.classList.contains("tag")) {
			let clickedTag = e.target;
			removeSelectedTags();
			selectClickedTag(clickedTag);
			generator();
		}
	})
}
// функция - удаления выбранных тегов
const removeSelectedTags = () => {
	let tags = document.querySelectorAll(".portfolio__tags .tag");
	tags.forEach(tag => {
		tag.classList.remove("tag__selected");
		tag.classList.add("tag__bordered");
	})
}
// функция - добавление класса active
const selectClickedTag = (clickedTag) => {
	clickedTag.classList.remove("tag__bordered");
	clickedTag.classList.add("tag__selected");
}
// генератор - заменяет картнку на любую другую
function generator () {
	let picture = document.querySelectorAll(".portfolio__list .portfolio__item");
	let arr = [...picture];
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i].innerHTML)
		let x = Math.floor((Math.random()*arr.length) + 1);
		arr[i].innerHTML = `
		<img src="assets/image/portfolio/picture-${x}.jpg" alt="portfolio-picture-${x}">
	`
	}
}

