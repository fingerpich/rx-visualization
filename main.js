(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _property_inspector_property_inspector_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./property-inspector/property-inspector.component */ "./src/app/property-inspector/property-inspector.component.ts");
/* harmony import */ var _creation_menu_creation_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./creation-menu/creation-menu.component */ "./src/app/creation-menu/creation-menu.component.ts");
/* harmony import */ var _control_scene_control_scene_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./control-scene/control-scene.component */ "./src/app/control-scene/control-scene.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./status/status.component */ "./src/app/status/status.component.ts");
/* harmony import */ var _scene_scene_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scene/scene.component */ "./src/app/scene/scene.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var _property_inspector_property_component_property_component_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./property-inspector/property-component/property-component.component */ "./src/app/property-inspector/property-component/property-component.component.ts");
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./container/container.component */ "./src/app/container/container.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: '', component: _container_container_component__WEBPACK_IMPORTED_MODULE_15__["ContainerComponent"] },
    { path: 'load/:data', component: _container_container_component__WEBPACK_IMPORTED_MODULE_15__["ContainerComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _property_inspector_property_inspector_component__WEBPACK_IMPORTED_MODULE_6__["PropertyInspectorComponent"],
                _creation_menu_creation_menu_component__WEBPACK_IMPORTED_MODULE_7__["CreationMenuComponent"],
                _control_scene_control_scene_component__WEBPACK_IMPORTED_MODULE_8__["ControlSceneComponent"],
                _status_status_component__WEBPACK_IMPORTED_MODULE_9__["StatusComponent"],
                _scene_scene_component__WEBPACK_IMPORTED_MODULE_10__["SceneComponent"],
                _property_inspector_property_component_property_component_component__WEBPACK_IMPORTED_MODULE_14__["PropertyComponentComponent"],
                _container_container_component__WEBPACK_IMPORTED_MODULE_15__["ContainerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_13__["ClipboardModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"]
            ],
            providers: [
                _app_service__WEBPACK_IMPORTED_MODULE_12__["AppService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _scene_graph_creator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene/graph-creator */ "./src/app/scene/graph-creator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = /** @class */ (function () {
    function AppService() {
        var _this = this;
        this.resultsArray = [];
        this.resultTimeouts = [];
        this.nodesList = [];
        this.edgeList = [];
        this.subscribeItem = function (node, data) {
            var resultsArray = _this.resultsArray;
            var index = resultsArray.findIndex(function (d) { return (d.data.id === data.id); });
            if (index > -1) {
                _this.addNextResult(index, { node: node, data: data });
            }
            else {
                resultsArray.push({ node: node, data: data, nexts: [] });
            }
            _this.itemSubscriptor.next(resultsArray);
        };
        this.selectItemSubject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.removeItemSubject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.controlSubject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.itemSubscriptor = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    AppService.prototype.setCreationOption = function (selectedCreation) {
        this.selectedCreationOption = selectedCreation;
    };
    AppService.prototype.getCreationOption = function () {
        return this.selectedCreationOption;
    };
    AppService.prototype.removeSelectedItem = function () {
        this.removeItemSubject.next();
    };
    /**
     * setSelectedItem reactive change selected item
     * @param selectedItem : any its an edge or node
     */
    AppService.prototype.setSelectedItem = function (selectedItem) {
        this.selectItemSubject.next(selectedItem);
    };
    AppService.prototype.getSelectedItem = function () {
        return this.selectItemSubject;
    };
    AppService.prototype.controlScene = function (command) {
        this.controlSubject.next(command);
    };
    AppService.prototype.getControlChanges = function () {
        return this.controlSubject;
    };
    AppService.prototype.getItemSubscribe = function () {
        return this.itemSubscriptor;
    };
    AppService.prototype.distroyTimeouts = function () {
        var rt = 0;
        while (rt = this.resultTimeouts.pop()) {
            clearTimeout(rt);
        }
    };
    AppService.prototype.addNextResult = function (index, nextResult) {
        var _this = this;
        var resultsArray = this.resultsArray;
        resultsArray[index].nexts.push(nextResult);
        this.resultTimeouts.push(setTimeout(function () {
            var firstNext = resultsArray[index].nexts.shift();
            resultsArray[index].node = firstNext.node;
            resultsArray[index].data = firstNext.data;
            _this.itemSubscriptor.next(resultsArray);
        }, _scene_graph_creator__WEBPACK_IMPORTED_MODULE_2__["GraphCreator"].animateTime * resultsArray[index].nexts.length));
    };
    AppService.prototype.getData = function () {
        return { edges: this.edgeList, nodes: this.nodesList };
    };
    AppService.prototype.getDefaultSampleData = function () {
        var xLoc = window.innerWidth / (window.innerWidth < 600 ? 2 : 3);
        var yLoc = 100;
        var nodes = [
            { id: 0, x: xLoc, y: yLoc, node_type: 'Create', properties: { list: [{ time: 0, value: 1 }] } },
            { id: 1, x: xLoc, y: yLoc + 200, node_type: 'Subscribe', properties: {} }
        ];
        var edges = [{ source: 0, target: 1 }];
        return { edges: edges, nodes: nodes };
    };
    Object.defineProperty(AppService.prototype, "delay", {
        get: function () {
            return _scene_graph_creator__WEBPACK_IMPORTED_MODULE_2__["GraphCreator"].animateTime;
        },
        set: function (value) {
            _scene_graph_creator__WEBPACK_IMPORTED_MODULE_2__["GraphCreator"].animateTime = value;
            this.refreshRxObjects();
        },
        enumerable: true,
        configurable: true
    });
    AppService.prototype.refreshRxObjects = function () {
        var nodes = this.nodesList;
        var edges = this.edgeList;
        this.resultsArray = [];
        // DISPOSE created rx objects
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
            var node = nodes_1[_i];
            node.data.dispose();
        }
        while (this.resultsArray.pop()) { }
        this.distroyTimeouts();
        var levelcounter = 1;
        // Make Creator Observables
        for (var _a = 0, nodes_2 = nodes; _a < nodes_2.length; _a++) {
            var node = nodes_2[_a];
            if (!node.data.rx && node.data.maxInput === 0) {
                node.data.run(node, levelcounter, this.subscribeItem);
            }
        }
        // Connect Nodes By Edges
        var notFinished = true;
        while (notFinished) {
            levelcounter++;
            notFinished = false;
            var nodesNeedsRx = nodes.filter(function (n) { return !n.data.rx; });
            var _loop_1 = function (eachNode) {
                var nodeInputs = edges.filter(function (e) { return e.target === eachNode; }).map(function (e) { return e.source; });
                if (eachNode.data.areInputsReady(nodeInputs)) {
                    eachNode.data.graphInputs = nodeInputs.map(function (node) { return { observable: node.data.rx, node: node }; });
                    eachNode.data.run(eachNode, levelcounter, this_1.subscribeItem);
                    notFinished = true;
                    return "break";
                }
            };
            var this_1 = this;
            for (var _b = 0, nodesNeedsRx_1 = nodesNeedsRx; _b < nodesNeedsRx_1.length; _b++) {
                var eachNode = nodesNeedsRx_1[_b];
                var state_1 = _loop_1(eachNode);
                if (state_1 === "break")
                    break;
            }
        }
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/container/container.component.html":
/*!****************************************************!*\
  !*** ./src/app/container/container.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"stretch\" class=\"app\">\n  <div class=\"header\">\n\n    <button (click)=\"share()\"  title=\"share\">share <i class=\"material-icons\">share</i></button>\n    <div class=\"overlay\" *ngIf=\"serializedUrl\" (click)=\"serializedUrl='';\">\n      <div class=\"shareBox\" (click)=\"$event.stopPropagation();\">\n        <div class=\"shareBoxContainer\">\n          <h5>Copy the link</h5>\n          <div class=\"copyBox\">\n            <input #inputTarget (click)=\"inputTarget.select()\" [value]=\"serializedUrl\">\n            <button [ngxClipboard]=\"inputTarget\">copy</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--<rxstudio-control-scene></rxstudio-control-scene>-->\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"column\" fxFlex>\n    <div fxFlex class=\"sceneContainer\">\n      <button (click)=\"showCreationMenuToggle()\" [class.active]=\"showCreationMenu\" title=\"show tools\" class=\"add\">\n        <i class=\"material-icons\">add</i>\n      </button>\n      <button (click)=\"replay()\" title=\"replay\" class=\"replay\"><i class=\"material-icons\">play_circle_outline</i></button>\n      <rxstudio-scene fxFlex></rxstudio-scene>\n      <rxstudio-creation-menu (onSelect)=\"showCreationMenu=false\" *ngIf=\"showCreationMenu\"></rxstudio-creation-menu>\n    </div>\n    <rxstudio-property-inspector fxFlex=\"30%\"></rxstudio-property-inspector>\n  </div>\n  <!--<rxstudio-status></rxstudio-status>-->\n</div>\n"

/***/ }),

/***/ "./src/app/container/container.component.scss":
/*!****************************************************!*\
  !*** ./src/app/container/container.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app {\n  height: 100%;\n  padding: 0;\n  overflow: hidden; }\n  .app .header {\n    background: #335;\n    text-align: right; }\n  .app .header button {\n      border: none;\n      background: #335;\n      outline: none;\n      color: #ffffff;\n      font-weight: bold;\n      border-radius: 3px;\n      font-size: 0.7rem;\n      margin: 4px;\n      padding: 12px 15px; }\n  .app .header button i {\n        font-size: inherit; }\n  .app .header button:hover {\n        background: #464675; }\n  .app .sceneContainer {\n    position: relative;\n    border: 1px solid #eee; }\n  .app .sceneContainer rxstudio-scene {\n      width: 100%;\n      height: 100%;\n      position: absolute; }\n  .app .sceneContainer button {\n      border: none;\n      border-radius: 50%;\n      padding: 8px 9px 8px 10px;\n      outline: none;\n      position: absolute;\n      z-index: 1;\n      width: 45px;\n      height: 45px; }\n  .app .sceneContainer button.replay {\n        right: 0;\n        background: none;\n        color: #335;\n        margin: 1rem;\n        width: 3rem;\n        height: 3rem;\n        padding: 0; }\n  .app .sceneContainer button.replay i {\n          font-size: 3rem; }\n  .app .sceneContainer button.replay:hover {\n          color: #464675; }\n  .app .sceneContainer button.add {\n        right: 15px;\n        bottom: 15px;\n        background: #335;\n        color: #ffffff; }\n  .app rxstudio-property-inspector {\n    overflow: auto; }\n  .app rxstudio-status {\n    height: 20px; }\n  .overlay {\n  position: fixed;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 20;\n  background: rgba(0, 0, 0, 0.2); }\n  .overlay .shareBox {\n    position: absolute;\n    width: 300px;\n    right: 0;\n    top: 30px;\n    background: #fff;\n    border: 1px solid silver;\n    border-radius: 3px; }\n  .overlay .shareBox .shareBoxContainer {\n      padding: 20px 30px; }\n  .overlay .shareBox .shareBoxContainer h5 {\n        margin: 0 0 2px;\n        text-align: left;\n        color: #888; }\n  .overlay .shareBox .shareBoxContainer div.copyBox {\n        display: flex; }\n  .overlay .shareBox .shareBoxContainer div.copyBox input {\n          flex: 1 1 auto;\n          padding: 12px 7px;\n          border: 1px solid #335;\n          color: #444; }\n  .overlay .shareBox .shareBoxContainer div.copyBox button {\n          padding: 12px;\n          margin: 0;\n          border-bottom-left-radius: 0;\n          border-top-left-radius: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maW5nZXJwaWNoL0RvY3VtZW50cy9wcm9qZWN0cy9yeC1mbG93L3NyYy9hcHAvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9maW5nZXJwaWNoL0RvY3VtZW50cy9wcm9qZWN0cy9yeC1mbG93L3NyYy9jb21tb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQVc7RUFDWCxXQUFTO0VBQ1QsaUJBQWdCLEVBd0VqQjtFQTNFRDtJQU1JLGlCQ05XO0lET1gsa0JBQWlCLEVBa0JsQjtFQXpCSDtNQVNNLGFBQVk7TUFDWixpQkNWUztNRFdULGNBQWE7TUFDYixlQUFjO01BQ2Qsa0JBQWlCO01BQ2pCLG1CQUFrQjtNQUNsQixrQkFBaUI7TUFDakIsWUFBVztNQUNYLG1CQUFrQixFQU9uQjtFQXhCTDtRQW1CUSxtQkFBaUIsRUFDbEI7RUFwQlA7UUFzQlEsb0JBQW1DLEVBQ3BDO0VBdkJQO0lBMkJJLG1CQUFrQjtJQUNsQix1QkMxQmEsRUQrRGQ7RUFqRUg7TUE4Qk0sWUFBVztNQUNYLGFBQVk7TUFDWixtQkFBa0IsRUFDbkI7RUFqQ0w7TUFtQ00sYUFBWTtNQUNaLG1CQUFrQjtNQUNsQiwwQkFBeUI7TUFDekIsY0FBYTtNQUNiLG1CQUFrQjtNQUNsQixXQUFVO01BQ1YsWUFBVztNQUNYLGFBQVksRUFzQmI7RUFoRUw7UUE0Q1EsU0FBTztRQUNQLGlCQUFnQjtRQUNoQixZQ2hEVTtRRGlEVixhQUFZO1FBQ1osWUFBVztRQUNYLGFBQVk7UUFDWixXQUFVLEVBT1g7RUF6RFA7VUFvRFUsZ0JBQWUsRUFDaEI7RUFyRFQ7VUF1RFUsZUFBaUMsRUFDbEM7RUF4RFQ7UUEyRFEsWUFBVTtRQUNWLGFBQVc7UUFDWCxpQkMvRFU7UURnRVYsZUFBYyxFQUNmO0VBL0RQO0lBc0VJLGVBQWMsRUFDZjtFQXZFSDtJQXlFSSxhQUFXLEVBQ1o7RUFHSDtFQUNFLGdCQUFjO0VBQ2QsUUFBTTtFQUNOLE9BQUs7RUFDTCxhQUFXO0VBQ1gsWUFBVTtFQUNWLFlBQVc7RUFDWCwrQkFBMkIsRUFpQzVCO0VBeENEO0lBU0ksbUJBQWtCO0lBQ2xCLGFBQVk7SUFDWixTQUFRO0lBQ1IsVUFBUztJQUNULGlCQUFnQjtJQUNoQix5QkFBdUI7SUFDdkIsbUJBQWtCLEVBd0JuQjtFQXZDSDtNQWlCTSxtQkFBa0IsRUFxQm5CO0VBdENMO1FBbUJRLGdCQUFjO1FBQ2QsaUJBQWdCO1FBQ2hCLFlBQVUsRUFDWDtFQXRCUDtRQXdCUSxjQUFZLEVBYWI7RUFyQ1A7VUEwQlUsZUFBYztVQUNkLGtCQUFpQjtVQUNqQix1QkMzR1E7VUQ0R1IsWUFBVSxFQUNYO0VBOUJUO1VBZ0NVLGNBQWE7VUFDYixVQUFTO1VBQ1QsNkJBQTRCO1VBQzVCLDBCQUF5QixFQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9jb21tb24nO1xuXG4uYXBwe1xuICBoZWlnaHQ6MTAwJTtcbiAgcGFkZGluZzowO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC5oZWFkZXJ7XG4gICAgYmFja2dyb3VuZDogJGhlYWRDb2xvcjs7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgYnV0dG9ue1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYmFja2dyb3VuZDogJGhlYWRDb2xvcjtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICBtYXJnaW46IDRweDtcbiAgICAgIHBhZGRpbmc6IDEycHggMTVweDtcbiAgICAgIGl7XG4gICAgICAgIGZvbnQtc2l6ZTppbmhlcml0O1xuICAgICAgfVxuICAgICAgJjpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZDogbGlnaHRlbigkaGVhZENvbG9yLDEwJSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5zY2VuZUNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlcjoxcHggc29saWQgJGJvcmRlckNvbG9yO1xuICAgIHJ4c3R1ZGlvLXNjZW5le1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuICAgIGJ1dHRvbiB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBwYWRkaW5nOiA4cHggOXB4IDhweCAxMHB4O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICB3aWR0aDogNDVweDtcbiAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICYucmVwbGF5e1xuICAgICAgICByaWdodDowO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBjb2xvcjogJHByaW1hcnlDb2xvcjtcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgICB3aWR0aDogM3JlbTtcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBpe1xuICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVye1xuICAgICAgICAgIGNvbG9yOmxpZ2h0ZW4oJHByaW1hcnlDb2xvciwgMTAlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLmFkZHtcbiAgICAgICAgcmlnaHQ6MTVweDtcbiAgICAgICAgYm90dG9tOjE1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5Q29sb3I7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByeHN0dWRpby1jcmVhdGlvbi1tZW51e1xuXG4gIH1cbiAgcnhzdHVkaW8tcHJvcGVydHktaW5zcGVjdG9ye1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG4gIHJ4c3R1ZGlvLXN0YXR1c3tcbiAgICBoZWlnaHQ6MjBweDtcbiAgfVxufVxuXG4ub3ZlcmxheXtcbiAgcG9zaXRpb246Zml4ZWQ7XG4gIGxlZnQ6MDtcbiAgdG9wOjA7XG4gIGhlaWdodDoxMDAlO1xuICB3aWR0aDoxMDAlO1xuICB6LWluZGV4OiAyMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xuICAuc2hhcmVCb3h7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDMwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6MXB4IHNvbGlkIHNpbHZlcjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLnNoYXJlQm94Q29udGFpbmVye1xuICAgICAgcGFkZGluZzogMjBweCAzMHB4O1xuICAgICAgaDV7XG4gICAgICAgIG1hcmdpbjowIDAgMnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBjb2xvcjojODg4O1xuICAgICAgfVxuICAgICAgZGl2LmNvcHlCb3gge1xuICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDdweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeUNvbG9yO1xuICAgICAgICAgIGNvbG9yOiM0NDQ7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRwcmltYXJ5Q29sb3I6IzMzNTtcbiRzZWNvbmRhcnlDb2xvcjojMDdmO1xuJGhlYWRDb2xvcjojMzM1O1xuJHJ4Q29sb3I6I2VjMGM4ZTtcbiRib3JkZXJDb2xvcjojZWVlO1xuJGJhY2tDb2xvcjojZmZmO1xuIl19 */"

/***/ }),

/***/ "./src/app/container/container.component.ts":
/*!**************************************************!*\
  !*** ./src/app/container/container.component.ts ***!
  \**************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _scene_scene_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scene/scene.component */ "./src/app/scene/scene.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContainerComponent = /** @class */ (function () {
    function ContainerComponent(appService, activatedRoute) {
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.showCreationMenu = false;
    }
    ContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to router event
        this.activatedRoute.params.subscribe(function (params) {
            var data = params['data'];
            if (data) {
                var jsonObj = JSON.parse(data);
                _this.sceneComponent.deserialize(jsonObj);
            }
            else {
                _this.sceneComponent.deserialize(_this.appService.getDefaultSampleData());
            }
        });
    };
    ContainerComponent.prototype.replay = function () {
        this.appService.refreshRxObjects();
    };
    ContainerComponent.prototype.shortenURL = function (serialized) {
        return serialized;
    };
    ContainerComponent.prototype.share = function () {
        var serialized = this.sceneComponent.serialize();
        this.serializedUrl = 'https://fingerpich.github.io/rx-flow/load/' + this.shortenURL(serialized);
    };
    ContainerComponent.prototype.showCreationMenuToggle = function () {
        this.showCreationMenu = !this.showCreationMenu;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_scene_scene_component__WEBPACK_IMPORTED_MODULE_1__["SceneComponent"]),
        __metadata("design:type", _scene_scene_component__WEBPACK_IMPORTED_MODULE_1__["SceneComponent"])
    ], ContainerComponent.prototype, "sceneComponent", void 0);
    ContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rxstudio-container',
            template: __webpack_require__(/*! ./container.component.html */ "./src/app/container/container.component.html"),
            styles: [__webpack_require__(/*! ./container.component.scss */ "./src/app/container/container.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "./src/app/control-scene/control-scene.component.html":
/*!************************************************************!*\
  !*** ./src/app/control-scene/control-scene.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <button>share</button>\n  <button (click)=\"clearClick\">clear</button>\n  <button (click)=\"deleteClick\">delete</button>\n</div>\n"

/***/ }),

