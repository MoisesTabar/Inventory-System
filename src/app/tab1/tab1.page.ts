import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { IsaveBillsResponse } from '../models/save-bills';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [ ApiService ]
})
export class Tab1Page implements OnInit{

  public bills: IsaveBillsResponse[];

  constructor(private service: ApiService){}

  ngOnInit(){
    this.service.getBills().subscribe(data => {
        this.bills = data
        console.log(this.bills);
    })
  }

  public print(){
      const print = document.querySelector('.print-btn');
      print.addEventListener('click', () => {
          window.print();
      })
  }
}
