<template>
  <div id="app">
    <div class="tree">
      <MyTree v-model:selectedKeys="selectedKeys"></MyTree>
    </div>
    <div class="table">
        <my-table :selectedKeys="selectedKeys"></my-table>

    </div>
  </div>
</template>

<script setup>
import MyTable from '@/components/table/MyTable.vue'
import MyTree from '@/components/tree/MyTree.vue'
import { ref } from 'vue'
const selectedKeys = ref([])
</script>

<style scoped>
#app{
  height: 100vh;
  width:  100vw;
  display: flex;
}
.tree{
  width: 300px;
  height: 100%;
  margin-right: 16px;
}
.table{
  flex: 1;
}
</style>
