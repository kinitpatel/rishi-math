import Random from '@/lib/Random';
import Log from '@/lib/Log';

export default {
	name: 'three-digit-subtraction',
	...Log,
	createQuestion() {
		let q = {};

		do {
			q = {
				a: Random.randBetween(100,999),
				b: Random.randCloseToHundreds(),
			};
		} while(q.b>q.a);
		return q;
	},
	answer(q) {
		return q.a - q.b;
	},
	checkAnswer(answer, q) {
		return this.answer(q) === parseInt(answer);
	},
	toString(q) {
		return `${q.a} - ${q.b} = ?`;
	}
};