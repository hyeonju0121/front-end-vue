<template>
  <div class="card">
    <div class="card-header">UpdateHook</div>
      <div class="card-body">
        <p>count: {{ count }}</p>
        <!--함수 호출을 안하고도, count++ 이렇게 해서 증가시킬 수 있음-->
        <button class="btn btn-danger btn-sm" @click="count++">상태 변경</button>
      </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, onBeforeUpdate, onUpdated, ref } from 'vue';

// 상태 데이터 생성
const count = ref(0);

// 마운트 될 때 자동으로 콜백되는 함수 생성
onMounted(() => {
    console.log("UpdateHook 컴포넌트가 마운트됨");
});

// 언마운트 될 때 자동으로 콜백되는 함수 생성
onUnmounted(() => {
    console.log("UpdateHook 컴포넌트가 언마운트됨");
});

onBeforeUpdate(() => {
    console.log("UpdateHook 컴포넌트가 업데이트 직전임");
});

onUpdated(() => {
    console.log("UpdateHook 컴포넌트가 업데이트됨");
    // count.value += 1;  -> onUpdated() 내에 상태 변경 코드를 넣게 되면 무한루프에 빠짐
    // 따라서 onUpdated() 내에는 상태 변경 코드를 추가하면 안된다.
});

</script>

<style scoped>
</style>