import Random from '@/lib/Random';
import Log from '@/lib/Log';

export default {
	name: 'division',
	...Log,
	createQuestion() {
		let q = {};

		do {
			q.a = Random.randBetween(100,999);
			q.b = Random.randBetween(15, 19);
		} while((q.a%q.b !== 0 || (q.a/q.b)%10 === 0));

		return q;
	},
	answer(q) {
		return parseInt(q.a / q.b);
	},
	checkAnswer(answer, q) {
		return this.answer(q) === parseInt(answer);
	},
	toString(q) {
		return `${q.a} / ${q.b} = ?`;
	}
};