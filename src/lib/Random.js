export default class Random {
	static randBetween(low, high) {
		return Math.floor(Math.random()*(high-low+1)) + low;
	}

	static randCloseToHundreds() {
		const hundreds = this.randBetween(1,9);
		const subtract = this.randBetween(1,20);
		return 100*hundreds-subtract;
	}
}