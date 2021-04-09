<template>
  <div>
    <quiz :quiz="quiz"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Remainders from '@/lib/Remainders';
import Quiz from '@/components/Quiz.vue';

export default {
  name: 'Home',
  components: {
    Quiz,
  },
  data() {
    return {
      quiz: Remainders
    };
  }
}
</script>
