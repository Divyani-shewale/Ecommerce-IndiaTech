import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-advance-table',
  templateUrl: './advance-table.component.html',
  styleUrls: ['./advance-table.component.scss']
})

export class AdvanceTableComponent implements OnInit {
  @Input() TableCollumnData:any[]=[];
  @Input() TableData:any[]=[];
  @Input() DataLoader:boolean=false;
  @Output() onInputChange = new EventEmitter<any>();
  @Output() onHeaderInputChange = new EventEmitter<any>();
  @Input() rowCount?:number=0;
  
  dateValues: Date[] = [];
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  setToggleChange(row:number,cell:number,event:MatSlideToggleChange){
    let inputValue = {'row':row,'col':cell,'value':event.checked,'type':'Toggle'};
    this.onInputChange.emit(inputValue);
  }

  setCheckChange(row:number,cell:number,type:any){
    let inputValue = {'row':row,'col':cell,'type':type};
    this.onInputChange.emit(inputValue);
  }
  
  buttonPressed(row:number,cell:number,type:string){
    let inputValue = {'row':row,'col':cell,'type':type};
    this.onInputChange.emit(inputValue);
  }

  buttonHeaderPressed(row:number,cell:number,type:string){
    let inputValue = {'row':row,'col':cell,'type':type};
    this.onHeaderInputChange.emit(inputValue);
  }

  checkHeaderChanged(row:number,cell:number,type:any){
    let inputValue = {'row':row,'col':cell,'type':type};
    this.onHeaderInputChange.emit(inputValue);
  }
  
}