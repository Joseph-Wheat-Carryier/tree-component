<template>
    <div>
        <node-ele v-for="item, idx in rootNodeList" :node="item">
            <template v-slot:addForm>
                <slot name="addForm"></slot>
            </template>
        </node-ele>
    </div>
</template>
  
<script setup lang="ts">
import NodeEle from "/@/components/Node.vue"
import { Node } from "/@/components/Node"
import { reactive, PropType, inject } from "vue";

let props = defineProps({
    rootNodeList: {
        type: Array as PropType<Array<Node>>
    }
})

let rootNodeList = reactive(props.rootNodeList!)

</script>
<style scoped>

</style>
  