/***/ "./src/app/control-scene/control-scene.component.scss":
/*!************************************************************!*\
  !*** ./src/app/control-scene/control-scene.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2wtc2NlbmUvY29udHJvbC1zY2VuZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/control-scene/control-scene.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/control-scene/control-scene.component.ts ***!
  \**********************************************************/
/*! exports provided: ControlSceneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlSceneComponent", function() { return ControlSceneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ControlSceneComponent = /** @class */ (function () {
    function ControlSceneComponent(appService) {
        this.appService = appService;
    }
    ControlSceneComponent.prototype.ngOnInit = function () {
    };
    ControlSceneComponent.prototype.clearClick = function () {
        this.appService.controlScene("clear");
    };
    ControlSceneComponent.prototype.deleteClick = function () {
        this.appService.controlScene("delete");
    };
    ControlSceneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rxstudio-control-scene',
            template: __webpack_require__(/*! ./control-scene.component.html */ "./src/app/control-scene/control-scene.component.html"),
            styles: [__webpack_require__(/*! ./control-scene.component.scss */ "./src/app/control-scene/control-scene.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], ControlSceneComponent);
    return ControlSceneComponent;
}());



/***/ }),

/***/ "./src/app/creation-menu/creation-menu.component.html":
/*!************************************************************!*\
  !*** ./src/app/creation-menu/creation-menu.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" (click)=\"selectOperator(null)\"></div>\n<div class=\"operators-container\">\n  <div class=\"operators-group\" *ngFor=\"let kind of operators\">\n    <h5>{{kind.name}}</h5>\n    <span class=\"selectable operatorOption\" [ngClass]=\"{'cool':op.title === 'Subscribe','hot':op.title === 'Publish'}\"\n         [ngClass]=\"{'selected':selectedOption==op}\"\n         (click)=\"selectOperator(op)\"\n         *ngFor=\"let op of kind.list\">\n      {{op.title}}\n    </span>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/creation-menu/creation-menu.component.scss":
/*!************************************************************!*\
  !*** ./src/app/creation-menu/creation-menu.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selectable {\n  cursor: pointer; }\n\n:host .overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.05);\n  z-index: 4; }\n\n@-webkit-keyframes slideUp {\n  from {\n    height: 0%;\n    overflow-y: hidden; }\n  to {\n    height: 61%;\n    overflow-y: hidden; } }\n\n@keyframes slideUp {\n  from {\n    height: 0%;\n    overflow-y: hidden; }\n  to {\n    height: 61%;\n    overflow-y: hidden; } }\n\n:host .operators-container {\n  height: 61%;\n  -webkit-animation-name: slideUp;\n          animation-name: slideUp;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  z-index: 5;\n  box-shadow: -1px 3px 10px 0 #bbb;\n  right: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  background: #ffffff; }\n\n:host .operators-container .operators-group {\n    text-align: center;\n    padding: 20px 0 0; }\n\n:host .operators-container .operators-group h5 {\n      margin: -7px;\n      font-weight: 100;\n      font-size: 0.9rem;\n      color: #bdbdbd;\n      text-align: center;\n      padding: 0; }\n\n:host .operators-container .operators-group .operatorOption {\n      color: #404040;\n      padding: 8px;\n      font-size: 0.9rem;\n      line-height: 1.6rem;\n      display: inline;\n      transition: ease 0.2s; }\n\n:host .operators-container .operators-group .operatorOption.cool {\n        color: blue; }\n\n:host .operators-container .operators-group .operatorOption.hot {\n        color: red; }\n\n:host .operators-container .operators-group .operatorOption:hover {\n        background: rgba(0, 0, 0, 0.07);\n        color: #07f;\n        border-radius: 50%; }\n\n:host .operators-container .operators-group .operatorOption.selected {\n        color: black;\n        background: #eee;\n        border-radius: 3px;\n        padding: 2px 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maW5nZXJwaWNoL0RvY3VtZW50cy9wcm9qZWN0cy9yeC1mbG93L3NyYy9hcHAvY3JlYXRpb24tbWVudS9jcmVhdGlvbi1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWMsRUFDZjs7QUFFRDtFQUVJLGdCQUFlO0VBQ2YsWUFBVztFQUNYLGFBQVk7RUFDWixRQUFPO0VBQ1AsT0FBTTtFQUNOLGdDQUE0QjtFQUM1QixXQUFVLEVBQ1g7O0FBQ0Q7RUFDRTtJQUFNLFdBQVU7SUFBQyxtQkFBa0IsRUFBQTtFQUNuQztJQUFJLFlBQVc7SUFBQyxtQkFBa0IsRUFBQSxFQUFBOztBQUZwQztFQUNFO0lBQU0sV0FBVTtJQUFDLG1CQUFrQixFQUFBO0VBQ25DO0lBQUksWUFBVztJQUFDLG1CQUFrQixFQUFBLEVBQUE7O0FBWnRDO0VBZUksWUFBVztFQUNYLGdDQUF1QjtVQUF2Qix3QkFBdUI7RUFDdkIsaUNBQXdCO1VBQXhCLHlCQUF3QjtFQUN4QixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxXQUFVO0VBQ1YsaUNBQWdDO0VBQ2hDLFNBQVE7RUFDUixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQXVDcEI7O0FBakVIO0lBNEJNLG1CQUFrQjtJQUNsQixrQkFBaUIsRUFtQ2xCOztBQWhFTDtNQStCUSxhQUFZO01BQ1osaUJBQWdCO01BQ2hCLGtCQUFpQjtNQUNqQixlQUFjO01BQ2QsbUJBQWtCO01BQ2xCLFdBQVUsRUFDWDs7QUFyQ1A7TUF1Q1EsZUFBYztNQUNkLGFBQVk7TUFDWixrQkFBaUI7TUFDakIsb0JBQW1CO01BQ25CLGdCQUFlO01BRWYsc0JBQXFCLEVBa0J0Qjs7QUEvRFA7UUErQ1UsWUFBVyxFQUNaOztBQWhEVDtRQWtEVSxXQUFVLEVBQ1g7O0FBbkRUO1FBcURVLGdDQUErQjtRQUMvQixZQUFXO1FBQ1gsbUJBQWtCLEVBQ25COztBQXhEVDtRQTBEVSxhQUFZO1FBQ1osaUJBQWdCO1FBQ2hCLG1CQUFrQjtRQUNsQixrQkFBaUIsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGlvbi1tZW51L2NyZWF0aW9uLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0YWJsZXtcbiAgY3Vyc29yOnBvaW50ZXI7XG59XG5cbjpob3N0e1xuICAub3ZlcmxheXtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wNSk7XG4gICAgei1pbmRleDogNDtcbiAgfVxuICBAa2V5ZnJhbWVzIHNsaWRlVXAge1xuICAgIGZyb20ge2hlaWdodDogMCU7b3ZlcmZsb3cteTogaGlkZGVuO31cbiAgICB0byB7aGVpZ2h0OiA2MSU7b3ZlcmZsb3cteTogaGlkZGVuO31cbiAgfVxuICAub3BlcmF0b3JzLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA2MSU7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlVXA7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogNTtcbiAgICBib3gtc2hhZG93OiAtMXB4IDNweCAxMHB4IDAgI2JiYjtcbiAgICByaWdodDogMDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIC5vcGVyYXRvcnMtZ3JvdXAge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMjBweCAwIDA7XG4gICAgICBoNSB7XG4gICAgICAgIG1hcmdpbjogLTdweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgICAub3BlcmF0b3JPcHRpb24ge1xuICAgICAgICBjb2xvcjogIzQwNDA0MDtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNnJlbTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UgMC4ycztcbiAgICAgICAgdHJhbnNpdGlvbjogZWFzZSAwLjJzO1xuICAgICAgICAmLmNvb2x7XG4gICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIH1cbiAgICAgICAgJi5ob3R7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVye1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNyk7XG4gICAgICAgICAgY29sb3I6ICMwN2Y7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG4gICAgICAgICYuc2VsZWN0ZWR7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/creation-menu/creation-menu.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/creation-menu/creation-menu.component.ts ***!
  \**********************************************************/
/*! exports provided: CreationMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreationMenuComponent", function() { return CreationMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _rx_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rx-helper */ "./src/app/rx-helper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreationMenuComponent = /** @class */ (function () {
    function CreationMenuComponent(appService) {
        this.appService = appService;
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CreationMenuComponent.prototype.ngOnInit = function () {
        this.operators = _rx_helper__WEBPACK_IMPORTED_MODULE_2__["RxHelper"].getRxOperators();
    };
    CreationMenuComponent.prototype.selectOperator = function (option) {
        this.selectedOption = option;
        this.appService.setCreationOption(option);
        this.onSelect.emit(option);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CreationMenuComponent.prototype, "onSelect", void 0);
    CreationMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rxstudio-creation-menu',
            template: __webpack_require__(/*! ./creation-menu.component.html */ "./src/app/creation-menu/creation-menu.component.html"),
            styles: [__webpack_require__(/*! ./creation-menu.component.scss */ "./src/app/creation-menu/creation-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], CreationMenuComponent);
    return CreationMenuComponent;
}());



/***/ }),

/***/ "./src/app/node-types/all.ts":
/*!***********************************!*\
  !*** ./src/app/node-types/all.ts ***!
  \***********************************/
/*! exports provided: All */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "All", function() { return All; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
/* harmony import */ var _sample_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample-functions */ "./src/app/node-types/sample-functions.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var All = /** @class */ (function (_super) {
    __extends(All, _super);
    function All() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            filterCondition: 0,
        };
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.every(All.propertiesType.params[_this.properties.filterCondition].func);
        };
        _this.toString = function () {
            return ".every(" + All.propertiesType.params[_this.properties.filterCondition].text + ")";
        };
        return _this;
    }
    All.title = 'All';
    All.desc = 'determine whether all items emitted by an Observable meet some criteria';
    All.maxInput = 1;
    All.minInput = 1;
    All.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('filterCondition', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Method, [
        _sample_functions__WEBPACK_IMPORTED_MODULE_3__["SampleFunctions"].GT6
    ], '');
    return All;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/average.ts":
/*!***************************************!*\
  !*** ./src/app/node-types/average.ts ***!
  \***************************************/
/*! exports provided: Average */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Average", function() { return Average; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Average = /** @class */ (function (_super) {
    __extends(Average, _super);
    function Average() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {};
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.average();
        };
        _this.toString = function () {
            return '.average()';
        };
        return _this;
    }
    Average.title = 'Average';
    Average.desc = 'discard items emitted by an Observable after a specified condition becomes false';
    Average.maxInput = 1;
    Average.minInput = 1;
    Average.propertiesType = null;
    return Average;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/bufferCount.ts":
/*!*******************************************!*\
  !*** ./src/app/node-types/bufferCount.ts ***!
  \*******************************************/
/*! exports provided: BufferCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferCount", function() { return BufferCount; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var BufferCount = /** @class */ (function (_super) {
    __extends(BufferCount, _super);
    function BufferCount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            count: 3,
            skip: 2
        };
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.bufferCount(_this.properties.count, _this.properties.skip);
        };
        _this.toString = function () {
            return ".bufferCount(" + _this.properties.count + ", " + _this.properties.skip + ")";
        };
        return _this;
    }
    BufferCount.title = 'BufferCount';
    BufferCount.desc = 'periodically gather items from an Observable into bundles and ' +
        'emit these bundles rather than emitting the items one at a time';
    BufferCount.maxInput = 1;
    BufferCount.minInput = 1;
    BufferCount.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('parameters', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Object, [
        new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('count', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Number),
        new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('skip', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Number)
    ], '');
    return BufferCount;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/catch.ts":
/*!*************************************!*\
  !*** ./src/app/node-types/catch.ts ***!
  \*************************************/
/*! exports provided: Catch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Catch", function() { return Catch; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Catch = /** @class */ (function (_super) {
    __extends(Catch, _super);
    function Catch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.graphInputs = [];
        _this.properties = {};
        _this.runner = function (_a) {
            return _this.graphInputs[0].observable.catch(function (err) {
                return 'err:' + err;
            });
        };
        _this.toString = function (_a) {
            return ".catch((err)=>{return 'err:' + err;});";
        };
        return _this;
    }
    Catch.title = 'Catch';
    Catch.desc = 'recover from an onError notification by continuing the sequence without error';
    Catch.maxInput = 1;
    Catch.minInput = 1;
    Catch.propertiesType = null;
    return Catch;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/connect.ts":
/*!***************************************!*\
  !*** ./src/app/node-types/connect.ts ***!
  \***************************************/
/*! exports provided: Connect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connect", function() { return Connect; });
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Connect = /** @class */ (function (_super) {
    __extends(Connect, _super);
    function Connect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {};
        _this.nodeClick = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.nodeClick.subscribe(function () {
                _this.graphInputs[0].observable.connect();
            });
        };
        _this.toString = function () {
            return '.connect()';
        };
        return _this;
    }
    Connect.title = 'Connect';
    Connect.desc = 'instruct a connectable Observable to begin emitting items to its subscribers';
    Connect.maxInput = 1;
    Connect.minInput = 1;
    Connect.propertiesType = null;
    return Connect;
}(_rxNode__WEBPACK_IMPORTED_MODULE_1__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/contains.ts":
/*!****************************************!*\
  !*** ./src/app/node-types/contains.ts ***!
  \****************************************/
/*! exports provided: Contains */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contains", function() { return Contains; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Contains = /** @class */ (function (_super) {
    __extends(Contains, _super);
    function Contains() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            item: 0,
        };
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.contains(_this.properties.item);
        };
        _this.toString = function () {
            return ".contains(" + _this.properties.item + ")";
        };
        return _this;
    }
    Contains.title = 'Contains';
    Contains.desc = 'emit only item n emitted by an Observable';
    Contains.maxInput = 1;
    Contains.minInput = 1;
    Contains.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('item', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].String);
    return Contains;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/count.ts":
/*!*************************************!*\
  !*** ./src/app/node-types/count.ts ***!
  \*************************************/
/*! exports provided: Count */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Count", function() { return Count; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _sample_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sample-functions */ "./src/app/node-types/sample-functions.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Count = /** @class */ (function (_super) {
    __extends(Count, _super);
    function Count() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            filterFunc: 0
        };
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.count(Count.propertiesType.params[_this.properties.filterFunc].func);
        };
        _this.toString = function () {
            return ".count(" + Count.propertiesType.params[_this.properties.filterFunc].text + ")";
        };
        return _this;
    }
    Count.title = 'Count';
    Count.desc = 'count the number of items emitted by the source Observable and emit only this value';
    Count.maxInput = 1;
    Count.minInput = 1;
    Count.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_3__["PropertyType"]('filterFunc', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Method, [
        _sample_functions__WEBPACK_IMPORTED_MODULE_1__["SampleFunctions"].ALL,
        _sample_functions__WEBPACK_IMPORTED_MODULE_1__["SampleFunctions"].GT6
    ], '');
    return Count;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/create.ts":
/*!**************************************!*\
  !*** ./src/app/node-types/create.ts ***!
  \**************************************/
