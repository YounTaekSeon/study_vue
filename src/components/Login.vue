<template>
  <div class="login">
    <div id="login__mid">
      <ul>
        <li id="login" v-for="(login, idx) in logins" :key="{idx}">
          <router-link :to='login.link'>{{ login.content }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
   return {
        toggle: this.enter,
        logins: [{
            content: '페이스북 로그인',
            link: '/contentID'
          },
          {
            content: '구글 로그인',
            link: '/contentID'
          },
          {
            content: '네이버 로그인',
            link: '/contentID'
          },
          {
            content: '카카오톡 로그인',
            link: '/contentID'
          }
        ]
      };
  },

  mounted() {

  },

  methods: {

  },
};
</script>