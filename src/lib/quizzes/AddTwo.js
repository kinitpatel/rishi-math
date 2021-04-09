import Random from '@/lib/Random';
import Log from '@/lib/Log';

export default {
	name: 'add-two',
	...Log,
	createQuestion() {
		return {
			a: Random.randBetween(100,999),
			b: Random.randCloseToHundreds(),
		};
	},
	answer(q) {
		return q.a + q.b;
	},
	checkAnswer(answer, q) {
		return this.answer(q) === parseInt(answer);
	},
	toString(q) {
		return `${q.a} + ${q.b} = ?`;
	},
};