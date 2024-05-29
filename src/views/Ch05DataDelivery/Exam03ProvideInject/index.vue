<template>
  <div class="card border-warning border-3">
    <div class="card-header">Exam03ProvideInject</div>
      <div class="card-body">
        <div>
            <p>data1: {{ data1 }}</p>
            <p>data2.name1: {{ data2.name1 }}</p>
            <p>data2.name2: {{ data2.name2 }}</p>
            <button class="btn btn-danger btn-sm mt-2" @click="changeData">데이터 변경</button>
        </div>
        <hr/>

        <ChildA/>

      </div>
  </div>
</template>

<script setup>
import { provide, ref } from 'vue';
import ChildA from './ChildA.vue';

// 상태 데이터 생성
const data1 = ref("parent-value1");
const data2 = ref({
    name1: "parent-value2",
    name2: "parent-value3"
});

// 하위 컴포넌트로 데이터를 제공
// 속성의 이름과 값이 같은 경우에는 속성 이름 생략 가능 {속성: 값, 속성: 값}
// {data1: data1, data2: data2}
provide("message", {data1, data2});

// 데이터 변경 함수
function changeData() {
    data1.value += "0";
    data2.value.name1 += "0";
    data2.value.name2 += "0";
}

</script>

<style scoped>
</style>