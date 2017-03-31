import {Component, OnInit, ElementRef, Renderer} from '@angular/core';
import {GraphCreator} from "./graph-creator";
import {AppService} from "../app.service";
declare var d3: any;

@Component({
  selector: 'rxstudio-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {
  private graphEditor;

  constructor(public el: ElementRef, private appService:AppService) { }

  ngOnInit() {
    const el:HTMLElement = this.el.nativeElement;
    const width=el.clientWidth;
    const height=el.clientHeight;
    const {nodes,edges}=this.appService.getInitialData(width,height);

    /** MAIN SVG **/
    const root = d3.select(el);
    const svg = root.append('svg')
      .attr("width", width)
      .attr("height", height);

    this.graphEditor = new GraphCreator(svg, nodes, edges,this.appService);
    this.graphEditor.updateGraph();

    // listen for resize
    const thisComponent=this;
    window.onresize = function(){thisComponent.graphEditor.updateWindow(el.clientWidth,el.clientHeight);};
  }
  removeSelectedItem() {
    this.graphEditor.removeSelected();
  }
  showCreationMenu() {

  }
}

