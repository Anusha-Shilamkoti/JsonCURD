import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { EmpEditComponent } from './emp-edit/emp-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'',                 component:HomePageComponent},
  {path:'emp-list',         component:EmpListComponent},
  {path:'emp-add',          component:EmpAddComponent},
  {path:'emp-edit/:id',     component:EmpEditComponent, pathMatch:'full'},
  {path:'angular',          component:AppComponent},
  {path:'**',               component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
