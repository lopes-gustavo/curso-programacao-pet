const obj = {
	a: 5,
	b: true,
	c: {
		d: "ok",
	},
	minhaFuncao: function () {
		console.log("olá de dentro do obj");
		return "OK";
	},
	square: (x) => x * x,
	double: x => 2 * x,
};

const console1 = {
	log: (...x) => {
		console.log(...x)
	}
}


// console1.log(1, "a", true, 10);
// console.log(1, "a", true, 10);
// const q = obj.minhaFuncao();
// console.log(q);
// console.log(obj.double("a"));


// console.log("1" == 1);
// console.log("1" === 1);

function minhaFuncaoComCallback(nome, callback) {
	setTimeout(() => {
		console.log("olá de dentro do timeout");
		callback()
	}, 5000);

	console.log(nome);
	const nomes = nome.split(" ")
	console.log(nomes);
}

minhaFuncaoComCallback("gustavo lopes", function () {
	console.log("ola de dentro do callback");
});
