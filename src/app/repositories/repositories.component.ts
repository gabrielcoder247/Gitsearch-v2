import { Component, OnInit } from '@angular/core';
import { SearchService} from "../search.service";
import { Repos } from '../repos';


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
  providers:[SearchService]
})
export class RepositoriesComponent implements OnInit {
  repos:Repos;
  repoError:boolean;
  public searchRepo:String = "hexcrypt_aes256_encryption";
  public nameToSearch:String;
  public resultCount = 7;

  searchRepos(name){
    this.searchRepo = "";
    for(var i=0;i<name.length;i++){
      if(name.charAt(i)===" "){
        this.searchRepo=this.searchRepo.concat("+");

      }else{
        this.searchRepo= this.searchRepo.concat(name.charAt(i))
      }
    }
    this.resultCount=10;
    this.getDataFunction()
    }
    loadMore(){
      this.resultCount+=10;
      this.getDataFunction();
    }
  


  constructor(public gitRepoRequest:SearchService) { }

  ngOnInit() {
    this.resultCount=1;
    this.gitRepoRequest.gitRepos(this.searchRepo,this.resultCount);
    this.repoError=false;
  }
  getDataFunction(){
    this.gitRepoRequest.gitRepos(this.searchRepo,this.resultCount);
    if(this.gitRepoRequest.searchRepo==="error"){
      this.repoError=true;
    }
    else{
      this.repoError=false;
    }
  }

}
