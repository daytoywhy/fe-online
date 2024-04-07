<template>
  <a-tree
   :selectedKeys="props.selectedKeys"
    :load-data="onLoadData"
    :tree-data="treeData"
    :fieldNames="fieldNames"
    :showIcon="true"
    @select="selectNode"
  >
  <template #switcherIcon="{ switcherCls }"><DownOutlined :class="switcherCls" /></template>
    <template #icon>
      <ApartmentOutlined />
    </template>
  </a-tree>
</template>

<script setup lang="ts">
import { ref, onMounted,defineEmits,defineProps } from 'vue'
import type { TreeProps } from 'ant-design-vue'
import { ApartmentOutlined,DownOutlined } from '@ant-design/icons-vue'
import orgApi from '@/api/org.ts'
const fieldNames = {
  children: 'children',
  title: 'name',
  key: 'id',
}
const expandedKeys = ref<string[]>([])
const selectedKeys = ref<string[]>([])
const treeData = ref<TreeProps['treeData']>([])
onMounted(async () => {
  const res = await orgApi.query()
  treeData.value = res
})
const onLoadData: TreeProps['loadData'] = (treeNode: any) => {
  return new Promise<void>((resolve) => {
    if (treeNode.dataRef.children) {
      resolve()
      return
    }
    setTimeout(() => {
      treeNode.dataRef.children = [
        { name: '技术部', id: `${treeNode.eventKey}-0` },
        { name: '宣传部', id: `${treeNode.eventKey}-1` },
      ]
      treeData.value = [...treeData.value]
      resolve()
    }, 1000)
  })
}
const props = defineProps(['selectedKeys'])
const emits = defineEmits(['update:selectedKeys'])
const selectNode = (selectedKeys) =>{
  emits('update:selectedKeys',selectedKeys)
  console.log(selectedKeys,'selectedKeys');
  
}
</script>

<style></style>
