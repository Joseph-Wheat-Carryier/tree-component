export interface Node {
    id: number | string
    children: Node[]
    hasChild(): boolean
    getProvidedChildren(): Node[]
    addChild(node:Node[]):void
    getTitle(): string
}












