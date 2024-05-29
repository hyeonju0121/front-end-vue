import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
// 폴더가 모듈 이름이 됨.. 
// import router from './router/index.js' 도 되지만
// 폴더라면 자동으로 index.js 를 찾게 되기 때문에 폴더 이름을
// 명시하고 import 해도 된다.

// bootstrap 관련 JavaScript와 CSS 로딩------------
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store'

// app 컴포넌트를 <div id="app"></div> 에 내용으로 추가 
createApp(App).use(store).use(router).mount('#app')
