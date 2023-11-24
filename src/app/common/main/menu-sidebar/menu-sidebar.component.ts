import {AppState} from '@/store/state';
import {UiState} from '@/store/ui/state';
import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppService} from '@services/app.service';
import {ApiService} from '@services/api.service';
import {Observable} from 'rxjs';
import {config} from '@services/config';

import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

const BASE_CLASSES = 'main-sidebar elevation-4';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss'],
})

export class MenuSidebarComponent implements OnInit {
  @HostBinding('class') classes: string = BASE_CLASSES;
  public ui: Observable<UiState>;  
  public userCompany='';
  public menu:any = [];
  public extendableMenu:any = [];
  constructor (public appService: AppService, private store: Store<AppState>, private apiservice : ApiService) {}

  showSubMenu: boolean = false;
  showSubMenureport: boolean = false;
  showSubMenucontennt: boolean = false;
   toggleSubMenu() {
     this.showSubMenu = !this.showSubMenu; 
    }

    toggleSubMenureprts() {
      this.showSubMenureport = !this.showSubMenureport; 
     }

    toggleSubMenucontent() {
      this.showSubMenucontennt = !this.showSubMenucontennt; 
     }
  
  ngOnInit() {
    this.ui = this.store.select('ui');
    this.ui.subscribe((state: UiState) => {
      this.classes = `${BASE_CLASSES} ${state.sidebarSkin}`;
    });
    this.getAllData();
  }

  convertLinksToLowerCase(obj:any[]) {
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'object' && value !== null) {
        this.convertLinksToLowerCase(value);
      } else if (key === 'AppUrl') {
        obj[key] = value.toLowerCase();
      }
    }
  }
  
  getAllData(){
    let userData=JSON.parse(localStorage.getItem('personalDetails'));
    this.userCompany = (userData.FName?userData.FName.toUpperCase():'')+(userData.LName?' '+userData.LName.toUpperCase():'');
    console.log("this.userCompany",this.userCompany);
    
    this.menu = JSON.parse(localStorage.getItem('adminMenu'));
    console.log("this.menu",this.menu);
    
  }


}