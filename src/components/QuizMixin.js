export default {
  data: () => ({
    startTime: new Date(),
		totalProblems: 0,
		totalCorrect: 0,
		totalTime: 0,
  }),
  methods: {
    incrementTotal() {
      this.totalProblems++;
			this.totalTime = (new Date() - this.startTime) / 1000;
    },
		randBetween(low, high) {
			return Math.floor(Math.random()*(high-low+1)) + low;
		},
		randCloseToHundreds() {
			const hundreds = this.randBetween(1,9);
			const subtract = this.randBetween(1,20);
			return 100*hundreds-subtract;
		}
  },
  computed: {
			score () {
				return Math.floor(this.totalCorrect / this.totalProblems * 100);
			},
			averageTime() {
				return this.totalProblems ? (this.totalTime/this.totalProblems).toFixed(2) : 0;
			}
  }
}