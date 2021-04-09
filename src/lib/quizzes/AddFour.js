import Random from '@/lib/Random';
import Log from '@/lib/Log';

export default {
	name: 'add-four',
	...Log,
	createQuestion() {
		return {
			a: Random.randBetween(100,999),
			b: Random.randBetween(100,999),
			c: Random.randBetween(100,999),
			d: Random.randBetween(100,999),
		};
	},
	answer(q) {
		return q.a + q.b + q.c + q.d;
	},
	checkAnswer(answer, q) {
		const actual = this.answer(q);
		const diff = Math.abs(actual - parseInt(answer))/actual;
		return diff <= 0.05;
	},
	toString(q) {
		return `${q.a} + ${q.b} + ${q.c} + ${q.d} = ?`;
	}
};