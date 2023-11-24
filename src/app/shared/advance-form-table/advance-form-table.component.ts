import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import {FormControl,FormBuilder,FormGroup} from '@angular/forms';
import moment from 'moment';

@Component({
  selector: 'app-advance-form-table',
  templateUrl: './advance-form-table.component.html',
  styleUrls: ['./advance-form-table.component.scss']
})

export class AdvanceFormTableComponent implements OnInit {
  @Input() TableCollumnData:any[]=[];
  @Input() TableData:any[]=[];
  @Input() DataLoader:boolean=false;
  @Input() dynamicForm:any = [];
  @Output() onInputChange = new EventEmitter<any>();
  @Output() onHeaderInputChange = new EventEmitter<any>();
  
  dateValues: Date[] = [];
  showForm = false;
  generatedForm!:FormGroup;
  constructor(private formBuilder:FormBuilder) { }
  
  ngOnInit(): void {
    this.generatedForm=this.formBuilder.group({});
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.dynamicForm[0]){
      this.initForm();
    }
  }

  initForm(){
    this.generatedForm = this.formBuilder.group([]);
    this.dynamicForm.forEach((element:any,index:number) => {
      if(element.type!='cell'&&element.type!='button'){
        if(element.type=='date'){
          this.generatedForm.addControl('C'+index, new FormControl(element.default?element.default.value:moment().toDate()));    
        }
        else{
          this.generatedForm.addControl('C'+index, new FormControl(element.default?element.default.value:''));
        }
      }
    });
    this.showForm = true;
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

  FormButtonPressed(cell:number,type:any){
    let inputValue = {'col':cell,'type':type,'formVal':this.generatedForm.getRawValue()};
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