/*! exports provided: Create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Create", function() { return Create; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Create = /** @class */ (function (_super) {
    __extends(Create, _super);
    function Create() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            list: [
                { time: 0, value: 1 }
            ]
        };
        _this.graphInputs = [];
        _this.runner = function () {
            var delay = function (observer, delayTime, value) {
                setTimeout(function () {
                    observer.next(value);
                }, delayTime || 0);
            };
            return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
                for (var _i = 0, _a = _this.properties.list; _i < _a.length; _i++) {
                    var l = _a[_i];
                    delay(observer, l.time, l.value);
                }
            });
        };
        _this.toString = function () {
            var list = _this.properties.list;
            var getNext = function (_a) {
                var value = _a.value, time = _a.time;
                return time ? "setTimeout(function(){ observer.next(" + value + ");}, " + time + ")" : "observer.next(" + value + ");";
            };
            var s = '';
            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                var item = list_1[_i];
                s += getNext(item);
            }
            return "Observable.create((observer) => {" + s + "})";
        };
        return _this;
    }
    Create.title = 'Create';
    Create.desc = 'create an Observable from scratch by calling observer methods programmatically';
    Create.maxInput = 0;
    Create.minInput = 0;
    // protected static propertiesType = [{name:'list',type: 'list', params:[{name:'time',type:'Number'},{name:'value',type:'Number'}]}];
    Create.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_3__["PropertyType"]('list', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].List, new _property_type__WEBPACK_IMPORTED_MODULE_3__["PropertyType"]('', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Object, [
        new _property_type__WEBPACK_IMPORTED_MODULE_3__["PropertyType"]('time', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Number),
        new _property_type__WEBPACK_IMPORTED_MODULE_3__["PropertyType"]('value', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Number)
    ], ''), '');
    return Create;
}(_rxNode__WEBPACK_IMPORTED_MODULE_1__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/debounce.ts":
/*!****************************************!*\
  !*** ./src/app/node-types/debounce.ts ***!
  \****************************************/
/*! exports provided: Debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Debounce", function() { return Debounce; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var Debounce = /** @class */ (function (_super) {
    __extends(Debounce, _super);
    function Debounce() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            debounceTime: 500 /* ms */
        };
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounce"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(_this.properties.debounceTime); }));
        };
        _this.toString = function () {
            return ".pipe(debounce(() => timer(" + _this.properties.debounceTime + ")))";
        };
        return _this;
    }
    Debounce.title = 'Debounce';
    Debounce.desc = 'only emit an item from an Observable if a particular timespan has passed without it emitting another item';
    Debounce.maxInput = 1;
    Debounce.minInput = 1;
    Debounce.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_3__["PropertyType"]('debounceTime', _propertyType_enum__WEBPACK_IMPORTED_MODULE_4__["PropertyTypeEnum"].Number);
    return Debounce;
}(_rxNode__WEBPACK_IMPORTED_MODULE_2__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/defer.ts":
/*!*************************************!*\
  !*** ./src/app/node-types/defer.ts ***!
  \*************************************/
/*! exports provided: Defer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Defer", function() { return Defer; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Defer = /** @class */ (function (_super) {
    __extends(Defer, _super);
    function Defer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            result: '42'
        };
        _this.graphInputs = [];
        _this.runner = function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"])(function () {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(_this.properties.result);
            });
        };
        _this.toString = function () {
            return 'Observable.defer(() => { return Observable.of(' + _this.properties.result + '); });';
        };
        return _this;
    }
    Defer.title = 'Defer';
    Defer.desc = 'do not create the Observable until the observer subscribes, and create a fresh Observable for each observer';
    Defer.maxInput = 0;
    Defer.minInput = 0;
    Defer.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_2__["PropertyType"]('result', _propertyType_enum__WEBPACK_IMPORTED_MODULE_3__["PropertyTypeEnum"].String);
    return Defer;
}(_rxNode__WEBPACK_IMPORTED_MODULE_1__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/delay.ts":
/*!*************************************!*\
  !*** ./src/app/node-types/delay.ts ***!
  \*************************************/
/*! exports provided: Delay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Delay", function() { return Delay; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Delay = /** @class */ (function (_super) {
    __extends(Delay, _super);
    function Delay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            delay: 1000
        };
        _this.graphInputs = [];
        _this.runner = function (_a) {
            return _this.graphInputs[0].observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["delay"])(_this.properties.delay));
        };
        _this.toString = function (_a) {
            return ".pipe(delay(" + _this.properties.delay + "))";
        };
        return _this;
    }
    Delay.title = 'Delay';
    Delay.desc = 'shift the emissions from an Observable forward in time by a particular amount';
    Delay.maxInput = 1;
    Delay.minInput = 1;
    Delay.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_3__["PropertyType"]('delay', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Number);
    return Delay;
}(_rxNode__WEBPACK_IMPORTED_MODULE_1__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/distinct.ts":
/*!****************************************!*\
  !*** ./src/app/node-types/distinct.ts ***!
  \****************************************/
/*! exports provided: Distinct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Distinct", function() { return Distinct; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Distinct = /** @class */ (function (_super) {
    __extends(Distinct, _super);
    function Distinct() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {};
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinct"])());
        };
        _this.toString = function () {
            return ".pipe(distinct())";
        };
        return _this;
    }
    Distinct.title = 'Distinct';
    Distinct.desc = 'suppress duplicate items emitted by an Observable';
    Distinct.maxInput = 1;
    Distinct.minInput = 1;
    Distinct.propertiesType = null;
    return Distinct;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/do.ts":
/*!**********************************!*\
  !*** ./src/app/node-types/do.ts ***!
  \**********************************/
/*! exports provided: Do */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Do", function() { return Do; });
/* harmony import */ var rxjs_operators___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators/ */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
/* harmony import */ var _sample_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sample-functions */ "./src/app/node-types/sample-functions.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var Do = /** @class */ (function (_super) {
    __extends(Do, _super);
    function Do() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            action: 0,
        };
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.pipe(Object(rxjs_operators___WEBPACK_IMPORTED_MODULE_0__["tap"])(Do.propertiesType.params[_this.properties.action].func));
        };
        _this.toString = function () {
            return ".pipe(tap(" + Do.propertiesType.params[_this.properties.action].text + "))";
        };
        return _this;
    }
    Do.title = 'Do';
    Do.desc = 'register an action to take upon a variety of Observable lifecycle events';
    Do.maxInput = 1;
    Do.minInput = 1;
    Do.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_2__["PropertyType"]('action', _propertyType_enum__WEBPACK_IMPORTED_MODULE_3__["PropertyTypeEnum"].Method, [
        _sample_functions__WEBPACK_IMPORTED_MODULE_4__["SampleFunctions"].X2,
        _sample_functions__WEBPACK_IMPORTED_MODULE_4__["SampleFunctions"].X3,
    ], '');
    return Do;
}(_rxNode__WEBPACK_IMPORTED_MODULE_1__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/elementAt.ts":
/*!*****************************************!*\
  !*** ./src/app/node-types/elementAt.ts ***!
  \*****************************************/
/*! exports provided: ElementAt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementAt", function() { return ElementAt; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ElementAt = /** @class */ (function (_super) {
    __extends(ElementAt, _super);
    function ElementAt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            index: 2,
        };
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["elementAt"])(_this.properties.index));
        };
        _this.toString = function () {
            return '.pipe(elementAt(' + _this.properties.index + '))';
        };
        return _this;
    }
    ElementAt.title = 'ElementAt';
    ElementAt.desc = 'emit only item n emitted by an Observable';
    ElementAt.maxInput = 1;
    ElementAt.minInput = 1;
    ElementAt.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_2__["PropertyType"]('index', _propertyType_enum__WEBPACK_IMPORTED_MODULE_1__["PropertyTypeEnum"].Number);
    return ElementAt;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/filter.ts":
/*!**************************************!*\
  !*** ./src/app/node-types/filter.ts ***!
  \**************************************/
/*! exports provided: Filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return Filter; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
/* harmony import */ var _sample_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample-functions */ "./src/app/node-types/sample-functions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var Filter = /** @class */ (function (_super) {
    __extends(Filter, _super);
    function Filter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            filter: 0,
        };
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(Filter.propertiesType.params[_this.properties.filter].func));
        };
        _this.toString = function () {
            return ".pipe(filter(" + Filter.propertiesType.params[_this.properties.filter].text + "))";
        };
        return _this;
    }
    Filter.title = 'Filter';
    Filter.desc = 'transform the items emitted by an Observable by applying a function to each item';
    Filter.maxInput = 1;
    Filter.minInput = 1;
    Filter.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('filter', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Method, [
        _sample_functions__WEBPACK_IMPORTED_MODULE_3__["SampleFunctions"].EVEN,
        _sample_functions__WEBPACK_IMPORTED_MODULE_3__["SampleFunctions"].ODD,
        _sample_functions__WEBPACK_IMPORTED_MODULE_3__["SampleFunctions"].ALL,
        _sample_functions__WEBPACK_IMPORTED_MODULE_3__["SampleFunctions"].GT6,
    ], '');
    return Filter;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/first.ts":
/*!*************************************!*\
  !*** ./src/app/node-types/first.ts ***!
  \*************************************/
/*! exports provided: First */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "First", function() { return First; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _sample_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sample-functions */ "./src/app/node-types/sample-functions.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var First = /** @class */ (function (_super) {
    __extends(First, _super);
    function First() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            filter: 0,
        };
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(First.propertiesType.params[_this.properties.filter].func));
        };
        _this.toString = function () {
            return ".pipe(first(" + First.propertiesType.params[_this.properties.filter].text + ")";
        };
        return _this;
    }
    First.title = 'First';
    First.desc = 'transform the items emitted by an Observable by applying a function to each item';
    First.maxInput = 1;
    First.minInput = 1;
    First.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_3__["PropertyType"]('filter', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Method, [
        _sample_functions__WEBPACK_IMPORTED_MODULE_1__["SampleFunctions"].EVEN,
        _sample_functions__WEBPACK_IMPORTED_MODULE_1__["SampleFunctions"].ODD,
        _sample_functions__WEBPACK_IMPORTED_MODULE_1__["SampleFunctions"].ALL,
        _sample_functions__WEBPACK_IMPORTED_MODULE_1__["SampleFunctions"].GT6,
    ], '');
    return First;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/flatMap.ts":
/*!***************************************!*\
  !*** ./src/app/node-types/flatMap.ts ***!
  \***************************************/
/*! exports provided: FlatMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatMap", function() { return FlatMap; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _sample_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sample-functions */ "./src/app/node-types/sample-functions.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var FlatMap = /** @class */ (function (_super) {
    __extends(FlatMap, _super);
    function FlatMap() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            observabler: 0
        };
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(FlatMap.propertiesType.params[_this.properties.observabler].func));
        };
        _this.toString = function () {
            return '.flatMap(' + FlatMap.propertiesType.params[_this.properties.observabler].text + ')';
        };
        return _this;
    }
    FlatMap.title = 'FlatMap';
    FlatMap.desc = 'transform the items emitted by an Observable into Observables,' +
        ' then flatten the emissions from those into a single Observable';
    FlatMap.maxInput = 1;
    FlatMap.minInput = 1;
    FlatMap.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_3__["PropertyType"]('observabler', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Method, [
        _sample_functions__WEBPACK_IMPORTED_MODULE_1__["SampleFunctions"].RANGE2,
        _sample_functions__WEBPACK_IMPORTED_MODULE_1__["SampleFunctions"].RANGE3,
        _sample_functions__WEBPACK_IMPORTED_MODULE_1__["SampleFunctions"].RANGE5,
    ], '');
    return FlatMap;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/from.ts":
/*!************************************!*\
  !*** ./src/app/node-types/from.ts ***!
  \************************************/
/*! exports provided: From */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "From", function() { return From; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var From = /** @class */ (function (_super) {
    __extends(From, _super);
    function From() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            list: [
                1, 2
            ]
        };
        _this.graphInputs = [];
        _this.runner = function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(_this.properties.list));
        };
        _this.toString = function () {
            return "from(" + _this.properties.list.join(',') + ")";
        };
        return _this;
    }
    From.title = 'From';
    From.desc = 'convert various other objects and data types into Observables';
    From.maxInput = 0;
    From.minInput = 0;
    From.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_2__["PropertyType"]('list', _propertyType_enum__WEBPACK_IMPORTED_MODULE_3__["PropertyTypeEnum"].List, new _property_type__WEBPACK_IMPORTED_MODULE_2__["PropertyType"]('number', _propertyType_enum__WEBPACK_IMPORTED_MODULE_3__["PropertyTypeEnum"].Number), '');
    return From;
}(_rxNode__WEBPACK_IMPORTED_MODULE_1__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/fromEvent.ts":
/*!*****************************************!*\
  !*** ./src/app/node-types/fromEvent.ts ***!
  \*****************************************/
/*! exports provided: FromEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromEvent", function() { return FromEvent; });
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var FromEvent = /** @class */ (function (_super) {
    __extends(FromEvent, _super);
    function FromEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {};
        _this.nodeClick = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.nodeClick;
        };
        _this.toString = function () {
            return '.fromEvent(input, "click");';
        };
        return _this;
    }
    FromEvent.title = 'FromEvent';
    FromEvent.desc = 'convert event into Observables';
    FromEvent.maxInput = 0;
    FromEvent.minInput = 0;
    FromEvent.propertiesType = null;
    return FromEvent;
}(_rxNode__WEBPACK_IMPORTED_MODULE_1__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/groupBy.ts":
/*!***************************************!*\
  !*** ./src/app/node-types/groupBy.ts ***!
  \***************************************/
/*! exports provided: GroupBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupBy", function() { return GroupBy; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
/* harmony import */ var _sample_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample-functions */ "./src/app/node-types/sample-functions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var GroupBy = /** @class */ (function (_super) {
    __extends(GroupBy, _super);
    function GroupBy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            keySelector: 0,
            elementSelector: 0,
            durationSelector: 0,
        };
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["groupBy"])(GroupBy.propertiesType.params[0].params[_this.properties.keySelector].func, GroupBy.propertiesType.params[1].params[_this.properties.elementSelector].func, GroupBy.propertiesType.params[2].params[_this.properties.durationSelector].func));
        };
        _this.toString = function () {
            return '.pipe(groupBy(' +
                GroupBy.propertiesType.params[0].params[_this.properties.keySelector].text + ', ' +
                GroupBy.propertiesType.params[1].params[_this.properties.elementSelector].text + ', ' +
                GroupBy.propertiesType.params[2].params[_this.properties.durationSelector].text +
                ')';
        };
        return _this;
    }
    GroupBy.title = 'GroupBy';
    GroupBy.desc = 'divide an Observable into a set of Observables that each emit a ' +
        'different subset of items from the original Observable';
    GroupBy.maxInput = 1;
    GroupBy.minInput = 1;
    GroupBy.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('object', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Object, [
        new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('keySelector', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Method, [
            _sample_functions__WEBPACK_IMPORTED_MODULE_3__["SampleFunctions"].GET_X,
            _sample_functions__WEBPACK_IMPORTED_MODULE_3__["SampleFunctions"].GET_CODE,
        ], 'a function that accepts an item from the source Observable and returns its key'),
        new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('elementSelector', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Method, [
            _sample_functions__WEBPACK_IMPORTED_MODULE_3__["SampleFunctions"].GET_X,
            _sample_functions__WEBPACK_IMPORTED_MODULE_3__["SampleFunctions"].GET_CODE,
        ], 'a function that accepts an item from the source Observable and returns an item to be ' +
            'emitted in its place by one of the resulting Observables'),
        new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('durationSelector', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Method, [
            _sample_functions__WEBPACK_IMPORTED_MODULE_3__["SampleFunctions"].TIMEOUT,
            _sample_functions__WEBPACK_IMPORTED_MODULE_3__["SampleFunctions"].NOTHING,
        ], 'a function used to compare two keys for identity (that is, whether items with two keys ' +
            'should be emitted on the same Observable)'),
    ], '');
    return GroupBy;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/ignoreElements.ts":
/*!**********************************************!*\
  !*** ./src/app/node-types/ignoreElements.ts ***!
  \**********************************************/
/*! exports provided: IgnoreElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IgnoreElements", function() { return IgnoreElements; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var IgnoreElements = /** @class */ (function (_super) {
    __extends(IgnoreElements, _super);
    function IgnoreElements() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {};
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["ignoreElements"])());
        };
        _this.toString = function () {
            return '.ignoreElements()';
        };
        return _this;
    }
    IgnoreElements.title = 'IgnoreElements';
    IgnoreElements.desc = 'do not emit any items from an Observable but mirror its termination notification';
    IgnoreElements.maxInput = 1;
    IgnoreElements.minInput = 1;
    IgnoreElements.propertiesType = null;
    return IgnoreElements;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/index.ts":
/*!*************************************!*\
  !*** ./src/app/node-types/index.ts ***!
  \*************************************/
/*! exports provided: All, Average, BufferCount, Catch, Connect, Contains, Count, Create, Debounce, Defer, Delay, Distinct, Do, ElementAt, Filter, First, FlatMap, From, FromEvent, GroupBy, IgnoreElements, Interval, Join, Last, Map, Max, Merge, Min, Pluck, Publish, Race, Range, RefCount, Repeat, Replay, Retry, Sample, Scan, SequenceEqual, Skip, SkipLast, SkipUntil, SkipWhile, StartWith, Subscribe, Sum, Switch, Take, TakeLast, TakeUntil, TakeWhile, Timeout, Timer, Windowed, WindowWithCount, Zip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all */ "./src/app/node-types/all.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "All", function() { return _all__WEBPACK_IMPORTED_MODULE_0__["All"]; });

/* harmony import */ var _average__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./average */ "./src/app/node-types/average.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Average", function() { return _average__WEBPACK_IMPORTED_MODULE_1__["Average"]; });

/* harmony import */ var _bufferCount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bufferCount */ "./src/app/node-types/bufferCount.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BufferCount", function() { return _bufferCount__WEBPACK_IMPORTED_MODULE_2__["BufferCount"]; });

/* harmony import */ var _catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catch */ "./src/app/node-types/catch.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Catch", function() { return _catch__WEBPACK_IMPORTED_MODULE_3__["Catch"]; });

/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connect */ "./src/app/node-types/connect.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Connect", function() { return _connect__WEBPACK_IMPORTED_MODULE_4__["Connect"]; });

/* harmony import */ var _contains__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contains */ "./src/app/node-types/contains.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Contains", function() { return _contains__WEBPACK_IMPORTED_MODULE_5__["Contains"]; });

/* harmony import */ var _count__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./count */ "./src/app/node-types/count.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Count", function() { return _count__WEBPACK_IMPORTED_MODULE_6__["Count"]; });

/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create */ "./src/app/node-types/create.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Create", function() { return _create__WEBPACK_IMPORTED_MODULE_7__["Create"]; });

/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./debounce */ "./src/app/node-types/debounce.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Debounce", function() { return _debounce__WEBPACK_IMPORTED_MODULE_8__["Debounce"]; });

/* harmony import */ var _defer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defer */ "./src/app/node-types/defer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Defer", function() { return _defer__WEBPACK_IMPORTED_MODULE_9__["Defer"]; });

/* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./delay */ "./src/app/node-types/delay.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Delay", function() { return _delay__WEBPACK_IMPORTED_MODULE_10__["Delay"]; });

/* harmony import */ var _distinct__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./distinct */ "./src/app/node-types/distinct.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Distinct", function() { return _distinct__WEBPACK_IMPORTED_MODULE_11__["Distinct"]; });

/* harmony import */ var _do__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./do */ "./src/app/node-types/do.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Do", function() { return _do__WEBPACK_IMPORTED_MODULE_12__["Do"]; });

/* harmony import */ var _elementAt__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./elementAt */ "./src/app/node-types/elementAt.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementAt", function() { return _elementAt__WEBPACK_IMPORTED_MODULE_13__["ElementAt"]; });

/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./filter */ "./src/app/node-types/filter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return _filter__WEBPACK_IMPORTED_MODULE_14__["Filter"]; });

/* harmony import */ var _first__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./first */ "./src/app/node-types/first.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "First", function() { return _first__WEBPACK_IMPORTED_MODULE_15__["First"]; });

/* harmony import */ var _flatMap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./flatMap */ "./src/app/node-types/flatMap.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlatMap", function() { return _flatMap__WEBPACK_IMPORTED_MODULE_16__["FlatMap"]; });

/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./from */ "./src/app/node-types/from.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "From", function() { return _from__WEBPACK_IMPORTED_MODULE_17__["From"]; });

/* harmony import */ var _fromEvent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fromEvent */ "./src/app/node-types/fromEvent.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FromEvent", function() { return _fromEvent__WEBPACK_IMPORTED_MODULE_18__["FromEvent"]; });

/* harmony import */ var _groupBy__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./groupBy */ "./src/app/node-types/groupBy.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupBy", function() { return _groupBy__WEBPACK_IMPORTED_MODULE_19__["GroupBy"]; });

/* harmony import */ var _ignoreElements__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ignoreElements */ "./src/app/node-types/ignoreElements.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IgnoreElements", function() { return _ignoreElements__WEBPACK_IMPORTED_MODULE_20__["IgnoreElements"]; });

/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./interval */ "./src/app/node-types/interval.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Interval", function() { return _interval__WEBPACK_IMPORTED_MODULE_21__["Interval"]; });

/* harmony import */ var _join__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./join */ "./src/app/node-types/join.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Join", function() { return _join__WEBPACK_IMPORTED_MODULE_22__["Join"]; });

/* harmony import */ var _last__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./last */ "./src/app/node-types/last.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Last", function() { return _last__WEBPACK_IMPORTED_MODULE_23__["Last"]; });

/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./map */ "./src/app/node-types/map.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _map__WEBPACK_IMPORTED_MODULE_24__["Map"]; });

/* harmony import */ var _max__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./max */ "./src/app/node-types/max.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Max", function() { return _max__WEBPACK_IMPORTED_MODULE_25__["Max"]; });

/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./merge */ "./src/app/node-types/merge.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Merge", function() { return _merge__WEBPACK_IMPORTED_MODULE_26__["Merge"]; });

/* harmony import */ var _min__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./min */ "./src/app/node-types/min.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Min", function() { return _min__WEBPACK_IMPORTED_MODULE_27__["Min"]; });

/* harmony import */ var _pluck__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pluck */ "./src/app/node-types/pluck.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pluck", function() { return _pluck__WEBPACK_IMPORTED_MODULE_28__["Pluck"]; });

/* harmony import */ var _publish__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./publish */ "./src/app/node-types/publish.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Publish", function() { return _publish__WEBPACK_IMPORTED_MODULE_29__["Publish"]; });

/* harmony import */ var _race__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./race */ "./src/app/node-types/race.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Race", function() { return _race__WEBPACK_IMPORTED_MODULE_30__["Race"]; });

/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./range */ "./src/app/node-types/range.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return _range__WEBPACK_IMPORTED_MODULE_31__["Range"]; });

/* harmony import */ var _refCount__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./refCount */ "./src/app/node-types/refCount.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RefCount", function() { return _refCount__WEBPACK_IMPORTED_MODULE_32__["RefCount"]; });

