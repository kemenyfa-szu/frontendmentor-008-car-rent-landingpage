import { Component, OnInit, Input } from '@angular/core';
import { CarType } from '../car-type';

@Component({
  selector: 'app-car-type-card',
  templateUrl: './car-type-card.component.html',
  styleUrls: ['./car-type-card.component.scss']
})
export class CarTypeCardComponent implements OnInit{
  @Input()
  carType!: CarType;

  constructor(){ }

  ngOnInit():void {  }
}
