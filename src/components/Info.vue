<template>
<!-- Located right side of Content.vue -->
<!-- Layout about selected user's information and can change the view between Exercise and Health -->
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
// 운동 건강 정보 뷰를 불러와야함
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