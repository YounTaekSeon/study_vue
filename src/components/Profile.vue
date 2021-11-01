<template>
<!-- Located left side of whole view -->
<!-- View medical Professor information. Located left side of view -->
<!-- Select the search menu got the datas from search.json to login.js -->
<!-- Can logout -->
  <div class="profile">
    <div id="profile__top">
      <img src="" alt="Logo">
      <img src="" alt="User_pho">
      <h1>박OO</h1>
      <h2>의료전문인</h2>
    </div>

    <div id="profile__mid">
      <ul>
        <li id="search" v-for="(search, idx) in searches" :key="{idx}">
          <router-link :to='search.link'>{{ search.content }}</router-link>
        </li>
      </ul>
    </div>

    <div id="profile__bottom">
      <ul>
        <li>내 정보</li>
        <li>로그아웃</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Profile',

    data() {
      return {
        toggle: this.enter,
        searches: [{
            content: '사용자 검색',
            link: '/user/contentID'
          },
          {
            content: '그룹검색',
            link: '/group/contentID'
          },
          {
            content: '배틀정보',
            link: '/battle/contentID'
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

<style>
  .profile {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 250px;
    height: 1000px;
    background: rgba(255, 98, 124, 0.6);
    padding: 40px 0;
    overflow: hidden
  }
</style>