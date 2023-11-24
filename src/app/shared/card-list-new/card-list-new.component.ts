import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-list-new',
  templateUrl: './card-list-new.component.html',
  styleUrls: ['./card-list-new.component.scss']
})
export class CardListNewComponent implements OnInit {

  @Input() cardData:any=[];
  @Input() DataLoader:boolean=false;
  @Output() onInputChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    
  }

  cardClicked(type:any,index:number){
    this.onInputChange.emit({type:type,id:index});
  }
}
