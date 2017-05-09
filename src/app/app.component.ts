import {Component, ViewChild} from '@angular/core';
import {SceneComponent} from "./scene/scene.component";
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'RX Studio';
  @ViewChild(SceneComponent) sceneComponent: SceneComponent;
  showColdStream;
  showCreationMenu = false;

  constructor(private appService: AppService) {
  }

  removeSelectedItem() {
    this.sceneComponent.removeSelectedItem();
  }

  replay() {
    this.appService.refreshRxObjects();
  }

  toggleShowColdobservable() {
    this.showColdStream = this.appService.toggleShowColdStream();
  }

  share() {
    let seralizedUrl = this.sceneComponent.serialize();
  }

  showCreationMenuToggle() {
    this.showCreationMenu = !this.showCreationMenu;
  }
}
