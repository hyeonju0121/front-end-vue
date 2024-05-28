<template>
    <div class="card">
        <div class="card-header">Exam10FallthroughAttr</div>
        <div class="card-body">
            <!--id는 UIComponentA.vue에 루트 엘리먼트 속성으로 들어가게 된다.-->
            <UIComponentA id="uiComponentA" class="bg-warning" style="color:blue"
                    @click="handleClick"/> 
            
            <UIComponentB id="uiComponentB1" class="bg-secondary" style="color:rgb(252, 185, 161)"
                    @click="handleClick"/> 

            <UIComponentB id="uiComponentB2" class="bg-warning" style="color:blue"
                    @click="handleClick"/> 

        </div>
    </div>
</template>

<script setup>
import UIComponentA from "./UIComponentA.vue";
import UIComponentB from "./UIComponentB.vue";

function handleClick() {
    console.log("Exam10FallthroughAttr.handleClick() 실행됨");
}
</script>

<style scoped>
</style>

