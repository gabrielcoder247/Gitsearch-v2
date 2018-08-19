import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchTerm:string;
  @Output() getName = new EventEmitter();
  getData(){
    this.getName.emit(this.searchTerm);
    this.searchTerm = ''
  }
  constructor() { }

  ngOnInit() {
  }

}
