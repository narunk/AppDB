import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http}from '@angular/http';
import 'rxjs/add/operator/map';
import { DetailproductPage } from '../detailproduct/detailproduct';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
sproduct : any=0;
data : any;
  constructor(public navCtrl: NavController, public http:Http) {
    this.getData();
  }

//Create method getData สำหรับดึงข้อมูลจาก API
getData(){
  this.http.get('http://localhost:8080/product')
  .map(res=>res.json())
  .subscribe(data=>{
    this.sproduct=data;
  });
}
//create method show เพื่อแสดงรายละเอียดเมื่อกดปุ่ม ดูรายละเอียด
showDetail(){
  this.navCtrl.push(DetailproductPage);

}
}
