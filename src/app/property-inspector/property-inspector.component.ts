import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {RxHelper} from '../rx-helper';

@Component({
  selector: 'rxstudio-property-inspector',
  templateUrl: './property-inspector.component.html',
  styleUrls: ['./property-inspector.component.scss']
})
export class PropertyInspectorComponent implements OnInit {
  selectedItem;
  constructor(private appService: AppService ) { }

  ngOnInit() {
    this.appService.getSelectedItem().subscribe(data => {
      this.selectedItem = data;
    });
  }

  removeSelectedItem() {
    this.appService.removeSelectedItem();
  }

  getLink() {
    return RxHelper.getOperatorLink(this.selectedItem.data.title);
  }
}
