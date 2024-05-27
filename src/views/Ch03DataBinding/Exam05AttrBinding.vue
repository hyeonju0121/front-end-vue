<template>
    <div class="card">
        <div class="card-header">Exam05AttrBinding</div>
        <div class="card-body">
            <div class="mb-4">
                <h5>:속성 = "변수"</h5>
                <!-- <a href="https://www.vuejs.org" class="me-3">Vue 홈페이지</a> -->
                <a :href="vueHome" class="me-3">Vue 홈페이지</a>
                <!-- <RouterLink to="/">홈 페이지</RouterLink> -->
                <RouterLink :to="appHome">홈 페이지</RouterLink>
            </div>

            <div class="mb-4">
                <h5>:속성 = "연산식" | `매개변수화된 문자열`</h5>
                <!-- <img src="@/assets/photos/photo1.jpg" height="150" class="me-2"/> -->
                <!-- require 은 빌드과정에서 public 으로 다 바뀜 
                    기존 photos 폴더는 assets/photos/ 에 위치했음
                    근데, photos 폴더를 public으로 바꾸게 되면 require 이 필요없어짐
                    기존 : <img :src="require('/images/photos/' + imgName)" height="150" class="me-2" />
                -->
                <img :src="'/images/photos/' + imgName" height="150" class="me-2" />
                <img :src="`/images/photos/${imgName}`" height="150" class="me-2" />
            </div>

            <div class="mb-4">
                <h5>:class="변수 | 객체 | 배열"</h5>
                <div class="mr-3 fw-bold text-info">아름다운 풍경</div>
                <div class="mr-3" :class="className1">아름다운 풍경</div>
                <div class="mr-3" :class="[className1, className2]">아름다운 풍경</div>
                 <!--자바스크립트 객체 안에는 속성: 값 형태로 작성 (false이면 해당 속성 적용 x)-->
                <!-- <div class="mr-3" :class="{'fw-bold':true, 'text-danger':false}">아름다운 풍경</div> -->
                <div class="mr-3" :class="{'fw-bold':isBold, 'text-danger':isRed}">아름다운 풍경</div>
            </div>

            <div class="mb-4">
                <h5>:style="변수 | 객체 | 배열"</h5>
                <div style="margin-bottom: 10px; font-weight: bold;">아름다운 풍경</div>
                <div style="margin-bottom: 10px;" :style="[style1, style2]">아름다운 풍경</div>
                <!-- <div style="margin-bottom: 10px;" :style="{'font-weight':'bold', 'color': 'green'}">아름다운 풍경</div> -->
                <div style="margin-bottom: 10px;" :style="{'font-weight': fontWeight, 'color': textColor}">아름다운 풍경</div>
            </div>
            
            <hr/>

            <!--@:click = "함수 이름" -> 함수 이름 (함수 호출 코드 x)-->
            <button class="btn btn-info btn-sm" @:click="changeData">상태 변수값 변경</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

// 값이 변할 때는 let 사용
let vueHome = ref("https://vuejs.org");
let appHome = ref("/");

let imgName = ref("photo1.jpg");

let className1 = ref("fw-bold");
let className2 = ref("text-danger");

let isBold = ref(true);
let isRed = ref(true);

let style1 = ref("font-weight:bold");
let style2 = ref("color:green");

let fontWeight = ref("bold");
let textColor = ref("green");

let toggle = ref(true);
function changeData() {
    if(toggle.value) {
        imgName.value = "photo20.jpg";
        className1.value = "text-warning";

        fontWeight.value = "";
        textColor.value = "#000ff";
    } else {
        imgName.value = "photo1.jpg";
        className1.value = "text-danger";

        fontWeight.value = "bold";
        textColor.value = "#00ff00";
    }
    toggle.value = !toggle.value;
}

</script>

<style scoped></style>