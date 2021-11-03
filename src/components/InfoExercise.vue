<template>
  <!-- Exercise information about user selected in SearchList.vue -->
  <div>
       <!-- 만약 사용자ID가 없다면 v-if false를 주고 사용자ID가 들어오면 true, 사용자를 선택하세요 false줌-->
    InfoExercise
    <div class="layout__info__detail">
      <div class="layout__info__half">
        <div class="chart__exercise">걸음 수</div>
        <div class="chart__exercise">활동 칼로리</div>
      </div>
      <div class="layout__info__half">
        <div class="chart__exercise">활동 거리</div>
        <div class="chart__exercise">활동 시간</div>
      </div>
    </div>
  </div>
</template>

<script>
  // SearchID에 맞게 정보 가져와야함
  export default {
    name: 'InfoExercise',

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