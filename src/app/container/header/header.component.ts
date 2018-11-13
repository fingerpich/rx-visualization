import {Component, Input, OnInit} from '@angular/core';
import {SceneComponent} from '../../scene/scene.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  serializedUrl;
  @Input() sceneComponent: SceneComponent;
  constructor() { }

  ngOnInit() {
  }

  shortenURL(serialized) {
    return serialized;
  }
  share() {
    const serialized = this.sceneComponent.serialize();
    this.serializedUrl = 'https://fingerpich.github.io/rx-flow/load/' + this.shortenURL(serialized);
  }

}
