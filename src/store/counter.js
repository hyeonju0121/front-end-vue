export default {
    // 모듈의 이름을 루트 하위 네임스페이스로 지정
    namespaced: true,

    // 상태 정의
    state: {
        count: 100
    },

    getters: {
        // rootState 는 인덱스의 state 를 참조함
        // rootGetters 는 인덱스의 gettets를 참조함
        getCount(state, getters, rootState, rootGetters) {
            return state.count;
        }
    },

    mutations: {
        setCount(state, payload) {
            state.count += payload;
        }
    },

    actions: {
        addAction(context, payload) {
            context.commit("setCount", payload);
        }
    }
};