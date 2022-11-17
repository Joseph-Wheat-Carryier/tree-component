<template>
  <div>
    <node-root :rootNodeList="[china]">
      <template v-slot:addForm>
        <a-form-item label="名称">
          <a-input v-model:value="nodeToAdd.name" />
        </a-form-item>
      </template>
    </node-root>
  </div>
</template>

<script setup lang="ts">
import NodeRoot from "/@/components/NodeRoot.vue"
import { Node } from "/@/components/Node"
import { provide, reactive } from "vue"
class OneNode implements Node {
  constructor(node?: any) {
    if (!node) {
      return
    }
    this.id = node.id
    this.name = node.name
  }
  id: number | string = ""
  name: string = ""

  children: Node[] = []
  hasChild(): boolean {
    return this.children.length > 0
  }

  getProvidedChildren(): Node[] {
    return this.children
  }

  getTitle(): string {
    return this.name
  }

  addChild(node: Node[]): void {
    node.forEach(n => this.children.push(n))
  }
}

let china: Node = new OneNode({ id: 0, name: "中国" })
let jiangsu: Node = new OneNode({ id: 1, name: "江苏" })
let lyg: Node = new OneNode({ id: 2, name: "连云港sljflsjdfldsj" })
let sq: Node = new OneNode({ id: 3, name: "宿迁" })
let ha: Node = new OneNode({ id: 4, name: "淮安" })
let yc: Node = new OneNode({ id: 5, name: "盐城" })
let xz: Node = new OneNode({ id: 6, name: "徐州" })
let nt: Node = new OneNode({ id: 7, name: "南通" })
let yz: Node = new OneNode({ id: 8, name: "扬州" })
let tz: Node = new OneNode({ id: 10, name: "泰州" })
let zj: Node = new OneNode({ id: 11, name: "镇江" })
let nj: Node = new OneNode({ id: 12, name: "南京" })
let sz: Node = new OneNode({ id: 13, name: "苏州" })
let wx: Node = new OneNode({ id: 14, name: "无锡" })
let cz: Node = new OneNode({ id: 15, name: "常州" })
jiangsu.addChild([lyg, sq, ha, yc, xz, nt, yz, tz, zj, nj, sz, wx, cz])
china.addChild([jiangsu])

let nodeToAdd = reactive(new OneNode())
let id = 15

provide("addNodeFront", (parentNode: Node) => {
  parentNode.addChild([new OneNode(nodeToAdd)])
})

</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
