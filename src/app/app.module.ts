import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PropertyInspectorComponent } from './property-inspector/property-inspector.component';
import { CreationMenuComponent } from './creation-menu/creation-menu.component';
import { ControlSceneComponent } from './control-scene/control-scene.component';
import { StatusComponent } from './status/status.component';
import { SceneComponent } from './scene/scene.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import {AppService} from "./app.service";

@NgModule({
  declarations: [
    AppComponent,
    PropertyInspectorComponent,
    CreationMenuComponent,
    ControlSceneComponent,
    StatusComponent,
    SceneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
