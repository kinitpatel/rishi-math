<template>
  <div>
    <quiz :quiz="quiz"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddFour from '@/lib/AddFour';
import Quiz from '@/components/Quiz.vue';

export default {
  name: 'AddFour',
  components: {
    Quiz,
  },
  data() {
    return {
      quiz: AddFour
    };
  }
}
</script>
