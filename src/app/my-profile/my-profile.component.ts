import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';
import {Repository} from '../repository';
import {InfoRequestService} from '../info-http/info-request.service';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  providers:[InfoRequestService],
  styleUrls: ['./my-profile.component.css']
})
export class MyprofileComponent implements OnInit {
  user:User;
  repos=[];

  show = false;
  constructor(private infoService:InfoRequestService) { }
  showRepo(){
    this.show=true;
  }
  ngOnInit() {
   
    this.infoService.infoRequest("wavyylikethesea");
    this.user=this.infoService.user;

    this.infoService.repoRequest("wavyylikethesea");
    this.repos=this.infoService.repos;
  }

}
