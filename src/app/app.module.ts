import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PropertyInspectorComponent } from './property-inspector/property-inspector.component';
import { CreationMenuComponent } from './creation-menu/creation-menu.component';
import { StatusComponent } from './status/status.component';
import { SceneComponent } from './scene/scene.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {AppService} from './app.service';
import { ClipboardModule } from 'ngx-clipboard';
import { PropertyComponentComponent } from './property-inspector/property-component/property-component.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './container/header/header.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PropertyInspectorComponent,
    CreationMenuComponent,
    StatusComponent,
    SceneComponent,
    PropertyComponentComponent,
    ContainerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ClipboardModule,
    FlexLayoutModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }