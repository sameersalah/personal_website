const textElement = document.getElementById('text');
textElement.innerHTML = "I am "
const text = "an engineer";
const texts = ["an engineer", "a student", "a passionate"]
let index = 0;

function typeText(text, callback) {
	if (index < text.length) {
		textElement.innerHTML += text.charAt(index);
		index++;
		setTimeout(() => typeText(text, callback), 100);
	} else {
		index = 0; // Reset index for next text
		if (callback) callback();
	}
}

function deleteText(callback) {
	if (textElement.innerHTML.length > 5) {
		textElement.innerHTML = textElement.innerHTML.slice(0, -1);
		setTimeout(() => deleteText(callback), 100);
	} else {
		if (callback) callback();
	}
}

// Start the sequence
typeText(text, () => {
	deleteText(() => {
		typeText("a student");
	});
});


// typeText("a student");

// textElement.innerHTML = "I am"
// typeText("a student")

