import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {SceneComponent} from '../scene/scene.component';
import {AppService} from '../app.service';
import {ActivatedRoute} from '@angular/router';
import {CreationMenuComponent} from '../creation-menu/creation-menu.component';

@Component({
  selector: 'app-rxstudio-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  @ViewChild(SceneComponent) sceneComponent: SceneComponent;
  @ViewChild(CreationMenuComponent) creationMenu: CreationMenuComponent;

  showColdStream;
  showCreationMenu = false;

  constructor(private appService: AppService, private route: ActivatedRoute) {
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);

    if (!this.showCreationMenu && (event.key === 'Backspace' || event.key === 'Delete')) {
      this.appService.removeSelectedItem();
    } else if (!this.showCreationMenu && event.key === 'Enter') {
      this.replay();
    } else if (event.key === 'Shift') {
      this.showCreationMenuToggle();
    } else if (this.showCreationMenu) {
      if (event.key === 'Escape') {
        this.showCreationMenu = false;
      } else {
        this.creationMenu.filter(event.keyCode);
      }
    }
  }

  ngOnInit() {
    // subscribe to router event
    let data = this.route.snapshot.paramMap.get('data');

    if (data) {
      const jsonObj = JSON.parse(data);
      this.sceneComponent.deserialize(jsonObj);
    } else {
      this.sceneComponent.deserialize(this.appService.getDefaultSampleData());
    }
  }

  replay() {
    this.appService.refreshRxObjects();
  }

  showCreationMenuToggle() {
    this.showCreationMenu = !this.showCreationMenu;
  }
}
