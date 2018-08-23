import { Component, OnInit } from '@angular/core';
// import { SearchService } from '../search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  // providers:[SearchService]
})
export class NavbarComponent implements OnInit {
  searchTerm:String

  constructor() { }

  ngOnInit() {
  }

}
