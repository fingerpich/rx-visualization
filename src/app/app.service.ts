import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class AppService {
  private selectedCreationOption;
  private selectItemObserver;

  constructor() {
    Observable.create(function (observer) {
      this.selectItemObserver=observer;
    });
  }

  public setCreationOption(selectedCreation) {
    this.selectedCreationOption=selectedCreation;
  }

  public getCreationOption() {
    return this.selectedCreationOption
  }

  /**
   * setSelectedItem reactive change selected item
   * @param selectedItem : its an edge or node
  */
  public setSelectedItem(selectedItem) {
    this.selectItemObserver.onNext(selectedItem);
  }
  public getSelectedItem() {
    return this.selectItemObserver;
  }
}
