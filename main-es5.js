function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule, routingComponents */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routingComponents", function () {
      return routingComponents;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _indxp_indxp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./indxp/indxp.component */
    "./src/app/indxp/indxp.component.ts");
    /* harmony import */


    var _form_one_form_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./form-one/form-one.component */
    "./src/app/form-one/form-one.component.ts");
    /* harmony import */


    var _form_two_form_two_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./form-two/form-two.component */
    "./src/app/form-two/form-two.component.ts");
    /* harmony import */


    var _new_form_new_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./new-form/new-form.component */
    "./src/app/new-form/new-form.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'index',
      pathMatch: 'full'
    }, {
      path: 'index',
      component: _indxp_indxp_component__WEBPACK_IMPORTED_MODULE_2__["IndxpComponent"]
    }, {
      path: 'formone',
      component: _form_one_form_one_component__WEBPACK_IMPORTED_MODULE_3__["FormOneComponent"]
    }, {
      path: 'formtwo',
      component: _form_two_form_two_component__WEBPACK_IMPORTED_MODULE_4__["FormTwoComponent"]
    }, {
      path: 'new',
      component: _new_form_new_form_component__WEBPACK_IMPORTED_MODULE_5__["NewFormComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();

    var routingComponents = [_indxp_indxp_component__WEBPACK_IMPORTED_MODULE_2__["IndxpComponent"]];
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'my-app';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      consts: [["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css", "integrity", "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh", "crossorigin", "anonymous"], ["id", "new", 1, "routerComp"], ["myOutlet", "outlet"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet", null, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n\r\n    font-family: consolas;\r\n  }\r\n  \r\n  nav[_ngcontent-%COMP%] {\r\n      \r\n    background-color: rgb(77, 130, 211);\r\n   font-weight:bold;\r\n    \r\n  }\r\n  \r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n      \r\n  }\r\n  \r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n\r\n    display: inline-block;\r\n    padding :18px;\r\n    transition: .3s ;\r\n\r\n  }\r\n  \r\n  li[_ngcontent-%COMP%]:hover{\r\n      background-color:black ;\r\n      color: black;\r\n  }\r\n  \r\n  .routerComp[_ngcontent-%COMP%]{\r\n\r\n  position: relative;\r\n}\r\n  \r\n  .routerComp[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{\r\n\r\n  display: block;\r\n}\r\n  \r\n  body[_ngcontent-%COMP%] {\r\n\r\n    font-family: consolas;\r\n  }\r\n  \r\n  a[_ngcontent-%COMP%]{\r\n    color:white;\r\n    text-decoration: none;\r\n    \r\n  }\r\n  \r\n  a[_ngcontent-%COMP%]:hover{\r\n    color: white;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .cntrtext[_ngcontent-%COMP%]{\r\n    font-size:large;\r\n    text-align: center;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUkscUJBQXFCO0VBQ3ZCOztFQUVBOztJQUVFLG1DQUFtQztHQUNwQyxnQkFBZ0I7O0VBRWpCOztFQUVBO01BQ0ksa0JBQWtCOztFQUV0Qjs7RUFDQTs7SUFFRSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGdCQUFnQjs7RUFFbEI7O0VBRUE7TUFDSSx1QkFBdUI7TUFDdkIsWUFBWTtFQUNoQjs7RUFDRjs7RUFFRSxrQkFBa0I7QUFDcEI7O0VBQ0E7O0VBRUUsY0FBYztBQUNoQjs7RUFDRTs7SUFFRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gscUJBQXFCOztFQUV2Qjs7RUFDQTtJQUNFLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjs7RUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBjb25zb2xhcztcclxuICB9XHJcbiAgXHJcbiAgbmF2IHtcclxuICAgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzcsIDEzMCwgMjExKTtcclxuICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgbmF2IHVse1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIFxyXG4gIH1cclxuICBuYXYgdWwgbGl7XHJcblxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZyA6MThweDtcclxuICAgIHRyYW5zaXRpb246IC4zcyA7XHJcblxyXG4gIH1cclxuXHJcbiAgbGk6aG92ZXJ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2sgO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4ucm91dGVyQ29tcHtcclxuXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5yb3V0ZXJDb21wPip7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiAgYm9keSB7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6IGNvbnNvbGFzO1xyXG4gIH1cclxuIFxyXG4gIGF7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIFxyXG4gIH1cclxuICBhOmhvdmVye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuY250cnRleHR7XHJcbiAgICBmb250LXNpemU6bGFyZ2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _form_one_form_one_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./form-one/form-one.component */
    "./src/app/form-one/form-one.component.ts");
    /* harmony import */


    var _form_two_form_two_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./form-two/form-two.component */
    "./src/app/form-two/form-two.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _new_form_new_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./new-form/new-form.component */
    "./src/app/new-form/new-form.component.ts");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _form_serve_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./form-serve.service */
    "./src/app/form-serve.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _edit_component_edit_component_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./edit-component/edit-component.component */
    "./src/app/edit-component/edit-component.component.ts");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _indxp_indxp_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./indxp/indxp.component */
    "./src/app/indxp/indxp.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_form_serve_service__WEBPACK_IMPORTED_MODULE_19__["FormServeService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_7__["MatTreeModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _indxp_indxp_component__WEBPACK_IMPORTED_MODULE_26__["IndxpComponent"], _form_one_form_one_component__WEBPACK_IMPORTED_MODULE_9__["FormOneComponent"], _form_two_form_two_component__WEBPACK_IMPORTED_MODULE_10__["FormTwoComponent"], _new_form_new_form_component__WEBPACK_IMPORTED_MODULE_14__["NewFormComponent"], _edit_component_edit_component_component__WEBPACK_IMPORTED_MODULE_21__["EditComponentComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_7__["MatTreeModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["routingComponents"], _form_one_form_one_component__WEBPACK_IMPORTED_MODULE_9__["FormOneComponent"], _form_two_form_two_component__WEBPACK_IMPORTED_MODULE_10__["FormTwoComponent"], _new_form_new_form_component__WEBPACK_IMPORTED_MODULE_14__["NewFormComponent"], _edit_component_edit_component_component__WEBPACK_IMPORTED_MODULE_21__["EditComponentComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_7__["MatTreeModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"]],
          providers: [_form_serve_service__WEBPACK_IMPORTED_MODULE_19__["FormServeService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_form_one_form_one_component__WEBPACK_IMPORTED_MODULE_9__["FormOneComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_27__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_router_router_l"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSlider"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_29__["Dir"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarRow"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_7__["MatNestedTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_7__["MatTreeNodeDef"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_7__["MatTreeNodePadding"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_7__["MatTreeNodeToggle"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_7__["MatTree"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_7__["MatTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_7__["MatTreeNodeOutlet"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_30__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_30__["CdkTextareaAutosize"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatTextareaAutosize"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_31__["CdkScrollable"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOptgroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArrayName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatCalendar"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatCalendarBody"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepicker"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerContent"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerToggleIcon"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatMonthView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatYearView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatMultiYearView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatCalendarHeader"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatFooterRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTextColumn"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogContainer"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogActions"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSort"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortHeader"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatAnchor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIcon"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _indxp_indxp_component__WEBPACK_IMPORTED_MODULE_26__["IndxpComponent"], _form_one_form_one_component__WEBPACK_IMPORTED_MODULE_9__["FormOneComponent"], _form_two_form_two_component__WEBPACK_IMPORTED_MODULE_10__["FormTwoComponent"], _new_form_new_form_component__WEBPACK_IMPORTED_MODULE_14__["NewFormComponent"], _edit_component_edit_component_component__WEBPACK_IMPORTED_MODULE_21__["EditComponentComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_27__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["KeyValuePipe"]]);
    /***/

  },

  /***/
  "./src/app/edit-component/edit-component.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/edit-component/edit-component.component.ts ***!
    \************************************************************/

  /*! exports provided: EditComponentComponent */

  /***/
  function srcAppEditComponentEditComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditComponentComponent", function () {
      return EditComponentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _form_serve_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../form-serve.service */
    "./src/app/form-serve.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");

    function EditComponentComponent_div_82_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "None");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-option", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Java");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-option", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Angular");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "NodeJS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ReactJS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Expertise is required and a valid one.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Choose a Start date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-datepicker-toggle", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-datepicker", null, 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Start date must be valid one.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Choose a End date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-datepicker-toggle", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "mat-datepicker", null, 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "End date must be valid one.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "No of Years of Expertise");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r2 = ctx.index;

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Expertise ", i_r2 + 1, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r4);
      }
    }

    var EditComponentComponent = /*#__PURE__*/function () {
      function EditComponentComponent(fb, ex_service, data) {
        _classCallCheck(this, EditComponentComponent);

        this.fb = fb;
        this.ex_service = ex_service;
        this.data = data;
        this.toggle = false;
        this.myform = this.fb.group({
          name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
          position: [],
          age: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100)]],
          location: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
          adar: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(12)]],
          email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
          pan: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
          gender: [""],
          qualification: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          university: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
          about: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(15)]],
          expertise: this.fb.array([this.addExp()])
        });
      }

      _createClass(EditComponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.myform.setValue(this.data);
        }
      }, {
        key: "addExp",
        value: function addExp() {
          return this.fb.group({
            exname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            sdate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            edate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            nxp: []
          });
        }
      }, {
        key: "onClick",
        value: function onClick() {
          this.expertise.push(this.addExp());
        }
      }, {
        key: "calcDate",
        value: function calcDate() {
          var wArr = this.myform.controls['expertise'].value;

          for (var index = 0; index < wArr.length; index++) {
            var edate = new Date(wArr[index].edate);
            var sdate = new Date(wArr[index].sdate);
            var yeardiff = edate.getFullYear() - sdate.getFullYear();
            wArr[index].nxp = yeardiff;
          }

          this.myform.controls['expertise'].patchValue(wArr);
        }
      }, {
        key: "onResset",
        value: function onResset() {
          this.myform.reset;
        }
      }, {
        key: "onEdit",
        value: function onEdit() {
          this.ex_service.editData({
            name: this.myform.value.name,
            position: this.myform.value.position,
            age: this.myform.value.age,
            location: this.myform.value.location,
            adar: this.myform.value.adar,
            email: this.myform.value.email,
            gender: this.myform.value.gender,
            pan: this.myform.value.pan,
            qualification: this.myform.value.qualification,
            about: this.myform.value.about,
            university: this.myform.value.university,
            expertise: this.myform.value.expertise
          });
          this.toggle = true;
          this.ex_service.reloadTab({
            name: "Asset"
          });
        }
      }, {
        key: "expertise",
        get: function get() {
          this.calcDate();
          return this.myform.get('expertise');
        }
      }]);

      return EditComponentComponent;
    }();

    EditComponentComponent.ɵfac = function EditComponentComponent_Factory(t) {
      return new (t || EditComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_form_serve_service__WEBPACK_IMPORTED_MODULE_3__["FormServeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
    };

    EditComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditComponentComponent,
      selectors: [["app-edit-component"]],
      decls: 99,
      vars: 4,
      consts: [[1, "outerDiv", 3, "formGroup"], [1, "split", "left", 3, "hidden"], [1, "leftDiv"], ["required", "", "formControlName", "name", "matInput", "", "type", "text"], ["required", "", "formControlName", "email", "matInput", "", "type", "email"], ["required", "", "formControlName", "age", "matInput", "", "type", "number"], ["required", "", "formControlName", "location", "matInput", "", "type", "text"], ["required", "", "formControlName", "gender"], ["value", "male"], ["value", "Female"], ["required", "", "formControlName", "adar", "matInput", "", "type", "number"], ["required", "", "formControlName", "pan", "matInput", "", "type", "text"], [1, "rightDiv"], ["required", "", "formControlName", "qualification", "multiple", ""], ["value", "ME"], ["value", "BE"], ["value", "MBA"], ["required", "", "formControlName", "university", "matInput", "", "type", "text", "name", "", "id", ""], ["required", "", "formControlName", "about", "matInput", "", "type", "text", "name", "", "id", ""], ["formArrayName", "expertise"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [3, "click"], ["mat-raised-button", "", "color", "warn", "type", "reset", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"], [2, "text-align", "center", "padding-top", "150px", 3, "hidden"], [3, "formGroupName"], ["required", "", "formControlName", "exname"], ["value", "Java"], ["value", "Angular"], ["value", "NodeJS"], ["value", "ReactJS"], ["appearance", ""], ["matInput", "", "required", "", "formControlName", "sdate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "required", "", "formControlName", "edate", 3, "matDatepicker"], ["epicker", ""], ["formControlName", "nxp", "matInput", "", "type", "number"]],
      template: function EditComponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name is required and must be aleast 4 characters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email is required and Must be a valid one");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Age");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Age is Required and cannot be greater than 100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Location is required and must be atleast 3 characters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-radio-group", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-radio-button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Male");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-radio-button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Aadhar number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Aadhar is required and must be a valid one.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "PAN number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "PAN is required and must be a valid one.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Qualification");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-select", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "ME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "BE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "MBA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Qualification is required , Please select a valid one.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "University");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "University is required and a valid one.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "About Your Self");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "textarea", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "About your self is required and must be atleast 3 words.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, EditComponentComponent_div_82_Template, 41, 6, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditComponentComponent_Template_button_click_83_listener() {
            return ctx.onClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Add Expertise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditComponentComponent_Template_button_click_88_listener() {
            return ctx.onResset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditComponentComponent_Template_button_click_92_listener() {
            return ctx.onEdit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Submit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Form was Submitted sucessfully ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "press ESC to continue...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.myform);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.toggle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.expertise.controls);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.toggle);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioButton"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepicker"]],
      styles: [".outerDiv[_ngcontent-%COMP%]\r\n\t{\r\n\t\t\r\n\t\t\r\n        height: 400px;\r\n        width: 500px;\r\n\t\t\r\n\t}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1jb21wb25lbnQvZWRpdC1jb21wb25lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztRQUlRLGFBQWE7UUFDYixZQUFZOztDQUVuQiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtY29tcG9uZW50L2VkaXQtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXJEaXZcclxuXHR7XHJcblx0XHRcclxuXHRcdFxyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG5cdFx0XHJcblx0fVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-component',
          templateUrl: './edit-component.component.html',
          styleUrls: ['./edit-component.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _form_serve_service__WEBPACK_IMPORTED_MODULE_3__["FormServeService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/form-one/form-one.component.ts":
  /*!************************************************!*\
    !*** ./src/app/form-one/form-one.component.ts ***!
    \************************************************/

  /*! exports provided: FormOneComponent */

  /***/
  function srcAppFormOneFormOneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormOneComponent", function () {
      return FormOneComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _form_serve_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../form-serve.service */
    "./src/app/form-serve.service.ts");

    var _c0 = ["formDirective"];

    var FormOneComponent = /*#__PURE__*/function () {
      function FormOneComponent(fb, ex_service) {
        _classCallCheck(this, FormOneComponent);

        this.fb = fb;
        this.ex_service = ex_service;
        this.count = 0;
        this.myformone = this.fb.group({
          name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
          position: [],
          age: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100)]],
          location: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
          adar: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(12)]],
          email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
          pan: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
          gender: [""]
        });
      }

      _createClass(FormOneComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onResset",
        value: function onResset() {
          this.myformone.reset();
          this.formDirective.resetForm();
          this.myformone.clearAsyncValidators();
          this.myformone.markAsUntouched;
          this.myformone.markAsPristine;
          this.myformone.clearValidators();
        }
      }, {
        key: "onSubmitt",
        value: function onSubmitt(myvara) {
          this.oform = this.myformone.value;
          this.oform.position = this.count++;
          this.ex_service.addData({
            name: this.oform.name,
            position: this.oform.position,
            age: this.oform.age,
            location: this.oform.location,
            adar: this.oform.adar,
            email: this.oform.email,
            gender: this.oform.gender,
            pan: this.oform.pan,
            qualification: myvara.qualification,
            about: myvara.about,
            university: myvara.university,
            expertise: myvara.expertise
          });
          alert("Form Submitted Sucessfully");
          this.onResset();
          this.ex_service.reloadTab({
            opt: "Sucessfully reloaded table"
          });
        }
      }, {
        key: "onEdit",
        value: function onEdit(row) {
          this.myformone.patchValue({
            name: row.name,
            position: row.position,
            age: row.age,
            location: row.location,
            adar: row.adar,
            email: row.email,
            gender: row.gender,
            pan: row.pan
          });
          this.myformtw = {
            qualification: row.qualification,
            about: row.about,
            university: row.university,
            expertise: row.expertise
          };
          this.ex_service.notifyChild({
            qualification: row.qualification,
            about: row.about,
            university: row.university,
            expertise: row.expertise
          });
        }
      }, {
        key: "name",
        get: function get() {
          return this.myformone.value.name;
        }
      }, {
        key: "position",
        get: function get() {
          return this.myformone.value.position;
        }
      }, {
        key: "age",
        get: function get() {
          return this.myformone.value.age;
        }
      }, {
        key: "location",
        get: function get() {
          return this.myformone.value.location;
        }
      }, {
        key: "adar",
        get: function get() {
          return this.myformone.value.adar;
        }
      }, {
        key: "email",
        get: function get() {
          return this.myformone.value.email;
        }
      }, {
        key: "pan",
        get: function get() {
          return this.myformone.value.pan;
        }
      }, {
        key: "gender",
        get: function get() {
          return this.myformone.value.gender;
        }
      }]);

      return FormOneComponent;
    }();

    FormOneComponent.ɵfac = function FormOneComponent_Factory(t) {
      return new (t || FormOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_form_serve_service__WEBPACK_IMPORTED_MODULE_2__["FormServeService"]));
    };

    FormOneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormOneComponent,
      selectors: [["app-form-one"]],
      viewQuery: function FormOneComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formDirective = _t.first);
        }
      },
      decls: 65,
      vars: 1,
      consts: [[1, "split"], [1, "container"], [3, "formGroup"], ["formDirective", "ngForm"], [1, "left"], ["formControlName", "name", "matInput", "", "type", "text"], ["formControlName", "email", "matInput", "", "type", "email"], ["formControlName", "age", "matInput", "", "type", "number"], ["formControlName", "location", "matInput", "", "type", "text"], ["formControlName", "gender"], ["value", "male"], ["value", "Female"], ["formControlName", "adar", "matInput", "", "type", "number"], ["formControlName", "pan", "matInput", "", "type", "text"], [1, "reright"], [3, "childev", "subev"], [1, "tab"], [3, "manaev"]],
      template: function FormOneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "article");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name is required and must be aleast 4 characters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email is required and Must be a valid one");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Age");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Age is Required and cannot be greater than 100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Location is required and must be atleast 3 characters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-radio-group", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-radio-button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Male");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-radio-button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Aadhar number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Aadhar is required and must be a valid one.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "PAN number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "PAN is required and must be a valid one.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "article");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "aside", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "app-form-two", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("childev", function FormOneComponent_Template_app_form_two_childev_57_listener() {
            return ctx.onResset();
          })("subev", function FormOneComponent_Template_app_form_two_subev_57_listener($event) {
            return ctx.onSubmitt($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " hi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "app-new-form", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("manaev", function FormOneComponent_Template_app_new_form_manaev_64_listener($event) {
            return ctx.onEdit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.myformone);
        }
      },
      styles: [".container[_ngcontent-%COMP%] {\r\n      padding-top: 50px;\r\n      border-style: solid;\r\n      border: 2px solid black;\r\n      padding: 25px;;\r\n      border-radius: 5px;\r\n      background-color: white;\r\n      \r\n      \r\n      \r\n\r\n    width: 75%;}\r\n     \r\n    \r\n\r\n    .split[_ngcontent-%COMP%] {\r\n      background-color:purple;\r\n      }\r\n     \r\n    \r\n\r\n    \r\n     \r\n    \r\n\r\n    .left[_ngcontent-%COMP%] {\r\n        \r\n  \r\n        background-color: white;\r\n        \r\n      }\r\n     \r\n    \r\n\r\n    \r\n     \r\n    \r\n\r\n    .right[_ngcontent-%COMP%] {\r\n     \r\n        background-color: white;\r\n        \r\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1vbmUvZm9ybS1vbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7TUFDRSxpQkFBaUI7TUFDakIsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLHVCQUF1Qjs7Ozs7SUFLekIsVUFBVSxDQUFDOzs7O0lBSVg7TUFDRSx1QkFBdUI7TUFDdkI7Ozs7SUFFQSwwQkFBMEI7Ozs7SUFDMUI7OztRQUdFLHVCQUF1Qjs7TUFFekI7Ozs7SUFFQSwyQkFBMkI7Ozs7SUFDM0I7O1FBRUUsdUJBQXVCOztNQUV6QiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tb25lL2Zvcm0tb25lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICAgIHBhZGRpbmc6IDI1cHg7O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIFxyXG5cclxuICAgIHdpZHRoOiA3NSU7fVxyXG4gICAgIFxyXG4gICAgXHJcblxyXG4gICAgLnNwbGl0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjpwdXJwbGU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qIENvbnRyb2wgdGhlIGxlZnQgc2lkZSAqL1xyXG4gICAgICAubGVmdCB7XHJcbiAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qIENvbnRyb2wgdGhlIHJpZ2h0IHNpZGUgKi9cclxuICAgICAgLnJpZ2h0IHtcclxuICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBcclxuICAgICAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormOneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-form-one',
          templateUrl: './form-one.component.html',
          styleUrls: ['./form-one.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _form_serve_service__WEBPACK_IMPORTED_MODULE_2__["FormServeService"]
        }];
      }, {
        formDirective: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['formDirective']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/form-serve.service.ts":
  /*!***************************************!*\
    !*** ./src/app/form-serve.service.ts ***!
    \***************************************/

  /*! exports provided: FormServeService */

  /***/
  function srcAppFormServeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormServeService", function () {
      return FormServeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var FormServeService = /*#__PURE__*/function () {
      function FormServeService() {
        _classCallCheck(this, FormServeService);

        this.d1 = new Date();
        this.d2 = new Date();
        this.notify$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.reload = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.reloadObsservable$ = this.reload.asObservable();
      }
      /**
       * name
       */


      _createClass(FormServeService, [{
        key: "getData",
        value: function getData() {
          console.log(FormServeService.ulist);
          return FormServeService.ulist;
        }
      }, {
        key: "editData",
        value: function editData(usr) {
          for (var index = 0; index < FormServeService.ulist.length; index++) {
            if (usr.position == FormServeService.ulist[index].position) {
              FormServeService.ulist[index] = usr;
            }
          }
        }
      }, {
        key: "addData",
        value: function addData(usr) {
          console.log(usr);
          FormServeService.ulist[usr.position] = usr;
          console.log(FormServeService.ulist);
        }
      }, {
        key: "delData",
        value: function delData(usr) {
          for (var index = 0; index < FormServeService.ulist.length; index++) {
            if (usr.name == FormServeService.ulist[index].name) {
              FormServeService.ulist.splice(index, 1);
            }
          }
        }
        /**
         * notifyChild
         */

      }, {
        key: "notifyChild",
        value: function notifyChild(row) {
          if (row) {
            alert(row.about + row.expertise);
            this.notify$.next(row);
          } else {
            alert("Null");
          }
        }
      }, {
        key: "reloadTab",
        value: function reloadTab(row) {
          if (row) {
            this.reload.next(row);
          }
        }
      }]);

      return FormServeService;
    }();

    FormServeService.ulist = [];

    FormServeService.ɵfac = function FormServeService_Factory(t) {
      return new (t || FormServeService)();
    };

    FormServeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FormServeService,
      factory: FormServeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormServeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/form-two/form-two.component.ts":
  /*!************************************************!*\
    !*** ./src/app/form-two/form-two.component.ts ***!
    \************************************************/

  /*! exports provided: FormTwoComponent */

  /***/
  function srcAppFormTwoFormTwoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormTwoComponent", function () {
      return FormTwoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _form_serve_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../form-serve.service */
    "./src/app/form-serve.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");

    function FormTwoComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "None");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Java");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Angular");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "NodeJS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ReactJS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Expertise is required and a valid one.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Choose a Start date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-datepicker-toggle", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-datepicker", null, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Start date must be valid one.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Choose a End date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-datepicker-toggle", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-datepicker", null, 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "End date must be valid one.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "No of Years of Expertise");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormTwoComponent_div_26_Template_button_click_39_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.onClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Add Expertise");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r2 = ctx.index;

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Expertise ", i_r2 + 1, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r4);
      }
    }

    var FormTwoComponent = /*#__PURE__*/function () {
      function FormTwoComponent(fb, exserve) {
        _classCallCheck(this, FormTwoComponent);

        this.fb = fb;
        this.exserve = exserve;
        this.childev = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.subev = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.count = 0;
        this.myformtwo = this.fb.group({
          qualification: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          university: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
          about: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(15)]],
          expertise: this.fb.array([this.addExp()])
        });
      }

      _createClass(FormTwoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.subs = this.exserve.notify$.subscribe(function (res) {
            _this.myformtwo.patchValue = res;
            console.log(res);
          });
        }
      }, {
        key: "onResset",
        value: function onResset() {
          this.myformtwo.reset();
          this.childev.emit();
          this.myformtwo.clearValidators();
        }
      }, {
        key: "addExp",
        value: function addExp() {
          return this.fb.group({
            exname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            sdate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            edate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            nxp: []
          });
        }
      }, {
        key: "onClick",
        value: function onClick() {
          this.expertise.push(this.addExp());
        }
      }, {
        key: "calcDate",
        value: function calcDate() {
          var wArr = this.myformtwo.controls['expertise'].value;

          for (var index = 0; index < wArr.length; index++) {
            var edate = new Date(wArr[index].edate);
            var sdate = new Date(wArr[index].sdate);
            var yeardiff = edate.getFullYear() - sdate.getFullYear();
            this.count = yeardiff;
            wArr[index].nxp = yeardiff;
          }

          this.myformtwo.controls['expertise'].patchValue(wArr);
        }
      }, {
        key: "onSubmitt",
        value: function onSubmitt() {
          this.subev.emit(this.myformtwo.value);
          this.myformtwo.reset();
        }
      }, {
        key: "qualification",
        get: function get() {
          return this.myformtwo.value.qualification;
        }
      }, {
        key: "university",
        get: function get() {
          return this.myformtwo.value.university;
        }
      }, {
        key: "about",
        get: function get() {
          return this.myformtwo.value.about;
        }
      }, {
        key: "expertise",
        get: function get() {
          this.calcDate();
          return this.myformtwo.get('expertise');
        }
      }]);

      return FormTwoComponent;
    }();

    FormTwoComponent.ɵfac = function FormTwoComponent_Factory(t) {
      return new (t || FormTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_form_serve_service__WEBPACK_IMPORTED_MODULE_2__["FormServeService"]));
    };

    FormTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormTwoComponent,
      selectors: [["app-form-two"]],
      outputs: {
        childev: "childev",
        subev: "subev"
      },
      decls: 36,
      vars: 3,
      consts: [[3, "formGroup"], ["required", "", "formControlName", "qualification", "multiple", ""], ["value", "ME"], ["value", "BE"], ["value", "MBA"], ["required", "", "formControlName", "university", "matInput", "", "type", "text", "name", "", "id", ""], ["required", "", "formControlName", "about", "matInput", "", "type", "text", "name", "", "id", ""], ["formArrayName", "expertise"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["mat-fab", "", "color", "warn", "type", "reset", 2, "float", "left", 3, "click"], ["mat-fab", "", "color", "accent", 2, "float", "right", 3, "disabled", "click"], [3, "formGroupName"], ["required", "", "formControlName", "exname"], ["value", "Java"], ["value", "Angular"], ["value", "NodeJS"], ["value", "ReactJS"], ["appearance", ""], ["matInput", "", "required", "", "formControlName", "sdate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "required", "", "formControlName", "edate", 3, "matDatepicker"], ["epicker", ""], ["formControlName", "nxp", "matInput", "", "type", "number"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
      template: function FormTwoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Qualification");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "BE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "MBA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "University");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "University is required and a valid one.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "About Your Self");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "textarea", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "About your self is required and must be atleast 3 words.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, FormTwoComponent_div_26_Template, 41, 6, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormTwoComponent_Template_button_click_30_listener() {
            return ctx.onResset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "cached");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormTwoComponent_Template_button_click_33_listener() {
            return ctx.onSubmitt();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "done");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.myformtwo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.expertise.controls);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.myformtwo.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tdHdvL2Zvcm0tdHdvLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormTwoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-form-two',
          templateUrl: './form-two.component.html',
          styleUrls: ['./form-two.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _form_serve_service__WEBPACK_IMPORTED_MODULE_2__["FormServeService"]
        }];
      }, {
        childev: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        subev: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/indxp/indxp.component.ts":
  /*!******************************************!*\
    !*** ./src/app/indxp/indxp.component.ts ***!
    \******************************************/

  /*! exports provided: IndxpComponent */

  /***/
  function srcAppIndxpIndxpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndxpComponent", function () {
      return IndxpComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../user */
    "./src/app/user.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function IndxpComponent_div_13_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a Valid Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IndxpComponent_div_13_small_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is a Mandatory Field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IndxpComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IndxpComponent_div_13_small_1_Template, 2, 0, "small", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IndxpComponent_div_13_small_2_Template, 2, 0, "small", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.pattern);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
      }
    }

    function IndxpComponent_div_19_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password Must contain mininum 8 characters with Alpha-Numeric and One special character");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IndxpComponent_div_19_small_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is a Mandatory Field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IndxpComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IndxpComponent_div_19_small_1_Template, 2, 0, "small", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IndxpComponent_div_19_small_2_Template, 2, 0, "small", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.pattern);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);
      }
    }

    function IndxpComponent_div_25_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password Must contain mininum 8 characters with Alpha-Numeric and One special character");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IndxpComponent_div_25_small_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is a Mandatory Field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IndxpComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IndxpComponent_div_25_small_1_Template, 2, 0, "small", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IndxpComponent_div_25_small_2_Template, 2, 0, "small", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.pattern);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.required);
      }
    }

    function IndxpComponent_small_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwords doesnot Match");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IndxpComponent_small_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Select a Valid Option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IndxpComponent_small_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(It is Mandatory to Accept)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["formone"];
    };

    var IndxpComponent = /*#__PURE__*/function () {
      function IndxpComponent() {
        _classCallCheck(this, IndxpComponent);

        this.genderarr = ['Male', 'Female'];
        this.vuser = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]("", "", "", false, "");
      }

      _createClass(IndxpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("Index Component Initialized");
        }
      }, {
        key: "isDone",
        value: function isDone() {
          return !this.vuser.accept;
        }
      }, {
        key: "isSame",
        value: function isSame() {
          console.log(this.vuser.password);
          console.log(this.vuser.cpassword);

          if (this.vuser.password == this.vuser.cpassword) {
            return false;
          } else return true;
        }
      }, {
        key: "Submit",
        value: function Submit() {
          alert("Form Successfully Submitted for ,\n Email : " + this.vuser.email + ",\nPassword is : " + this.vuser.password + "\nGender:" + this.vuser.gender);
        }
      }, {
        key: "Cancel",
        value: function Cancel() {
          location.reload();
        }
      }, {
        key: "isDef",
        value: function isDef() {
          var x = this.vuser.gender;

          if (x == "") {
            return true;
          } else return false;
        }
      }]);

      return IndxpComponent;
    }();

    IndxpComponent.ɵfac = function IndxpComponent_Factory(t) {
      return new (t || IndxpComponent)();
    };

    IndxpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IndxpComponent,
      selectors: [["app-indxp"]],
      decls: 53,
      vars: 24,
      consts: [[1, "container"], ["action", ""], ["signup", "ngForm"], [1, "form-group"], ["required", "", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$", "type", "email", "name", "email", "id", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], [4, "ngIf"], ["required", "", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "type", "password", "name", "pwd", "id", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pwd", "ngModel"], ["required", "", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "type", "password", "name", "cpwd", "id", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["cpwd", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["required", "", "name", "selg", 1, "custom-select", 3, "ngModel", "ngModelChange"], ["selg", "ngModel"], ["selected", "", "value", ""], ["value", "Male"], ["value", "Female"], [1, "form-check", "mb-3"], ["required", "", "type", "checkbox", "name", "cxb", "id", "", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["cxb", "ngModel"], [1, "form-check-label"], [1, "btn-group"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-success", 3, "disabled", "click"], [3, "routerLink"], [1, "text-danger"]],
      template: function IndxpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sign-up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IndxpComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.vuser.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, IndxpComponent_div_13_Template, 3, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Password :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IndxpComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.vuser.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, IndxpComponent_div_19_Template, 3, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Confirm Password :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IndxpComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.vuser.cpassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, IndxpComponent_div_25_Template, 3, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, IndxpComponent_small_26_Template, 2, 0, "small", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IndxpComponent_Template_select_ngModelChange_28_listener($event) {
            return ctx.vuser.gender = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Accept :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Please select your Gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Male");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, IndxpComponent_small_38_Template, 2, 0, "small", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IndxpComponent_Template_input_ngModelChange_40_listener($event) {
            return ctx.vuser.accept = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Accept");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, IndxpComponent_small_45_Template, 2, 0, "small", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndxpComponent_Template_button_click_47_listener() {
            return ctx.Cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndxpComponent_Template_button_click_49_listener() {
            return ctx.Submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Topic-Four");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r1.invalid && _r1.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.vuser.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors && _r1.invalid && _r1.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r3.invalid && _r3.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.vuser.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors && _r3.invalid && _r3.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r5.invalid && _r5.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.vuser.cpassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors && _r5.invalid && _r5.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSame() && _r5.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r8.errors && _r8.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.vuser.gender);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors && _r8.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r10.invalid && _r10.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.vuser.accept);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDone() && _r10.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.form.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: ["h2[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n  .container[_ngcontent-%COMP%] {border-style: solid;\r\n    border: 2px solid black;\r\n    padding: 25px;;\r\n    border-radius: 5px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5keHAvaW5keHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtFQUNwQjtFQUNBLFlBQVksbUJBQW1CO0lBQzdCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isa0JBQWtCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9pbmR4cC9pbmR4cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5jb250YWluZXIge2JvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6IDI1cHg7O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O30iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndxpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-indxp',
          templateUrl: './indxp.component.html',
          styleUrls: ['./indxp.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/new-form/new-form.component.ts":
  /*!************************************************!*\
    !*** ./src/app/new-form/new-form.component.ts ***!
    \************************************************/

  /*! exports provided: NewFormComponent */

  /***/
  function srcAppNewFormNewFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewFormComponent", function () {
      return NewFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _edit_component_edit_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../edit-component/edit-component.component */
    "./src/app/edit-component/edit-component.component.ts");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _form_serve_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../form-serve.service */
    "./src/app/form-serve.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function NewFormComponent_mat_header_cell_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewFormComponent_mat_cell_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r27 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r27.position, " ");
      }
    }

    function NewFormComponent_mat_header_cell_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewFormComponent_mat_cell_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r28 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r28.name, " ");
      }
    }

    function NewFormComponent_mat_header_cell_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Age ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewFormComponent_mat_cell_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r29 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r29.age, " ");
      }
    }

    function NewFormComponent_mat_header_cell_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Adar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewFormComponent_mat_cell_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r30 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r30.adar, " ");
      }
    }

    function NewFormComponent_mat_header_cell_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Pan ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewFormComponent_mat_cell_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r31 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r31.pan, " ");
      }
    }

    function NewFormComponent_mat_header_cell_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewFormComponent_mat_cell_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r32 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r32.email, " ");
      }
    }

    function NewFormComponent_mat_header_cell_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Location ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewFormComponent_mat_cell_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r33 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r33.location, " ");
      }
    }

    function NewFormComponent_mat_header_cell_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Qualification ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewFormComponent_mat_cell_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r34 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r34.qualification, " ");
      }
    }

    function NewFormComponent_mat_header_cell_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " University ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewFormComponent_mat_cell_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r35 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r35.university, " ");
      }
    }

    function NewFormComponent_mat_header_cell_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " About ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewFormComponent_mat_cell_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r36 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r36.about, " ");
      }
    }

    function NewFormComponent_mat_header_cell_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Gender ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewFormComponent_mat_cell_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r37 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r37.gender, " ");
      }
    }

    function NewFormComponent_mat_header_cell_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Actions ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewFormComponent_mat_cell_41_Template(rf, ctx) {
      if (rf & 1) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewFormComponent_mat_cell_41_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var row_r38 = ctx.$implicit;

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r39.onEdit(row_r38);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewFormComponent_mat_cell_41_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var row_r38 = ctx.$implicit;

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r41.onDelete(row_r38);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewFormComponent_mat_header_row_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
      }
    }

    function NewFormComponent_mat_row_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
      }
    }

    var _c0 = function _c0() {
      return [2, 3, 5];
    };

    var ELEMENT_DATA = [];

    var NewFormComponent = /*#__PURE__*/function () {
      function NewFormComponent(iconreg, ex_service, dlg) {
        _classCallCheck(this, NewFormComponent);

        this.ex_service = ex_service;
        this.dlg = dlg;
        this.displayedColumns = ['position', 'name', 'age', 'location', 'adar', 'pan', 'email', 'gender', 'qualification', 'about', 'university', 'action'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
        this.manaev = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(NewFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          ELEMENT_DATA = this.ex_service.getData();
          console.log(ELEMENT_DATA);
          this.reloadSub = this.ex_service.reloadObsservable$.subscribe(function (res) {
            if (res) {
              _this2.onReload();
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.reloadSub.unsubscribe();
        }
      }, {
        key: "onReload",
        value: function onReload() {
          this.dataSource.data = this.ex_service.getData();
          console.log(this.ex_service.getData());
          console.log(this.dataSource);
          this.mytab.renderRows();
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        }
      }, {
        key: "onSearch",
        value: function onSearch(fil) {
          this.dataSource.filter = fil.trim().toLowerCase();
        }
      }, {
        key: "onEdit",
        value: function onEdit(row) {
          this.dlg.open(_edit_component_edit_component_component__WEBPACK_IMPORTED_MODULE_2__["EditComponentComponent"], {
            data: row
          });
          this.manaev.emit(row);
        }
      }, {
        key: "onDelete",
        value: function onDelete(row) {
          this.ex_service.delData(row);
          alert("deleted sucessfully");
          this.mytab.renderRows();
        }
      }]);

      return NewFormComponent;
    }();

    NewFormComponent.ɵfac = function NewFormComponent_Factory(t) {
      return new (t || NewFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_form_serve_service__WEBPACK_IMPORTED_MODULE_6__["FormServeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]));
    };

    NewFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewFormComponent,
      selectors: [["app-new-form"]],
      viewQuery: function NewFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mytab = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        }
      },
      outputs: {
        manaev: "manaev"
      },
      decls: 45,
      vars: 5,
      consts: [[1, "ng-container"], [1, "newm"], ["matInput", "", "placeholder", "Search", 3, "keyup"], ["matSort", "", 3, "dataSource"], ["mytab", ""], [2, "background-color", "black"], ["matColumnDef", "position"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "age"], ["matColumnDef", "adar"], ["matColumnDef", "pan"], ["matColumnDef", "email"], ["matColumnDef", "location"], ["matColumnDef", "qualification"], ["matColumnDef", "university"], ["matColumnDef", "about"], ["matColumnDef", "gender"], ["matColumnDef", "action"], [4, "matHeaderCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-sort-header", ""], ["mat-mini-fab", "", "color", "primary", 3, "click"], ["mat-mini-fab", "", "color", "warn", "aria-hidden", "false", 3, "click"]],
      template: function NewFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function NewFormComponent_Template_input_keyup_2_listener($event) {
            return ctx.onSearch($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-table", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NewFormComponent_mat_header_cell_7_Template, 3, 0, "mat-header-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NewFormComponent_mat_cell_8_Template, 2, 1, "mat-cell", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NewFormComponent_mat_header_cell_10_Template, 3, 0, "mat-header-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NewFormComponent_mat_cell_11_Template, 2, 1, "mat-cell", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NewFormComponent_mat_header_cell_13_Template, 3, 0, "mat-header-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NewFormComponent_mat_cell_14_Template, 2, 1, "mat-cell", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NewFormComponent_mat_header_cell_16_Template, 3, 0, "mat-header-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NewFormComponent_mat_cell_17_Template, 2, 1, "mat-cell", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NewFormComponent_mat_header_cell_19_Template, 3, 0, "mat-header-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NewFormComponent_mat_cell_20_Template, 2, 1, "mat-cell", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NewFormComponent_mat_header_cell_22_Template, 3, 0, "mat-header-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, NewFormComponent_mat_cell_23_Template, 2, 1, "mat-cell", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, NewFormComponent_mat_header_cell_25_Template, 3, 0, "mat-header-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NewFormComponent_mat_cell_26_Template, 2, 1, "mat-cell", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, NewFormComponent_mat_header_cell_28_Template, 3, 0, "mat-header-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, NewFormComponent_mat_cell_29_Template, 2, 1, "mat-cell", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, NewFormComponent_mat_header_cell_31_Template, 3, 0, "mat-header-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, NewFormComponent_mat_cell_32_Template, 2, 1, "mat-cell", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](33, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, NewFormComponent_mat_header_cell_34_Template, 3, 0, "mat-header-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, NewFormComponent_mat_cell_35_Template, 2, 1, "mat-cell", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](36, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, NewFormComponent_mat_header_cell_37_Template, 3, 0, "mat-header-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, NewFormComponent_mat_cell_38_Template, 2, 1, "mat-cell", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](39, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, NewFormComponent_mat_header_cell_40_Template, 3, 0, "mat-header-cell", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, NewFormComponent_mat_cell_41_Template, 7, 0, "mat-cell", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, NewFormComponent_mat_header_row_42_Template, 1, 0, "mat-header-row", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, NewFormComponent_mat_row_43_Template, 1, 0, "mat-row", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "mat-paginator", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
      styles: ["mar-paginator[_ngcontent-%COMP%]{\r\n  padding:0,25px,25px,25px;\r\n\r\n}\r\n.newm[_ngcontent-%COMP%]{\r\n  padding-top: 10px;\r\n background-color: white;\r\n padding-left: 583px;\r\n padding-right: 584px;\r\n align-items: center;\r\n align-content: center;\r\n text-align: center;\r\n   \r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWZvcm0vbmV3LWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0Usd0JBQXdCOztBQUUxQjtBQUNBO0VBQ0UsaUJBQWlCO0NBQ2xCLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsb0JBQW9CO0NBQ3BCLG1CQUFtQjtDQUNuQixxQkFBcUI7Q0FDckIsa0JBQWtCOzs7QUFHbkIiLCJmaWxlIjoic3JjL2FwcC9uZXctZm9ybS9uZXctZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5tYXItcGFnaW5hdG9ye1xyXG4gIHBhZGRpbmc6MCwyNXB4LDI1cHgsMjVweDtcclxuXHJcbn1cclxuLm5ld217XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuIHBhZGRpbmctbGVmdDogNTgzcHg7XHJcbiBwYWRkaW5nLXJpZ2h0OiA1ODRweDtcclxuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIFxyXG5cclxufSBcclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-new-form',
          templateUrl: './new-form.component.html',
          styleUrls: ['./new-form.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"]
        }, {
          type: _form_serve_service__WEBPACK_IMPORTED_MODULE_6__["FormServeService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
        }];
      }, {
        mytab: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], {
            "static": true
          }]
        }],
        manaev: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]]
        }],
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/user.ts":
  /*!*************************!*\
    !*** ./src/app/user.ts ***!
    \*************************/

  /*! exports provided: User */

  /***/
  function srcAppUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = function User(email, password, cpassword, accept, gender) {
      _classCallCheck(this, User);

      this.email = email;
      this.password = password;
      this.cpassword = cpassword;
      this.accept = accept;
      this.gender = gender;
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\prane\OneDrive\Desktop\py\angular\Ang froms\my-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map