import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../order.service';

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
      start_time: '3 PM',
      end_time: '4 PM'
    }
  ]
  buttonSelect: any;
  labelName: any
  constructor( public service : OrderService,private router: Router) { }

  ngOnInit() {
    (<HTMLInputElement>document.getElementById('dateVal')).valueAsDate = new Date();
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

  edit() {
    (<HTMLInputElement>document.getElementById("edit_button")).style.display = "none";
    (<HTMLInputElement>document.getElementById("save_button")).style.display = "inline";

    var name = (<HTMLInputElement>document.getElementById("name_row"));
    var date = (<HTMLInputElement>document.getElementById("date_row"));
    var stime = (<HTMLInputElement>document.getElementById("stime_row"));
    var etime = (<HTMLInputElement>document.getElementById("etime_row"));

    var name_data = name.innerHTML;
    var date_data = date.innerHTML;
    var stime_data = stime.innerHTML;
    var etime_data = etime.innerHTML;

    name.innerHTML = "<input type='text' id='name_text' value='" + name_data + "'>";
    date.innerHTML = "<input type='text' id='date_text' value='" + date_data + "'>";
    stime.innerHTML = "<input type='text' id='stime_text' value='" + stime_data + "'>";
    etime.innerHTML = "<input type='text' id='etime_text' value='" + etime_data + "'>";
  }

  save(){
    var name_val=(<HTMLInputElement>document.getElementById("name_text")).value;
    var date_val=(<HTMLInputElement>document.getElementById("date_text")).value;
    var stime_val=(<HTMLInputElement>document.getElementById("stime_text")).value;
    var etime_val=(<HTMLInputElement>document.getElementById("etime_text")).value;

    (<HTMLInputElement>document.getElementById("name_row")).innerHTML=name_val;
    (<HTMLInputElement>document.getElementById("date_row")).innerHTML=date_val;
    (<HTMLInputElement>document.getElementById("stime_row")).innerHTML=stime_val;
    (<HTMLInputElement>document.getElementById("etime_row")).innerHTML = etime_val;

    (<HTMLInputElement>document.getElementById("save_button")).style.display="none";
    (<HTMLInputElement>document.getElementById("edit_button")).style.display="inline";
  }

  delete(){
    (<HTMLInputElement>document.getElementById("row")).outerHTML="";
  }

  edit_row(no: any) {
    (<HTMLInputElement>document.getElementById("edit_button" + no)).style.display = "none";
    (<HTMLInputElement>document.getElementById("save_button" + no)).style.display = "inline";

    var name = (<HTMLInputElement>document.getElementById("name_row" + no));
    var date = (<HTMLInputElement>document.getElementById("date_row" + no));
    var stime = (<HTMLInputElement>document.getElementById("stime_row" + no));
    var etime = (<HTMLInputElement>document.getElementById("etime_row" + no));

    var name_data = name.innerHTML;
    var date_data = date.innerHTML;
    var stime_data = stime.innerHTML;
    var etime_data = etime.innerHTML;

    name.innerHTML = "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";
    date.innerHTML = "<input type='text' id='date_text" + no + "' value='" + date_data + "'>";
    stime.innerHTML = "<input type='text' id='stime_text" + no + "' value='" + stime_data + "'>";
    etime.innerHTML = "<input type='text' id='etime_text" + no + "' value='" + etime_data + "'>";
  }

  save_row(no: any){
    var name_val=(<HTMLInputElement>document.getElementById("name_text"+no)).value;
    var date_val=(<HTMLInputElement>document.getElementById("date_text"+no)).value;
    var stime_val=(<HTMLInputElement>document.getElementById("stime_text"+no)).value;
    var etime_val=(<HTMLInputElement>document.getElementById("etime_text"+no)).value;

    (<HTMLInputElement>document.getElementById("name_row"+no)).innerHTML=name_val;
    (<HTMLInputElement>document.getElementById("date_row"+no)).innerHTML=date_val;
    (<HTMLInputElement>document.getElementById("stime_row"+no)).innerHTML=stime_val;
    (<HTMLInputElement>document.getElementById("etime_row"+no)).innerHTML = etime_val;

    (<HTMLInputElement>document.getElementById("save_button"+no)).style.display="none";
    (<HTMLInputElement>document.getElementById("edit_button"+no)).style.display="inline";
  }

  delete_row(no: any,it_name: any){
    (<HTMLInputElement>document.getElementById("row"+no+"")).outerHTML="";
    this.itemList.filter(function(el){
      return el.name !== it_name;
    });
  }
  getAllValue(){
    this.showAllTable= true;
    this.showTable= false;
    this.itemList = this.itemList
  }

  popup(){
    alert("This tool is to Watch the scheduled Interview of the candidate or Schedule the Interview")
  }

  savedata(){
    var userdata = (<HTMLInputElement>document.getElementById('nameInput')).value;
    var dateT = (<HTMLInputElement>document.getElementById('dateVal')).value;
    var s_time = (<HTMLInputElement>document.getElementById('starttime')).value;
    var s_slot = (<HTMLInputElement>document.getElementById('s')).value;
    var new_start_slot = s_time +" "+ ((s_slot == '1') ? 'AM' : 'PM' )
    var e_time = (<HTMLInputElement>document.getElementById('endtime')).value;
    var e_slot =(<HTMLInputElement>document.getElementById('e')).value;
    var new_end_slot = e_time +" "+ ((e_slot == '1') ? 'AM' : 'PM' )
    console.log(userdata,dateT,s_time,s_slot,e_time,e_slot)
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
