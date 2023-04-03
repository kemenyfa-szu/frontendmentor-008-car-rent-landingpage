import { Component } from '@angular/core';
import { CarTypes } from '../car-types';

@Component({
  selector: 'app-car-type-list',
  templateUrl: './car-type-list.component.html',
  styleUrls: ['./car-type-list.component.scss']
})
export class CarTypeListComponent {
  public carTypes:{title:string, text:string, icon:string, bgColor:string}[] = CarTypes;
}
