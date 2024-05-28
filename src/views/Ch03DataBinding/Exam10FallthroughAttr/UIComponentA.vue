<template>
    <div class="card">
        <div class="card-header">UIComponentA</div>
        <div class="card-body">
            <!--클릭 이벤트를 발동시켜주는 역할이 emit : 클릭 이벤트를 방출한다(발생시킨다)-->
            <div :class="prop.class" :style="prop.style" @click="emit('click')">
                Contents
            </div>

            <button class="btn btn-info btn-sm mt-2" @click="handleClick">버튼</button>

        </div>
    </div>
</template>

<script setup>
//defineProps & defineEmits 을 으로 명시적으로 선언한 속성을 제외한
// 나머지 속성들을 fallThrough 속성이라고 함
 
// class와 style 을 props로 지정
const prop = defineProps(["class", "style"]);
// click 이벤트를 fallthrough 에서 제외
const emit = defineEmits(["click"]);

function handleClick() {
    // 컴포넌트의 속성값을 읽기
    console.log(prop.class);
    console.log(prop.style);
    // 컴포넌트의 click 이벤트를 발생 
    emit('click'); 
}

</script>

<style scoped>
</style>

