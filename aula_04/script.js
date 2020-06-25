function onButtonClick() {
	console.log('olá, mundo');

	const nomeInput = document.getElementById('nomeInput');
	const dtNascimentoInput = document.getElementById('dataNascimentoInput');

	nomeInput.style.borderColor = "green";

	document.getElementById("conteudo").innerHTML = `
		<b>Nome</b>: ${nomeInput.value}
		<br>
		<b>Data Nascimento</b>: ${dtNascimentoInput.value}
	`;
}

document.getElementById('botaoDeEnvio').addEventListener('click', () => onButtonClick());
