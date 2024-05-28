<template>
  <div class="card">
    <div class="card-header">Exam01Props</div>
      <div class="card-body">
        <!--부모에서 고정 값을 설정하고 자식에게 넘기기-->
        <ChildA prop1="value1"
                prop2="value2"
                productNo="1"
                product-kind="bag"
                :productPrice="1000"
                :objectProp="{name: '홍길동', age:25}"
                :arrayProp="['블랙', '레드']"
                :funProp="() => { return '리턴값'; }"/>
        
        <hr/>

        <!--부모에서 상태 데이터 값을 바꾼다면? 
        자식에도 바뀐 데이터가 전달됨
        상태 데이터 값이 바뀌면서 리렌더링 되기 때문에!-->
        <ChildB v-bind:productNo="product.no"
                :productKind="product.kind"
                :product="product"
                v-bind="product"/>
        <button class="btn btn-secondary btn-sm mt-2" @click="changeData">상태 변경</button>
      
        <hr/>

        <ChildC propA="문자열"
                :propB="5"
                propC="vue"
                :propD="`frontend`"
                :propH="()=> '기본값1'"
                :propI="5"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ChildA from "./ChildA.vue";
import ChildB from "./ChildB.vue";
import ChildC from "./ChildC.vue";

const product = ref({
    no: 1,
    kind: "bag"
});

function changeData(){
    product.value.no += 1;
    product.value.kind += "g";
}
</script>

<style scoped>
</style>