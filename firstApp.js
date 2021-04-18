const answerRandom = {
	firstArrRand: ["you are beatiful", "you are bad", "you are small"],
	secondArrRand: ["you are nice", "you are bastard", "you are ciao"],
	thirdArrRand: ["you are awesome", "you are sick", "you are fuck"],
};

function randomAnswer(obj) {
	const indexResponse = Math.floor(Math.random() * 3);
	let response = [];

	for (const arr in obj) {
		response.push(obj[arr][indexResponse]);
	}

	return response[Math.floor(Math.random() * 3)]; //[indexResponse];
}

console.log(randomAnswer(answerRandom));
