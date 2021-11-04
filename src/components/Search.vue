<template>
  <!-- Search the user. Located center of Content.vue -->
  <!-- Send the user name to SearchList.vue -->

  <div class="search">
    <div id="input__search">
      <!-- v-model을 쓰는 것으로 데이터 양방향 전달하는데 나중에 1방향으로 수정 -->
      <font-awesome-icon icon="search" id="search__icon" />
      <input type="text" placeholder="검색어입력" v-model="searchUser" />
    </div>
    <div id="button_search">
      <button @click="btn_searchuser">검색</button>
      <!-- 데이터 송수신 확인용 -->
      <h1>{{ searchUser }}</h1>
    </div>
    sss
  </div>
</template>

<script>
// 유저 검색하고 해당 이름 값을 SearchList 쪽으로 보내주고 뷰 넘겨줘야함
export default {
  name: "Search",

  data() {
    return {
      // searchUser 데이터 값을 리턴.
      searchUser: "",
    };
  },

  mounted() {},

  methods: {
    btn_searchuser() {
      console.log(this.searchUser);
    },
  },
};
</script>

<style>
#search__icon {
  position: relative;
  left: 20px;
}
</style>
