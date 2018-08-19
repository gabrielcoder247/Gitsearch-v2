import { Injectable } from '@angular/core';
import {resolve} from 'url';
import { reject } from 'q';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {Repos} from './repos';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  users:User;
  repos:Repos;
  newRepo:any;
  searchRepo:any;
  gitUserError:boolean;

   //NOTE: this api key has no scope make sure you do not share an api key that has been scoped

  constructor(private http:HttpClient) { 
    this.users = new User ("","","","",0,new Date(),0,0);
    this.repos = new Repos("","","",new Date())
    this.gitUserError=false
  
  
  }
  
  gitUser(searchName){
    interface ApiResponse{
      name:string;
      login:string;
      avatar_url:string;
      html_url:string;
      public_repos:number;
      created_at:Date;
      followers:number;
      following:number;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/users/"+searchName+"?access_token="+this.myApi).toPromise().then(getResponse=>{
        if(getResponse.name){
          this.users.name = getResponse.name;
        }
        else{
          this.users.name = '';
        }
        
        this.users.login = getResponse.login;
        this.users.avatar_url = getResponse.avatar_url;
        this.users.html_url = getResponse.html_url;
        this.users.public_repos = getResponse.public_repos;
        this.users.created_at = getResponse.created_at;
        this.users.followers = getResponse.followers;
        this.users.following = getResponse.following;
        this.gitUserError=false;
        resolve();
      },error=>{
        this.users.name = "Jane Doe"
        this.users.login = "blindspot"
        this.users.avatar_url = "assets/doe.png";
        this.users.html_url = "https://github.com";
        this.users.public_repos = 0;
        this.users.created_at = new Date(Date.now());
        this.users.followers = 0;
        this.users.following = 0;
        this.gitUserError=true;
        reject(error);
      });
    });
    return promise;
  }

  getUserRepos(searchName){
    interface ApiResponse{
      name:string;
      html_url:string;
      description:string;
      created_at:Date;
    }
    let myPromise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/users/"+searchName+"/repos?order=created&sort=asc?access_token="+this.myApi).toPromise().then(getRepoResponse=>{
        this.newRepo = getRepoResponse;
        resolve();
      },error=>{
        reject(error);
      })
    })
    return myPromise;
  }

  gitRepos(searchName,toShow){
    interface ApiResponse{
      items:any;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/search/repositories?q="+searchName+"&per_page="+toShow+"&sort=forks&order=asc?access_token="+this.myApi).toPromise().then(getRepoResponse=>{
        // console.log("success")
        this.searchRepo = getRepoResponse.items;
        resolve();
      },error=>{
        this.searchRepo = "error"
        reject(error);
      })
    })
    return promise;
  }
}