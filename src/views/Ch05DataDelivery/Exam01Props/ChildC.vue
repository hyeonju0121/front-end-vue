<template>
  <div class="card">
    <div class="card-header">ChildC</div>
      <div class="card-body">
          <p>propA: {{ prop.propA }}</p>
          <p>propB: {{ prop.propB }}</p>
          <p>propC: {{ prop.propC }}</p>
          <p>propD: {{ prop.propD }}</p>
          <p>propE: {{ prop.propE }}</p>
          <p>propF: {{ prop.propF.message }}</p>
          <p>propG: {{ prop.propG[0] }}, {{ prop.propG[1] }}</p>
          <p>propH: {{ prop.propH() }}</p>
          <p>propI: {{ prop.propI }}</p>

      </div>
  </div>
</template>

<script setup>

const prop = defineProps({
  propA: String,
  propB: Number,
  propC: [String, Number],
  propD: {
    type: String,
    required: true
  },
  propE: {
    type: Number,
    default: 100 // PropE 가 부모에서 값이 들어오지 않는 경우, defualt 값 설정
  },
  propF: {
    type: Object,
    // 객체의 default 를 설정하려면, 함수 형태로 작성해야 한다.
    // default: {message: "hello!!"} (X)
    default() { 
      return {message:"hello!! "};
    }
  },
  propG: {
    type: Array,
    // 배열의 default 를 설정하려면, 함수 형태로 작성해야 한다.
    default() {
      return ["black", "white"];
    }
  },
  propH: {
    type: Function,
    // 함수의 기본 return 값을 설정할 수 있다.
    default() {
      return "기본값";
    }
  },
  propI: {
    type: Number,
    validator(value) {
      return value > 0 && value < 11;
    }
  }
});

</script>

<style scoped>
</style>