import { Component, OnInit } from '@angular/core';
import { BaseServiceService } from './../base-service.service'
import { Router } from "@angular/router";
@Component({
  selector: 'app-add-companies',
  templateUrl: './add-companies.component.html',
  styleUrls: ['./add-companies.component.css']
})
export class AddCompaniesComponent implements OnInit {
  model: any = { rating: 1 }
  constructor(public service: BaseServiceService, public router: Router) { }

  ngOnInit(): void {
  }

  add() {
    this.service.addCompany(this.model).subscribe((res) => {
      console.log(res)
      if (res) {
        this.router.navigate(['/']);
        this.model = { ratind: 1, name: '', review: '', rating: '' }
      }
    })
  }

}
