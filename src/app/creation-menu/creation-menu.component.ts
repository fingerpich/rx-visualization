import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'rxstudio-creation-menu',
  templateUrl: './creation-menu.component.html',
  styleUrls: ['./creation-menu.component.scss']
})
export class CreationMenuComponent implements OnInit {
  operators;
  selectedOption;
  constructor(private appService:AppService) { }

  ngOnInit() {
    this.operators=this.appService.getOperators()
  }

  selectOperator(option){
    this.selectedOption=option;
    this.appService.setCreationOption(option);
  }

}
