<template>
  <div class="card">
    <div class="card-header">Exam02EventEmit</div>
      <div class="card-body">
        <Child @child-event-1="handleChildEvent1"
               @child-event-2="handleChildEvent2"/>
      </div>
  </div>
</template>

<script setup>
import Child from './Child.vue';

function handleChildEvent1(data1) {
    console.log("handleChildEvent1() 실행");
    console.log("data1: ", data1);
}

function handleChildEvent2(data1, data2) {
    console.log("handleChildEvent2() 실행");
    console.log("data1: ", data1);
    console.log("data2: ", data2);
}

</script>

<style scoped>
</style>