/* harmony import */ var _repeat__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./repeat */ "./src/app/node-types/repeat.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Repeat", function() { return _repeat__WEBPACK_IMPORTED_MODULE_33__["Repeat"]; });

/* harmony import */ var _replay__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./replay */ "./src/app/node-types/replay.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Replay", function() { return _replay__WEBPACK_IMPORTED_MODULE_34__["Replay"]; });

/* harmony import */ var _retry__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./retry */ "./src/app/node-types/retry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Retry", function() { return _retry__WEBPACK_IMPORTED_MODULE_35__["Retry"]; });

/* harmony import */ var _sample__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./sample */ "./src/app/node-types/sample.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sample", function() { return _sample__WEBPACK_IMPORTED_MODULE_36__["Sample"]; });

/* harmony import */ var _scan__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./scan */ "./src/app/node-types/scan.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scan", function() { return _scan__WEBPACK_IMPORTED_MODULE_37__["Scan"]; });

/* harmony import */ var _sequenceEqual__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./sequenceEqual */ "./src/app/node-types/sequenceEqual.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SequenceEqual", function() { return _sequenceEqual__WEBPACK_IMPORTED_MODULE_38__["SequenceEqual"]; });

/* harmony import */ var _skip__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./skip */ "./src/app/node-types/skip.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Skip", function() { return _skip__WEBPACK_IMPORTED_MODULE_39__["Skip"]; });

/* harmony import */ var _skipLast__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./skipLast */ "./src/app/node-types/skipLast.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SkipLast", function() { return _skipLast__WEBPACK_IMPORTED_MODULE_40__["SkipLast"]; });

/* harmony import */ var _skipUntil__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./skipUntil */ "./src/app/node-types/skipUntil.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SkipUntil", function() { return _skipUntil__WEBPACK_IMPORTED_MODULE_41__["SkipUntil"]; });

/* harmony import */ var _skipWhile__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./skipWhile */ "./src/app/node-types/skipWhile.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SkipWhile", function() { return _skipWhile__WEBPACK_IMPORTED_MODULE_42__["SkipWhile"]; });

/* harmony import */ var _startWith__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./startWith */ "./src/app/node-types/startWith.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StartWith", function() { return _startWith__WEBPACK_IMPORTED_MODULE_43__["StartWith"]; });

/* harmony import */ var _subscribe__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./subscribe */ "./src/app/node-types/subscribe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subscribe", function() { return _subscribe__WEBPACK_IMPORTED_MODULE_44__["Subscribe"]; });

/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./sum */ "./src/app/node-types/sum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sum", function() { return _sum__WEBPACK_IMPORTED_MODULE_45__["Sum"]; });

/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./switch */ "./src/app/node-types/switch.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _switch__WEBPACK_IMPORTED_MODULE_46__["Switch"]; });

/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./take */ "./src/app/node-types/take.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Take", function() { return _take__WEBPACK_IMPORTED_MODULE_47__["Take"]; });

/* harmony import */ var _takeLast__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./takeLast */ "./src/app/node-types/takeLast.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TakeLast", function() { return _takeLast__WEBPACK_IMPORTED_MODULE_48__["TakeLast"]; });

/* harmony import */ var _takeUntil__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./takeUntil */ "./src/app/node-types/takeUntil.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TakeUntil", function() { return _takeUntil__WEBPACK_IMPORTED_MODULE_49__["TakeUntil"]; });

/* harmony import */ var _takeWhile__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./takeWhile */ "./src/app/node-types/takeWhile.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TakeWhile", function() { return _takeWhile__WEBPACK_IMPORTED_MODULE_50__["TakeWhile"]; });

/* harmony import */ var _timeout__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./timeout */ "./src/app/node-types/timeout.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timeout", function() { return _timeout__WEBPACK_IMPORTED_MODULE_51__["Timeout"]; });

/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./timer */ "./src/app/node-types/timer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return _timer__WEBPACK_IMPORTED_MODULE_52__["Timer"]; });

/* harmony import */ var _windowed__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./windowed */ "./src/app/node-types/windowed.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Windowed", function() { return _windowed__WEBPACK_IMPORTED_MODULE_53__["Windowed"]; });

/* harmony import */ var _windowWithCount__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./windowWithCount */ "./src/app/node-types/windowWithCount.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowWithCount", function() { return _windowWithCount__WEBPACK_IMPORTED_MODULE_54__["WindowWithCount"]; });

/* harmony import */ var _zip__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./zip */ "./src/app/node-types/zip.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Zip", function() { return _zip__WEBPACK_IMPORTED_MODULE_55__["Zip"]; });

/**
 * @module
 * @description
 * import all node types.
 */


























































/***/ }),

/***/ "./src/app/node-types/interval.ts":
/*!****************************************!*\
  !*** ./src/app/node-types/interval.ts ***!
  \****************************************/
/*! exports provided: Interval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interval", function() { return Interval; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Interval = /** @class */ (function (_super) {
    __extends(Interval, _super);
    function Interval() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            interval: 500 /* ms */,
        };
        _this.graphInputs = [];
        _this.runner = function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(_this.properties.interval);
        };
        _this.toString = function () {
            return "interval(" + _this.properties.interval + ")";
        };
        return _this;
    }
    Interval.title = 'Interval';
    Interval.desc = 'create an Observable that emits a sequence of integers spaced by a given time interval';
    Interval.maxInput = 0;
    Interval.minInput = 0;
    Interval.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_2__["PropertyType"]('interval', _propertyType_enum__WEBPACK_IMPORTED_MODULE_3__["PropertyTypeEnum"].Number);
    return Interval;
}(_rxNode__WEBPACK_IMPORTED_MODULE_1__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/join.ts":
/*!************************************!*\
  !*** ./src/app/node-types/join.ts ***!
  \************************************/
/*! exports provided: Join */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Join", function() { return Join; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
/* harmony import */ var _sample_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample-functions */ "./src/app/node-types/sample-functions.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Join = /** @class */ (function (_super) {
    __extends(Join, _super);
    function Join() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            fi1: 0,
            fi2: 0,
            fi3: 0,
        };
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.join(_this.graphInputs[1].observable /* the second observable connected to this block */, Join.propertiesType.params[_this.properties.fi1].func, Join.propertiesType[1].types[_this.properties.fi2].func, Join.propertiesType[2].types[_this.properties.fi3].func);
        };
        _this.toString = function (_a) {
            return '.join(' + _this.graphInputs[1].node.data.toString()
                + ', ' + Join.propertiesType[1].types[_this.properties.fi3].text
                + ', ' + Join.propertiesType[2].types[_this.properties.fi3].text
                + ', ' + Join.propertiesType[3].types[_this.properties.fi3].text
                + ')';
        };
        return _this;
    }
    Join.title = 'forkJoin';
    Join.desc = 'combine items emitted by two Observables whenever an item from one Observable is emitted ' +
        'during a time window defined according to an item emitted by the other Observable';
    Join.maxInput = 2;
    Join.minInput = 2;
    Join.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('object', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Object, [
        new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('ObKey', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Method, [
            _sample_functions__WEBPACK_IMPORTED_MODULE_3__["SampleFunctions"].TIMEOUT0,
            _sample_functions__WEBPACK_IMPORTED_MODULE_3__["SampleFunctions"].TIMEOUT,
        ], 'a function that accepts an item from the source Observable and returns an Observable whose ' +
            'lifespan governs the duration during which that item will combine with items from the second Observable'),
        new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('ObKey', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Method, [
            _sample_functions__WEBPACK_IMPORTED_MODULE_3__["SampleFunctions"].TIMEOUT0,
            _sample_functions__WEBPACK_IMPORTED_MODULE_3__["SampleFunctions"].TIMEOUT,
        ], 'a function that accepts an item from the second Observable and returns an Observable whose lifespan ' +
            'governs the duration during which that item will combine with items from the first Observable'),
        new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('ObKey', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Method, [
            _sample_functions__WEBPACK_IMPORTED_MODULE_3__["SampleFunctions"].XplusY,
        ], 'a function that accepts an item from the first Observable and an item from the second Observable and ' +
            'returns an item to be emitted by the Observable returned from join'),
    ], '');
    return Join;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/last.ts":
/*!************************************!*\
  !*** ./src/app/node-types/last.ts ***!
  \************************************/
/*! exports provided: Last */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Last", function() { return Last; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _sample_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sample-functions */ "./src/app/node-types/sample-functions.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Last = /** @class */ (function (_super) {
    __extends(Last, _super);
    function Last() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            filter: 0,
        };
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.last(Last.propertiesType.params[_this.properties.filter].func);
        };
        _this.toString = function () {
            return '.last(' + Last.propertiesType.params[_this.properties.filter].text + ')';
        };
        return _this;
    }
    Last.title = 'Last';
    Last.desc = 'emit only the last item (or the last item that meets some condition) emitted by an Observable';
    Last.maxInput = 1;
    Last.minInput = 1;
    Last.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_2__["PropertyType"]('filter', _propertyType_enum__WEBPACK_IMPORTED_MODULE_3__["PropertyTypeEnum"].Method, [
        _sample_functions__WEBPACK_IMPORTED_MODULE_1__["SampleFunctions"].EVEN,
        _sample_functions__WEBPACK_IMPORTED_MODULE_1__["SampleFunctions"].ODD,
        _sample_functions__WEBPACK_IMPORTED_MODULE_1__["SampleFunctions"].ALL,
        _sample_functions__WEBPACK_IMPORTED_MODULE_1__["SampleFunctions"].GT6,
    ], '');
    return Last;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/map.ts":
/*!***********************************!*\
  !*** ./src/app/node-types/map.ts ***!
  \***********************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _sample_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sample-functions */ "./src/app/node-types/sample-functions.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Map = /** @class */ (function (_super) {
    __extends(Map, _super);
    function Map() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            mapFunc: 0,
        };
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.map(Map.propertiesType.params[_this.properties.mapFunc].func);
        };
        _this.toString = function () {
            return '.map(' + Map.propertiesType.params[_this.properties.mapFunc].text + ')';
        };
        return _this;
    }
    Map.title = 'Map';
    Map.desc = 'transform the items emitted by an Observable by applying a function to each item';
    Map.maxInput = 1;
    Map.minInput = 1;
    Map.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_3__["PropertyType"]('mapFunc', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Method, [
        _sample_functions__WEBPACK_IMPORTED_MODULE_1__["SampleFunctions"].X2,
        _sample_functions__WEBPACK_IMPORTED_MODULE_1__["SampleFunctions"].Xpoint2,
        _sample_functions__WEBPACK_IMPORTED_MODULE_1__["SampleFunctions"].X3,
        _sample_functions__WEBPACK_IMPORTED_MODULE_1__["SampleFunctions"].HELLOX,
    ], '');
    return Map;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/max.ts":
/*!***********************************!*\
  !*** ./src/app/node-types/max.ts ***!
  \***********************************/
/*! exports provided: Max */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Max", function() { return Max; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    function Max() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {};
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.max();
        };
        _this.toString = function () {
            return '.max()';
        };
        return _this;
    }
    Max.title = 'Max';
    Max.desc = 'determine, and emit, the maximum-valued item emitted by an Observable';
    Max.minInput = 1;
    Max.maxInput = 1;
    Max.propertiesType = null;
    return Max;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/merge.ts":
/*!*************************************!*\
  !*** ./src/app/node-types/merge.ts ***!
  \*************************************/
/*! exports provided: Merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Merge", function() { return Merge; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Merge = /** @class */ (function (_super) {
    __extends(Merge, _super);
    function Merge() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {};
        _this.graphInputs = [];
        _this.runner = function (_a) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"].apply(void 0, _this.graphInputs.map(function (gi) { return gi.observable; })));
        };
        _this.toString = function (_a) {
            return "merge(of(" + _this.graphInputs.map(function (gi) { return gi.node.data.title; }).join(',') + "))";
        };
        return _this;
    }
    Merge.title = 'Merge';
    Merge.desc = 'combine multiple Observables into one by merging their emissions';
    Merge.maxInput = 300;
    Merge.minInput = 2;
    Merge.propertiesType = null;
    return Merge;
}(_rxNode__WEBPACK_IMPORTED_MODULE_1__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/min.ts":
/*!***********************************!*\
  !*** ./src/app/node-types/min.ts ***!
  \***********************************/
/*! exports provided: Min */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Min", function() { return Min; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Min = /** @class */ (function (_super) {
    __extends(Min, _super);
    function Min() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {};
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.min();
        };
        _this.toString = function () {
            return '.min()';
        };
        return _this;
    }
    Min.title = 'Min';
    Min.desc = ' determine, and emit, the minimum-valued item emitted by an Observable';
    Min.maxInput = 1;
    Min.minInput = 1;
    Min.propertiesType = null;
    return Min;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/pluck.ts":
/*!*************************************!*\
  !*** ./src/app/node-types/pluck.ts ***!
  \*************************************/
/*! exports provided: Pluck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pluck", function() { return Pluck; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Pluck = /** @class */ (function (_super) {
    __extends(Pluck, _super);
    function Pluck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            propName: 'x'
        };
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.pluck(_this.properties.propName);
        };
        _this.toString = function () {
            return '.pluck(' + _this.properties.propName + '))';
        };
        return _this;
    }
    Pluck.title = 'Pluck';
    Pluck.desc = 'It transforms the elements emitted by the source Observable by ' +
        'extracting a single named property from those elements and emitting that property in their place';
    Pluck.maxInput = 1;
    Pluck.minInput = 1;
    Pluck.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_2__["PropertyType"]('propName', _propertyType_enum__WEBPACK_IMPORTED_MODULE_1__["PropertyTypeEnum"].String);
    return Pluck;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/property-type.ts":
/*!*********************************************!*\
  !*** ./src/app/node-types/property-type.ts ***!
  \*********************************************/
/*! exports provided: PropertyType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyType", function() { return PropertyType; });
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");

var PropertyType = /** @class */ (function () {
    function PropertyType(name, type, params, description) {
        if (params === void 0) { params = null; }
        if (description === void 0) { description = ''; }
        this.name = name;
        this.type = type;
        this.params = params;
        this.description = description;
    }
    PropertyType.prototype.isNumber = function () {
        return this.type === _propertyType_enum__WEBPACK_IMPORTED_MODULE_0__["PropertyTypeEnum"].Number;
    };
    PropertyType.prototype.isString = function () {
        return this.type === _propertyType_enum__WEBPACK_IMPORTED_MODULE_0__["PropertyTypeEnum"].String;
    };
    PropertyType.prototype.isMethod = function () {
        return this.type === _propertyType_enum__WEBPACK_IMPORTED_MODULE_0__["PropertyTypeEnum"].Method;
    };
    PropertyType.prototype.isObject = function () {
        return this.type === _propertyType_enum__WEBPACK_IMPORTED_MODULE_0__["PropertyTypeEnum"].Object;
    };
    PropertyType.prototype.isList = function () {
        return this.type === _propertyType_enum__WEBPACK_IMPORTED_MODULE_0__["PropertyTypeEnum"].List;
    };
    return PropertyType;
}());



/***/ }),

/***/ "./src/app/node-types/propertyType.enum.ts":
/*!*************************************************!*\
  !*** ./src/app/node-types/propertyType.enum.ts ***!
  \*************************************************/
/*! exports provided: PropertyTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyTypeEnum", function() { return PropertyTypeEnum; });
var PropertyTypeEnum;
(function (PropertyTypeEnum) {
    PropertyTypeEnum[PropertyTypeEnum["Object"] = 0] = "Object";
    PropertyTypeEnum[PropertyTypeEnum["List"] = 1] = "List";
    PropertyTypeEnum[PropertyTypeEnum["Number"] = 2] = "Number";
    PropertyTypeEnum[PropertyTypeEnum["String"] = 3] = "String";
    PropertyTypeEnum[PropertyTypeEnum["Method"] = 4] = "Method";
})(PropertyTypeEnum || (PropertyTypeEnum = {}));


/***/ }),

/***/ "./src/app/node-types/publish.ts":
/*!***************************************!*\
  !*** ./src/app/node-types/publish.ts ***!
  \***************************************/
/*! exports provided: Publish */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Publish", function() { return Publish; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Publish = /** @class */ (function (_super) {
    __extends(Publish, _super);
    function Publish() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {};
        _this.graphInputs = [];
        _this.runner = function () {
            var thisObservable = _this.graphInputs[0].observable.map(function (x) {
                x.published = true;
                return x;
            });
            setTimeout(function () {
                _this.rxo = _this.rx.publish();
            });
            return thisObservable;
        };
        _this.toString = function () {
            return '.publish()';
        };
        return _this;
    }
    Publish.title = 'Publish';
    Publish.desc = 'convert an ordinary Observable into a connectable Observable';
    Publish.maxInput = 1;
    Publish.minInput = 1;
    Publish.propertiesType = null;
    return Publish;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/race.ts":
/*!************************************!*\
  !*** ./src/app/node-types/race.ts ***!
  \************************************/
/*! exports provided: Race */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Race", function() { return Race; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Race = /** @class */ (function (_super) {
    __extends(Race, _super);
    function Race() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {};
        _this.graphInputs = [];
        _this.runner = function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["race"])(_this.graphInputs.map(function (gi) { return gi.observable; }));
        };
        _this.toString = function (_a) {
            return "race(" + _this.graphInputs.map(function (gi) { return gi.node.data.title; }).join(',') + ")";
        };
        return _this;
    }
    Race.title = 'Race';
    Race.desc = 'given two or more source Observables, ' +
        'emit all of the items from only the first of these Observables to emit an item or notification';
    Race.maxInput = 300;
    Race.minInput = 2;
    Race.propertiesType = null;
    return Race;
}(_rxNode__WEBPACK_IMPORTED_MODULE_1__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/range.ts":
/*!*************************************!*\
  !*** ./src/app/node-types/range.ts ***!
  \*************************************/
/*! exports provided: Range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Range = /** @class */ (function (_super) {
    __extends(Range, _super);
    function Range() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            start: 0,
            count: 3
        };
        _this.graphInputs = [];
        _this.runner = function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["range"])(_this.properties.start, _this.properties.count);
        };
        _this.toString = function () {
            return 'range(${this.properties.start}, ${this.properties.count})';
        };
        return _this;
    }
    Range.title = 'Range';
    Range.desc = 'create an Observable that emits a particular range of sequential integers';
    Range.maxInput = 0;
    Range.minInput = 0;
    Range.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_2__["PropertyType"]('object', _propertyType_enum__WEBPACK_IMPORTED_MODULE_3__["PropertyTypeEnum"].Object, [
        new _property_type__WEBPACK_IMPORTED_MODULE_2__["PropertyType"]('start', _propertyType_enum__WEBPACK_IMPORTED_MODULE_3__["PropertyTypeEnum"].Number),
        new _property_type__WEBPACK_IMPORTED_MODULE_2__["PropertyType"]('count', _propertyType_enum__WEBPACK_IMPORTED_MODULE_3__["PropertyTypeEnum"].Number)
    ], '');
    return Range;
}(_rxNode__WEBPACK_IMPORTED_MODULE_1__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/refCount.ts":
/*!****************************************!*\
  !*** ./src/app/node-types/refCount.ts ***!
  \****************************************/
/*! exports provided: RefCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefCount", function() { return RefCount; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RefCount = /** @class */ (function (_super) {
    __extends(RefCount, _super);
    function RefCount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {};
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.refCount();
        };
        _this.toString = function () {
            return '.refCount()';
        };
        return _this;
    }
    RefCount.title = 'RefCount';
    RefCount.desc = 'Make a Connectable Observable behave like an ordinary Observable';
    RefCount.maxInput = 1;
    RefCount.minInput = 1;
    RefCount.propertiesType = null;
    return RefCount;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/repeat.ts":
/*!**************************************!*\
  !*** ./src/app/node-types/repeat.ts ***!
  \**************************************/
/*! exports provided: Repeat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Repeat", function() { return Repeat; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Repeat = /** @class */ (function (_super) {
    __extends(Repeat, _super);
    function Repeat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            count: 3
        };
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.repeat(_this.properties.count);
        };
        _this.toString = function () {
            return '.repeat(' + _this.properties.count + ')';
        };
        return _this;
    }
    Repeat.title = 'Repeat';
    Repeat.desc = 'create an Observable that emits a particular item multiple times';
    Repeat.maxInput = 1;
    Repeat.minInput = 1;
    Repeat.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_2__["PropertyType"]('object', _propertyType_enum__WEBPACK_IMPORTED_MODULE_1__["PropertyTypeEnum"].Object, [
        new _property_type__WEBPACK_IMPORTED_MODULE_2__["PropertyType"]('count', _propertyType_enum__WEBPACK_IMPORTED_MODULE_1__["PropertyTypeEnum"].Number)
    ], '');
    return Repeat;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/replay.ts":
