<template>
  <!-- Located right side of Content.vue -->
  <!-- Layout about selected user's information and can change the view between Exercise and Health -->
  <div>
    Info
    <!-- <div class="layout__info__button">
      <button class="button__info">
        <h1>운동 정보</h1>
      </button>
      <button class="button__info">
        <h1>건강 정보</h1>
      </button>
    </div>
    <div v-if=infoHealth>
      <InfoHealth />
    </div>
    <div v-else-if=InfoExercise>
      <InfoExercise />
    </div> -->

    <!-- Test code -->
    <div class="layout__info__button">
      <button id="test1" @click="callhealth">건강정보</button>
      <button id="test2" @click="callexercise">운동정보</button>
    </div>
    <div id="testdiv">
      <div id="healthdiv" v-if="displayhealth">
        <InfoHealth />
      </div>
      <div id="exercisediv" v-if="displayexercise">
        <InfoExercise />
      </div>
    </div>
  </div>
</template>

<script>
  // 운동 건강 정보 뷰를 불러와야함
  import InfoExercise from './InfoExercise.vue'
  import InfoHealth from './InfoHealth.vue'

  export default {
    components: {
      InfoExercise,
      InfoHealth
    },
    name: 'Info',

    data() {
      return {
        displayexercise:false,
        displayhealth:true
      };
    },

    mounted() {

    },

    methods: {
      callhealth(){
        this.displayexercise=false;
        this.displayhealth=true;
      },
      callexercise(){
        this.displayexercise=true;
        this.displayhealth=false;
      }
    },
  };
</script>