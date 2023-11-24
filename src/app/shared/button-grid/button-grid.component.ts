import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-grid',
  templateUrl: './button-grid.component.html',
  styleUrls: ['./button-grid.component.scss']
})
export class ButtonGridComponent implements OnInit {

  @Input() btnData:any=[];
  @Input() titleText:any='';
  @Input() classes:any='';
  @Output() btnGridAction = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {

  }

  buttonPressed(val:any){
    this.btnGridAction.emit(val);
  }

}
