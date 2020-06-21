import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  lineChartData = {'111': {
                      labels: ["10", "11", "12", "1", "2", "3", "4", "5", "6", "7","8","9"],
                      data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420,442,160]
                    },
                    '222': {
                      labels: ["10", "11", "12", "1", "2", "3", "4", "5", "6", "7","8","9"],
                      data: [320, 390, 384, 408, 420,442,160, 340, 365, 360, 370, 385]
                    }
                };
  getPageData(pageId) {
    let  url = 'path/'+pageId;
    //return this.http.get(url)
    return this.lineChartData[pageId];
  }
  getPageList() {
    let  url = 'path/';
    //return this.http.get(url)
    return [
        { path: '/dashboard',     title: 'D-Mart',          pageid: 111 },
        { path: '/dashboard',         title: 'Central',            pageid: 222 },
        { path: '/dashboard',          title: 'AMB',               pageid: 333 },
        { path: '/dashboard', title: 'Store-1',      pageid: 444 },
        { path: '/dashboard',          title: 'Store-2',      pageid: 555 },
        { path: '/dashboard',         title: 'Store-3',         pageid: 666 },
        { path: '/dashboard',    title: 'Store-4',       pageid: 777 },
        { path: '/dashboard',       title: 'Store-5',  pageid: 888 },
    ];
  }
  
}
