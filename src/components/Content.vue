<template>
<!-- Located right side of whole view -->
<!-- Show Search, SearchDetail, SearchList, Info, InfoExe,Infohealth -->
    Content
  <div v-if=searchUser>
    <SearchDetail />
    <Info />
  </div>
  <div v-else>
    <Search />
  </div>
</template>

<script>
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

    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>