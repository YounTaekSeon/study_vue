<template>
<!-- Located left side of Content.vue -->
<!-- Show name about entered before and users who have same name-->
<!-- Show simple information about users in list -->
<!-- Can select the user who medical Professor want to see -->
  <div>
    SearchList
    <div class="search">
      <div id="input__search">
        <!-- v-model을 쓰는 것으로 데이터 양방향 전달하는데 나중에 1방향으로 수정 -->
        <font-awesome-icon icon="search" id="search__icon"/>
        <input type="text" placeholder="검색어입력" v-model="searchUser">
      </div>
      <div id="button__search">
        <button @click="btn_searchuser">검색</button>
        <!-- 데이터 송수신 확인용 -->
        <h1>{{searchUser}}</h1>
      </div>
    </div>
    <div class="list">
      <div id="userlist">
        <ul>
          <li class="button__user1">
            <img src="" alt="">
            <h2 id="userID">김운동</h2>
            <h3 id="userLevel">레벨: 상병</h3>
            <h3 id="userbasic">남성/180cm.75kg/1980.1.1</h3>
            <h3 id="userdocu">KDN > ICT 사업처 > 정보관리부</h3>
          </li>
          <li class="button__user2">
            <img src="" alt="">
            <h2 id="userID">김운동</h2>
            <h3 id="userLevel">레벨: 상병</h3>
            <h3 id="userbasic">남성/180cm.75kg/1980.1.1</h3>
            <h3 id="userdocu">KDN > ICT 사업처 > 정보관리부</h3>
          </li>
          <li class="button__user3">
            <img src="" alt="">
            <h2 id="userID">김운동</h2>
            <h3 id="userLevel">레벨: 상병</h3>
            <h3 id="userbasic">남성/180cm.75kg/1980.1.1</h3>
            <h3 id="userdocu">KDN > ICT 사업처 > 정보관리부</h3>
          </li>
          <li class="button__user4">
            <img src="" alt="">
            <h2 id="userID">김운동</h2>
            <h3 id="userLevel">레벨: 상병</h3>
            <h3 id="userbasic">남성/180cm.75kg/1980.1.1</h3>
            <h3 id="userdocu">KDN > ICT 사업처 > 정보관리부</h3>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 검색했을 때 이름 같은 유저들 보여줘야함
// 선택한 유저ID를 Detail에서 보여줄 수 있도록 값과 뷰를 넘겨줘야함
export default {
  name: 'SearchList',

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