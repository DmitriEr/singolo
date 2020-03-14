let header = document.querySelector("header");
let navigation = header.querySelector("ul");
let list = navigation.querySelectorAll("li");

list.forEach(a => {
    a.addEventListener("click", function() {
        navigation.querySelector(".active").classList.remove("active");

    a.classList.add("active");
    });
});