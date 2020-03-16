// task 1

// Section - header
let header = document.querySelector(".header");
let navigation = header.querySelector("ul");
let list = navigation.querySelectorAll("li");

// По клику удаляем класс active и добавляем класс active к элементу (по которому произошошел клик)
list.forEach(a => {
    a.addEventListener("click", function() {
        navigation.querySelector("active").classList.remove("active");

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