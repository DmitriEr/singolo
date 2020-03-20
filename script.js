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

// плавная прокурутка страницы
const anchors = document.querySelectorAll('a[href*="#"]');

for (let i = 0; i < anchors.length; i++) {
	anchors[i].addEventListener("click", (event) => {
		event.preventDefault();
		let blockId = anchors[i].getAttribute("href")
		document.querySelector("" + blockId).scrollIntoView({
			behavior: "smooth",
			block: "start",
		})
	})
}

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

// выключение телефона

const onClickChangePhoto = () => {
	let verticalPhone = document.querySelector(".slider .slide-1 .vertical-on");
	let verticalPhoneOff = document.querySelector(".slider .slide-1 .vertical-off");
	let horizontalPhone = document.querySelector(".slider .slide-1 .horizontal-on");
	let horizontalPhoneOff = document.querySelector(".slider .slide-1 .horizontal-off");

	verticalPhone.addEventListener("click", () => {
		verticalPhone.style.display="none";
		verticalPhoneOff.style.display="block";	
	})

	verticalPhoneOff.addEventListener("click", () => {
		verticalPhoneOff.style.display="none";
		verticalPhone.style.display="block";	
	})

	horizontalPhone.addEventListener("click", () => {
		horizontalPhone.style.display="none";
		horizontalPhoneOff.style.display="block";
	})

	horizontalPhoneOff.addEventListener("click", () => {
		horizontalPhoneOff.style.display="none";
		horizontalPhone.style.display="block";
	})
}

// border in portfolio

const portfolio = document.querySelector(".portfolio");
const portfolioList = portfolio.querySelector(".portfolio__list");
const portfolioItem = portfolioList.querySelectorAll(".portfolio__item");

portfolioItem.forEach(a => {
	a.addEventListener("click", function() {
		a.classList.toggle("border");
	})
})

window.onload = function() {
	// Tags
	addTagsClickHandler();
	onClickChangePhoto();
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

// get form
const modalShow = document.querySelector("#modal-window");
const sendForm = document.querySelector("#send-form");
const closeModalShow = document.querySelector(".close")

sendForm.onclick = (event) => {
	event.preventDefault();
	modalShow.style.display="flex";

		if (document.querySelector(".required-name").value.length < 2) {
			modalShow.style.display="none";
			alert("Строка пустная");
		}

		let mail = document.querySelector(".required-mail");

		if (!/[@]/.test(mail.value)) {
			modalShow.style.display="none";
			alert("Адрес электронной почты введен не верно");
		}

	closeModalShow.onclick = () => {
		modalShow.style.display="none";
		let textInput = [...document.querySelectorAll(".text-reset")];
		for (let i = 0; i < textInput.length; i++) {
			textInput[i].value = "";
		}
	}

	let subject = document.querySelector(".subject");
	let subjectText = document.querySelector(".subject-text")
	
	if (subject.value == "Singolo") {
		subjectText.innerHTML = "Тема: Singolo"
	} 

	let describe = document.querySelector(".describe");
	let describeText = document.querySelector(".describe-text");

	if (describe.value == "Описание: Portfolio project") {
		describeText.innerHTML = "Описание: Portfolio project";
	} 
}


