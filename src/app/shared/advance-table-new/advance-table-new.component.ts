import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-advance-table-new',
  templateUrl: './advance-table-new.component.html',
  styleUrls: ['./advance-table-new.component.scss']
})

export class AdvanceTableNewComponent implements OnInit {
  @Input() TableCollumnData:any[]=[];
  @Input() TableData:any[]=[];
  @Input() DataLoader:boolean=false;
  @Input() miniLoader:boolean=false;
  @Output() onInputChange = new EventEmitter<any>();
  @Output() onHeaderInputChange = new EventEmitter<any>();
  @Input() rowCount?:number=0;
  
  dateValues: Date[] = [];
  
  constructor() { }
  
  ngOnInit(): void {
    // console.log(this.TableCollumnData);
    // console.log(this.TableData);
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

  valButtonPressed(row:number,cell:number,val:any,type:string){
    let inputValue = {'row':row,'col':cell,'type':type,'value':val};
    this.onInputChange.emit(inputValue);
  }

  externalCellAction(row:number,cell:number,formVal:any,type:string){
    let inputValue = {'row':row,'col':cell,'value':formVal,'type':type};
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

  outSaveChanged(row:number,cell:number,formVal:any,type:string){
    let inputValue = {'row':row,'col':cell,'value':formVal,'type':type};
    this.onInputChange.emit(inputValue);
  }
  
}