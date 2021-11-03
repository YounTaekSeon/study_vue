<template>
  <!-- Health information about user selected in SearchList.vue -->
  <div>
    infohealth
    사용자를 선택하세요
    <div class="layout__info__detail">
      <div class="layout__info__half">
        <div class="info__health"></div>
        <div class="info__health"></div>
        <div class="info__health"></div>
        <div class="info__health"></div>
        <div class="info__health"></div>
        <div class="info__health"></div>
        <div class="info__health"></div>
      </div>
      <div class="layout_info__half">
        <div class="chart_health"></div>
        <div class="chart_health"></div>
        <div class="chart_health"></div>
      </div>
    </div>
  </div>
  <button id="haveuserid" @click="useridok">user id ok</button>
  <div id="testdata" v-if="userid">
            <test />
  </div>
</template>

<script>
import test from "./test.vue"
  // SearchID에 맞게 정보 가져와야함
  export default {
    name: 'InfoHealth',
    components: {
      test
    },
    data() {
      return {
        userid: false
      };
    },

    mounted() {

    },

    methods: {
      useridok() {
        userid=true;
      }

    },
  };
</script>