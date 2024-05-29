import { createStore } from 'vuex';
import counter from './counter';

//Store 객체 생성
const store = createStore({
  //루트 상태(전역 상태) 정의
  state: {
     userId: "hyeonju0121"
  },
  //루트 상태(전역 상태) 값을 읽는 메소드(Getter) 정의
  getters: {
    getUserId(state, getters, rootState, rootGetters) {
      return state.userId;
    }
  },
  //루트 상태(전역 상태)를 변경하는 메소드(Setter) 정의 -> 동기 방식
  // payload : 변경할 상태 값을 갖고 있는 객체
  // state 기존 객체에 변경할 상태 값을 갖고 있는 객체 대입
  mutations: {
    setUserId(state, payload) {
      state.userId = payload;
    }
  },
  //루트 상태(전역 상태)를 변경하는 메소드 정의 -> 비동기 방식
  //비동기 작업을 실행하고 결과에 따라 상태 값을 변화시키는 메소드 정의 
  // 주로 Restful API로 비동기 요청하고, 응답을 받은 후에 상태 변이를 시키는 것을 목적으로 함
  actions: {
    // context 를 통해서 state 값을 얻을 수 있다. 
    // payload 에 id, password 객체가 실려서 들어오게됨 
    loginAction(context, payload) {
      new Promise((resolve, reject) => {
        // (비동기 작업 처리)
        // 서버와 통신 작업
        // ... 3초 소요 된다고 가정
        if(true) {
          // 로그인 성공 -> 성공시 then(data) data로 들어감
          resolve({result: "success", userId: payload.userId});
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
        context.commit("setUserId", data.userId); 
      })
      // 작업이 실패 처리될 경우 catch 실행
      .catch((error) => {
        //예외가 발생했거나, reject일 경우
        console.log("로그인 실패");
      });
    }
  },
  // 루트 하위 상태 모듈 추가
  modules: {
    // 하위 모듈 네임스페이스 : import한 하위 모듈 이름
    //counter: counter, => 속성: 값 이름이 같아서 생략해서 작성 counter
    counter,
  }
});

// store 객체 내보내기
export default store;
