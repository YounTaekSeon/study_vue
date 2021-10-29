<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>

  <!-- 파일 다운로드 할 수 있는 영역 or 페이지 추가 -->
  <h2>파일목록</h2>
  <div class="fileList">
    <div v-for="file in fileList" :key="file.id">
      <font-awesome-icon v-if="type === folder" icon="folder" size="3x" />
      <font-awesome-icon v-else-if="type === file" icon="file" size="3x" />
      <!-- <p v-else>알 수 없는 파일 형식</p> -->
      <p>{{ file.name }}</p>
    </div>
  </div>

  <!-- <router-view /> -->
</template>

<script>
import db from "./db";

export default {
  data() {
    return {
      fileList: db.fileList,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fileList {
  margin: 0 auto;
  width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