/*!**************************************!*\
  !*** ./src/app/node-types/replay.ts ***!
  \**************************************/
/*! exports provided: Replay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Replay", function() { return Replay; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
/* harmony import */ var _sample_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample-functions */ "./src/app/node-types/sample-functions.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Replay = /** @class */ (function (_super) {
    __extends(Replay, _super);
    function Replay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            transFunc: 0,
            bufferSize: 2,
            window: null,
            scheduler: null
        };
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.replay(Replay.propertiesType.params[_this.properties.transFunc].func, _this.properties.bufferSize, _this.properties.window, _this.properties.scheduler);
        };
        _this.toString = function () {
            return '.replay(' + Replay.propertiesType.params[_this.properties.transFunc].text + ', ' +
                _this.properties.bufferSize + ', ' + _this.properties.window + ', ' + _this.properties.scheduler + ')';
        };
        return _this;
    }
    Replay.title = 'Replay';
    Replay.desc = 'Ensure that all observers see the same sequence of emitted items, ' +
        'even if they subscribe after the Observable has begun emitting items';
    Replay.maxInput = 1;
    Replay.minInput = 1;
    Replay.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('object', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Object, [
        new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('transFunc', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Method, [
            _sample_functions__WEBPACK_IMPORTED_MODULE_3__["SampleFunctions"].TRANS2,
            _sample_functions__WEBPACK_IMPORTED_MODULE_3__["SampleFunctions"].TRANS3,
        ], 'a transforming function that takes an item emitted by the source Observable as its parameter and ' +
            'returns an item to be emitted by the resulting Observable'),
        new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('bufferSize', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Number, null, 'the maximum number of items to buffer' +
            ' and replay to subsequent observers'),
        new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('window', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Number, null, 'the maximum number of items to buffer and ' +
            'replay to subsequent observers'),
        new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('scheduler', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Number, null, 'the Scheduler on which this operator will operate'),
    ], '');
    return Replay;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/retry.ts":
/*!*************************************!*\
  !*** ./src/app/node-types/retry.ts ***!
  \*************************************/
/*! exports provided: Retry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Retry", function() { return Retry; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Retry = /** @class */ (function (_super) {
    __extends(Retry, _super);
    function Retry() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            retryCount: 3
        };
        _this.graphInputs = [];
        _this.runner = function (_a) {
            var retryCount = _a.retryCount;
            return _this.graphInputs[0].observable.retry(retryCount);
        };
        _this.toString = function (_a) {
            return '.retry(' + _this.properties.retryCount + ');';
        };
        return _this;
    }
    Retry.title = 'Retry';
    Retry.desc = 'If a source Observable sends an onError notification, resubscribe to it in ' +
        'the hopes that it will complete without error';
    Retry.maxInput = 1;
    Retry.minInput = 1;
    Retry.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_2__["PropertyType"]('retryCount', _propertyType_enum__WEBPACK_IMPORTED_MODULE_1__["PropertyTypeEnum"].Number);
    return Retry;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/rxNode.ts":
/*!**************************************!*\
  !*** ./src/app/node-types/rxNode.ts ***!
  \**************************************/
/*! exports provided: RxNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxNode", function() { return RxNode; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

var RxNode = /** @class */ (function () {
    function RxNode() {
    }
    Object.defineProperty(RxNode.prototype, "title", {
        get: function () {
            return this.constructor.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RxNode.prototype, "maxInput", {
        get: function () {
            return this.constructor.maxInput;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RxNode.prototype, "minInput", {
        get: function () {
            return this.constructor.minInput;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RxNode.prototype, "link", {
        get: function () { return this.constructor.link; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RxNode.prototype, "desc", {
        get: function () { return this.constructor.desc; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RxNode.prototype, "propertiesType", {
        get: function () {
            return this.constructor.propertiesType;
        },
        enumerable: true,
        configurable: true
    });
    RxNode.prototype.run = function (node, level, subscribeItem) {
        this.rx = this.runner().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (x) {
            if (!x.id) {
                x = { x: x, id: RxNode.cntr++ };
            }
            subscribeItem(node, JSON.parse(JSON.stringify(x)));
            return x;
        }));
        this.level = level;
    };
    RxNode.prototype.dispose = function () {
        if (this.rxo) {
            if (this.rxo.unsubscribe) {
                this.rxo.unsubscribe();
            }
            this.rxo = undefined;
        }
        if (this.rx) {
            this.rx = undefined;
        }
    };
    RxNode.prototype.areInputsReady = function (nodeInputs) {
        return nodeInputs.length <= this.maxInput &&
            nodeInputs.length >= this.minInput &&
            nodeInputs.every(function (n) { return n.data.rx; });
    };
    RxNode.cntr = 1;
    return RxNode;
}());



/***/ }),

/***/ "./src/app/node-types/sample-functions.ts":
/*!************************************************!*\
  !*** ./src/app/node-types/sample-functions.ts ***!
  \************************************************/
/*! exports provided: SampleFunctions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleFunctions", function() { return SampleFunctions; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


var SampleFunction = /** @class */ (function () {
    function SampleFunction(name, func, text, description) {
        if (description === void 0) { description = ''; }
        this.desc = description;
        this.func = func;
        this.text = text;
        this.name = name;
    }
    return SampleFunction;
}());
var SampleFunctions = /** @class */ (function () {
    function SampleFunctions() {
    }
    SampleFunctions.GT6 = new SampleFunction('Greater than 6', function (x) { return x.x > 6; }, 'x => x>6');
    SampleFunctions.ST6 = new SampleFunction('Smaller than 6', function (x) { return x.x < 6; }, 'x => x<6');
    SampleFunctions.ALL = new SampleFunction('all', function () { return true; }, '() => true');
    SampleFunctions.X2 = new SampleFunction('x2', function (x) { x.x = x.x * x.x; return x; }, '(x) => x * x');
    SampleFunctions.Xpoint2 = new SampleFunction('2x', function (x) { x.x = 2 * x.x; return x; }, '(x) => 2 * x');
    SampleFunctions.X3 = new SampleFunction('x3', function (x) { x.x = x.x * x.x * x.x; return x; }, '(x) => x * x * x');
    SampleFunctions.HELLOX = new SampleFunction('helloX', function (x) { x.x = x.x + 'hello'; return x; }, '(x) => x + "hello"');
    SampleFunctions.EVEN = new SampleFunction('even', function (x) { return x.x % 2 === 0; }, '(x) => x % 2 === 0');
    SampleFunctions.ODD = new SampleFunction('odd', function (x) { return x.x % 2 === 1; }, '(x) => x % 2 === 1');
    SampleFunctions.RANGE2 = new SampleFunction('range2', function (x) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["range"])(x.x, 2); }, '(x) => range(x, 2)');
    SampleFunctions.RANGE3 = new SampleFunction('range3', function (x) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["range"])(x.x, 3); }, '(x) => range(x, 3)');
    SampleFunctions.RANGE5 = new SampleFunction('range5', function (x) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["range"])(x.x, 5); }, '(x) => range(x, 5)');
    SampleFunctions.GET_X = new SampleFunction('getX', function (x) { return x.x; }, '(x) => x.x');
    SampleFunctions.GET_CODE = new SampleFunction('getCode', function (x) { return x.code; }, '(x) => x.code');
    SampleFunctions.TIMEOUT0 = new SampleFunction('timeout0', function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(0); }, '() => timer(0)');
    SampleFunctions.TIMEOUT = new SampleFunction('timeout', function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(2000); }, '() => timer(2000)');
    SampleFunctions.NOTHING = new SampleFunction('nothing', function (x) { return x.x; }, '(x) => x');
    SampleFunctions.XplusY = new SampleFunction('x+y', function (x, y) { return x.x + y.x; }, '(x,y) => x + y');
    SampleFunctions.TRANS2 = new SampleFunction('transform1', function (x) { return x.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(2)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["repeat"])(2)); }, '(x) => x.pipe(take(2)).pipe(repeat(2)');
    SampleFunctions.TRANS3 = new SampleFunction('transform1', function (x) { return x.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(2)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["repeat"])(3)); }, '(x) => x.take(2).repeat(3)');
    SampleFunctions.SCAN_SUM = new SampleFunction('scanSum', function (acc, x) { return acc + x.x; }, '(acc,x) => acc + x');
    SampleFunctions.SCAN_TIME = new SampleFunction('scanTime', function (acc, x) { return acc * x.x; }, '(acc,x) => acc * x');
    SampleFunctions.ZIP1 = new SampleFunction('scanTime', function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args.map(function (x) { return x.x; }).join(',');
    }, '(...args) => args.join(",")');
    return SampleFunctions;
}());



/***/ }),

/***/ "./src/app/node-types/sample.ts":
/*!**************************************!*\
  !*** ./src/app/node-types/sample.ts ***!
  \**************************************/
/*! exports provided: Sample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sample", function() { return Sample; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Sample = /** @class */ (function (_super) {
    __extends(Sample, _super);
    function Sample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            periodicTimeIntervals: 1000
        };
        _this.graphInputs = [];
        _this.runner = function (_a) {
            return _this.graphInputs[0].observable.sample(_this.properties.periodicTimeIntervals);
        };
        _this.toString = function (_a) {
            return '.sample(' + _this.properties.periodicTimeIntervals + '))';
        };
        return _this;
    }
    Sample.title = 'Sample';
    Sample.desc = 'emit the most recent items emitted by an Observable within periodic time intervals';
    Sample.maxInput = 1;
    Sample.minInput = 1;
    Sample.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('periodicTimeIntervals', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Number);
    return Sample;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/scan.ts":
/*!************************************!*\
  !*** ./src/app/node-types/scan.ts ***!
  \************************************/
/*! exports provided: Scan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scan", function() { return Scan; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
/* harmony import */ var _sample_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample-functions */ "./src/app/node-types/sample-functions.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Scan = /** @class */ (function (_super) {
    __extends(Scan, _super);
    function Scan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            scanFunc: 0,
        };
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.scan(Scan.propertiesType.params[_this.properties.scanFunc].func);
        };
        _this.toString = function () {
            return '.scan(' + Scan.propertiesType.params[_this.properties.scanFunc].text + ')';
        };
        return _this;
    }
    Scan.title = 'Scan';
    Scan.desc = 'Apply a function to each item emitted by an Observable, sequentially, and emit each successive value';
    Scan.maxInput = 1;
    Scan.minInput = 1;
    Scan.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('scanFunc', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Method, [
        _sample_functions__WEBPACK_IMPORTED_MODULE_3__["SampleFunctions"].SCAN_SUM,
        _sample_functions__WEBPACK_IMPORTED_MODULE_3__["SampleFunctions"].SCAN_TIME,
    ], '');
    return Scan;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/sequenceEqual.ts":
/*!*********************************************!*\
  !*** ./src/app/node-types/sequenceEqual.ts ***!
  \*********************************************/
/*! exports provided: SequenceEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SequenceEqual", function() { return SequenceEqual; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SequenceEqual = /** @class */ (function (_super) {
    __extends(SequenceEqual, _super);
    function SequenceEqual() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {};
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.sequenceEqual(_this.graphInputs[1].observable /* the second observable connected to this block */);
        };
        _this.toString = function (_a) {
            return '.join(' + _this.graphInputs[1].toString() + ')';
        };
        return _this;
    }
    SequenceEqual.title = 'SequenceEqual';
    SequenceEqual.desc = 'Determine whether two Observables emit the same sequence of items';
    SequenceEqual.maxInput = 2;
    SequenceEqual.minInput = 2;
    SequenceEqual.propertiesType = null;
    return SequenceEqual;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/skip.ts":
/*!************************************!*\
  !*** ./src/app/node-types/skip.ts ***!
  \************************************/
/*! exports provided: Skip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skip", function() { return Skip; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Skip = /** @class */ (function (_super) {
    __extends(Skip, _super);
    function Skip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            itemCount: 2
        };
        _this.graphInputs = [];
        _this.runner = function (_a) {
            return _this.graphInputs[0].observable.skip(_this.properties.itemCount);
        };
        _this.toString = function (_a) {
            return '.skip(' + _this.properties.itemCount + '))';
        };
        return _this;
    }
    Skip.title = 'Skip';
    Skip.desc = 'suppress the first n items emitted by an Observable';
    Skip.maxInput = 1;
    Skip.minInput = 1;
    Skip.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('itemCount', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Number);
    return Skip;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/skipLast.ts":
/*!****************************************!*\
  !*** ./src/app/node-types/skipLast.ts ***!
  \****************************************/
/*! exports provided: SkipLast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipLast", function() { return SkipLast; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SkipLast = /** @class */ (function (_super) {
    __extends(SkipLast, _super);
    function SkipLast() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            itemCount: 2
        };
        _this.graphInputs = [];
        _this.runner = function (_a) {
            return _this.graphInputs[0].observable.skipLast(_this.properties.itemCount);
        };
        _this.toString = function (_a) {
            return '.skipLast(' + _this.properties.itemCount + '))';
        };
        return _this;
    }
    SkipLast.title = 'SkipLast';
    SkipLast.desc = 'Suppress the final n items emitted by an Observable';
    SkipLast.maxInput = 1;
    SkipLast.minInput = 1;
    SkipLast.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_2__["PropertyType"]('itemCount', _propertyType_enum__WEBPACK_IMPORTED_MODULE_1__["PropertyTypeEnum"].Number);
    return SkipLast;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/skipUntil.ts":
/*!*****************************************!*\
  !*** ./src/app/node-types/skipUntil.ts ***!
  \*****************************************/
/*! exports provided: SkipUntil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipUntil", function() { return SkipUntil; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SkipUntil = /** @class */ (function (_super) {
    __extends(SkipUntil, _super);
    function SkipUntil() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {};
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.skipUntil(_this.graphInputs[1].observable /* the second observable connected to this block */);
        };
        _this.toString = function (_a) {
            return '.skipUntil(' + _this.graphInputs[1].node.data.toString() + ')';
        };
        return _this;
    }
    SkipUntil.title = 'SkipUntil';
    SkipUntil.desc = 'Discard items emitted by an Observable until a second Observable emits an item';
    SkipUntil.maxInput = 2;
    SkipUntil.minInput = 2;
    SkipUntil.propertiesType = null;
    return SkipUntil;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/skipWhile.ts":
/*!*****************************************!*\
  !*** ./src/app/node-types/skipWhile.ts ***!
  \*****************************************/
/*! exports provided: SkipWhile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipWhile", function() { return SkipWhile; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
/* harmony import */ var _sample_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample-functions */ "./src/app/node-types/sample-functions.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var SkipWhile = /** @class */ (function (_super) {
    __extends(SkipWhile, _super);
    function SkipWhile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            whileFilter: 0,
        };
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.skipWhile(SkipWhile.propertiesType.params[_this.properties.whileFilter].func);
        };
        _this.toString = function () {
            return '.skipWhile(' + SkipWhile.propertiesType.params[_this.properties.whileFilter].text + ')';
        };
        return _this;
    }
    SkipWhile.title = 'SkipWhile';
    SkipWhile.desc = 'discard items emitted by an Observable until a specified condition becomes false';
    SkipWhile.maxInput = 1;
    SkipWhile.minInput = 1;
    SkipWhile.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_2__["PropertyType"]('whileFilter', _propertyType_enum__WEBPACK_IMPORTED_MODULE_1__["PropertyTypeEnum"].Method, [
        _sample_functions__WEBPACK_IMPORTED_MODULE_3__["SampleFunctions"].ST6,
        _sample_functions__WEBPACK_IMPORTED_MODULE_3__["SampleFunctions"].ALL,
        _sample_functions__WEBPACK_IMPORTED_MODULE_3__["SampleFunctions"].GT6,
    ], '');
    return SkipWhile;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/startWith.ts":
/*!*****************************************!*\
  !*** ./src/app/node-types/startWith.ts ***!
  \*****************************************/
/*! exports provided: StartWith */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartWith", function() { return StartWith; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var StartWith = /** @class */ (function (_super) {
    __extends(StartWith, _super);
    function StartWith() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            startWith: '2',
        };
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.startwith(_this.properties.startWith);
        };
        _this.toString = function () {
            return '.startwith(' + _this.properties.startWith + ')';
        };
        return _this;
    }
    StartWith.title = 'StartWith';
    StartWith.desc = 'emit a specified sequence of items before beginning to emit the items from the source Observable';
    StartWith.maxInput = 1;
    StartWith.minInput = 1;
    StartWith.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_2__["PropertyType"]('startWith', _propertyType_enum__WEBPACK_IMPORTED_MODULE_1__["PropertyTypeEnum"].String);
    return StartWith;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/subscribe.ts":
/*!*****************************************!*\
  !*** ./src/app/node-types/subscribe.ts ***!
  \*****************************************/
/*! exports provided: Subscribe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscribe", function() { return Subscribe; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Subscribe = /** @class */ (function (_super) {
    __extends(Subscribe, _super);
    function Subscribe() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {};
        _this.graphInputs = [];
        _this.runner = function () {
            // const thisObservable = this.graphInputs[0];
            var thisObservable = _this.graphInputs[0].observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
                x.subscribed = true;
                return x;
            }));
            setTimeout(function () {
                _this.rxo = _this.rx.subscribe(function (x) {
                    console.log('Next: %s', x);
                }, /* on next*/ function (err) {
                    console.log('Error: %s', err);
                }, /* on error*/ function () {
                    console.log('Completed');
                    /* on complete*/
                });
            });
            return thisObservable;
        };
        _this.toString = function () {
            return ".subscribe(\n      function (x) { console.log('Next: %s', x); },/* on next*/\n      function (err) { console.log('Error: %s', err); }, /* on error*/\n      function () { console.log('Completed');/* on complete*/\n      });";
        };
        return _this;
    }
    Subscribe.title = 'Subscribe';
    Subscribe.desc = 'operate upon the emissions and notifications from an Observable';
    Subscribe.maxInput = 1;
    Subscribe.minInput = 1;
    Subscribe.propertiesType = null;
    return Subscribe;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/sum.ts":
/*!***********************************!*\
  !*** ./src/app/node-types/sum.ts ***!
  \***********************************/
