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

  constructor(public el: ElementRef, private appService:AppService) { }

  ngOnInit() {
    const el:HTMLElement = this.el.nativeElement;

    // initial node data
    const width=el.clientWidth;
    const height=el.clientHeight;

    const {nodes,edges,lastIndex}=this.appService.getInitialData(width,height);

    /** MAIN SVG **/
    const root = d3.select(el);
    const svg = root.append('svg')
      .attr("width", width)
      .attr("height", height);
    const graph = new GraphCreator(svg, nodes, edges,this.appService);
    // listen for resize
    window.onresize = function(){graph.updateWindow(el.clientWidth,el.clientHeight);};
    graph.setIdCt(lastIndex);
    graph.updateGraph();
  }
}

