<template>
  <div class="card">
    <div class="card-header">ChildB</div>
      <div class="card-body">
        <!--부모가 전달한 값을 자식 템플릿에서 값 읽기-->
        <p>productNo: {{ productNo }}</p>
        <p>productKind: {{ productKind }}</p>
        <p>product: {{ product.no }}, {{ product.kind }}</p>
        <p>no: {{ no }}</p>
        <p>kind: {{ kind }}</p>
     
      </div>
  </div>
</template>

<script setup>
// 구조분해해서 안에 속성 바로 받음 -> no, kind
const prop = defineProps([
  "productNo", "productKind", "product", "no", "kind"
]);

console.log("productNo: ", prop.productNo, typeof(prop.productNo));
console.log("productKind: ", prop.productKind, typeof(prop.productKind));
console.log("product: ", JSON.parse(JSON.stringify(prop.product)));
console.log("no: ", prop.no);
console.log("kind: ", prop.kind);

</script>

<style scoped>
</style>