import { createApp } from "vue";
import App from "./App.vue";

// SPA는 페이지 이동을 라우팅이라는 것을 통해 제공한다
// 뷰에서 사용하는 라우팅 기능을 사용하기 위함
import router from "./router";

// SPA에서는 전역 상태관리 개념이 있다
// 컴포넌트 단으로 상태를 전달하지 않고 전역으로 (사용자 로그인 정보 등) 사용할 상태들을 관리한다
import store from "./store";

// font-awesome과 관련된 import를 정의
// 무료 아이콘을 뷰 컴포넌트 형태로 제공해주는 라이브러리
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFolder, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faFolder);
library.add(faFile);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
