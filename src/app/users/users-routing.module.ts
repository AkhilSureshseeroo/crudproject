import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'users',redirectTo:'users/index',pathMatch:'full'},
  {path:'users/index',component:IndexComponent},
  {path:'users/:userid/view',component:ViewComponent},
  {path:'users/create',component:CreateComponent},
  {path:'users/:userid/edit',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
