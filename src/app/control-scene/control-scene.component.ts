import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'rxstudio-control-scene',
  templateUrl: './control-scene.component.html',
  styleUrls: ['./control-scene.component.scss']
})
export class ControlSceneComponent implements OnInit {

  constructor(private appService:AppService) { }

  ngOnInit() {
  }
  clearClick(){
    this.appService.controlScene("clear");
  }
  deleteClick(){
    this.appService.controlScene("delete");
  }
}
