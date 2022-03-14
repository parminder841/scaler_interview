import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  username: string ="Jack Linder"
  orderlist: any;
  itemsAdded: any = [];
  totalRecords: any;
  cost=0;
  shipping=0;
  tax=0;
  confirmation: boolean = false;
  text ="you will recive an email confirmation shortly to jack.linder@gmail.com including product details."
  textnew ="estimated delivery on 15 JUL,2020"
  share ="share on social"
  constructor( public service : OrderService,private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.service.getDetail().subscribe(res => {
      console.log(res);
      this.orderlist = res;
      Object.keys(this.orderlist.order).forEach( ele =>{
        this.cost +=  this.orderlist.order[ele].USD;
      })
      this.totalRecords= this.orderlist.order.length();
    })


  }

  remove(item: any){
    this.orderlist.order = this.orderlist.order.filter((value: any , index: number )=> index !== item);
    this.cost = 0;
    Object.keys(this.orderlist.order).forEach( ele =>{
      this.cost +=  this.orderlist.order[ele].USD;
    })
    console.log(this.orderlist);
  }

  proceed(){
    this. confirmation = true;
  }


  cancel(){
      alert("Oreder Cancelled");
      this.router.navigate(['/login'])
  }

  continue(){
    alert("Oreder Continue");
    this.router.navigate(['/login'])
  }

}
