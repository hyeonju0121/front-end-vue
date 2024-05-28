<template>
    <div class="card">
        <div class="card-header">Exam02Watch</div>
        <div class="card-body">
            <div class="row mb-2">
                <label class="col-sm-2 col-form-label">UserId</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="userId">
                </div>
            </div>

            <div class="mb-2">
                <button class="btn btn-secondary btn-sm mt-4" @click="handleProductChange">product 상태의 객체 변경</button>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

// 상태 데이터 생성
let userId = ref("");

// 상태 데이터 감시
watch(userId, (newUserId, oldUserId) => {
    console.group("userId 상태 데이터 변경 감시");
    console.log("newUserId: " + newUserId);
    console.log("oldUserId: " + oldUserId);
    console.groupEnd();
});

// 상태 객체 생성
let product = ref({
    name: "",
    company: "",
    price: 0
});

// 객체 자체가 변경될 때를 감시--------------------------------------------------
watch(product, (newProduct, oldProduct) => {
    console.group("product 객체 자체 변경 감시");
    console.log("newProduct: ", JSON.parse(JSON.stringify(newProduct)));
    console.log("oldProduct: ", JSON.parse(JSON.stringify(oldProduct)));
    console.groupEnd();
});

// 객체 안의 속성까지도 변경 감시 -----------------------------------------------
// 옵션값으로 deep 을 사용 -> deep: true
// deep -> 객체 자체 뿐만 아니라 속성 값의 변경도 감시를 하겠다라는 의미 
watch(product, (newProduct, oldProduct) => {
    console.group("product 객체 자체 뿐만 아니라 속성까지도 변경 감시");
    console.log("newProduct: ", JSON.parse(JSON.stringify(newProduct)));
    console.log("oldProduct: ", JSON.parse(JSON.stringify(oldProduct)));
    console.groupEnd();
}, { deep: true});

// 내가 지정한 속성의 변경 감시-------------------------------------------------
watch(()=> product.value.price, (newPrice, oldPrice) => {
    console.group("price 속성만 변경 감시");
    console.log("newPrice: ", newPrice);
    console.log("oldPrice: ", oldPrice);
    console.groupEnd();
});

// 복수개의 상태를 감시할 경우 --------------------------------------------------
watch([userId, product], ([newUserId, newProduct], [oldUserId, oldProduct]) => {
    console.group("복수개의 상태를 감시할 경우");
    console.log("newUserId: " + newUserId);
    console.log("newProduct: ", JSON.parse(JSON.stringify(newProduct)));
    console.log("oldUserId: " + oldUserId);
    console.log("oldProduct: ", JSON.parse(JSON.stringify(oldProduct)));
    console.groupEnd();
});

// product 상태 객체 변경 함수
function handleProductChange() {
    // 속성 값만 변경
    product.value.company="유니클로";
    product.value.price=54000;

    // 객체 자체가 변경
    product.value = {
        name: "셔츠",
        company: "스톤 아일랜드",
        price: 380000
    };
}

</script>

<style scoped></style>