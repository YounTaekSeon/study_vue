<template>
  <!-- Change the view from SearchList.vue to searchDetail.vue -->
  <!-- Detail info about searched user in search.vue -->
  <!-- Has user information about name, level, sex, height, weight, birth etc -->
  <!-- Send userID to Info.vue to InfoExercise.vue and InfoHealth.vue -->
  <div>
    SearchDetail
    <div id="user__detail">
      <div class="user__detail">
        <img src="" alt="">
        <h2 id="userID">김운동</h2>
        <h3 id="userLevel">레벨: 상병</h3>
        <h3 id="userbasic">남성/180cm.75kg/1980.1.1</h3>
        <h3 id="userdocu">KDN > ICT 사업처 > 정보관리부</h3>
      </div>
    </div>
    <div id="user__badge">
      획득 뱃지
    </div>
    <div id="user__coment">
      <input type="text"> 상담 글 입력
      <button type="submit">건강 조언 남기기</button>
    </div>
  </div>
</template>

<script>
  // 받아온 유저ID게 맞게 정보 가져와야함
  export default {
    name: 'SearchDetail',

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