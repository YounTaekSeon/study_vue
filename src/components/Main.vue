<template>
<!-- Layout of whole view -->
<!-- Left side: Profile, Right side: Content -->
  <div class="main__profile">
    <Profile />
  </div>
  <div class="main__content">
    <Content />
  </div>
</template>
<script>
import Profile from './Profile.vue'
import Content from './Content.vue'
export default {
  name: 'Main',
  components: {
    Profile,
    Content
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