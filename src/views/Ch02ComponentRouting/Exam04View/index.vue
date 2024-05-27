<template>
    <div class="card">
        <div class="card-header">Exam04View</div>
        <div class="card-body">
            <h4>태그로 화면 이동</h4>
            <p><RouterLink to="/Ch02ComponentRouting/Exam01View">Exam01View</RouterLink></p>
            <p><RouterLink v-bind:to="'/Ch02ComponentRouting' + '/Exam01View'">Exam01View</RouterLink></p>
            <p><RouterLink :to="'/Ch02ComponentRouting' + '/Exam01View'">Exam01View</RouterLink></p>
            <p><RouterLink :to="{path: '/Ch02ComponentRouting/Exam01View'}">Exam01View</RouterLink></p>
            <p><RouterLink :to="{name: 'Exam01View'}">Exam01View</RouterLink></p> <!--name: 라우터에 등록된 이름-->

            <hr/>

            <h4>프로그램으로 화면 이동</h4>
            <p><button class="btn btn-info btn-sm" v-on:click="goUrl('Exam01View')">Exam01View</button></p>
            <p><button class="btn btn-info btn-sm" @click="goUrl('Exam02View')">Exam02View</button></p>
        </div>
    </div>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter(); // 라우터 객체 얻기

function goUrl(kind) {
    router.push("/Ch02ComponentRouting/" + kind)
    .then(() => {
        // .then() -> 이동이 다 완료되고 나서 로그가 실행됨
        console.log("이동 완료");
    });
    //console.log("이동 완료"); // Exam01View 실행되기 전에 이동완료 라는 콘솔이 먼저 찍힘
                             // 즉, 이동이 완료되기도 전에 로그가 찍힘         
}

</script>

<style scoped>  
</style>