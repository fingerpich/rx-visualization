import {Component, OnInit, ViewChild} from '@angular/core';
import {SceneComponent} from '../scene/scene.component';
import {AppService} from '../app.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-rxstudio-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  @ViewChild(SceneComponent) sceneComponent: SceneComponent;
  showColdStream;
  serializedUrl;
  showCreationMenu = false;

  constructor(private appService: AppService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      const data = params['data'];
      if (data) {
        const jsonObj = JSON.parse(data);
        this.sceneComponent.deserialize(jsonObj);
      }
    });
  }

  replay() {
    this.appService.refreshRxObjects();
  }

  shortenURL(serialized) {
    return serialized;
  }
  share() {
    const serialized = this.sceneComponent.serialize();
    this.serializedUrl = 'https://fingerpich.github.io/rx-flow/load/' + this.shortenURL(serialized);
  }

  showCreationMenuToggle() {
    this.showCreationMenu = !this.showCreationMenu;
  }
}
