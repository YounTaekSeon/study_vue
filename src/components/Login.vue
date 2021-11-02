<template>

  <body>
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
  </body>
</template>

<script>
  // 나중에 로그인 데이터 불러오는 것으로 수정 예정
  // SNS로 로그인 해야함. 서버로 토큰 받아오면 화면 넘겨주고 그 전까지는 화면 안 넘여주게 router link 바꿔야함
  export default {
    name: 'login',
    data() {
      return {
        toggle: this.enter,
        logins: [{
            content: '페이스북 로그인',
            link: '/search'
          },
          {
            content: '구글 로그인',
            link: '/search'
          },
          {
            content: '네이버 로그인',
            link: '/search'
          },
          {
            content: '카카오톡 로그인',
            link: '/search'
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