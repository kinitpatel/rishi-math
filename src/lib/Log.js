export default {
	key() {
		return `quiz-log-${this.name}`;
	},
	log(result, time) {
		const key = this.key();
		let log = localStorage.getItem(key);
		log = JSON.parse(log);
		log = log || [];
		log.push({ result, time });
		while (log.length > 1000) {
			log.shift();
		}
		localStorage.setItem(key, JSON.stringify(log));
	},
	getAccuracyTrend() {
		const key = this.key();
		let log = localStorage.getItem(key);
		log = JSON.parse(log);
		log = log || [];

		const size = log.length < 50 ? 5 : 20;

		const results = log.length > 5 ? [100] : [];
		for(let i=size; i<log.length; i++) {
			let s = log.slice(i-size, i+1);
			let correct = s.filter(({result}) => result);
			let accuracy = Math.round(100 * correct.length / s.length);
			results.push(accuracy);
		}
		return results;
	},
	getTimeTrend() {
		const key = this.key();
		let log = localStorage.getItem(key);
		log = JSON.parse(log);
		log = log || [];

		const size = log.length < 50 ? 5 : 20;

		const results = log.length > 5 ? [5] : [];
		for(let i=size; i<log.length; i++) {
			let s = log.slice(i-size, i+1);
			let totalTime = 0;
			s.forEach(({time}) => {
				totalTime += time;
			});
			let average = Math.round(totalTime / s.length);
			results.push(average);
		}
		return results;
	},
	resetLog() {
		const key = this.key();
		localStorage.setItem(key, JSON.stringify([]));
	},
}