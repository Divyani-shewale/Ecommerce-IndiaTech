import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonFunctionService } from '@services/common-function.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-dropdown',
  templateUrl: './edit-dropdown.component.html',
  styleUrls: ['./edit-dropdown.component.scss']
})

export class EditDropdownComponent implements OnInit {
  @Input() inputArray:any[];
  @Input() searchKey:any;
  @Input() searchValue:any;
  @Input() returnKey:any;
  @Input() saveLoader:any;
  @Output() onOptionSave = new EventEmitter<any>();

  userVal = new FormControl();
  opVisible = false;
  valSelect = '';

  constructor(private utilities:CommonFunctionService) { }

  ngOnInit(): void {
    this.valSelect = this.utilities.getValueByKey(this.inputArray, this.searchKey, this.searchValue, this.returnKey);
    this.setControl();
  }

  setControl(){
    if(typeof this.inputArray[0][this.searchKey]=='string'){
      this.userVal.setValue(this.searchValue+'');
    }
    else{
      this.userVal.setValue(this.searchValue);
    }
  }

  switchSelect(): void {
    this.opVisible = !this.opVisible;
    if(!this.opVisible){
      this.setControl();
    }
  }

  saveSelect(){
    let formVal = this.userVal.getRawValue();
    if((typeof this.searchValue=='string')&&!(typeof formVal=='string'))
    {
      formVal = formVal+'';
    }
    else if ((typeof this.searchValue=='number')&&!(typeof formVal=='number'))
    {
      formVal = Number(formVal);
    }
    this.onOptionSave.emit(formVal);
  }

}