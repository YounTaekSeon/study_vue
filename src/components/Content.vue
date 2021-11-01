<template>
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
import Info from './Info.vue'


export default {
  name: 'Content',
    components: {
    Search,
    SearchDetail,
    Info
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