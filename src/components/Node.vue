<template>
    <div class="nodeWrapper">
        <div class="parentNode">
            <PlusSquareOutlined class="plus" />
            <span class="title">{{ node?.getTitle() }}</span>
            <span class="btn" @click="showModal">新增</span>
        </div>
        <div v-if="node!.getProvidedChildren().length > 0" class="chidNodeWrapper">
            <Node :key="idx" class="childNode" v-for="item, idx in node?.getProvidedChildren()" :node="item">
                <template v-slot:addForm>
                    <slot name="addForm"></slot>
                </template>
            </Node>
        </div>
        <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
            <slot name="addForm"></slot>
        </a-modal>
    </div>
</template>

<script setup lang="ts">
import { PlusSquareOutlined } from '@ant-design/icons-vue'
import { PropType, reactive, ref, inject } from 'vue';
import { Node as NodeType } from "./Node"
const props = defineProps({
    node: {
        type: Object as PropType<NodeType>
    }
})
let addNodeFunction: Function = inject("addNodeFront") as Function

let node = reactive(props.node!)

function addChildFront(node: NodeType) {
    node.addChild([node])
}


let visible = ref(false)
function showModal() {
    visible.value = true
}

function handleOk() {
    addNodeFunction(node)
}

</script>

<style lang="less" scoped>
.title {
    margin-left: 20px
}

.nodeWrapper {
    * {
        width: 100%;
    }
}

.parentNode {
    display: inline-block;

    * {
        display: inline;
    }
}

.chidNodeWrapper {
    display: inline-block;
    margin-left: 40px;
}

.childNode {}

.btn {
    visibility: hidden;
    margin-left: 20px;
    background-color: #17c817;
}

.parentNode:hover {
    .btn {
        visibility: visible;
    }

    .btn:hover {
        cursor: pointer;
    }
}
</style>