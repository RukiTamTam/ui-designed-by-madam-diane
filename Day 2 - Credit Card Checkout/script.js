function labelOffset() {
	let labels = document.getElementsByClassName("js-form__label");
	let textInputs = document.getElementsByClassName("js-form__text-input");

	Array.from(textInputs).forEach((input, index) => {
		let label = labels[index];

		input.addEventListener("focus", () => {
			label.style.transform = "translateY(-20px)";
			label.style.zIndex = "3";
		});

		input.addEventListener("blur", () => {
			if (input.value === "") {
				label.style.transform = "translateY(0)";
				label.style.zIndex = "";
			}
		});
	});
}

labelOffset();
