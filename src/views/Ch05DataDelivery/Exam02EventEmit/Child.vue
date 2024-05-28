<template>
  <div class="card">
    <div class="card-header">Child</div>
      <div class="card-body">
        <div>
            <h6>[자식 -> 부모]</h6>
            <button class="btn btn-secondary btn-sm me-2" 
                    @click="$emit('child-event-1', 'value1')">
                            child-event-1 발생</button>
            <button class="btn btn-secondary btn-sm" 
                    @click="handleChildEvent2">
                            child-event-2 발생</button>
        </div>
      </div>
  </div>
</template>

<script setup>

const emit = defineEmits(['child-event-1', 'child-event-2']);

function handleChildEvent2() {
    emit('child-event-2', 'value1', 'value2');
}

</script>

<style scoped>
</style>