<template>
    <div class="card">
        <div class="card-header">Exam03State</div>
        <div class="card-body">
            <p>번호: {{ no }}</p>
            <p>이름: {{ name + "-" + company }}</p>
            <p>설명: {{ detail.info }}</p>
            <p>상태: {{ detail.sale? "판매":"품절" }}</p>
            <p>가격: {{ getPrice() }}</p>

            <hr/>
            <button class="btn btn-info btn-sm"
                @click="changeData">상태 변수 값 변경</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

let no = ref(1);
let name = ref("미니백");
let company = ref("클레인");

let detail = ref({
    info: "시그너츠 Cecycle Lock 마그네틱 클로저가 특징입니다.",
    sale: false
});

let price = ref(100000);
function getPrice() {
    return price.value; // 상태 객체의 값을 return 하니까 price.value
}

function changeData() {
    no.value++;
    name.value = "백팩";

    // (1) detail 상태 객체의 속성 값을 교체하고 싶은 경우 --------------
    // detail.value.info = "시그너츠 Cecycle Lock 마그네틱 클로저와 빨간색의 조화가 좋습니다.";
    // detail.value.sale = !detail.value.sale;

    // (2) detail 상태 객체를 새로 교체하고 싶은 경우 --------------
    detail.value = {
        info: "시그너츠 Cecycle Lock 마그네틱 클로저와 빨간색의 조화가 좋습니다.",
        sale: !detail.value.sale
    };

    price.value += 1000;
}

</script>

<style scoped>
</style>
