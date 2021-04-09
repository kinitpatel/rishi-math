import Random from '@/lib/Random';
import Log from '@/lib/Log';

export default {
	name: 'compliments',
	...Log,
	createQuestion() {
		return {
			a: Random.randBetween(1,99),
		};
	},
	answer(q) {
		return 100 - q.a;
	},
	checkAnswer(answer, q) {
		return this.answer(q) === parseInt(answer);
	},
	toString(q) {
		return `100 - ${q.a} = ?`;
	},
};