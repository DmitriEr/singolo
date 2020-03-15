// task 1
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

// task 2
// смена фона по клику
/*
let slider = document.querySelector(".contol");

let left = slider.querySelector(".left");
let right = slider.querySelector(".right");

left.onclick = function() {
    slider.classList.toggle("background-1");
    slider.classList.toggle("background-2");
};

right.onclick = function() {
    slider.classList.toggle("background-1");
    slider.classList.toggle("background-2");
}
*/

// slider

let items = document.querySelectorAll(".carousel .item");
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener("animationend", function() {
        this.classList.remove("active", direction);
    });
}

function showItem(direction) {
    items[currentItem].classList.add("next", direction);
    items[currentItem].addEventListener("animationend", function() {
        this.classList.remove("next", direction);
        this.classList.add("active");
        this.isEnabled = true;
    });
}

function nextItem(n) {
    hideItem("to-left");
    changeCurrentItem(n + 1);
    showItem("from-right");
}

function previousItem(n) {
    hideItem("to-right");
    changeCurrentItem(n - 1);
    showItem("from-left");
}

document.querySelector(".control.left").addEventListener("click", function() {
    if (isEnabled) {
        previousItem(currentItem);
    }
});

document.querySelector(".control.right").addEventListener("click", function() {
    if (isEnabled) {
        nextItem(currentItem);
    }
});