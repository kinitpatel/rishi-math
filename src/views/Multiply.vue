<template>
  <div>
    <quiz :quiz="quiz"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Multiply from '@/lib/Multiply';
import Quiz from '@/components/Quiz.vue';

export default {
  name: 'Multiply',
  components: {
    Quiz,
  },
  data() {
    return {
      quiz: Multiply
    };
  }
}
</script>
