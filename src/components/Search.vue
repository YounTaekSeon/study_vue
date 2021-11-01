<template>

  <body>
    <div class="search">
      <div id="input__search">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="검색어입력" v-model="searchUser">
        <h1>{{ searchUser }}</h1>
      </div>
      <div id="button_search">
        <button @click="btn_searchuser">검색</button>
      </div>
    </div>
  </body>
</template>

<script>
  export default {
    name: 'Search',

    data() {
      return {};
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