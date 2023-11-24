import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonFunctionService } from '@services/common-function.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-change-dropdown',
  templateUrl: './change-dropdown.component.html',
  styleUrls: ['./change-dropdown.component.scss']
})

export class ChangeDropdownComponent implements OnInit {
  @Input() inputArray:any[];
  @Input() searchKey:any;
  @Input() searchValue:any;
  @Input() returnKey:any;
  @Input() opLoader:any;
  @Output() onOptionSave = new EventEmitter<any>();

  userVal = new FormControl();
  valSelect = '';

  constructor(private utilities:CommonFunctionService) { }

  ngOnInit(): void {
    this.valSelect = this.utilities.getValueByKey(this.inputArray, this.searchKey, this.searchValue, this.returnKey);
    this.setControl();
    this.userVal.valueChanges.subscribe((val) => {
      this.setSelect();
    })
  }

  setControl(){
    if(typeof this.inputArray[0][this.searchKey]=='string'){
      this.userVal.setValue(this.searchValue+'');
    }
    else{
      this.userVal.setValue(this.searchValue);
    }
  }

  setSelect(){
    let formVal = this.userVal.getRawValue();
    if((typeof this.searchValue=='string')&&!(typeof formVal=='string'))
    {
      formVal = formVal+'';
    }
    else if ((typeof this.searchValue=='number')&&!(typeof formVal=='number'))
    {
      formVal = Number(formVal);
    }
    // console.log(formVal);
    this.onOptionSave.emit(formVal);
  }

}