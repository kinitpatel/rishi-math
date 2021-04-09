<template>
  <div>
    <quiz :quiz="quiz"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Quiz from '@/components/Quiz.vue';
import quizzes from '@/lib/quizzes';

export default {
  name: 'Home',
  components: {
    Quiz,
  },
  data() {
    return {

    };
  },
	computed: {
		quiz() {
			return quizzes[this.$route.query.quiz || 'remainders']
		}
	},
}
</script>
