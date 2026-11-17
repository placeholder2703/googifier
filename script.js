
const input = document.getElementById("input");
const output = document.getElementById("output");
const convert = document.getElementById("convert");
const copy = document.getElementById("copy");

convert.addEventListener("click", () => {
	output.value = input.value.replace(/[aeiouy]/gi, ":goog:");
});

copy.addEventListener("click", async () => {
	await navigator.clipboard.writeText(output.value);

	copy.textContent = "Copied!";

	setTimeout(() => {
		copy.textContent = "Copy";
	}, 1500);
});
