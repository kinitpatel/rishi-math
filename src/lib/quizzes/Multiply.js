import Random from '@/lib/Random';

export default {
	createQuestion() {
		return {
			a: Random.randBetween(10,19),
			b: Random.randBetween(3,12),
		};
	},
	answer(q) {
		return q.a * q.b;
	},
	checkAnswer(answer, q) {
		return this.answer(q) === parseInt(answer);
	},
	toString(q) {
		return `${q.a} x ${q.b} = ?`;
	},
};