import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl,FormBuilder,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-multi-input-header-new',
  templateUrl: './multi-input-header-new.component.html',
  styleUrls: ['./multi-input-header-new.component.scss']
})

export class MultiInputHeaderNewComponent implements OnInit {
  @Input() subText:boolean=false;
  @Input() titleText:string ='';
  @Input() btnVal:string ='';
  @Input() classes:string ='';
  @Input() showForm:any = false;
  @Input() dynamicForm:any[];
  @Output() onSubmitForm = new EventEmitter<any>();
  generatedForm!:FormGroup;
  constructor(private formBuilder:FormBuilder) { }
  selectReadOnly=[];
  
  ngOnInit(): void {
    this.generatedForm=this.formBuilder.group({});
    this.dynamicForm.forEach((element:any,index:number) => {
      this.generatedForm.addControl('C'+index, new FormControl(element.default?element.default.value:''));
      if(element.type=='search-select'){
        this.selectReadOnly[index]=element.default.name;
      }
      if(element.changeAction && element.changeAction=='submit'){
        this.generatedForm.get('C'+index).valueChanges.subscribe((val) => {
          this.submitFunction();
          if(element.type=='search-select'){
            let foundObj = this.dynamicForm[index].options.find(({ value }) => value == val);
            this.selectReadOnly[index]= foundObj?.name;
          }
        })
      }
    });
  }
  
  searchSelOps(val:string,index){
    let newVal=val.toLocaleLowerCase();
    let foundObj = this.dynamicForm[index].options.filter(({ name }) => (name.toLocaleLowerCase()).includes(newVal));
    this.dynamicForm[index].filteredOptions = foundObj;
  }
  
  submitFunction(){
    this.onSubmitForm.emit(this.generatedForm.getRawValue());
  }
}