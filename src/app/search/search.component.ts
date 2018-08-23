import { Component, OnInit } from '@angular/core';
import {User} from "../user"
import {Repos} from "../repos"
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[SearchService]
})
export class SearchComponent implements OnInit {

  public searchName:string = 'gabrielcoder247';
  public gitUser:string;
  invalidSearch:boolean= false

  users:User;
  repos:Repos;

  searchUser(name){
    this.gitUser='';
    for(var i=0;i<name.length;i++){
      //validate username
      if(name.charAt(i)===" "||name.charAt(i)==="?"||name.charAt(i)==="/"){
        this.invalidSearch=true
      this.gitUser = 'gabrielcoder247';
      break;
      }
      else{
        this.gitUser = this.gitUser.concat(name.charAt(i));
        this.invalidSearch=false
      }
    }
    this.searchName=this.gitUser;
    if(this.invalidSearch===false){
      this.searchUsers()
    }
    
  }


  constructor(public gitUserRequests:SearchService,public gitUserRepos:SearchService) { }

  ngOnInit() {
    this.searchUsers();
  }
  searchUsers(){
    this.gitUserRequests.gitUser(this.searchName).then(()=>{
      this.users=this.gitUserRequests.users;
    });
  
    this.gitUserRepos.getUserRepos(this.searchName).then(()=>{
      this.repos=this.gitUserRepos.repos
  });

}
}
