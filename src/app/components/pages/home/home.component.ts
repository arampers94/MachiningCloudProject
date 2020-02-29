import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string = "";
  errorMessage: string = "Search query can not be blank"
  showMessage: boolean = false

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // Attach search query to url. Tree is searched for query on "All tools" page
  onSubmit(event) {
    event.preventDefault()
    if (this.name !== "") {
      console.log('Searching for ' + this.name)
      this.router.navigate([`/all-tools/${this.name}`])
    } else {
      this.showMessage = true
    }
  }

  setClasses() {
    let classes = {
      'show': this.showMessage
    }

    return classes
  }
}
