import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';


export interface RouteInfo {
    path: string;
    title: string;
    pageid: number;
}

export const ROUTES: RouteInfo[] = [];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    searchElement: any;
    public menuItems: any[];
    defPageId: number;
    constructor(private rest: RestService, private router: Router) {

    }
    ngOnInit() {
        let  ROUTES: RouteInfo[] = this.rest.getPageList();
        if (ROUTES.length > 0) {
            this.defPageId = ROUTES[0].pageid;
        }
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        if (window.location.hash === '#/dashboard') {
            this.router.navigate(['dashboard'], { queryParams: { id: this.defPageId } })
        }
    }
    loadPage(){
        setTimeout(function(){})
    }
    
}
