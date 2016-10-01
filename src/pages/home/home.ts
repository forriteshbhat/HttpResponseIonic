import { Component, OnInit } from '@angular/core';

import {CustomerService} from '../../providers/customer-service';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[CustomerService]
})
export class HomePage {

  private customers:any;
  constructor(public navCtrl: NavController, private _customerService:CustomerService) {
    
  }

  loadPage(){
    this._customerService.load()
    .then(data => {
      this.customers = data});
  }

}
