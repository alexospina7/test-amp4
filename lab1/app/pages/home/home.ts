import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import  {ProfilePage} from '../profile/profile';
import  {ProductPage} from '../product/product';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navControl: NavController) {
}
  	changePageOne(){
  		this.navControl.push(ProfilePage);
  	}
  changePageTwo(){
  	this.navControl.push(ProductPage);
  }
}
