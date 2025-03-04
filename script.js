const dice1 = document.getElementById('dice-1');
const dice2 = document.getElementById('dice-2');
const rollButton = document.getElementById('roll-button');
const result = document.getElementById('result');

rollButton.addEventListener('click', () => {
	const dice1Value = Math.floor(Math.random() * 6) + 1;
	const dice2Value = Math.floor(Math.random() * 6) + 1;
	
	dice1.src = `dice-${dice1Value}.png`;
	dice2.src = `dice-${dice2Value}.png`;
	
	result.textContent = `Dice 1: ${dice1Value} | Dice 2: ${dice2Value}`;
});