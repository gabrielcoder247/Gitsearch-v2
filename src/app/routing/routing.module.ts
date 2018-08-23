import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { SearchComponent } from './../search/search.component';
import { NotFoundComponent } from './../not-found/not-found/not-found.component';
import { RepositoriesComponent } from './../repositories/repositories.component';

const routes:Routes=[
  {path:"users",component: SearchComponent},
  {path:"repos",component: RepositoriesComponent},
  {path:"",redirectTo:"/users",pathMatch:"full"},
  {path:'**',component:NotFoundComponent}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
