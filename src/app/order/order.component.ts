import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../order.service';
import { CustomMaterialModule } from '../material.module';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  username: string ="Jack Linder"
  orderlist: any;
  itemsAdded: any = [];
  totalRecords: any;
  cost=0;
  showTable: boolean = false;
  showAllTable: boolean = false;
  shipping=0;
  tax=0;
  selectedIndex: any;
  disablebutton: boolean = false;
  NewItem:any;
  AM: any;
  PM: any;
  add: boolean = false;
  confirmation: boolean = false;
  itemList=[
    {
      name: 'Ajay',
      date: '2022-03-13',
      start_time: '1 PM',
      end_time: '2 PM'
    },
    {
      name: 'Neha',
      date: '2022-03-13',
      start_time: '2 PM',
      end_time: '3 PM'
    },
    {
      name: 'Pulkit',
      date: '2022-03-14',
      start_time: '2 PM',
      end_time: '4 PM'
    }
  ]
  buttonSelect: any;
  labelName: any
  text ="you will recive an email confirmation shortly to jack.linder@gmail.com including product details."
  textnew ="estimated delivery on 15 JUL,2020"
  share ="share on social"
  constructor( public service : OrderService,private router: Router,private activatedRoute: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit() {
    this.getList();
      var dtToday = new Date();
    //   var month = dtToday.getMonth() + 1;
    //   var day = dtToday.getDate();
    //   var year = dtToday.getFullYear();
    //   (<HTMLInputElement>document.getElementById('dateVal'))?.attributes('min', maxDate);

     (<HTMLInputElement>document.getElementById('dateVal')).valueAsDate = new Date();
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

  selectedTabValue(event: any){
    console.log(event);
    this.labelName = event.tab.textLabel;
    console.log(this.labelName)
  }

  updateValue(e: any){
    this.buttonSelect= e;
    this.NewItem= [];
    this.showTable= true;
    this.showAllTable= false;
    this.itemList.forEach(x=>{
      if(x.name == e){
        this.NewItem.push({
          name: x.name,
          date:x.date,
          start: x.start_time,
          end: x.end_time
        })
      }
    })
     console.log('New', this.NewItem)
  }
  getAllValue(){
    this.showAllTable= true;
    this.showTable= false;
    this.itemList = this.itemList
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

  popup(){
    alert("This tool is to Watch the scheduled Interview of the candidate or Schedule the Interview")
  }

  save(){
    var userdata = (<HTMLInputElement>document.getElementById('nameInput')).value;
    var dateT = (<HTMLInputElement>document.getElementById('dateVal')).value;
    var s_time = (<HTMLInputElement>document.getElementById('starttime')).value;
    var s_slot = (<HTMLInputElement>document.getElementById('s')).value;
    var new_start_slot = s_time +" "+ ((s_slot == '1') ? 'AM' : 'PM' )
    var e_time = (<HTMLInputElement>document.getElementById('endtime')).value;
    var e_slot =(<HTMLInputElement>document.getElementById('e')).value;
    var new_end_slot = e_time +" "+ ((e_slot == '1') ? 'AM' : 'PM' )
    console.log(userdata,dateT,s_time,s_slot,e_time,e_slot)
    // if(userdata && dateT && s_time && s_slot && e_time && e_time){
    //   (<HTMLInputElement>document.getElementById("myBtn")).disabled = false;
    // }
    if(!userdata||!dateT||!s_time||!e_time){
      alert("Incomplete Data");
      this.add=false;
    }
    else
    if(s_time>e_time){
        alert("Invalid Time Slot");
        this.add=false;
    }
    else{
    this.itemList.forEach(x=>{
      if(x.name == userdata && x.date ==dateT && x.start_time == new_start_slot && x.end_time == new_end_slot){
        alert("Already Interview Scheduled at same Date and Time");
      }else{
        this.add = true;
      }
    })}
    if(this.add){
      this.itemList.push({
        name: userdata,
        date: dateT,
        start_time: new_start_slot,
        end_time: new_end_slot
      })
    }

    this.reset()
  }
  reset(){
  (<HTMLInputElement>document.getElementById('nameInput')).value = "";
  (<HTMLInputElement>document.getElementById('dateVal')).value = "";
  (<HTMLInputElement>document.getElementById('starttime')).value ="";
  (<HTMLInputElement>document.getElementById('s')).value ="1";
  (<HTMLInputElement>document.getElementById('endtime')).value ="";
  (<HTMLInputElement>document.getElementById('e')).value = "1";
  }
}
