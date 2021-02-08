import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import {BaseServiceService} from './../base-service.service'
@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  userData: any
  constructor(private httpClient: HttpClient, private router: Router,public service:BaseServiceService) { }

  ngOnInit(): void {
    this.service.companyList().subscribe(data => {
      console.log(data)
      this.userData = data;
    })

  }

}
