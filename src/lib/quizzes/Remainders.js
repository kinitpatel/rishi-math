import Random from '@/lib/Random';
import Log from '@/lib/Log';

export default {
	name: 'remainders',
	...Log,
	createQuestion() {
		return {
			n: Random.randBetween(100,999),
			d: Random.randBetween(3,9),
		};
	},
	answer(q) {
		return q.n % q.d;
	},
	checkAnswer(answer, q) {
		return this.answer(q) === parseInt(answer);
	},
	toString(q) {
		return `${q.n} % ${q.d} = ?`;
	}
};