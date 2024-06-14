let labels = document.querySelectorAll(".js-form__label");
let textInputs = document.querySelectorAll(".js-form__text-input");

textInputs.forEach((input, index) => {
	input.addEventListener("focus", () => {
		labels[index].style.transform = "translateY(-20px)";
		labels[index].style.zIndex = "3";
	});
	input.addEventListener("blur", () => {
		labels[index].style.transform = "translateY(0)";
		labels[index].style.zIndex = "1";
	});
});
