<template>
<!-- Search the user. Located center of Content.vue -->
<!-- Send the user name to SearchList.vue -->
  <body>
    <div class="search">
      <div id="input__search">
        <i class="fas fa-search"></i>
        <!-- v-model을 쓰는 것으로 데이터 양방향 전달하는데 나중에 1방향으로 수정 -->
        <input type="text" placeholder="검색어입력" v-model="searchUser">
      </div>
      <div id="button_search">
        <button @click="btn_searchuser">검색</button>
        <!-- 데이터 송수신 확인용 -->
        <h1>{{searchUser}}</h1>
      </div>
    </div>
  </body>
</template>

<script>
  export default {
    name: 'Search',

    data() {
      return {
        // searchUser 데이터 값을 리턴.
        searchUser: ""
      };
    },

    mounted() {

    },

    methods: {
      btn_searchuser(){
        console.log(this.searchUser)
      }
    },
  };
</script>