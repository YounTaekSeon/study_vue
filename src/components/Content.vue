<template>
  <!-- Located right side of whole view -->
  <!-- Show Search, SearchDetail, SearchList, Info, InfoExe,Infohealth -->
  Content

  <!-- <div v-if=searchUser>
    <SearchDetail />
    <Info />
  </div>
  <div v-else>
    <Search />
  </div> -->

  <!-- Test code -->

  <!-- <div>
    <Search />
  </div> -->
  <div id="test">
    <button @click="testSearch">testSearch
    </button>

    <button @click="testSearchDetail">testSearchDetail
    </button>

    <button @click="testSearchList">testSearchList
    </button>

    <button @click="testInfo">testInfo
    </button>

    <div id="testSearch" v-if="displaysearch">
      <Search />
    </div>
    <div id="testSearchDetail" v-if="displaysearchdetail">
      <SearchDetail />
    </div>
    <div id="testSearchlist" v-if="displaysearchlist">
      <SearchList />
    </div>
    <div id="testInfo" v-if="displaytestInfo">
      <Info />
    </div>
  </div>

</template>

<script>
  // 레이아웃 위치 정해줘야함
  import Search from './Search.vue'
  import SearchDetail from './SearchDetail.vue'
  import SearchList from './SearchList.vue'
  import Info from './Info.vue'
  import InfoExercise from './InfoExercise.vue'
  import InfoHealth from './InfoHealth.vue'


  export default {
    name: 'Content',
    components: {
      Search,
      SearchDetail,
      SearchList,
      Info,
      InfoExercise,
      InfoHealth
    },
    data() {
      return {
        displaysearch: false,
        displaysearchdetail: false,
        displaysearchlist: false,
        displaytestInfo: false
      };
    },

    mounted() {

    },

    methods: {
      testSearch() {
        this.displaysearch = true;
        this.displaysearchdetail = false,
          this.displaysearchlist = false,
          this.displaytestInfo = false
      },
      testSearchDetail() {
        this.displaysearch = false;
        this.displaysearchdetail = true,
          this.displaysearchlist = false,
          this.displaytestInfo = false
      },
      testSearchList() {
        this.displaysearch = false;
        this.displaysearchdetail = false,
          this.displaysearchlist = true,
          this.displaytestInfo = false
      },
      testInfo() {
        this.displaysearch = false;
        this.displaysearchdetail = false,
          this.displaysearchlist = false,
          this.displaytestInfo = true
      }

    },
  };
</script>