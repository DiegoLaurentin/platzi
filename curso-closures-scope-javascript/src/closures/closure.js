const moneyBox = () => {
	var saveCoins = 0;
	const countCoins = (coins) => {
		saveCoins += coins;
		console.log(`moneyBox: $${saveCoins}`)
	}
	return countCoins
};

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(7);
myMoneyBox(45);
myMoneyBox(10);
