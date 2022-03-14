import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  totalRecords: any;
  public currentTabIndex = 1
  getDetail() {
    let routeUrl: string;
    routeUrl = './assets/mockData/GetOrder.json'
        return this.http.get(routeUrl);
  }

  getAllOrder() {
    let routeUrl: string;

  }

}
