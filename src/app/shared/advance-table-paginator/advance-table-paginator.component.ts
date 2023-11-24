import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-advance-table-paginator',
  templateUrl: './advance-table-paginator.component.html',
  styleUrls: ['./advance-table-paginator.component.scss']
})

export class AdvanceTablePaginatorComponent implements OnInit {
  @Input() pageNo:number=1;
  @Input() pagesTotal:number=1;
  @Input() rowCount:any={};
  @Input() pageCount:any[]=[];
  @Input() paginatorBlock:any[]=[];
  @Input() selectedPageCount:number=1;
  @Input() DataLoader:boolean=false;
  
  @Output() onPaginatorChange = new EventEmitter<any>();
  
  UserPageCount=1;
  
  inputPageBox = new FormControl('',Validators.required);
  constructor() { }
  
  ngOnInit(): void {
    this.UserPageCount=this.selectedPageCount;
  }
  
  buttonPressed(value:any){
    this.inputPageBox.setValue('1');
    this.onPaginatorChange.emit({'action':'pageSize','pageSize':value});
  }
  
  countPressed(){
    this.onPaginatorChange.emit({'action':'pageNo','pageNo':this.inputPageBox.getRawValue()});
  }

  pagerPressed(pageval:any){
    if(pageval!=this.pageNo)
    this.onPaginatorChange.emit({'action':'pageNo','pageNo':pageval});
  }

  pnPressed(val:number){
    if(val==1){
      if(this.pageNo!=1)
      this.onPaginatorChange.emit({'action':'pageNo','pageNo':this.pageNo-1});
    }
    else{
      if(this.pageNo!=this.pagesTotal)
      this.onPaginatorChange.emit({'action':'pageNo','pageNo':this.pageNo+1});
    }
  }
  
}
