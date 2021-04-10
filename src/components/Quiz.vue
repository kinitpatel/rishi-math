<template>
		<v-container fluid>
			<div  v-if="started">
				<p style="font-size:50px" :class="{ 'red--text': wrong }">
					{{question}}
				</p>
				<input
					label="Answer"
					v-on:keyup.enter="submit" 
					v-model="answer"
					style="font-size: 50px; border: 1px solid #eee"
					autofocus
					ref="answer"
				/>
				
				<div class="mt-6 mb-6">
					<v-btn
						depressed
						color="primary"
						@click="submit"
						class="mr-1"
					>
						SUBMIT
					</v-btn>
					<v-btn
						depressed
						color="secondary"
						@click="stop"
					>
						STOP
					</v-btn>
				</div>
			</div>
			<div v-else class="mt-6 mb-6">
				<v-btn
					depressed
					color="primary"
					@click="start"
				>
					START
				</v-btn>
			</div>
			<v-divider/>
				<statistics class="mt-6" />	
				<v-card
					class="mt-4"
					max-width="600"
				>
					<v-card-text class="pt-0">
						<div class="title font-weight-light mb-2">
							Accuracy Trend
						</div>
					</v-card-text>
					<v-sparkline
						:value="accuracyTrend"
						:gradient="['#1feaea', '#ffd200', '#f72047']"
						:smooth="10"
						:padding="8"
						:line-width="2"
						stroke-linecap="round"
						gradient-direction="top"
						:fill="false"
						type="trend"
						:auto-line-width="false"
						auto-draw
					></v-sparkline>
				</v-card>

				<v-card
					class="mt-4"
					max-width="600"
				>
					<v-card-text class="pt-0">
						<div class="title font-weight-light mb-2">
							Time Trend
						</div>
					</v-card-text>
					<v-sparkline
						:value="timeTrend"
						:gradient="['#f72047', '#ffd200', '#1feaea']"
						:smooth="10"
						:padding="8"
						:line-width="2"
						stroke-linecap="round"
						gradient-direction="top"
						:fill="false"
						type="trend"
						:auto-line-width="false"
						auto-draw
					></v-sparkline>
				</v-card>

				<v-btn
					depressed
					@click="resetLog"
					class="mt-6"
				>
					ERASE TREND DATA
				</v-btn>
	</v-container>
</template>
<script>
import Statistics from './Statistics.vue';

export default {
  components: { Statistics },
	props: {
		quiz: Object,
	},
	data() {
		return {
			startTime: new Date(),
			qStartTime: new Date(),
			totalProblems: 0,
			totalCorrect: 0,
			totalTime: 0,
			q: this.createQuestion(),
			answer: null,
			started: false,
			wrong: false,
			accuracyTrend: this.quiz.getAccuracyTrend(),
			timeTrend: this.quiz.getTimeTrend(),
		}
	},
	computed: {
		question() {
			return this.q ? this.quiz.toString(this.q) : '';
		},
		score() {
			return this.totalProblems ? Math.floor(this.totalCorrect / this.totalProblems * 100) : 0;
		},
		averageTime() {
			return this.totalProblems ? (this.totalTime / this.totalProblems).toFixed(2) : '';
		}
	},
	watch: {
		quiz() {
			this.started = false;
			this.accuracyTrend = this.quiz.getAccuracyTrend();
			this.timeTrend = this.quiz.getTimeTrend();
		},
		totalProblems() {
			this.accuracyTrend = this.quiz.getAccuracyTrend();
			this.timeTrend = this.quiz.getTimeTrend();
		},
		started() {
			if(this.started) {
				this.$nextTick(() => {
					this.$refs.answer.focus()
				});
			}
		}
	},
	methods: {
		submit() {
			const missKey = `quiz-missed-${this.quiz.name}`;
			const missed = JSON.parse(localStorage.getItem(missKey)) || [];

			this.totalTime = (new Date() - this.startTime) / 1000;
			this.totalProblems++;

			const result = this.quiz.checkAnswer(this.answer, this.q);
			const time = (new Date() - this.qStartTime) / 1000;
			this.quiz.log(result, time);

			this.qStartTime = new Date();

			if(result) {
				if (time > 5) {
					missed.push(this.q);
				}
				this.totalCorrect++;
				this.wrong = false;
				if(missed.length && this.totalProblems % 5 === 0) {
					this.q = missed.shift();
				} else {
					this.q = this.createQuestion();
				}
			} else if(!this.wrong){
				missed.push(this.q);
				this.wrong = true;
			}
			this.answer = null;
			if(this.started) {
				this.$nextTick(() => {
					this.$refs.answer.focus()
				});
			}

			localStorage.setItem(missKey, JSON.stringify(missed));
		},
		start() {
			this.startTime = new Date();
			this.totalTime = 0;
			this.q = this.createQuestion();
			this.totalProblems = 0;
			this.totalCorrect = 0;
			this.answer = null;
			this.started = true; 
			this.qTime = new Date();
			this.wrong = false;
		},
		stop() {
			this.started = false;
		},
		createQuestion() {
			this.qStartTime = new Date();
			return this.quiz.createQuestion();
		},
		resetLog() {
			if(window.confirm("Are you sure you want to erase your trends?")) {
				this.quiz.resetLog();
				this.accuracyTrend = this.quiz.getAccuracyTrend();
				this.timeTrend = this.quiz.getTimeTrend();
			}
		}
	}
}
</script>