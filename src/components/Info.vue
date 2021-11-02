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
      <li id="info__button" v-for="(button, idx) in buttons" :key="{idx}">
        <router-link :to='button.link'>{{ button.content }}</router-link>
      </li>
    </div>
    <div>
      <transition :name="transitionName">

      </transition>
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
        toggle: this.enter,
        buttons: [{
            content: '운동 정보',
            link: ''
          },
          {
            content: '건강 정보',
            link: ''
          },
        ]
      };
    },

    mounted() {

    },

    methods: {

    },
  };
</script>