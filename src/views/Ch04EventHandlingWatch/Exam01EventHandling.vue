<template>
    <div class="card">
        <div class="card-header">Exam01EventHandling</div>
        <div class="card-body">
            <div class="mb-3">
                <h6>[이벤트 처리]</h6>
                <!-- 함수 그 자체 -->
                <button class="btn btn-danger btn-sm me-3" @click="handleBtn1">버튼 1</button>
                <!-- 괄호()가 있으므로 함수를 호출 -->
                <button class="btn btn-info btn-sm" @click="handleBtn2('vue is good', $event)">버튼 2</button>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">아이디</span>
                <!-- :value : 단방향. v-model을 쓰지않았기 때문에 양방향이 X -->
                <!-- 앞으로 모든 변수는 '상태'로 사용할 것이다. -->
                <input type="text" class="form-control" name="userID" :value="userID" @keyup="handleInput($event)" />
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">아이디</span>
                <!-- v-model 양방향 바인딩 -->
                <input type="text" class="form-control" name="userID" v-model="userID" />
            </div>
            <div>입력 내용: {{ userID }}</div>

            <hr/>

            <div class="mt-3">
                <h6>[이벤트 수식어]</h6>
                <!-- 외부 링크로 연결되지 않고, 해당 링크를 클릭했을 때 자바스크립트 및 함수를 실행하고 싶다면?
                     javascript:func1() 와 동일함 
                -->
                <!-- <a href="javacript:fun1()">링크로 자바스크립트 실행</a>  스프링에서는 가능함(vue 에서는 사용 X)-->
                <a href="https://vuejs.org" @click.prevent="handleLink">외부링크로 자바스크립트 실행</a>


                <!--submit.prevent: 폼에 기본적으로 제출 기능이 있는데 중지하고, 자바스크립트 함수를 실행하고 싶을 때-->
                <form class="my-3" @submit.prevent="handleForm">
                    <div class="input-group mb-3">
                        <span class="input-group-text">이메일</span>
                        <input type="email" class="form-control" v-model="userEmail">
                    </div>
                    <div>입력내용: {{ userEmail }}</div>
                        <input type="submit" value="제출" class="btn btn-success btn-sm mt-2" />
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

function handleBtn1() {
    console.log("handleBtn1 실행");
}

function handleBtn2(arg, event) {
    console.log("handleBtn2 실행");
    console.log("arg:" + arg);
    console.log("event,target:", event.target); // 이벤트가 발생하는 타켓(엘리먼트)
}

let userID = ref(""); // 디폴트 값은 빈문자열

function handleInput(event) {
    console.log("event.target.name: " + event.target.name);
    console.log("event.target.value: " + event.target.value);
    userID.value = event.target.value;
}

function handleLink() {
    console.log("handleLink() 실행");
}

let userEmail = ref("");

function handleForm() {
    console.log(userEmail.value);
}

</script>

<style scoped></style>