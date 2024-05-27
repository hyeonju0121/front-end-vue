<template>
    <div class="card">
        <div class="card-header">Exam09FormBinding</div>
        <div class="card-body">
            <!-- <form @submit.prevent="handleSubmit">  v-on: 말고 @submit도 가능-->
            <!--유효성검사가 통과되고 나면 checkData가 활성화됨-->
            <form @submit.prevent="handleSubmit">
                <div class="input-group mb-2">
                    <span class="input-group-text">상품</span>
                    <input type="text" class="form-control" v-model="product.name">
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">회사</span>
                    <input type="text" class="form-control" v-model="product.company">
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">가격</span>
                    <input type="number" class="form-control" v-model="product.price">
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">설명</span>
                    <input type="text" class="form-control" v-model="product.info">
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">국가</span>
                    <select class="form-control" v-model="product.madein">
                        <option value="한국">한국</option>
                        <option value="미국">미국</option>
                        <option value="독일">독일</option>
                    </select>
                </div>

                <!--체크박스가 다중 값일때 배열 항목으로 바인딩-->
                <div class="input-group mb-2">
                    <span class="input-group-text">색상</span>
                    <div class="form-control">
                        <div class="form-check form-check-inline">
                            <input id="checkboxBlack" class="form-check-input" type="checkbox" value="black" v-model="product.colors">
                            <label class="form-check-label" for="chekboxBlack">블랙</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input id="checkboxRed" class="form-check-input" type="checkbox" value="red" v-model="product.colors">
                            <label class="form-check-label" for="chekboxRed">레드</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input id="checkboxYellow" class="form-check-input" type="checkbox" value="yellow" v-model="product.colors">
                            <label class="form-check-label" for="chekboxYellow">옐로우</label>
                        </div>
                    </div>
                </div>

                <!-- 체크박스가 단일항목일 때, true/false로 바인딩-->
                <div class="input-group mb-2">
                    <span class="input-group-text">판매1</span>
                    <div class="form-control">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="chekboxSale1" value="black" 
                                v-model="product.sale1">
                            <label class="form-check-label" for="chekboxSale1">판매1</label>
                        </div>
                    </div>
                </div>

                <!--체크박스 단일항목일때, true/false 이외에 다른 값으로 바인딩하고 싶은 경우-->
                <div class="input-group mb-2">
                    <span class="input-group-text">판매2</span>
                    <div class="form-control">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="chekboxSale2" 
                                v-model="product.sale2" true-value="yes" false-value="no">
                            <label class="form-check-label" for="chekboxSale2">판매2</label>
                        </div>
                    </div>
                </div>

                <!-- 라디오 버튼 -->
                <div class="input-group mb-2">
                <span class="input-group-text">성별</span>
                    <div class="form-control">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="chekboxSex1" value="man" v-model="product.sex">
                            <label class="form-check-label" for="chekboxSex1">남성</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="chekboxSex2" value="woman" v-model="product.sex">
                            <label class="form-check-label" for="chekboxSex2">여성</label>
                        </div>
                    </div>
                </div>

                <div>
                    <input type="submit" value="등록" class="btn btn-danger btn-sm me-2"/>
                    <!-- <input type="reset" value="재작성" class="btn btn-info btn-sm"/> -->
                    <button type="button" class="btn btn-info btn-sm" @click="handleReset">재작성</button>
                </div>
                
            </form>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let product = ref({
    name: "셔츠",
    company: "스톤 아일랜드",
    price: 380000,
    info: "예뻐요",
    madein: "미국",
    colors: ["black", "yellow"],
    sale1: true,
    sale2: "yes",
    sex: "woman"
});

function handleSubmit() {
    // 유효성 검사 코드 추가 ==========================


    console.log("양식 제출 버튼을 클릭했습니다.");
    console.log(JSON.parse(JSON.stringify(product.value)));
    // JSON.stringfy -> json string 으로 변환
    // JSON.parse -> json 객체로 변환

    // 서버 통신 코드 추가 ===========================
}

function handleReset() {
    product.value = {
    name: "셔츠",
    company: "스톤 아일랜드",
    price: 380000,
    info: "예뻐요",
    madein: "미국"
    };
}
</script>

<style scoped></style>