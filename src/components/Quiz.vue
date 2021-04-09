<template>
		<v-container fluid>
						<div  v-if="started">
							<p style="font-size:50px" :class="{ 'red--text': wrong }">
								{{quiz.toString(q)}}
							</p>
							<input
								label="Answer"
								v-on:keyup.enter="submit" 
								v-model="answer"
								style="font-size: 50px; border: 1px solid #eee"
								autofocus
							/>
							<statistics class="mt-6" />
							<v-btn
								depressed
								color="primary"
								@click="start"
								class="ml-4"
							>
								RESTART
							</v-btn>
						</div>
						<div v-else>
							<v-btn
								depressed
								color="primary"
								@click="start"
							>
								START
							</v-btn>
						</div>
	</v-container>
</template>
<script>
import Statistics from './Statistics.vue';

const missed = [];

export default {
  components: { Statistics },
	props: {
		quiz: Object,
	},
	data() {
		return {
			startTime: new Date(),
			totalProblems: 0,
			totalCorrect: 0,
			totalTime: 0,
			q: this.quiz.createQuestion(),
			answer: null,
			missed,
			started: false,
			wrong: false,
		}
	},
	computed: {
		question() {
			return this.quiz.toString(this.q);
		},
		score () {
			return this.totalProblems ? Math.floor(this.totalCorrect / this.totalProblems * 100) : 0;
		},
	},
	watch: {
		quiz() {
			this.started = false;
		}
	},
	methods: {
		submit() {
			this.totalTime = (new Date() - this.startTime) / 1000;
			this.totalProblems++;

			if(this.quiz.checkAnswer(this.answer, this.q)) {
				this.totalCorrect++;
				this.wrong = false;
				if(missed.length && Math.random() < .1) {
					this.q = missed.shift();
				} else {
					this.q = this.quiz.createQuestion();
				}
			} else if(!this.wrong){
				missed.push(this.q);
				this.wrong = true;
			}
			this.answer = null;
		},
		start() {
			this.startTime = new Date();
			this.totalTime = 0;
			this.q = this.quiz.createQuestion();
			this.totalProblems = 0;
			this.totalCorrect = 0;
			this.answer = null;
			this.started = true; 
		}
	}
}
</script>