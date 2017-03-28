import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'rxstudio-creation-menu',
  templateUrl: './creation-menu.component.html',
  styleUrls: ['./creation-menu.component.scss']
})
export class CreationMenuComponent implements OnInit {

  constructor(private appService:AppService) { }

  ngOnInit() {
  }

  selectOption(option){
    this.appService.setCreationOption(option);
  }

}
