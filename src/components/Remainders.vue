<template>
	<div class="mt-6 pl-6">
		<p style="font-size:50px">
			{{q.n}} / {{q.d}} = ?
		</p>
		<input
			label="Answer"
			v-on:keyup.enter="submit" 
			v-model="answer"
			style="font-size: 50px"
			autofocus
		/>
		{{actualAnswer}}
		{{missed}}
		<v-divider/>
		<statistics />
	</div>
</template>
<script>
import QuizMixin from "./QuizMixin";
import Statistics from './Statistics.vue';

const missed = [];

export default {
  components: { Statistics },
	mixins: [QuizMixin],
	data() {
		return {
			q: this.createQ(),
			answer: null,
			missed,
		}
	},
	computed: {
		actualAnswer() {
			return this.q.n % this.q.d;
		}
	},
	mounted() {
		// this.
	},
	methods: {
		submit() {
			this.incrementTotal();

			if(parseInt(this.answer) === this.actualAnswer) {
				this.totalCorrect++;
				if(missed.length && Math.random() < .1) {
					this.q = missed.shift();
				} else {
					this.q = this.createQ();
				}
			} else {
				missed.push(this.q);
				this.q = this.createQ();
			}
			this.answer = null;
		},
		createQ() {
			return {
				n: this.randBetween(100,999),
				d: this.randBetween(3,9),
			}
		}
	}
}
</script>