/*! exports provided: Sum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sum", function() { return Sum; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Sum = /** @class */ (function (_super) {
    __extends(Sum, _super);
    function Sum() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {};
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.sum();
        };
        _this.toString = function () {
            return '.sum()';
        };
        return _this;
    }
    Sum.title = 'Sum';
    Sum.desc = 'calculates the sum of numbers emitted by an Observable and emits this sum';
    Sum.maxInput = 1;
    Sum.minInput = 1;
    Sum.propertiesType = null;
    return Sum;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/switch.ts":
/*!**************************************!*\
  !*** ./src/app/node-types/switch.ts ***!
  \**************************************/
/*! exports provided: Switch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {};
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.switch();
        };
        _this.toString = function () {
            return '.switch()';
        };
        return _this;
    }
    Switch.title = 'Switch';
    Switch.desc = 'convert an Observable that emits Observables into a single Observable that emits the items' +
        ' emitted by the most-recently-emitted of those Observables';
    Switch.maxInput = 1;
    Switch.minInput = 1;
    Switch.propertiesType = null;
    return Switch;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/take.ts":
/*!************************************!*\
  !*** ./src/app/node-types/take.ts ***!
  \************************************/
/*! exports provided: Take */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Take", function() { return Take; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Take = /** @class */ (function (_super) {
    __extends(Take, _super);
    function Take() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            itemCount: 2
        };
        _this.graphInputs = [];
        _this.runner = function (_a) {
            return _this.graphInputs[0].observable.take(_this.properties.itemCount);
        };
        _this.toString = function (_a) {
            return '.take(' + _this.properties.itemCount + '))';
        };
        return _this;
    }
    Take.title = 'Take';
    Take.desc = 'emit only the first n items emitted by an Observable';
    Take.maxInput = 1;
    Take.minInput = 1;
    Take.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('itemCount', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Number);
    return Take;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/takeLast.ts":
/*!****************************************!*\
  !*** ./src/app/node-types/takeLast.ts ***!
  \****************************************/
/*! exports provided: TakeLast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeLast", function() { return TakeLast; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var TakeLast = /** @class */ (function (_super) {
    __extends(TakeLast, _super);
    function TakeLast() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            itemCount: 2
        };
        _this.graphInputs = [];
        _this.runner = function (_a) {
            return _this.graphInputs[0].observable.takeLast(_this.properties.itemCount);
        };
        _this.toString = function (_a) {
            return '.takeLast(' + _this.properties.itemCount + '))';
        };
        return _this;
    }
    TakeLast.title = 'TakeLast';
    TakeLast.desc = 'emit only the final n items emitted by an Observable';
    TakeLast.maxInput = 1;
    TakeLast.minInput = 1;
    TakeLast.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('itemCount', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Number);
    return TakeLast;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/takeUntil.ts":
/*!*****************************************!*\
  !*** ./src/app/node-types/takeUntil.ts ***!
  \*****************************************/
/*! exports provided: TakeUntil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeUntil", function() { return TakeUntil; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TakeUntil = /** @class */ (function (_super) {
    __extends(TakeUntil, _super);
    function TakeUntil() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            fi: 0,
        };
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.takeUntil(_this.graphInputs[1].observable /* the second observable connected to this block */);
        };
        _this.toString = function () {
            return '.takeUntil(' + TakeUntil.propertiesType.params[_this.properties.fi].text + ')';
        };
        return _this;
    }
    TakeUntil.title = 'TakeUntil';
    TakeUntil.desc = 'discard any items emitted by an Observable after a second Observable emits an item or terminates';
    TakeUntil.maxInput = 2;
    TakeUntil.minInput = 2;
    TakeUntil.propertiesType = null;
    return TakeUntil;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/takeWhile.ts":
/*!*****************************************!*\
  !*** ./src/app/node-types/takeWhile.ts ***!
  \*****************************************/
/*! exports provided: TakeWhile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeWhile", function() { return TakeWhile; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
/* harmony import */ var _sample_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample-functions */ "./src/app/node-types/sample-functions.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var TakeWhile = /** @class */ (function (_super) {
    __extends(TakeWhile, _super);
    function TakeWhile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            whileFilter: 0,
        };
        _this.graphInputs = [];
        _this.runner = function (_a) {
            return _this.graphInputs[0].observable.takeWhile(TakeWhile.propertiesType.params[_this.properties.whileFilter].func);
        };
        _this.toString = function (_a) {
            return '.takeWhile(' + TakeWhile.propertiesType.params[_this.properties.whileFilter].text + ')';
        };
        return _this;
    }
    TakeWhile.title = 'TakeWhile';
    TakeWhile.desc = 'discard items emitted by an Observable after a specified condition becomes false';
    TakeWhile.maxInput = 1;
    TakeWhile.minInput = 1;
    TakeWhile.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('whileFilter', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Method, [
        _sample_functions__WEBPACK_IMPORTED_MODULE_3__["SampleFunctions"].ST6,
        _sample_functions__WEBPACK_IMPORTED_MODULE_3__["SampleFunctions"].ALL,
        _sample_functions__WEBPACK_IMPORTED_MODULE_3__["SampleFunctions"].GT6,
    ], '');
    return TakeWhile;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/timeout.ts":
/*!***************************************!*\
  !*** ./src/app/node-types/timeout.ts ***!
  \***************************************/
/*! exports provided: Timeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timeout", function() { return Timeout; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Timeout = /** @class */ (function (_super) {
    __extends(Timeout, _super);
    function Timeout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            timeoutResult: 'Timeout has occurred.',
            time: 1000,
        };
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.timeout(_this.properties.time, _this.properties.timeoutResult);
        };
        _this.toString = function () {
            return '.timeout(' + _this.properties.time + ', ' + _this.properties.timeoutResult + ')';
        };
        return _this;
    }
    Timeout.title = 'Timeout';
    Timeout.desc = 'mirror the source Observable, but issue an error notification if a particular' +
        ' period of time elapses without any emitted items';
    Timeout.maxInput = 2;
    Timeout.minInput = 2;
    Timeout.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('object', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Object, [
        new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('time', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Number),
        new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('timeoutResult', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].String)
    ], '');
    return Timeout;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/timer.ts":
/*!*************************************!*\
  !*** ./src/app/node-types/timer.ts ***!
  \*************************************/
/*! exports provided: Timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Timer = /** @class */ (function (_super) {
    __extends(Timer, _super);
    function Timer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            delay: 200 /* ms */,
            interval: 500 /* ms */,
        };
        _this.graphInputs = [];
        _this.runner = function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(_this.properties.delay, _this.properties.interval);
        };
        _this.toString = function () {
            return "timer(" + _this.properties.delay + ", " + _this.properties.interval + ")";
        };
        return _this;
    }
    Timer.title = 'Timer';
    Timer.desc = 'create an Observable that emits a particular item after a given delay';
    Timer.maxInput = 0;
    Timer.minInput = 0;
    Timer.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_3__["PropertyType"]('object', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Object, [
        new _property_type__WEBPACK_IMPORTED_MODULE_3__["PropertyType"]('delay', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Number),
        new _property_type__WEBPACK_IMPORTED_MODULE_3__["PropertyType"]('interval', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Number)
    ], '');
    return Timer;
}(_rxNode__WEBPACK_IMPORTED_MODULE_1__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/windowWithCount.ts":
/*!***********************************************!*\
  !*** ./src/app/node-types/windowWithCount.ts ***!
  \***********************************************/
/*! exports provided: WindowWithCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowWithCount", function() { return WindowWithCount; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var WindowWithCount = /** @class */ (function (_super) {
    __extends(WindowWithCount, _super);
    function WindowWithCount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            count: 3,
            skip: 2
        };
        _this.graphInputs = [];
        _this.runner = function (_a) {
            var count = _a.count, skip = _a.skip;
            return _this.graphInputs[0].observable.windowWithCount(count, skip);
        };
        _this.toString = function () {
            var _a = _this.properties, count = _a.count, skip = _a.skip;
            return '.windowWithCount(' + count + ', ' + skip + ')';
        };
        return _this;
    }
    WindowWithCount.title = 'WindowWithCount';
    WindowWithCount.desc = 'periodically subdivide items from an Observable into Observable windows and emit these' +
        ' windows rather than emitting the items one at a time';
    WindowWithCount.maxInput = 1;
    WindowWithCount.minInput = 1;
    WindowWithCount.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('object', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Object, [
        new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('count', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Number),
        new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('skip', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Number)
    ], '');
    return WindowWithCount;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/windowed.ts":
/*!****************************************!*\
  !*** ./src/app/node-types/windowed.ts ***!
  \****************************************/
/*! exports provided: Windowed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Windowed", function() { return Windowed; });
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Windowed = /** @class */ (function (_super) {
    __extends(Windowed, _super);
    function Windowed() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            time: 50
        };
        _this.graphInputs = [];
        _this.runner = function () {
            return _this.graphInputs[0].observable.windowed(_this.properties.time);
        };
        _this.toString = function () {
            return '.debounce(' + _this.properties.time + ')';
        };
        return _this;
    }
    Windowed.title = 'Windowed';
    Windowed.desc = 'allows the ControlledObservable to run somewhat ahead of the observer from time to time';
    Windowed.maxInput = 1;
    Windowed.minInput = 1;
    Windowed.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"]('debounceTime', _propertyType_enum__WEBPACK_IMPORTED_MODULE_2__["PropertyTypeEnum"].Number);
    return Windowed;
}(_rxNode__WEBPACK_IMPORTED_MODULE_0__["RxNode"]));



/***/ }),

/***/ "./src/app/node-types/zip.ts":
/*!***********************************!*\
  !*** ./src/app/node-types/zip.ts ***!
  \***********************************/
/*! exports provided: Zip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zip", function() { return Zip; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _rxNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rxNode */ "./src/app/node-types/rxNode.ts");
/* harmony import */ var _property_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property-type */ "./src/app/node-types/property-type.ts");
/* harmony import */ var _propertyType_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./propertyType.enum */ "./src/app/node-types/propertyType.enum.ts");
/* harmony import */ var _sample_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sample-functions */ "./src/app/node-types/sample-functions.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var Zip = /** @class */ (function (_super) {
    __extends(Zip, _super);
    function Zip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            zipFunction: 0
        };
        _this.graphInputs = [];
        _this.runner = function (_a) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["zip"])(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"].apply(void 0, _this.graphInputs.map(function (gi) { return gi.observable; }).concat([Zip.propertiesType.params[_this.properties.zipFunction].func])));
        };
        _this.toString = function (_a) {
            return "zip(of(' +\n      " + _this.graphInputs.map(function (gi) { return gi.node.data.title; }).join(',') + ", " + Zip.propertiesType.params[_this.properties.zipFunction].text + "))";
        };
        return _this;
    }
    Zip.title = 'Zip';
    Zip.desc = 'combine the emissions of multiple Observables together via a specified function and emit ' +
        'single items for each combination based on the results of this function';
    Zip.maxInput = 300;
    Zip.minInput = 2;
    Zip.propertiesType = new _property_type__WEBPACK_IMPORTED_MODULE_2__["PropertyType"]('zipFunction', _propertyType_enum__WEBPACK_IMPORTED_MODULE_3__["PropertyTypeEnum"].Method, [
        _sample_functions__WEBPACK_IMPORTED_MODULE_4__["SampleFunctions"].ZIP1,
    ], '');
    return Zip;
}(_rxNode__WEBPACK_IMPORTED_MODULE_1__["RxNode"]));



/***/ }),

/***/ "./src/app/property-inspector/property-component/property-component.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/property-inspector/property-component/property-component.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--number type-->\n<div *ngIf=\"propertyType.isNumber()\" class=\"simpleInput\">\n  <b>{{propertyType.name}}</b>\n  <input [placeholder]=\"propertyType.name\" [title]=\"propertyType.description\" [(ngModel)]=\"properties[propertyType.name]\" (change)=\"dataChanged()\" type=\"number\">\n</div>\n\n<!--string type-->\n<div *ngIf=\"propertyType.isString()\" class=\"simpleInput\">\n  <b>{{propertyType.name}}</b>\n  <input [placeholder]=\"propertyType.name\" [title]=\"propertyType.description\" [(ngModel)]=\"properties[propertyType.name]\" (change)=\"dataChanged()\">\n</div>\n\n<!--function type-->\n<div *ngIf=\"propertyType.isMethod()\" class=\"methodInput\">\n  <b>{{propertyType.name}}</b>\n  <select (change)=\"dataChanged()\" [(ngModel)]=\"properties[propertyType.name]\">\n    <option *ngFor=\"let opt of propertyType.params ; let optionIndex = index\" [value]=\"optionIndex\" [title]=\"opt.desc\">{{opt.name}}</option>\n  </select>\n</div>\n\n<!--list type-->\n<div *ngIf=\"propertyType.isList()\" class=\"listInput\">\n  <b>{{propertyType.name}}</b>\n  <a class=\"addButton\" (click)=\"properties[propertyType.name].push({})\">add</a>\n  <ul class=\"list\">\n    <li class=\"listRow\" *ngFor=\"let prop of properties[propertyType.name]\">\n      <rxstudio-property-component [type]=\"propertyType.params\" [properties]=\"prop\"></rxstudio-property-component>\n    </li>\n  </ul>\n</div>\n\n<!--Object type-->\n<div *ngIf=\"propertyType.isObject()\" class=\"objectInput\">\n  <b>{{propertyType.name}}</b>\n  <ul class=\"obj\">\n    <li class=\"objProp\" *ngFor=\"let objPropType of propertyType.params\">\n      <rxstudio-property-component [type]=\"objPropType\" [properties]=\"properties\"></rxstudio-property-component>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/property-inspector/property-component/property-component.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/property-inspector/property-component/property-component.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".simpleInput {\n  text-align: center; }\n  .simpleInput b {\n    color: #6f6f6f;\n    font-weight: 100;\n    font-size: 12px; }\n  .simpleInput input {\n    min-width: 40px;\n    max-width: 100px;\n    padding: 7px;\n    border: 1px solid #ddd;\n    margin: 2px;\n    text-align: center;\n    color: #0af; }\n  .methodInput select {\n  border: 0;\n  outline: 0;\n  color: #0af;\n  border-bottom: 1px solid #0af; }\n  .listInput .addButton {\n  padding: 5px;\n  cursor: pointer;\n  color: #335; }\n  .listInput ul.list {\n  list-style: none;\n  margin: 0 0px 10px;\n  padding: 4px 3px 10px; }\n  .objectInput ul.obj {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  /* clear: both; */\n  /* overflow: hidden; */\n  display: flex;\n  flex-direction: row;\n  align-content: space-between; }\n  .objectInput ul.obj li.objProp {\n    flex: 1 1 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maW5nZXJwaWNoL0RvY3VtZW50cy9wcm9qZWN0cy9yeC1mbG93L3NyYy9hcHAvcHJvcGVydHktaW5zcGVjdG9yL3Byb3BlcnR5LWNvbXBvbmVudC9wcm9wZXJ0eS1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZmluZ2VycGljaC9Eb2N1bWVudHMvcHJvamVjdHMvcngtZmxvdy9zcmMvY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxtQkFBa0IsRUFlbkI7RUFoQkQ7SUFHSSxlQUFjO0lBQ2QsaUJBQWdCO0lBQ2hCLGdCQUFlLEVBQ2hCO0VBTkg7SUFRSSxnQkFBZTtJQUNmLGlCQUFnQjtJQUNoQixhQUFZO0lBQ1osdUJBQXNCO0lBQ3RCLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsWUFBVSxFQUNYO0VBRUg7RUFFSSxVQUFRO0VBQ1IsV0FBUztFQUNULFlBQVU7RUFDViw4QkFBNkIsRUFDOUI7RUFFSDtFQUVJLGFBQVc7RUFDWCxnQkFBYztFQUNkLFlDOUJjLEVEK0JmO0VBTEg7RUFPSSxpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLHNCQUFxQixFQUd0QjtFQUVIO0VBRUksaUJBQWdCO0VBQ2hCLFVBQVM7RUFDVCxXQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLDZCQUE0QixFQUk3QjtFQWJIO0lBV00sZUFBYyxFQUNmIiwiZmlsZSI6InNyYy9hcHAvcHJvcGVydHktaW5zcGVjdG9yL3Byb3BlcnR5LWNvbXBvbmVudC9wcm9wZXJ0eS1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9jb21tb24nO1xuLnNpbXBsZUlucHV0e1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJ7XG4gICAgY29sb3I6ICM2ZjZmNmY7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgaW5wdXR7XG4gICAgbWluLXdpZHRoOiA0MHB4O1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgbWFyZ2luOiAycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiMwYWY7XG4gIH1cbn1cbi5tZXRob2RJbnB1dHtcbiAgc2VsZWN0e1xuICAgIGJvcmRlcjowO1xuICAgIG91dGxpbmU6MDtcbiAgICBjb2xvcjojMGFmO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMGFmO1xuICB9XG59XG4ubGlzdElucHV0e1xuICAuYWRkQnV0dG9ue1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIGN1cnNvcjpwb2ludGVyO1xuICAgIGNvbG9yOiAkcHJpbWFyeUNvbG9yO1xuICB9XG4gIHVsLmxpc3R7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDAgMHB4IDEwcHg7XG4gICAgcGFkZGluZzogNHB4IDNweCAxMHB4O1xuICAgIGxpLmxpc3RSb3d7XG4gICAgfVxuICB9XG59XG4ub2JqZWN0SW5wdXR7XG4gIHVsLm9iantcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIC8qIGNsZWFyOiBib3RoOyAqL1xuICAgIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbGkub2JqUHJvcHtcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIH1cbiAgfVxufVxuIiwiJHByaW1hcnlDb2xvcjojMzM1O1xuJHNlY29uZGFyeUNvbG9yOiMwN2Y7XG4kaGVhZENvbG9yOiMzMzU7XG4kcnhDb2xvcjojZWMwYzhlO1xuJGJvcmRlckNvbG9yOiNlZWU7XG4kYmFja0NvbG9yOiNmZmY7XG4iXX0= */"

/***/ }),

/***/ "./src/app/property-inspector/property-component/property-component.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/property-inspector/property-component/property-component.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PropertyComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyComponentComponent", function() { return PropertyComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_types_property_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node-types/property-type */ "./src/app/node-types/property-type.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PropertyComponentComponent = /** @class */ (function () {
    function PropertyComponentComponent(appService) {
        this.appService = appService;
    }
    PropertyComponentComponent.prototype.ngOnInit = function () {
    };
    PropertyComponentComponent.prototype.dataChanged = function () {
        this.appService.refreshRxObjects();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PropertyComponentComponent.prototype, "properties", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('type'),
        __metadata("design:type", _node_types_property_type__WEBPACK_IMPORTED_MODULE_1__["PropertyType"])
    ], PropertyComponentComponent.prototype, "propertyType", void 0);
    PropertyComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rxstudio-property-component',
            template: __webpack_require__(/*! ./property-component.component.html */ "./src/app/property-inspector/property-component/property-component.component.html"),
            styles: [__webpack_require__(/*! ./property-component.component.scss */ "./src/app/property-inspector/property-component/property-component.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], PropertyComponentComponent);
    return PropertyComponentComponent;
}());



/***/ }),

