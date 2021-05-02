import Random from '@/lib/Random';
import Log from '@/lib/Log';

export default {
	name: 'double-subtraction',
	...Log,
	createQuestion() {
		let q = {};
		let answer;

		do {
			q.a = Random.randBetween(100,999);
			q.b = Random.randBetween(100, 999);
			q.c = Random.randBetween(10, 99);
			answer = this.answer(q);
		} while(answer < 35 || answer > 75 || answer % 10 !== 0);

		return q;
	},
	answer(q) {
		return q.a - q.b - q.c;
	},
	checkAnswer(answer, q) {
		return this.answer(q) === parseInt(answer);
	},
	toString(q) {
		return `${q.a} - ${q.b} - ${q.c} = ?`;
	}
};