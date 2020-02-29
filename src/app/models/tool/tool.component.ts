export default class ToolNode {
  name: string;
  children: ToolNode[] = [];
  parent: ToolNode = null

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name
  }

  getChildren() {
    return this.children;
  }

  addChild(node: ToolNode) {
    node.setParent(this)
    this.children.push(node)
  }

  setParent(node: ToolNode) {
    this.parent = node
  }
}
