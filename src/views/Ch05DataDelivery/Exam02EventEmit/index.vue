<template>
  <div class="card">
    <div class="card-header">Exam02EventEmit</div>
      <div class="card-body">
        <Child @child-event-1="handleChildEvent1"
               @child-event-2="handleChildEvent2"
               @increment-event="handleIncrementEvent"
               @decrement-event="handleDecrementEvent"
               :counter="counter"/>
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
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

// 상태 정의
const counter = ref(0);

// 상태 값 변경
function handleIncrementEvent(amount) {
    counter.value += amount;
}

function handleDecrementEvent(amount) {
    counter.value -= amount;
}

</script>

<style scoped>
</style>