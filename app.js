function generateWords() {
	let countInput = document.getElementById("countInput");
	let wordList = document.getElementById("wordList");
	let count = parseInt(countInput.value);

	wordList.innerHTML = "";

	for (let i = 0; i < count; i++) {
		let word = generateRandomWord();
		let listItem = document.createElement("li");
		listItem.innerText = word;
		wordList.appendChild(listItem);
	}

	document.getElementById("page1").style.display = "none";
	document.getElementById("page2").style.display = "block";
}

function searchWord() {
	let searchInput = document.getElementById("searchInput");
	let wordList = document.getElementById("wordList");
	let searchKeyword = searchInput.value.toLowerCase();

	let listItems = wordList.getElementsByTagName("li");

	for (let i = 0; i < listItems.length; i++) {
		let listItem = listItems[i];
		let word = listItem.innerText.toLowerCase();

		if (word.includes(searchKeyword)) {
			listItem.style.display = "block";
		} else {
			listItem.style.display = "none";
		}
	}
}

function generateRandomWord() {
	let words = [
		"apple",
		"banana",
		"cat",
		"dog",
		"elephant",
		"fish",
		"grape",
		"hat",
		"igloo",
		"jungle",
		"kangaroo",
		"lemon",
		"monkey",
		"nest",
		"orange",
		"parrot",
		"queen",
		"rabbit",
		"sun",
		"turtle",
		"umbrella",
		"violin",
		"whale",
		"xylophone",
		"yak",
		"zebra",
		"ant",
		"butterfly",
		"caterpillar",
		"dragonfly",
		"elephant",
		"flamingo",
		"giraffe",
		"honeybee",
		"iguana",
		"jaguar",
	];
	let randomIndex = Math.floor(Math.random() * words.length);
	return words[randomIndex];
}

function searchWord() {
	let searchInput = document.getElementById("searchInput");
	let wordList = document.getElementById("wordList");
	let searchKeyword = searchInput.value.toLowerCase();

	let listItems = wordList.getElementsByTagName("li");

	for (let i = 0; i < listItems.length; i++) {
		let listItem = listItems[i];
		let word = listItem.innerText.toLowerCase();

		if (word.includes(searchKeyword)) {
			listItem.style.display = "inline-block";
			listItem.style.backgroundColor = "yellow";
		} else {
			listItem.style.display = "none";
		}
	}
}
