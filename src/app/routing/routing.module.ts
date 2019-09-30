import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { MyprofileComponent} from '../my-profile/my-profile.component';
import { UserComponent} from '../user/user.component';
import { RepositoryComponent} from '../repository/repository.component';
//Defining routes
const routes:Routes=[
  {path:"my-profile", component:MyprofileComponent},
  {path:"user", component:UserComponent},
  {path:"repository",component:RepositoryComponent},
  {path:"",redirectTo:"/my-profile",pathMatch:"full"}

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
