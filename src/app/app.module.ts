import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PropertyInspectorComponent } from './property-inspector/property-inspector.component';
import { CreationMenuComponent } from './creation-menu/creation-menu.component';
import { ControlSceneComponent } from './control-scene/control-scene.component';
import { StatusComponent } from './status/status.component';
import { SceneComponent } from './scene/scene.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import {AppService} from "./app.service";
import { ClipboardModule } from 'ngx-clipboard';
import { PropertyComponentComponent } from './property-inspector/property-component/property-component.component';
import { ContainerComponent } from './container/container.component';
const appRoutes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'load/:data', component: ContainerComponent },
  // { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    PropertyInspectorComponent,
    CreationMenuComponent,
    ControlSceneComponent,
    StatusComponent,
    SceneComponent,
    PropertyComponentComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ClipboardModule,
    FlexLayoutModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