/***/ "./src/app/property-inspector/property-inspector.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/property-inspector/property-inspector.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"selectedItem; else notSelected\">\n\n  <!--Node Properties-->\n  <div *ngIf=\"selectedItem.data\">\n    <div class=\"operatorInfo\">\n      <button (click)=\"removeSelectedItem()\" title=\"remove selected item\" class=\"remove\"><i class=\"material-icons\">delete</i></button>\n      <a [href]=\"getLink()\" target=\"_blank\"><strong>{{selectedItem.data.title}}</strong></a>\n      <p>{{selectedItem.data.desc}}</p>\n    </div>\n    <div class=\"properiesEditor\" *ngIf=\"selectedItem.data.propertiesType\">\n        <rxstudio-property-component [properties]=\"selectedItem.data.properties\" [type]=\"selectedItem.data.propertiesType\"></rxstudio-property-component>\n    </div>\n    <div class=\"codeGenerated\">\n        <code>{{selectedItem.data.toString()}}</code>\n    </div>\n  </div>\n\n\n  <!--EDGE Properties-->\n  <div *ngIf=\"selectedItem.source\">\n    <button (click)=\"removeSelectedItem()\" title=\"remove selected item\" class=\"remove\"><i class=\"material-icons\">delete</i></button>\n    <div class=\"navigate\">\n      <span>{{selectedItem.source.data.constructor.name}}</span>\n      <i class=\"material-icons\">arrow_forward</i>\n      <span>{{selectedItem.target.data.constructor.name}}</span>\n    </div>\n    <div class=\"codeGenerated\">\n      <code>{{selectedItem.source.data.toString()+selectedItem.target.data.toString()}}</code>\n    </div>\n  </div>\n</div>\n\n<ng-template #notSelected>\n  <div class=\"notSelected\">\n    Select a node to see its property.\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/property-inspector/property-inspector.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/property-inspector/property-inspector.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  border-top: 1px solid #f1f1f1;\n  padding: 1.6rem; }\n  :host .notSelected {\n    color: #666;\n    margin: 0;\n    text-align: center; }\n  :host button.remove {\n    border: none;\n    background: none;\n    border-radius: 50%;\n    padding: 3px 6px;\n    float: right;\n    color: #335;\n    outline: none; }\n  :host p {\n    font-size: 13px;\n    color: #444;\n    margin: 0 0 1rem;\n    max-width: 300px; }\n  :host a {\n    text-decoration: underline;\n    color: black;\n    cursor: pointer; }\n  :host .codeGenerated {\n    padding: 10px;\n    color: #555;\n    font-weight: bold;\n    font-size: 0.9rem;\n    overflow: auto; }\n  :host .navigate {\n    display: inline-flex;\n    vertical-align: middle; }\n  :host .navigate * {\n      line-height: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maW5nZXJwaWNoL0RvY3VtZW50cy9wcm9qZWN0cy9yeC1mbG93L3NyYy9hcHAvcHJvcGVydHktaW5zcGVjdG9yL3Byb3BlcnR5LWluc3BlY3Rvci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9maW5nZXJwaWNoL0RvY3VtZW50cy9wcm9qZWN0cy9yeC1mbG93L3NyYy9jb21tb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVFLDhCQUE2QjtFQUM3QixnQkFBZSxFQTJDaEI7RUE5Q0Q7SUFNSSxZQUFVO0lBQ1YsVUFBUTtJQUNSLG1CQUFpQixFQUNsQjtFQVRIO0lBWUksYUFBWTtJQUNaLGlCQUFnQjtJQUNoQixtQkFBa0I7SUFDbEIsaUJBQWdCO0lBQ2hCLGFBQVk7SUFDWixZQ2xCYztJRG1CZCxjQUFhLEVBQ2Q7RUFuQkg7SUFzQkksZ0JBQWU7SUFDZixZQUFXO0lBQ1gsaUJBQWdCO0lBQ2hCLGlCQUFnQixFQUNqQjtFQTFCSDtJQTRCSSwyQkFBMEI7SUFDMUIsYUFBaUM7SUFDakMsZ0JBQWUsRUFDaEI7RUEvQkg7SUFpQ0ksY0FBYTtJQUNiLFlBQVc7SUFDWCxrQkFBaUI7SUFDakIsa0JBQWlCO0lBQ2pCLGVBQWMsRUFDZjtFQXRDSDtJQXdDSSxxQkFBb0I7SUFDcEIsdUJBQXNCLEVBSXZCO0VBN0NIO01BMkNNLGtCQUFpQixFQUNsQiIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5LWluc3BlY3Rvci9wcm9wZXJ0eS1pbnNwZWN0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9jb21tb24nO1xuOmhvc3R7XG5cbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWYxZjE7XG4gIHBhZGRpbmc6IDEuNnJlbTtcblxuICAubm90U2VsZWN0ZWR7XG4gICAgY29sb3I6IzY2NjtcbiAgICBtYXJnaW46MDtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgfVxuXG4gIGJ1dHRvbi5yZW1vdmV7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDNweCA2cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiAkcHJpbWFyeUNvbG9yO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICBwe1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzQ0NDtcbiAgICBtYXJnaW46IDAgMCAxcmVtO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gIH1cbiAgYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjb2xvcjogZGFya2VuKCRwcmltYXJ5Q29sb3IsIDMwJSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5jb2RlR2VuZXJhdGVke1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbiAgLm5hdmlnYXRle1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgKntcbiAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgIH1cbiAgfVxufVxuIiwiJHByaW1hcnlDb2xvcjojMzM1O1xuJHNlY29uZGFyeUNvbG9yOiMwN2Y7XG4kaGVhZENvbG9yOiMzMzU7XG4kcnhDb2xvcjojZWMwYzhlO1xuJGJvcmRlckNvbG9yOiNlZWU7XG4kYmFja0NvbG9yOiNmZmY7XG4iXX0= */"

/***/ }),

/***/ "./src/app/property-inspector/property-inspector.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/property-inspector/property-inspector.component.ts ***!
  \********************************************************************/
/*! exports provided: PropertyInspectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyInspectorComponent", function() { return PropertyInspectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PropertyInspectorComponent = /** @class */ (function () {
    function PropertyInspectorComponent(appService) {
        this.appService = appService;
    }
    PropertyInspectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getSelectedItem().subscribe(function (data) {
            _this.selectedItem = data;
        });
    };
    PropertyInspectorComponent.prototype.removeSelectedItem = function () {
        this.appService.removeSelectedItem();
    };
    PropertyInspectorComponent.prototype.getLink = function () {
        return 'https://www.learnrxjs.io/operators/' + this.selectedItem.data.title.toLowerCase();
    };
    PropertyInspectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rxstudio-property-inspector',
            template: __webpack_require__(/*! ./property-inspector.component.html */ "./src/app/property-inspector/property-inspector.component.html"),
            styles: [__webpack_require__(/*! ./property-inspector.component.scss */ "./src/app/property-inspector/property-inspector.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], PropertyInspectorComponent);
    return PropertyInspectorComponent;
}());



/***/ }),

/***/ "./src/app/rx-helper.ts":
/*!******************************!*\
  !*** ./src/app/rx-helper.ts ***!
  \******************************/
/*! exports provided: RxHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxHelper", function() { return RxHelper; });
/* harmony import */ var _node_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node-types */ "./src/app/node-types/index.ts");

