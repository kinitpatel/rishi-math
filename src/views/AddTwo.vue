<template>
  <div>
    <quiz :quiz="quiz"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddTwo from '@/lib/AddTwo';
import Quiz from '@/components/Quiz.vue';

export default {
  name: 'AddTwo',
  components: {
    Quiz,
  },
  data() {
    return {
      quiz: AddTwo
    };
  }
}
</script>
