<template>
    <div class="card">
      <div class="card-header">Exam02CounterState</div>
        <div class="card-body">
          <h6>[counter 상태 읽기]</h6>
          <p>counter 단방향 바인딩: {{ $store.state.counter.count }}</p>
          <p>counter 단방향 바인딩: {{ $store.getters["counter/getCount"] }}</p>
          <p>counter 단방향 바인딩: {{ getCount() }}</p> 
          <p>counter 단방향 바인딩: {{ computedCounter }}</p> 
          <p>counter 양방향 바인딩: <input type="text" v-model="$store.state.counter.count"/></p> 
      
          <hr/>

          <h6>[counter 상태 변경]</h6>
          <button class="btn btn-secondary btn-sm me-2" 
              @click="changeByMutation">counter 변경(Mutation 동기 방식)</button>
          <button class="btn btn-warning btn-sm" 
              @click="changeByActions">counter 변경(Actions 비동기 방식)</button>
            
        </div>
    </div>
  </template>
  
<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

 const store = useStore();

function getCount(){
    // return store.getters["counter/getCount"];
    return store.state.counter.count;
}

const computedCounter = computed(() => {
    // return store.getters["counter/getCount"];
    return store.state.counter.count;
});

function changeByMutation() {
    // commit 이용
    store.commit("counter/setCount", 10);
}

function changeByActions() {
    // actions 이용
    store.dispatch("counter/addAction", 3);
}

</script>
  
<style scoped>
</style>