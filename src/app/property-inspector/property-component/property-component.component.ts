import { Component, OnInit, Input} from '@angular/core';
import {PropertyType} from '../../node-types/property-type';
import {AppService} from '../../app.service';

@Component({
  selector: 'rxstudio-property-component',
  templateUrl: './property-component.component.html',
  styleUrls: ['./property-component.component.scss']
})
export class PropertyComponentComponent implements OnInit {
  @Input() properties: any;
  @Input('type') propertyType: PropertyType;
  optionIndex;
  constructor(private appService: AppService ) { }

  ngOnInit() {
  }
  dataChanged() {
    this.appService.refreshRxObjects();
  }
}
