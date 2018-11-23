import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AppService} from '../app.service';
import {RxHelper} from '../rx-helper';
import {RxNode} from '../node-types/rxNode';

@Component({
  selector: 'rxstudio-creation-menu',
  templateUrl: './creation-menu.component.html',
  styleUrls: ['./creation-menu.component.scss']
})
export class CreationMenuComponent implements OnInit {
  operators;
  selectedOption;
  filterName = '';
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

  resetFilter() {
    this.filterName = '';
  }
  filter(charCode) {
    if (charCode === 8) {
      this.filterName = this.filterName.slice(0, -1);
    } else if (charCode === 13) {
      this.selectOperator(this.operators[0].list[0]);
    } else {
      const char = String.fromCharCode(charCode);
      this.filterName += char.toLowerCase();
    }

    this.operators = RxHelper.getRxOperators().map((kind) => {
      const list = kind.list.filter((operator) => {
        return operator.title.toLowerCase().includes(this.filterName);
      });
      return {...kind, list};
    }).filter((kind) => (kind.list.length > 0));
  }
}
