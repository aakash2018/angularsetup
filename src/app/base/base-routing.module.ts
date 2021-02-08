import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPageComponent } from './list-page/list-page.component'
import { AddCompaniesComponent } from './add-companies/add-companies.component'
const routes: Routes = [
  {
    path: '',
    component: ListPageComponent
  },
  {
    path: 'add',
    component: AddCompaniesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
