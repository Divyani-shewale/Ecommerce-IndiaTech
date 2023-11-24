import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, FormArray} from '@angular/forms';

@Component({
  selector: 'app-advance-title-head-new',
  templateUrl: './advance-title-head-new.component.html',
  styleUrls: ['./advance-title-head-new.component.scss']
})

export class AdvanceTitleHeadNewComponent implements OnInit {
  @Input() subText:boolean=false;
  @Input() titleText:string ='';
  @Input() btnVal:string ='';
  @Input() classes:string ='';
  @Input() dynamicForm:any = [];
  @Input() showForm:any = false;
  @Output() onSubmitForm = new EventEmitter<any>();
  generatedForm!:FormGroup;
  constructor(private formBuilder:FormBuilder) { }
  
  ngOnInit(): void {
    this.generatedForm=this.toFormGroup(this.dynamicForm);
  }
  
  toFormGroup(questions: any[]): FormGroup {
    const group: any = {};
    questions.forEach(question => {
      if (question.subque.length > 0) {
        if(question.type=='input')
        {
          group[question.que] = this.formBuilder.group({
            value: [null],
            subque: this.toFormArray(question.subque)
          });
        }
        else if(question.type=='dropdown')
        {
          group[question.que] = this.formBuilder.group({
            value: [question.options[0]],
            subque: this.toFormArray(question.subque)
          });
        }
        else if(question.type=='daterange')
        {
          group[question.que] = this.formBuilder.group({
            value1: [question.startDate],
            value2:[question.endDate],
            subque: this.toFormArray(question.subque)
          });
        }
        else if(question.type=='date')
        {
          group[question.que] = this.formBuilder.group({
            value: [question.defaultDate],
            subque: this.toFormArray(question.subque)
          });
        }
      } else {
        if(question.type=='input')
        {
          group[question.que] = this.formBuilder.group({
            value: [null]});
          }
          else if(question.type=='dropdown')
          {
            group[question.que] = this.formBuilder.group({
              value: [question.options[0]]
            });
          }
          else if(question.type=='daterange')
          {
            group[question.que] = this.formBuilder.group({
              value1: [question.startDate],
              value2:[question.endDate],
            });
          }
          else if(question.type=='date')
          {
            group[question.que] = this.formBuilder.group({
              value: [question.defaultDate]
            });
          }
        }
      });
      return this.formBuilder.group(group);
    }
    
    toFormArray(subQuestions: any[]): FormArray {
      const arr: FormGroup[] = [];
      subQuestions.forEach(subQuestion => {
        let group: FormGroup;
        if (subQuestion.subque.length > 0) {
          if(subQuestion.type=='input')
          {
            group = this.formBuilder.group({
              value: [null],
              subque: this.toFormArray(subQuestion.subque)
            });
          }
          else if(subQuestion.type=='dropdown')
          {
            group = this.formBuilder.group({
              value: [subQuestion.options[0]],
              subque: this.toFormArray(subQuestion.subque)
            });
          }
          else if(subQuestion.type=='daterange')
          {
            group = this.formBuilder.group({
              value1: [subQuestion.startDate],
              value2:[subQuestion.endDate],
              subque: this.toFormArray(subQuestion.subque)
            });
          }
          else if(subQuestion.type=='date')
          {
            group = this.formBuilder.group({
              value: [subQuestion.defaultDate],
              subque: this.toFormArray(subQuestion.subque)
            });
          }
        } else {
          if(subQuestion.type=='input')
          {
            group = this.formBuilder.group({
              value: [null]
            });
          }
          else if(subQuestion.type=='dropdown')
          {
            group = this.formBuilder.group({
              value: [subQuestion.options[0]]
            });
          }
          else if(subQuestion.type=='daterange')
          {
            group = this.formBuilder.group({
              value1: [subQuestion.startDate],
              value2:[subQuestion.endDate]
            });
          }
          else if(subQuestion.type=='date')
          {
            group = this.formBuilder.group({
              value: [subQuestion.defaultDate]
            });
          }
        }
        arr.push(group);
      });
      return this.formBuilder.array(arr);
    }
    
    submitFunction(){
      this.onSubmitForm.emit(this.generatedForm.getRawValue());
    }
  }