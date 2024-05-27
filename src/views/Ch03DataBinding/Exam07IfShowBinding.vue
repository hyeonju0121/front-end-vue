<template>
    <div class="card">
        <div class="card-header">Exam07IfShowBinding</div>
        <div class="card-body">
            <!--뷰, 리액트를 사용할 때는 가급적으로 id 사용하지 말기 
            지금은 확인하는 용도로 id 값 사용하는 거임
            v-if 랑 v-show 차이 확인하려고!-->
           <div id="div1" v-if="isPhoto" class="mb-2">
                <img src="/images/photos/photo1.jpg" height="150"/>
           </div>

           <div id="div2" v-show="isPhoto">
               <img src="/images/photos/photo1.jpg" height="150"/>
           </div>

           <hr/>

           <button @click="changeData" class="btn btn-info btn-sm">상태 변수 값 변경</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let isPhoto = ref(true);

function changeData() {
    isPhoto.value = !isPhoto.value;
}

</script>

<style scoped></style>