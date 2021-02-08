import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';
import { ListPageComponent } from './list-page/list-page.component';
import { AddCompaniesComponent } from './add-companies/add-companies.component';
@NgModule({
  declarations: [BaseComponent, ListPageComponent, AddCompaniesComponent],
  imports: [
    CommonModule,
    FormsModule,
    BaseRoutingModule
  ]
})
export class BaseModule { }
