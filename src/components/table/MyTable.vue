<template>
  <a-card>
    <a-input v-model="query" :bordered="false" placeholder="搜索" @change="onChange">
    <template #prefix>
      <ZoomInOutlined style="color: #ccc;"/>
    </template>
    </a-input>
    <a-table :dataSource="dataSource" :columns="columns" bordered/>
  </a-card>
</template>

<script setup lang="ts">
import {ZoomInOutlined} from '@ant-design/icons-vue'
import userApi from '@/api/user.ts'
import { ref,defineProps,watch } from 'vue'
import {myDebounce} from '@/utils/debounce.ts'
const props = defineProps(['selectedKeys'])
const dataSource = ref([])
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '用户名',
    dataIndex: 'id',
  },
]
const query = ref('')
const search = async() => {
  const res = await userApi.query()
  dataSource.value = res
}
const debounceSearch = myDebounce(search,500)
watch(() => props.selectedKeys, (newVal) => {
  if(newVal){
    debounceSearch()
  }
})
const onChange = (e) => {
  debounceSearch()
}
</script>

<style scoped>
::v-deep(.ant-table-thead >tr>th){
  background: #fff;
}
</style>
