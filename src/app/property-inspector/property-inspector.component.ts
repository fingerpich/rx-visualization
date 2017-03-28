import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'rxstudio-property-inspector',
  templateUrl: './property-inspector.component.html',
  styleUrls: ['./property-inspector.component.scss']
})
export class PropertyInspectorComponent implements OnInit {

  constructor(private appService:AppService ) { }

  ngOnInit() {
    this.appService.getSelectedItem().subscribe(data =>{

    });
  }

}
