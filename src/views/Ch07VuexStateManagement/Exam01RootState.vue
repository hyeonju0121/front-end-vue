<template>
  <div class="card">
    <div class="card-header">Exam01RootState</div>
      <div class="card-body">
        <h6>[루트 상태 읽기]</h6>
        <p>userId 단방향 바인딩: {{ $store.state.userId }}</p>
        <p>userId 단방향 바인딩: {{ $store.getters.getUserId }}</p>
        <!-- store 내에 있는 게터가 아닌, 사용자 정의 함수로 호출-->
        <p>userId 단방향 바인딩: {{ getUserId() }}</p> 
        <!--computed 상태 값이 바뀔 때만 호출하고, 상태 값이 바뀌지 않으면 이전 값 그대로 사용-->
        <p>userId 단방향 바인딩: {{ computedUserId }}</p> 
        <p>userId 양방향 바인딩: <input type="text" v-model="$store.state.userId"></p> 
      
        <hr/>

        <h6>[루트 상태 변경]</h6>
        <button class="btn btn-secondary btn-sm me-2" 
            @click="changeByMutation">userId 변경(Mutation 동기 방식)</button>
        <button class="btn btn-warning btn-sm" 
            @click="changeByActions">userId 변경(Actions 비동기 방식)</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

function getUserId() {
    //return store.state.userId;
    return store.getters.getUserId;
}

const computedUserId = computed(() => {
    //return store.state.userId;
    return store.getters.getUserId;
});

function changeByMutation() {
    new Promise((resolve, reject) => {
        // (비동기 작업 처리)
        // 서버와 통신 작업
        // ... 3초 소요 된다고 가정
        if(true) {
          // 로그인 성공 -> 성공시 then(data) data로 들어감
          resolve({result: "success", userId: "vue"});
        } else {
          // 로그인 실패 -> 실패시 catch(error) error로 들어감
          reject({result: "fail", message: "password is wrong."});
        }
      
      })
      // 3초가 소요되고 나서 수행할 작업 정의 (작업이 성공적으로 처리가 됐을 경우)
      // data: 서버와 통신 작업을 한 결과 
      .then((data) => {
        //resolve일 경우 mutations을 이용해서 상태값 변경
        console.log("로그인 성공");
        // context를 이용해서 루트 상태 값을 얻을 수 있으니까, context에 변경한 상태 값을 commit 함
        store.commit("setUserId", data.userId); 
      })
      // 작업이 실패 처리될 경우 catch 실행
      .catch((error) => {
        //예외가 발생했거나, reject일 경우
        console.log("로그인 실패");
      });
}

function changeByActions() {
    // action 은 dispatch 로 호출
    store.dispatch("loginAction", {userId: "spring"});
}
</script>

<style scoped>
</style>