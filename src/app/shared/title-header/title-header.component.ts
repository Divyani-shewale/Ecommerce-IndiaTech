import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';

import _moment , {default as _rollupMoment , Moment} from 'moment';

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
  selector: 'app-title-header',
  templateUrl: './title-header.component.html',
  styleUrls: ['./title-header.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})

export class TitleHeaderComponent implements OnInit {
  
  @Input() titleText:string ='';
  @Input() subText:boolean=false;
  @Input() classes:string ='';
  @Input() searchType:string ='';
  @Input() DateObj:any={};
  @Input() searchOptions:any=[];
  @Input() maxDate!: Date;
  @Input() addButton!: boolean | false;
  @Input() exportLoader!: boolean | false;
  @Input() searchHasOption!: boolean | false;
  @Input() searchButton!: boolean;
  @Input() startEndDates: Date[] = [];
  @Input() searchHasInputOption!: boolean | false;
  @Input() showExport!: boolean | false;

  @Output() onSearch = new EventEmitter<any>();
  @Output() onAdd = new EventEmitter<any>();
  @Output() onExport = new EventEmitter<any>();

  inputOptionSelected = new FormControl('');
  inputSearchBox = new FormControl('');

  newMonthSelected = new FormControl(moment().startOf('month'));
  newYearSelected = new FormControl(moment().startOf('year'));

  dateValues: Date[] = [];
  DateType=[{name:'Daily',value:'D'},{name:'Monthly',value:'M'},{name:'Yearly',value:'Y'}];

  constructor() { }

  ngOnInit(): void {
    this.dateValues=this.startEndDates;
    if(this.searchOptions.length>0){
      this.inputOptionSelected.setValue(this.searchOptions[0].value);
    }
  }

  searchFunction(){
    let searchQuery:any = this.dateValues;
    if(this.searchHasOption && this.searchOptions.length!=0){
      searchQuery = {Dates:this.dateValues,Option:this.inputOptionSelected.getRawValue()}
    }
    if(this.searchHasInputOption){
      searchQuery = {...searchQuery,searchInput:this.inputSearchBox.getRawValue()}
    }
    this.onSearch.emit(searchQuery);
  }

  searchObjFunction(){
    let SelectedDateTime = this.DateObj.StartDateTime;
    if(this.DateObj.Type=='M'){
      SelectedDateTime = this.newMonthSelected.getRawValue();
    }
    else if(this.DateObj.Type=='Y'){
      SelectedDateTime = this.newYearSelected.getRawValue();
    }
    let ParseDateValue = {
      Type:this.DateObj.Type,
      StartDateTime:SelectedDateTime
    }
    this.onSearch.emit(ParseDateValue);
  }

  searchCustomFunction(){
    let searchQuery:any = this.dateValues;
    if(this.searchHasOption && this.searchOptions.length!=0){
      searchQuery = {Dates:this.dateValues,Option:this.inputOptionSelected.getRawValue()}
    }
    if(this.searchHasInputOption){
      searchQuery = {...searchQuery,searchInput:this.inputSearchBox.getRawValue()}
    }
    this.onSearch.emit(searchQuery);
  }

  addFunction(){
    this.onAdd.emit();
  }

  exportPressed(){
    this.onExport.emit();
  }

  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.newMonthSelected.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.newMonthSelected.setValue(ctrlValue);
    datepicker.close();
  }

  setYear(normalizedYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.newYearSelected.value!;
    ctrlValue.year(normalizedYear.year());
    this.newYearSelected.setValue(ctrlValue);
    datepicker.close();
  }
}