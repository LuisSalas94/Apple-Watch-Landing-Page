const menu = document.querySelector("#menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
	menu.classList.toggle("fa-times");
	navbar.classList.toggle("nav-toggle");
});

window.addEventListener("scroll", () => {
	menu.classList.remove("fa-times");
	navbar.classList.remove("nav-toggle");
});
