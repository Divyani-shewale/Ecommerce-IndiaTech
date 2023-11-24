import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl,FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-multi-input-header',
  templateUrl: './multi-input-header.component.html',
  styleUrls: ['./multi-input-header.component.scss']
})
export class MultiInputHeaderComponent implements OnInit {
  @Input() titleText:string ='';
  @Input() btnVal:string ='';
  @Input() classes:string ='';
  @Input() dynamicForm:any = [];
  @Input() showForm:any = false;
  @Output() onSubmitForm = new EventEmitter<any>();
  generatedForm!:FormGroup;
  constructor(private formBuilder:FormBuilder) { }
  ngOnInit(): void {
    this.generatedForm=this.formBuilder.group({});
    this.dynamicForm.forEach((element:any,index:number) => {
      this.generatedForm.addControl('C'+index, new FormControl(element.default?element.default.value:''));
    });
  }
  submitFunction(){
    this.onSubmitForm.emit(this.generatedForm.getRawValue());
  }
}