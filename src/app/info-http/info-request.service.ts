import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../user';
import {Repository} from '../repository';

@Injectable({
  providedIn: 'root'
})
export class InfoRequestService {
  user:User;
  repos=[];
  repositories=[];
  constructor(private http:HttpClient) {
    this.user= new User(0,"","",0,0,0,"");
   }
   infoRequest(username:string){
    if(username!=""){
     interface ApiResponse{
       name:string;
       avatar_url:string;
       followers:number;
       following:number;
       public_repos:number;
       repos_url:string;
       created_at:string;
     }
     let promise = new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>(environment.apiUrla+username+environment.apiUrlb).toPromise().then(response=>{
         this.user.id++;
         this.user.name =response.name;
         this.user.picture =response.avatar_url;
         this.user.followers=response.followers;
         this.user.following=response.following;
         this.user.repositories=response.public_repos;
         this.user.creationDate=response.created_at;
         resolve();
       },error=>{
         reject(error);
       })

   })
   return promise;
   }
 }
   repoRequest(username:string){
     interface ApiResponse2{
      name:string;
      description:string;
      language:string;
      forks:number;
      html_url:string;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse2>(environment.apiUrl2a+username+environment.apiUrl2b).toPromise().then(response=>{
        for(let i=0;i<response["length"];i++){
          let newRepo= new Repository(0,"","","",0,"");
          newRepo.repoId = i+1;
          newRepo.repoName = response[i].name;
          newRepo.description = response[i].description;
          newRepo.language = response[i].language;
          newRepo.forks = response[i].forks;
          newRepo.url = response[i].html_url;
          this.repos.push(newRepo);
        }
        resolve();
      },error=>{
        reject(error);
      })
    })
    return promise;
   }
   repoNameRequest(reponame:string){
     interface ApiResponse3{
      name:string;
      description:string;
      language:string;
      forks:number;
      html_url:string;
      items;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse3>(environment.apiUrl3a+reponame+environment.apiUrl3b).toPromise().then(response=>{
        for(let i=0;i<response.items["length"];i++){
          let newRepo= new Repository(0,"","","",0,"");
          newRepo.repoId = i+1;
          newRepo.repoName = response.items[i].name;
          newRepo.description = response.items[i].description;
          newRepo.language = response.items[i].language;
          newRepo.forks = response.items[i].forks;
          newRepo.url = response.items[i].html_url;
          this.repositories.push(newRepo);
        }
        resolve();
      },error=>{
        reject(error);
      })
    })
    return promise;
   }
}
