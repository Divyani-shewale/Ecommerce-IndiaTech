import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
// import {MatDatepicker} from '@angular/material/datepicker';

import _moment , {default as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'DD MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'DD MMMM YYYY',
  },
};

@Component({
  selector: 'app-advance-inputs-new',
  templateUrl: './advance-inputs-new.component.html',
  styleUrls: ['./advance-inputs-new.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})

export class AdvanceInputsNewComponent {
  @Input() question: any;
  @Input() formGroup: FormGroup;
  @Output() submitTrigger = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    // console.log(this.formGroup);
      if(this.question.changeAction && this.question.changeAction=='submit'){
        if(this.question.type!='daterange'){
          // console.log(this.question);
          this.formGroup.get('value').valueChanges.subscribe((val) => {
            this.submitTrigger.emit();
          })
        }
        else if(this.question.type=='daterange'){
          this.formGroup.get('value1').valueChanges.subscribe((val) => {
            this.submitTrigger.emit();
          })
          this.formGroup.get('value2').valueChanges.subscribe((val) => {
            this.submitTrigger.emit();
          })
        }
      }
  }

  get subqueArray(): FormArray {
    return this.formGroup.get('subque') as FormArray;
  }
}
