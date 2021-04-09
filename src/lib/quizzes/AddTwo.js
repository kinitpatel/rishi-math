import Random from '@/lib/Random';

export default {
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