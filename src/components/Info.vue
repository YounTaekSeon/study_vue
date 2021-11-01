<template>
  <div>
    Info
    <div v-if=infoHealth>
      <InfoHealth />
    </div>
    <div v-else-if=InfoExercise>
      <InfoExercise />
    </div>
  </div>
</template>

<script>
import InfoExercise from './InfoExercise.vue'
import InfoHealth from './InfoHealth.vue'
export default {
  name: 'Info',

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>