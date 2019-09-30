import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';
import {Repository} from '../repository';
import {InfoRequestService} from '../info-http/info-request.service';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  providers:[InfoRequestService],
  styleUrls: ['./myprofile.component.css']
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
   
    this.infoService.infoRequest("anumasif");
    this.user=this.infoService.user;

    this.infoService.repoRequest("anumasif");
    this.repos=this.infoService.repos;
  }

}
