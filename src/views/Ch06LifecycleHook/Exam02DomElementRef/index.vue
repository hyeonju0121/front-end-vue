<template>
  <div class="card">
    <div class="card-header">Exam02DomElementRef</div>
      <div class="card-body">
        <div>
            <h6>[DOM 엘리먼트 참조]</h6>
            <p>data: {{ data }}</p>
            <div class="d-flex">
                <!--v-model 을 사용해서 양방향 바인딩도 할 수 있지만,
                엘리먼트를 찾아와서 해당 엘리먼트가 갖고 있는 value 를 데이터에 넣어주는 방법으로 진행
                -->
                <input id="input1" ref="input1Ref" type="text" style="line-height: 25px;"/>
                <button class="btn btn-danger btn-sm ms-2" @click="setData">입력 양식값 변경</button>
            </div>
        </div>
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const data = ref("summer");
const input1Ref = ref(null);

function setData() {
    // 방법 1----------------------------------------------------
    // 마운트가 된 이후에 실행되는 것임
    // 버튼을 눌렀을 때 setData() 함수가 호출되는 거니까, 
    // 해당 버튼을 눌렀다는 것은 마운트가 된 상태임을 알 수 있음
    // const input1 = document.querySelector("#input1");
    // data.value = input1.value;

    // 방법 2----------------------------------------------------
    // input1Ref는 처음에 null 값을 갖다가, input 태그 객체가 만들어지는 시점에 
    // ref 에다가 상태 변수를 넣게 되면, 자동으로 상태변수의 값이 들어가게 됨 
    // input1Ref.value -> 상태 객체
    // input1Ref.value.value -> 상태 객체의 값
    data.value = input1Ref.value.value;
}

</script>

<style scoped>
</style>