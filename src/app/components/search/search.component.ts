import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string;
  @Output() updateName = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event) {
    this.updateName.emit(event)
  }
}
