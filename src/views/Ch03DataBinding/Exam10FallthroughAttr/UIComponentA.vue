<template>
    <div class="card">
        <div class="card-header">UIComponentA</div>
        <div class="card-body">
            <div :class="myclass" :style="mystyle" @click="onClick">
                Contents
            </div>

        </div>
    </div>
</template>

<script setup>
//defineProps & defineEmits 을 으로 명시적으로 선언한 속성을 제외한
// 나머지 속성들을 fallThrough 속성이라고 함
 
// class와 style 을 props로 지정
const props = defineProps(["myclass", "mystyle"]);
// click 이벤트를 fallthrough 에서 제외
const events = defineEmits(["onClick"]);
</script>

<style scoped>
</style>

