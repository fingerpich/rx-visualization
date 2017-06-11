import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AppService} from '../app.service';
import {RxHelper} from '../rx-helper';

@Component({
  selector: 'rxstudio-creation-menu',
  templateUrl: './creation-menu.component.html',
  styleUrls: ['./creation-menu.component.scss']
})
export class CreationMenuComponent implements OnInit {
  operators;
  selectedOption;
  @Output() onSelect = new EventEmitter();

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.operators = RxHelper.getRxOperators();
  }

  selectOperator(option) {
    this.selectedOption = option;
    this.appService.setCreationOption(option);
    this.onSelect.emit(option);
  }

}
