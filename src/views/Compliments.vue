<template>
  <div>
    <quiz :quiz="quiz"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Compliments from '@/lib/Compliments';
import Quiz from '@/components/Quiz.vue';

export default {
  name: 'Compliments',
  components: {
    Quiz,
  },
  data() {
    return {
      quiz: Compliments
    };
  }
}
</script>
