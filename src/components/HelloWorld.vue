<template> 
  <div class="card">
    <div class="card-header">Hello World</div>
    <div class="card-body">
      <h4>{{ msg }}</h4>
      <hr/>
      <span>UI Component 입니다.</span>
    </div>
  </div>
</template>

<script setup>
//import { defineProps } from 'vue'; 
// -> import 없이 defineProps를 사용할 수 있도록 .eslintrc.js 에서 설정을 추가함
const props = defineProps(['msg']);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
컴포넌트 안에만 사용하는 style 인 경우에는 scoped 라고 정의
전체 애플리케이션에서 사용하는 style 인 경우(ex.테마) 는
scoped 를 사용하지 않고, <style</style> 이라고 사용해야함 
전체 스타일을 적용하고 싶은 경우, 가능하면 app.vue 에 적용하기
하위가 scope 로 되어있으면, 하위 scope 가 우선적으로 적용됨 
-->
<style scoped>
span {
  color: green
}
</style>
