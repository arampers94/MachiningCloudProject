import { Component, OnInit, TypeProvider, Input } from '@angular/core';
import ToolNode from '../../../models/tool/tool.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-tools',
  templateUrl: './all-tools.component.html',
  styleUrls: ['./all-tools.component.css']
})
export class AllToolsComponent implements OnInit {
  root: ToolNode
  tools: ToolNode[]
  name: string
  message: string = "Select a tool to view children"

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.generateTree()
    this.name = this.route.snapshot.paramMap.get('id')
    console.log('Name searched: ' + this.name)

    // User entered a search from the home page
    if (this.name !== null) {
      this.searchTree(this.name)
      this.message = `Showing results for "${this.name}"`
    } else {
      this.tools = this.root.children
    }
  }

  /* 
    Generates all nodes and their children and appends them to the tree.
    Note: Ideally this code should be moved to a service that generates the
          tree when the app is initialized.
  */
  generateTree() {
    console.log('Generating tree...')

    // Nodes
    this.root = new ToolNode('root')
    var milling = new ToolNode('milling')
    var turning = new ToolNode('turning')
    var holemaking = new ToolNode('holemaking')
    var pocket = new ToolNode('pocket')
    var shoulder = new ToolNode('shoulder')
    var slot = new ToolNode('slot')
    var profileSuperClass = new ToolNode('3d profile super class')
    var odPlanerFace = new ToolNode('od planer face')
    var odCylinderFace = new ToolNode('od cylinder face')
    var odProfile = new ToolNode('od profile')
    var simpleBlindHole = new ToolNode('simple blind hole')
    var threadedBlindHole = new ToolNode('threaded blind hole')
    var genClosedPocket = new ToolNode('general closed pocket')
    var genOpenPocket = new ToolNode('general open pocket')
    var straightShoulder = new ToolNode('straight shoulder')
    var openShoulder = new ToolNode('open shoulder')
    var curveSlot = new ToolNode('curve slot')
    var tSlot = new ToolNode('t-slot')
    var odPlanerFromSolid = new ToolNode('od planer face from solid')
    var odPlanerFromTube = new ToolNode('od planer face from tube')

    // Children
    this.root.addChild(milling)
    this.root.addChild(turning)
    this.root.addChild(holemaking)
    milling.addChild(pocket)
    milling.addChild(shoulder)
    milling.addChild(slot)
    milling.addChild(profileSuperClass)
    turning.addChild(odPlanerFace)
    turning.addChild(odCylinderFace)
    turning.addChild(odProfile)
    holemaking.addChild(simpleBlindHole)
    holemaking.addChild(threadedBlindHole)
    pocket.addChild(genClosedPocket)
    pocket.addChild(genOpenPocket)
    shoulder.addChild(straightShoulder)
    shoulder.addChild(openShoulder)
    slot.addChild(curveSlot)
    slot.addChild(tSlot)
    odPlanerFace.addChild(odPlanerFromSolid)
    odPlanerFace.addChild(odPlanerFromTube)

    console.log('Done!')
  }

  setChildren(tool: ToolNode) {
    // console.log('Received child tool: ' + tool.name)
    this.tools = tool.children
  }

  searchTree(name) {
    // console.log('Scanning tree for ' + name)
    name = name.toLowerCase()
    let toolsList: ToolNode[] = []

    this.searchTreeHelper(this.root, name, toolsList)

    this.tools = toolsList
  }

  // Recursively scan tree for all names that include the search term
  searchTreeHelper(node: ToolNode, searchedName: string, toolsList: ToolNode[]) {
    if (node.children.length === 0 && node.name.includes(searchedName)) {
      toolsList.push(node)
      return
    }

    let children = node.children
    let len = children.length

    for (let i = 0; i < len; i++) {
      this.searchTreeHelper(children[i], searchedName, toolsList)
    }

    if (node.name.includes(searchedName)) {
      toolsList.push(node)
    }
  }

  updateName(name) {
    if (name === "") {
      this.message = "Enter a tool name in the search bar"
      this.tools = []
    } else {
      // console.log('Updating with ' + name)
      this.message = `Showing results for "${name}"`
      this.name = name
      this.searchTree(name)
    }
  }

  setClasses() {
    let classes = {
      'no-results': this.tools.length !== 0
    }

    return classes
  }
}
