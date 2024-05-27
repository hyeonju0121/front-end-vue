<template>
  <div class="d-flex flex-column vh-100">
      <AppHeader />
      <div class="flex-grow-1 container-fluid">
        <div class="row h-100">
          <div class="col-md-6 col-lg-4 bg-dark px-2">
            <div class=" h-100 d-flex flex-column">
              <div class="flex-grow-1 mb-3" style="height:0px; overflow-y:auto; overflow-x:hidden;">
                <AppMenu />
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-8 bg-dark px-2 ">
            <div class=" h-100 d-flex flex-column">
              <div class="flex-grow-1 overflow-auto" style="height:0px">
                <router-view/> <!--라우터의 컴포넌트가 들어감-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>     
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppMenu from "@/components/AppMenu.vue";
</script>

<style>
</style>
