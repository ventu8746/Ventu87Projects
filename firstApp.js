const answerRandomStory = [
	["The Kinght", "The King", "The Zombie"],
	["with the ax", "with the gun", "with a bite"],
	["will kill a bear", "will kill a lion", "will kill a person"],
];

//console.log(answerRandomStory[0][Math.floor(Math.random() * 3)]);

function randomAnswer(arrStory) {
	let response = [];

	for (let i = 0; i < arrStory.length; i++) {
		//console.log(arrStory[i]);
		response.push(arrStory[i][Math.floor(Math.random() * 3)]);
	}
	return response.join(" ");
}

console.log(randomAnswer(answerRandomStory));
console.log(randomAnswer(answerRandomStory));
