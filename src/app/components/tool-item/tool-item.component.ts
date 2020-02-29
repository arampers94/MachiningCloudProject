import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import ToolNode from '../../models/tool/tool.component'
import { Router } from '@angular/router'

@Component({
  selector: 'app-tool-item',
  templateUrl: './tool-item.component.html',
  styleUrls: ['./tool-item.component.css']
})
export class ToolItemComponent implements OnInit {
  @Input() tool: ToolNode
  @Output() newChildren = new EventEmitter()
  name: string

  constructor(private router: Router) { }

  // Set capitalize names displayed to user
  ngOnInit(): void {
    this.name = this.tool.name
    this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1)
  }

  // Call parent function to display nodes children. If node has no children,
  // redirect to a different page that displays the message 'You have reached
  // the leaf node'
  onClick(tool: ToolNode) {
    // console.log('Emitting ' + tool.name)
    if (tool.children.length === 0) {
      this.router.navigate(['/leaf-node'])
    } else {
      this.newChildren.emit(tool)
    }
  }
}
