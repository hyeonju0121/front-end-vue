<template>
  <div class="card">
    <div class="card-header">MountHook</div>
      <div class="card-body">
        
      </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

// 마운트 될 때 자동으로 콜백되는 함수 생성
onMounted(() => {
    console.log("MountHook 컴포넌트가 마운트됨");
});

onUnmounted(() => {
    console.log("MountHook 컴포넌트가 언마운트됨");
});

</script>

<style scoped>
</style>