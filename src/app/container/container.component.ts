import {Component, OnInit, ViewChild} from '@angular/core';
import {SceneComponent} from '../scene/scene.component';
import {AppService} from '../app.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-rxstudio-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  @ViewChild(SceneComponent) sceneComponent: SceneComponent;
  showColdStream;
  showCreationMenu = false;

  constructor(private appService: AppService, private route: ActivatedRoute) {
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