var RxHelper = /** @class */ (function () {
    function RxHelper() {
    }
    RxHelper.getRxOperators = function () {
        return this.operators;
    };
    RxHelper.operators = [
        {
            name: 'Creating Observables',
            desc: 'Operators that originate new Observables.',
            list: [
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Create"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Defer"],
                // Empty/Never/Throw
                _node_types__WEBPACK_IMPORTED_MODULE_0__["From"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["FromEvent"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Interval"],
                // NodeTypes.Just,
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Range"],
                // NodeTypes.Start,
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Timer"]
            ]
        },
        {
            name: 'Transforming Observables',
            desc: 'Operators that transform items that are emitted by an Observable.',
            list: [
                _node_types__WEBPACK_IMPORTED_MODULE_0__["BufferCount"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["FlatMap"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Map"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Scan"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Pluck"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Repeat"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["GroupBy"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["WindowWithCount"],
            ]
        },
        {
            name: 'Filtering Observables',
            desc: 'Operators that selectively emit items from a source Observable.',
            list: [
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Debounce"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Distinct"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["IgnoreElements"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["ElementAt"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Filter"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["First"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Last"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Sample"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Skip"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["SkipLast"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Take"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["TakeLast"],
            ]
        },
        {
            name: 'Combining Observables',
            desc: 'Operators that work with multiple source Observables to create a single Observable',
            list: [
                // And/Then/When
                // CombineLatest
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Join"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Merge"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["StartWith"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Switch"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Zip"],
            ]
        },
        {
            name: 'Error Handling Operators',
            desc: 'Operators that help to recover from error notifications from an Observable',
            list: [
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Catch"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Retry"]
            ]
        },
        {
            name: 'Observable Utility Operators',
            desc: 'A toolbox of useful Operators for working with Observables',
            list: [
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Delay"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Do"],
                // Materialize/Dematerialize
                // ObserveOn
                // Serialize
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Subscribe"],
                // NodeTypes.SubscribeOn,
                // NodeTypes.TimeInterval,
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Timeout"],
            ]
        },
        {
            name: 'Conditional and Boolean Operators',
            desc: 'Operators that evaluate one or more Observables or items emitted by Observables',
            list: [
                _node_types__WEBPACK_IMPORTED_MODULE_0__["All"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Race"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Contains"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["SequenceEqual"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["SkipUntil"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["SkipWhile"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["TakeUntil"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["TakeWhile"],
            ]
        },
        {
            name: 'Mathematical and Aggregate Operators',
            desc: 'Operators that operate on the entire sequence of items emitted by an Observable',
            list: [
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Average"],
                // NodeTypes.Concat,
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Count"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Max"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Min"],
                // NodeTypes.Reduce,
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Sum"],
            ]
        },
        {
            name: 'Connectable Observable Operators',
            desc: 'Specialty Observables that have more precisely-controlled subscription dynamics',
            list: [
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Connect"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Publish"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["RefCount"],
                _node_types__WEBPACK_IMPORTED_MODULE_0__["Replay"],
            ]
        }
    ];
    return RxHelper;
}());



/***/ }),

/***/ "./src/app/scene/graph-creator.ts":
/*!****************************************!*\
  !*** ./src/app/scene/graph-creator.ts ***!
  \****************************************/
/*! exports provided: GraphCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphCreator", function() { return GraphCreator; });
/* harmony import */ var _node_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node-types */ "./src/app/node-types/index.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");


var GraphCreator = /** @class */ (function () {
    function GraphCreator(svg, appService) {
        var _this = this;
        this.appService = appService;
        this.consts = {
            selectedClass: 'selected',
            connectClass: 'connect-node',
            circleGClass: 'conceptG',
            conectorCircle: 'conectorCircle',
            graphClass: 'graph',
            activeEditId: 'active-editing',
            BACKSPACE_KEY: 8,
            DELETE_KEY: 46,
            ENTER_KEY: 13,
            nodeRadius: 50,
        };
        this.state = {
            selectedNode: null,
            selectedEdge: null,
            mouseDownNode: null,
            mouseDownLink: null,
            justDragged: false,
            justScaleTransGraph: false,
            lastKeyDown: -1,
            shiftNodeDrag: false,
            selectedText: null,
            graphMouseDown: false,
        };
        this.nodes = [];
        this.edges = [];
        this.idct = 0;
        this.setIdCounterByNodes = function () {
            _this.idct = Math.max.apply(_this, _this.nodes.map(function (n) { return n.id; })) + 1;
        };
        this.serialize = function () {
            var thisGraph = _this;
            var saveEdges = [];
            thisGraph.edges.forEach(function (val, i) {
                saveEdges.push({ source: val.source.id, target: val.target.id });
            });
            var nodesData = thisGraph.nodes.map(function (node) {
                return {
                    id: node.id,
                    x: node.x || 0,
                    y: node.y || 0,
                    node_type: node.data.title,
                    properties: node.data.properties,
                };
            });
            return JSON.stringify({ 'nodes': nodesData, 'edges': saveEdges });
        };
        this.deserialize = function (jsonObj) {
            var thisGraph = _this;
            thisGraph.deleteGraph(true);
            var nodesData = jsonObj.nodes.map(function (node) {
                node.data = new (_node_types__WEBPACK_IMPORTED_MODULE_0__[node.node_type])();
                node.data.properties = node.properties;
                return node;
            });
            [].push.apply(thisGraph.nodes, nodesData);
            thisGraph.setIdCounterByNodes();
            var newEdges = jsonObj.edges;
            newEdges.forEach(function (e, i) {
                newEdges[i] = { source: thisGraph.nodes.filter(function (n) { return n.id === e.source; })[0],
                    target: thisGraph.nodes.filter(function (n) { return n.id === e.target; })[0] };
            });
            [].push.apply(thisGraph.edges, newEdges);
            thisGraph.updateGraph();
        };
        this.dragMove = function (d) {
            _this.state.justDragged = true;
            if (_this.state.shiftNodeDrag) {
                var gMousePos = d3__WEBPACK_IMPORTED_MODULE_1__["mouse"](_this.svgG.node());
                _this.connectorLine.attr('d', 'M' + d.x + ',' + d.y + 'L' + gMousePos[0] + ',' + gMousePos[1]);
            }
            else {
                d.x += d3__WEBPACK_IMPORTED_MODULE_1__["event"].dx;
                d.y += d3__WEBPACK_IMPORTED_MODULE_1__["event"].dy;
                _this.updateGraph();
            }
        };
        this.dragEnd = function (d) {
            var thisGraph = _this;
            if (thisGraph.state.shiftNodeDrag) {
                if (thisGraph.connectTarget && (thisGraph.connectTarget !== d)) {
                    var newEdge = { source: d, target: thisGraph.connectTarget };
                    thisGraph.edges.push(newEdge);
                    thisGraph.updateGraph();
                    thisGraph.appService.refreshRxObjects();
                }
                thisGraph.state.shiftNodeDrag = false;
                thisGraph.connectorLine.classed('hidden', true);
            }
            else {
                _this.showResults(null);
            }
        };
        this.deleteGraph = function (skipPrompt) {
            var thisGraph = _this;
            var doDelete = true;
            if (!skipPrompt) {
                doDelete = window.confirm('Press OK to delete this graph');
            }
            if (doDelete) {
                while (thisGraph.nodes.length) {
                    thisGraph.nodes.pop();
                }
                while (thisGraph.edges.length) {
                    thisGraph.edges.pop();
                }
                thisGraph.updateGraph();
            }
        };
        this.removeSelected = function () {
            var thisGraph = _this;
            var state = thisGraph.state;
            var selectedNode = state.selectedNode;
            var selectedEdge = state.selectedEdge;
            thisGraph.appService.setSelectedItem(null);
            if (selectedNode) {
                thisGraph.nodes.splice(thisGraph.nodes.indexOf(selectedNode), 1);
                thisGraph.spliceLinksForNode(selectedNode);
                state.selectedNode = null;
                thisGraph.updateGraph();
            }
            else if (selectedEdge) {
                thisGraph.edges.splice(thisGraph.edges.indexOf(selectedEdge), 1);
                state.selectedEdge = null;
                thisGraph.updateGraph();
            }
        };
        this.spliceLinksForNode = function (node) {
            var thisGraph = _this, toSplice = thisGraph.edges.filter(function (l) {
                return (l.source === node || l.target === node);
            });
            toSplice.map(function (l) {
                thisGraph.edges.splice(thisGraph.edges.indexOf(l), 1);
            });
        };
        this.selectAnEdge = function (d3Path, edgeData) {
            var thisGraph = _this;
            d3Path.classed(thisGraph.consts.selectedClass, true);
            if (thisGraph.state.selectedEdge) {
                thisGraph.deselectEdges();
            }
            thisGraph.state.selectedEdge = edgeData;
        };
        this.selectANode = function (d3Node, nodeData) {
            var thisGraph = _this;
            d3Node.classed(_this.consts.selectedClass, true);
            if (thisGraph.state.selectedNode) {
                thisGraph.deselectNodes();
            }
            thisGraph.state.selectedNode = nodeData;
        };
        this.deselectNodes = function () {
            var thisGraph = _this;
            thisGraph.circles.selectAll('g').filter(function (cd) {
                return cd.id === thisGraph.state.selectedNode.id;
            }).classed(thisGraph.consts.selectedClass, false);
            thisGraph.state.selectedNode = null;
        };
        this.deselectEdges = function () {
            var thisGraph = _this;
            thisGraph.paths.selectAll('path').filter(function (cd) {
                return cd === thisGraph.state.selectedEdge;
            }).classed(thisGraph.consts.selectedClass, false);
            thisGraph.state.selectedEdge = null;
        };
        this.pathMouseDown = function (d3path, d) {
            var thisGraph = _this, state = thisGraph.state;
            // d3.event.stopPropagation();
            state.mouseDownLink = d;
            if (state.selectedNode) {
                thisGraph.deselectNodes();
            }
            var prevEdge = state.selectedEdge;
            if (!prevEdge || prevEdge !== d) {
                thisGraph.selectAnEdge(d3path, d);
                _this.appService.setSelectedItem(d);
            }
            else {
                thisGraph.deselectEdges();
                _this.appService.setSelectedItem(null);
            }
        };
        this.isMouseOnCircleCorner = function (d3node) {
            var mousePos = d3__WEBPACK_IMPORTED_MODULE_1__["mouse"](d3node.node());
            var r = Math.sqrt(mousePos[0] * mousePos[0] + mousePos[1] * mousePos[1]);
            return (r > (_this.consts.nodeRadius / 1.618));
        };
        this.circleMouseDown = function (d3node, d) {
            var thisGraph = _this, state = thisGraph.state;
            // d3.event.stopPropagation();
            state.mouseDownNode = d;
            state.shiftNodeDrag = false;
            if (_this.isMouseOnCircleCorner(d3node)) {
                state.shiftNodeDrag = true;
                thisGraph.connectorLine.classed('hidden', false)
                    .attr('d', 'M' + d.x + ',' + d.y + 'L' + d.x + ',' + d.y);
                return;
            }
        };
        this.circleClick = function (d3node, d) {
            var thisGraph = _this, state = thisGraph.state, consts = thisGraph.consts;
            if (state.selectedEdge) {
                thisGraph.deselectEdges();
            }
            var prevNode = state.selectedNode;
            if (!prevNode || prevNode.id !== d.id) {
                thisGraph.selectANode(d3node, d);
                _this.appService.setSelectedItem(d);
            }
            else {
                thisGraph.deselectNodes();
                _this.appService.setSelectedItem(null);
            }
            state.mouseDownNode = null;
            d3__WEBPACK_IMPORTED_MODULE_1__["event"].preventDefault();
            d3__WEBPACK_IMPORTED_MODULE_1__["event"].stopPropagation();
            return false;
        };
        this.svgClick = function () {
            var nodeClass = _this.appService.getCreationOption();
            if (nodeClass) {
                var creationElement = new (nodeClass)();
                var xycoords = d3__WEBPACK_IMPORTED_MODULE_1__["mouse"](_this.svgG.node()), d = {
                    id: _this.idct++,
                    data: creationElement,
                    x: xycoords[0], y: xycoords[1]
                };
                _this.nodes.push(d);
                _this.updateGraph();
                _this.appService.refreshRxObjects();
                _this.appService.setCreationOption(null);
            }
        };
        // call to propagate changes to graph
        this.updateGraph = function () {
            var thisGraph = _this, consts = thisGraph.consts, state = thisGraph.state;
            var paths = thisGraph.paths.selectAll('path').data(thisGraph.edges, function (d) {
                return String(d.source.id) + '+' + String(d.target.id);
            });
            // update existing paths
            paths.style('marker-end', 'url(#end-arrow)')
                .classed(consts.selectedClass, function (d) {
                return d === state.selectedEdge;
            })
                .attr('d', function (d) {
                return 'M' + d.source.x + ',' + d.source.y + 'L' + d.target.x + ',' + d.target.y;
            });
            // add new paths
            paths.enter()
                .append('path')
                .style('marker-end', 'url(#end-arrow)')
                .classed('link', true)
                .attr('d', function (d) {
                return 'M' + d.source.x + ',' + d.source.y + 'L' + d.target.x + ',' + d.target.y;
            })
                .on('mousedown', function (d) { thisGraph.pathMouseDown(d3__WEBPACK_IMPORTED_MODULE_1__["select"](this), d); })
                .on('mouseup', function (d) { state.mouseDownLink = null; });
            // remove old links
            paths.exit().remove();
            // update existing nodes
            var circles = thisGraph.circles.selectAll('g').data(thisGraph.nodes, function (d) { return d.id; });
            circles.attr('transform', function (d) {
                return 'translate(' + d.x + ',' + d.y + ')';
            });
            // add new nodes
            var newGs = circles.enter()
                .append('g');
            newGs.classed(consts.circleGClass, true)
                .attr('transform', function (d) {
                return 'translate(' + d.x + ',' + d.y + ')';
            })
                .on('mouseover', function (d) {
                if (state.shiftNodeDrag) {
                    if (!thisGraph.connectTarget) {
                        thisGraph.connectTarget = d;
                        d3__WEBPACK_IMPORTED_MODULE_1__["select"](this).classed(consts.connectClass, true);
                    }
                }
            })
                .on('mouseout', function (d) {
                if (thisGraph.connectTarget === d) {
                    thisGraph.connectTarget = undefined;
                    d3__WEBPACK_IMPORTED_MODULE_1__["select"](this).classed(consts.connectClass, false);
                }
            })
                .on('mousedown', function (d) { thisGraph.circleMouseDown(d3__WEBPACK_IMPORTED_MODULE_1__["select"](this), d); })
                .on('click', function (d) { thisGraph.circleClick(d3__WEBPACK_IMPORTED_MODULE_1__["select"](this), d); })
                .call(thisGraph.drag);
            newGs.append('circle')
                .attr('class', 'outerCircle')
                .attr('r', String(consts.nodeRadius))
                .append('title').text('drag ');
            newGs.append('circle')
                .attr('class', 'innerCircle')
                .attr('r', String(consts.nodeRadius / 1.618));
            newGs.each(function (d) {
                GraphCreator.insertTitleLinebreaks(d3__WEBPACK_IMPORTED_MODULE_1__["select"](this), d.data.title);
            });
            // remove old nodes
            circles.exit().remove();
        };
        this.showResults = function (resultList) {
            // {node, data}
            // update existing nodes
            resultList = resultList || _this.lastResultList;
            if (!resultList) {
                return;
            }
            _this.lastResultList = resultList;
            var thisGraph = _this;
            var resultCircle = thisGraph.resultCircles.selectAll('g').data(resultList, function (d) { return d.data.id; });
            var cornerDistance = thisGraph.consts.nodeRadius + thisGraph.consts.nodeRadius / 1.618;
            var getTranslate = function (d, isStart) {
                var distance = isStart ? thisGraph.consts.nodeRadius : cornerDistance;
                var x = d.node.x;
                x += distance * Math.sin(d.data.id / 5);
                var y = d.node.y;
                y += distance * Math.cos(d.data.id / 5);
                return 'translate(' + x + ',' + y + ')';
            };
            resultCircle
                .transition()
                .duration(GraphCreator.animateTime / 2)
                .attr('transform', function (d) { return getTranslate(d, false); })
                .attr('opacity', 0.6)
                .select('text').text(function (d) { return d.data.x; });
            resultCircle.exit().remove();
            var newGs = resultCircle.enter()
                .append('g');
            newGs
                .attr('opacity', 1)
                .attr('transform', function (d) { return getTranslate(d, true); })
                .transition()
                .duration(GraphCreator.animateTime / 2)
                .attr('transform', function (d) { return getTranslate(d, false); })
                .attr('opacity', 0.6);
            var circle = newGs
                .append('circle')
                .attr('r', String(_this.consts.nodeRadius / 2.618));
            newGs.each(function (d) {
                GraphCreator.insertTitleLinebreaks(d3__WEBPACK_IMPORTED_MODULE_1__["select"](this), d.data.x);
            });
        };
        var thisGraph = this;
        var _a = this.appService.getData(), nodes = _a.nodes, edges = _a.edges;
        this.nodes = nodes;
        this.edges = edges;
        this.svg = svg;
        this.svgG = svg.append('g').classed(thisGraph.consts.graphClass, true);
        this.appService.getItemSubscribe().subscribe(this.showResults);
        this.setIdCounterByNodes();
        this.defineArrows();
        this.bindEvents();
        this.appService.refreshRxObjects();
    }
    GraphCreator.insertTitleLinebreaks = function (gEl, title) {
        if (typeof title === 'undefined') {
            title = 'value';
        }
        var words = title.toString().split(/\s+/g), nwords = words.length;
        var el = gEl.append('text')
            .attr('text-anchor', 'middle')
            .attr('dy', '-' + (nwords - 1) * 7.5);
        for (var i = 0; i < words.length; i++) {
            var tspan = el.append('tspan').text(words[i]);
            if (i > 0) {
                tspan.attr('x', 0).attr('dy', '18');
            }
        }
    };
    ;
    GraphCreator.prototype.defineArrows = function () {
        // define arrow markers for graph links
        var defs = this.svg.append('svg:defs');
        defs.append('svg:marker')
            .attr('id', 'end-arrow')
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', '32')
            .attr('markerWidth', 3.5)
            .attr('markerHeight', 3.5)
            .attr('orient', 'auto')
            .append('svg:path')
            .attr('d', 'M0,-5L10,0L0,5');
        // define arrow markers for leading arrow
        defs.append('svg:marker')
            .attr('id', 'mark-end-arrow')
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 7)
            .attr('markerWidth', 3.5)
            .attr('markerHeight', 3.5)
            .attr('orient', 'auto')
            .append('svg:path')
            .attr('d', 'M0,-5L10,0L0,5');
        // displayed when dragging between nodes
        this.connectorLine = this.svgG.append('svg:path')
            .attr('class', 'link hidden')
            .attr('d', 'M0,0L0,0')
            .style('marker-end', 'url(#mark-end-arrow)');
    };
    GraphCreator.prototype.bindEvents = function () {
        var _this = this;
        var thisGraph = this;
        // svg nodes and edges
        thisGraph.resultCircles = this.svgG.append('g').attr('class', 'resultItems');
        thisGraph.paths = this.svgG.append('g');
        thisGraph.circles = this.svgG.append('g');
        // handle circle drag
        thisGraph.drag = d3__WEBPACK_IMPORTED_MODULE_1__["drag"]()
            .on('drag', this.dragMove)
            .on('end', this.dragEnd);
        // listen for key events
        // d3.select(window).on('keydown', this.svgKeyDown)
        //   .on('keyup', this.svgKeyUp);
        thisGraph.svg.on('mousedown', this.svgClick);
        thisGraph.svg.on('mouseover', function (d) {
            if (_this.appService.getCreationOption()) {
                thisGraph.svg.style('cursor', 'crosshair');
                /*semicolon here*/
            }
            else {
                thisGraph.svg.style('cursor', 'pointer');
            }
        });
        // handle zoom
        thisGraph.svg.call(d3__WEBPACK_IMPORTED_MODULE_1__["zoom"]()
            .scaleExtent([1 / 2, 8])
            .on('zoom', function () {
            thisGraph.svgG.attr('transform', d3__WEBPACK_IMPORTED_MODULE_1__["event"].transform);
        }));
        thisGraph.svg.on('dblclick.zoom', null);
        // get control commands
        thisGraph.appService.getControlChanges().subscribe(function (data) {
            if (data === 'clear') {
                thisGraph.deleteGraph(false);
            }
        });
        thisGraph.appService.removeItemSubject.subscribe(function (data) {
            thisGraph.removeSelected();
            _this.lastResultList = null;
            _this.showResults([]);
            _this.appService.refreshRxObjects();
        });
    };
    GraphCreator.prototype.updateWindow = function (width, height) {
        this.svg.attr('width', width).attr('height', height);
    };
    ;
    GraphCreator.animateTime = 400;
    return GraphCreator;
}());



/***/ }),

/***/ "./src/app/scene/scene.component.html":
/*!********************************************!*\
  !*** ./src/app/scene/scene.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/scene/scene.component.scss":
/*!********************************************!*\
  !*** ./src/app/scene/scene.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative; }\n  :host /deep/ svg .conceptG text {\n    pointer-events: none; }\n  :host /deep/ svg .resultItems circle {\n    fill: #07f; }\n  :host /deep/ svg .resultItems text {\n    fill: white; }\n  :host /deep/ svg marker {\n    fill: #555; }\n  :host /deep/ svg g.conceptG {\n    cursor: pointer; }\n  :host /deep/ svg g.conceptG circle {\n      transition: fill 0.3s ease;\n      fill: #fff; }\n  :host /deep/ svg g.conceptG circle:hover {\n        fill: #eee; }\n  :host /deep/ svg g.conceptG circle.outerCircle {\n        transition: all 0.3s ease;\n        stroke-width: 1px;\n        stroke: #555; }\n  :host /deep/ svg g.conceptG circle.outerCircle:hover {\n          fill: #eee;\n          stroke: #eee; }\n  :host /deep/ svg g.conceptG text {\n      fill: #555; }\n  :host /deep/ svg g.conceptG.selected circle {\n      transition: fill 0.3s ease;\n      fill: #595995; }\n  :host /deep/ svg g.conceptG.selected circle.outerCircle {\n        stroke: #595995; }\n  :host /deep/ svg g.conceptG.selected circle.outerCircle:hover {\n          fill: #4c4c7e; }\n  :host /deep/ svg g.conceptG.selected text {\n      fill: #fff; }\n  :host /deep/ svg g.connect-node circle {\n    transition: fill 0.3s ease;\n    fill: #eee; }\n  :host /deep/ svg path.link {\n    fill: none;\n    cursor: pointer;\n    stroke: #555;\n    stroke-width: 6px; }\n  :host /deep/ svg path.link:hover {\n    stroke: #595995; }\n  :host /deep/ svg path.link.hidden {\n    stroke-width: 0; }\n  :host /deep/ svg path.link.selected {\n    stroke: #464675; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maW5nZXJwaWNoL0RvY3VtZW50cy9wcm9qZWN0cy9yeC1mbG93L3NyYy9hcHAvc2NlbmUvc2NlbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDRSxtQkFBa0IsRUFtRm5CO0VBcEZEO0lBS00scUJBQW9CLEVBQ3JCO0VBTkw7SUFVUSxXQUFVLEVBQ1g7RUFYUDtJQWFRLFlBQVUsRUFDWDtFQWRQO0lBa0JNLFdBM0JVLEVBNEJYO0VBbkJMO0lBcUJNLGdCQUFjLEVBc0NmO0VBM0RMO01BdUJRLDJCQUF5QjtNQUN6QixXQUFVLEVBYVg7RUFyQ1A7UUEwQlUsV0FqQ2tCLEVBa0NuQjtFQTNCVDtRQTZCVSwwQkFBd0I7UUFDeEIsa0JBQWlCO1FBQ2pCLGFBeENNLEVBNkNQO0VBcENUO1VBaUNZLFdBeENnQjtVQXlDaEIsYUF6Q2dCLEVBMENqQjtFQW5DWDtNQXVDUSxXQWhEUSxFQWlEVDtFQXhDUDtNQThDVSwyQkFBeUI7TUFDekIsY0FsRGlDLEVBeURsQztFQXREVDtRQWlEWSxnQkFwRCtCLEVBd0RoQztFQXJEWDtVQW1EYyxjQUFnQyxFQUNqQztFQXBEYjtNQXdEVSxXQUFTLEVBQ1Y7RUF6RFQ7SUE2RE0sMkJBQXlCO0lBQ3pCLFdBckVzQixFQXNFdkI7RUEvREw7SUFrRU0sV0FBVTtJQUNWLGdCQUFjO0lBQ2QsYUE3RVU7SUE4RVYsa0JBQWlCLEVBQ2xCO0VBdEVMO0lBeUVNLGdCQTlFbUMsRUErRXBDO0VBMUVMO0lBNkVNLGdCQUFlLEVBQ2hCO0VBOUVMO0lBaUZNLGdCQW5Gb0MsRUFvRnJDIiwiZmlsZSI6InNyYy9hcHAvc2NlbmUvc2NlbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vY29tbW9uXCI7XG4kbGlua0NvbG9yOiAjNTU1O1xuJGJvcmRlckNvbG9yOiAkbGlua0NvbG9yO1xuJG91dGVyQ2lyY2xlSG92ZXJDb2xvcjogI2VlZTtcblxuJGhvdmVyZWRMaW5rOiBsaWdodGVuKCRwcmltYXJ5Q29sb3IsIDIwJSk7XG5cbiRzZWxlY3RlZENvbG9yOiBsaWdodGVuKCRwcmltYXJ5Q29sb3IsIDIwJSk7XG4kc2VsZWN0ZWRMaW5rOiBsaWdodGVuKCRwcmltYXJ5Q29sb3IsIDEwJSk7XG4kc2VsZWN0ZWRCb3JkZXI6IGxpZ2h0ZW4oJHByaW1hcnlDb2xvciwgNTAlKTtcbjpob3N0e1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgL2RlZXAvIHN2ZyB7XG4gICAgLmNvbmNlcHRHIHRleHQge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuXG4gICAgLnJlc3VsdEl0ZW1ze1xuICAgICAgY2lyY2xle1xuICAgICAgICBmaWxsOiAjMDdmO1xuICAgICAgfVxuICAgICAgdGV4dHtcbiAgICAgICAgZmlsbDp3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtYXJrZXIge1xuICAgICAgZmlsbDogJGxpbmtDb2xvcjtcbiAgICB9XG4gICAgZy5jb25jZXB0RyB7XG4gICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgIGNpcmNsZSB7XG4gICAgICAgIHRyYW5zaXRpb246ZmlsbCAwLjNzIGVhc2U7XG4gICAgICAgIGZpbGw6ICNmZmY7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGZpbGw6ICRvdXRlckNpcmNsZUhvdmVyQ29sb3I7XG4gICAgICAgIH1cbiAgICAgICAgJi5vdXRlckNpcmNsZXtcbiAgICAgICAgICB0cmFuc2l0aW9uOmFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gICAgICAgICAgc3Ryb2tlOiAkYm9yZGVyQ29sb3I7XG4gICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgIGZpbGw6JG91dGVyQ2lyY2xlSG92ZXJDb2xvcjtcbiAgICAgICAgICAgIHN0cm9rZTogJG91dGVyQ2lyY2xlSG92ZXJDb2xvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRleHQge1xuICAgICAgICBmaWxsOiRib3JkZXJDb2xvcjtcbiAgICAgIH1cbiAgICAgICY6aG92ZXIge1xuXG4gICAgICB9XG4gICAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgY2lyY2xlIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOmZpbGwgMC4zcyBlYXNlO1xuICAgICAgICAgIGZpbGw6ICRzZWxlY3RlZENvbG9yO1xuICAgICAgICAgICYub3V0ZXJDaXJjbGUge1xuICAgICAgICAgICAgc3Ryb2tlOiAkc2VsZWN0ZWRDb2xvcjtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBmaWxsOiBkYXJrZW4oJHNlbGVjdGVkQ29sb3IsIDclKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGV4dCB7XG4gICAgICAgICAgZmlsbDojZmZmO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGcuY29ubmVjdC1ub2RlIGNpcmNsZSB7XG4gICAgICB0cmFuc2l0aW9uOmZpbGwgMC4zcyBlYXNlO1xuICAgICAgZmlsbDogJG91dGVyQ2lyY2xlSG92ZXJDb2xvcjtcbiAgICB9XG5cbiAgICBwYXRoLmxpbmsge1xuICAgICAgZmlsbDogbm9uZTtcbiAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgc3Ryb2tlOiAkbGlua0NvbG9yO1xuICAgICAgc3Ryb2tlLXdpZHRoOiA2cHg7XG4gICAgfVxuXG4gICAgcGF0aC5saW5rOmhvdmVyIHtcbiAgICAgIHN0cm9rZTogJGhvdmVyZWRMaW5rO1xuICAgIH1cblxuICAgIHBhdGgubGluay5oaWRkZW4ge1xuICAgICAgc3Ryb2tlLXdpZHRoOiAwO1xuICAgIH1cblxuICAgIHBhdGgubGluay5zZWxlY3RlZCB7XG4gICAgICBzdHJva2U6ICRzZWxlY3RlZExpbms7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/scene/scene.component.ts":
/*!******************************************!*\
  !*** ./src/app/scene/scene.component.ts ***!
  \******************************************/
/*! exports provided: SceneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneComponent", function() { return SceneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _graph_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graph-creator */ "./src/app/scene/graph-creator.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// declare var d3: any;

var SceneComponent = /** @class */ (function () {
    function SceneComponent(el, appService) {
        this.el = el;
        this.appService = appService;
    }
    SceneComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            var el = _this.el.nativeElement;
            var width = el.clientWidth;
            var height = el.clientHeight;
            /** MAIN SVG **/
            var root = d3__WEBPACK_IMPORTED_MODULE_3__["select"](el);
            var svg = root.append('svg')
                .attr('width', width)
                .attr('height', height);
            try {
                _this.graphEditor = new _graph_creator__WEBPACK_IMPORTED_MODULE_1__["GraphCreator"](svg, _this.appService);
            }
            catch (err) {
                console.error('error in creating graph editor : ', err);
            }
            _this.graphEditor.updateGraph();
            // listen for resize
            var thisComponent = _this;
            window.onresize = function () {
                thisComponent.graphEditor.updateWindow(el.clientWidth, el.clientHeight);
            };
        });
    };
    SceneComponent.prototype.deserialize = function (data) {
        var _this = this;
        setTimeout(function () {
            _this.graphEditor.deserialize(data);
            _this.appService.refreshRxObjects();
        }, 100);
    };
    SceneComponent.prototype.serialize = function () {
        return this.graphEditor.serialize();
    };
    SceneComponent.prototype.removeSelectedItem = function () {
        this.graphEditor.removeSelected();
    };
    SceneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rxstudio-scene',
            template: __webpack_require__(/*! ./scene.component.html */ "./src/app/scene/scene.component.html"),
            styles: [__webpack_require__(/*! ./scene.component.scss */ "./src/app/scene/scene.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], SceneComponent);
    return SceneComponent;
}());



/***/ }),

/***/ "./src/app/status/status.component.html":
/*!**********************************************!*\
  !*** ./src/app/status/status.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <small>\n    OK!\n  </small>\n</div>\n"

/***/ }),

/***/ "./src/app/status/status.component.scss":
/*!**********************************************!*\
  !*** ./src/app/status/status.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXR1cy9zdGF0dXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/status/status.component.ts":
/*!********************************************!*\
  !*** ./src/app/status/status.component.ts ***!
  \********************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatusComponent = /** @class */ (function () {
    function StatusComponent() {
    }
    StatusComponent.prototype.ngOnInit = function () {
    };
    StatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rxstudio-status',
            template: __webpack_require__(/*! ./status.component.html */ "./src/app/status/status.component.html"),
            styles: [__webpack_require__(/*! ./status.component.scss */ "./src/app/status/status.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StatusComponent);
    return StatusComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/fingerpich/Documents/projects/rx-flow/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map