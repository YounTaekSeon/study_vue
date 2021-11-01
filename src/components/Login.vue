<template>
<!-- Login -->
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
// 나중에 로그인 데이터 불러오는 것으로 수정 예정
export default {
  name: 'login',
  data() {
   return {
        toggle: this.enter,
        logins: [{
            content: '페이스북 로그인',
            link: '/Home'
          },
          {
            content: '구글 로그인',
            link: '/Home'
          },
          {
            content: '네이버 로그인',
            link: '/Home'
          },
          {
            content: '카카오톡 로그인',
            link: '/Home'
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