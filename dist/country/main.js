(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/richardyan/Desktop/projects/country/src/main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/mode */ "xOnX");



class HeaderComponent {
    constructor() {
        this.theme = src_app_models_mode__WEBPACK_IMPORTED_MODULE_1__["Mode"].LIGHT;
    }
    ngOnInit() {
        const savedTheme = window.localStorage.getItem("theme");
        if (savedTheme && savedTheme === src_app_models_mode__WEBPACK_IMPORTED_MODULE_1__["Mode"].DARK) {
            this.theme = savedTheme;
            document.body.setAttribute("data-theme", this.theme);
        }
    }
    toggleTheme() {
        this.theme = this.theme === src_app_models_mode__WEBPACK_IMPORTED_MODULE_1__["Mode"].DARK ? src_app_models_mode__WEBPACK_IMPORTED_MODULE_1__["Mode"].LIGHT : src_app_models_mode__WEBPACK_IMPORTED_MODULE_1__["Mode"].DARK;
        document.body.setAttribute("data-theme", this.theme);
        window.localStorage.setItem("theme", this.theme);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 8, vars: 0, consts: [[1, "nav-title"], [1, "nav-mode", 3, "click"], [1, "fas", "fa-moon"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Where in the world?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_4_listener() { return ctx.toggleTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dark Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["header[_ngcontent-%COMP%] {\n  background-color: var(--header-bg-color);\n  transition: background 0.3s;\n  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.2);\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  min-width: var(--min-width);\n  max-width: var(--max-width);\n  margin: auto;\n  min-height: 5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 2rem;\n  box-sizing: border-box;\n  font-size: var(--header-text-size);\n  font-weight: 600;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-title[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: bold;\n  color: var(--header-text-color);\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-mode[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-mode[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.82em;\n  margin-right: 0.5em;\n}\n@media (max-width: 480px) {\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-title[_ngcontent-%COMP%] {\n    font-size: 1.1em;\n  }\n  header[_ngcontent-%COMP%]   .nav-mode[_ngcontent-%COMP%] {\n    font-size: var(--page-text-size);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhDQUFBO0FBQ0Y7QUFBRTtFQUNFLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQURJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBR047QUFESTtFQUNFLGVBQUE7QUFHTjtBQUZNO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUlSO0FBQUU7RUFDRTtJQUNFLGdCQUFBO0VBRUo7RUFBRTtJQUNFLGdDQUFBO0VBRUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJnLWNvbG9yKTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBuYXYge1xyXG4gICAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpO1xyXG4gICAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogNXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAycmVtO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taGVhZGVyLXRleHQtc2l6ZSk7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgLm5hdi10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogdmFyKC0taGVhZGVyLXRleHQtY29sb3IpO1xyXG4gICAgfVxyXG4gICAgLm5hdi1tb2RlIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBpIHtcclxuICAgICAgICBmb250LXNpemU6IDAuODJlbTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgbmF2IC5uYXYtdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgfVxyXG4gICAgLm5hdi1tb2RlIHtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1wYWdlLXRleHQtc2l6ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseURL: 'https://restcountries.com/v3.1/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "K5GV":
/*!*******************************************!*\
  !*** ./src/app/states/country.reducer.ts ***!
  \*******************************************/
/*! exports provided: countryAdapter, countryReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countryAdapter", function() { return countryAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countryReducer", function() { return countryReducer; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "R0sL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _country_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country.actions */ "s7yh");



const countryAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])();
const initialState = countryAdapter.getInitialState({
    ids: [],
    entities: {},
    selectedCountryId: null,
    loading: false,
    loaded: false,
    error: '',
});
const countryReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_country_actions__WEBPACK_IMPORTED_MODULE_2__["setLoadingAction"], (state, { loading }) => (Object.assign(Object.assign({}, state), { loading }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_country_actions__WEBPACK_IMPORTED_MODULE_2__["loadCountriesSuccessAction"], (state, { countries }) => {
    return countryAdapter.addMany(countries, Object.assign(Object.assign({}, state), { loading: false, loaded: true, error: '' }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_country_actions__WEBPACK_IMPORTED_MODULE_2__["loadCountriesFailAction"], (state) => (Object.assign(Object.assign({}, state), { loading: false, loaded: false, error: 'Fail to load country list' }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_country_actions__WEBPACK_IMPORTED_MODULE_2__["getCountryAction"], (state, { id }) => (Object.assign(Object.assign({}, state), { selectedCountryId: id }))));


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _states_country_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./states/country.actions */ "s7yh");
/* harmony import */ var _states_country_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./states/country.selectors */ "w2sJ");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








function AppComponent_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 2);
} }
class AppComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.dispatch(Object(_states_country_actions__WEBPACK_IMPORTED_MODULE_1__["loadCountriesAction"])());
        this.loading$ = this.store.select(_states_country_selectors__WEBPACK_IMPORTED_MODULE_2__["selectLoading"]);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 3, consts: [["role", "main", 1, "container"], ["class", "fa fa-spinner fa-spin fa-3x fa-fw", 4, "ngIf"], [1, "fa", "fa-spinner", "fa-spin", "fa-3x", "fa-fw"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_i_2_Template, 1, 0, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.loading$));
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: var(--min-width);\n  max-width: var(--max-width);\n  margin: auto;\n  padding: 1.5rem 2rem;\n  box-sizing: border-box;\n}\n\nsvg#clouds[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -160px;\n  left: -230px;\n  z-index: -10;\n  width: 1920px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoKTtcclxuICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCk7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbnN2ZyNjbG91ZHMge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IC0xNjBweDtcclxuICBsZWZ0OiAtMjMwcHg7XHJcbiAgei1pbmRleDogLTEwO1xyXG4gIHdpZHRoOiAxOTIwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "UIJH":
/*!*************************************************!*\
  !*** ./src/app/service/path-resolve.service.ts ***!
  \*************************************************/
/*! exports provided: PathResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathResolveService", function() { return PathResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const paths = {
    home: 'home',
    countries: 'countries',
    contact: 'contact'
};
class PathResolveService {
    constructor() { }
    resolve(route, state) {
        const typoPath = state.url.replace('/', '');
        console.log(state.url, typoPath);
        const threshold = this.getThreshold(typoPath);
        const dictionary = Object.values(paths)
            .filter(path => Math.abs(path.length - typoPath.length) < threshold);
        console.log(dictionary);
        if (!dictionary.length)
            return null;
        this.sortByDistances(typoPath, dictionary);
        return `/${dictionary[0]}`;
    }
    getThreshold(path) {
        if (path.length < 5)
            return 3;
        return 5;
    }
    sortByDistances(typoPath, dictionary) {
        const pathsDistance = {};
        dictionary.sort((a, b) => {
            if (!(a in pathsDistance)) {
                pathsDistance[a] = this.levenshtein(a, typoPath);
            }
            if (!(b in pathsDistance)) {
                pathsDistance[b] = this.levenshtein(b, typoPath);
            }
            return pathsDistance[a] - pathsDistance[b];
        });
    }
    levenshtein(a, b) {
        if (a.length == 0) {
            return b.length;
        }
        if (b.length == 0) {
            return a.length;
        }
        const matrix = [];
        // increment along the first column of each row
        for (let i = 0; i <= b.length; i++) {
            matrix[i] = [i];
        }
        // increment each column in the first row
        for (let j = 0; j <= a.length; j++) {
            matrix[0][j] = j;
        }
        // Fill in the rest of the matrix
        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) == a.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                }
                else {
                    matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, // substitution
                    matrix[i][j - 1] + 1, // insertion
                    matrix[i - 1][j] + 1);
                }
            }
        }
        return matrix[b.length][a.length];
    }
}
PathResolveService.ɵfac = function PathResolveService_Factory(t) { return new (t || PathResolveService)(); };
PathResolveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PathResolveService, factory: PathResolveService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PathResolveService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _service_country_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/country.service */ "sByV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _states_country_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./states/country.reducer */ "K5GV");
/* harmony import */ var _states_country_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./states/country.effects */ "xgbN");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "v2M4");
/* harmony import */ var _service_path_resolve_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/path-resolve.service */ "UIJH");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/environments/environment */ "AytR");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_service_country_service__WEBPACK_IMPORTED_MODULE_5__["CountryService"], _service_path_resolve_service__WEBPACK_IMPORTED_MODULE_13__["PathResolveService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot({ state: _states_country_reducer__WEBPACK_IMPORTED_MODULE_9__["countryReducer"] }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([_states_country_effects__WEBPACK_IMPORTED_MODULE_10__["CountryEffects"]]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_2__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production,
                autoPause: true,
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
        _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_2__["StoreDevtoolsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                    _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot({ state: _states_country_reducer__WEBPACK_IMPORTED_MODULE_9__["countryReducer"] }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([_states_country_effects__WEBPACK_IMPORTED_MODULE_10__["CountryEffects"]]),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_2__["StoreDevtoolsModule"].instrument({
                        maxAge: 25,
                        logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production,
                        autoPause: true,
                    }),
                ],
                providers: [_service_country_service__WEBPACK_IMPORTED_MODULE_5__["CountryService"], _service_path_resolve_service__WEBPACK_IMPORTED_MODULE_13__["PathResolveService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "s7yh":
/*!*******************************************!*\
  !*** ./src/app/states/country.actions.ts ***!
  \*******************************************/
/*! exports provided: ActionTypes, getCountryAction, setLoadingAction, loadCountriesAction, loadCountriesSuccessAction, loadCountriesFailAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountryAction", function() { return getCountryAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoadingAction", function() { return setLoadingAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCountriesAction", function() { return loadCountriesAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCountriesSuccessAction", function() { return loadCountriesSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCountriesFailAction", function() { return loadCountriesFailAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

var ActionTypes;
(function (ActionTypes) {
    ActionTypes["LOAD_COUNTRIES"] = "LOAD_COUNTRIES";
    ActionTypes["LOAD_COUNTRIES_SUCCESS"] = "LOAD_COUNTRIES_SUCCESS";
    ActionTypes["LOAD_COUNTRIES_FAIL"] = "LOAD_COUNTRIES_FAIL";
    ActionTypes["GET_COUNTRY"] = "GET_COUNTRY";
    ActionTypes["SET_LOADING"] = "SET_LOADING";
})(ActionTypes || (ActionTypes = {}));
const getCountryAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.GET_COUNTRY, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setLoadingAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.SET_LOADING, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadCountriesAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.LOAD_COUNTRIES);
const loadCountriesSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.LOAD_COUNTRIES_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadCountriesFailAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.LOAD_COUNTRIES_FAIL);


/***/ }),

/***/ "sByV":
/*!********************************************!*\
  !*** ./src/app/service/country.service.ts ***!
  \********************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





const baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseURL;
class CountryService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(`${baseURL}/all`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => this.process(data)));
    }
    process(data) {
        const countryList = [], dict = {}, regionDict = {};
        data.forEach((country) => {
            dict[country["cca3"]] = country["name"]['common'];
            if (country["region"].trim())
                regionDict[country["region"]] = 1;
            const c = {
                id: country["cca3"],
                name: country["name"]['common'],
                officialName: country["name"]['official'],
                population: country["population"],
                capital: country["capital"],
                region: country["region"],
                subregion: country["subregion"],
                flag: country["flags"]['png'],
                topLevelDomain: country["tld"],
                currencies: country["currencies"] ? Object.values(country["currencies"]).map(c => c['name']) : [],
                languages: country["languages"] ? Object.values(country["languages"]) : [],
                borders: country["borders"],
            };
            countryList.push(c);
        });
        return countryList.sort((c1, c2) => c1.name > c2.name ? 1 : -1);
    }
}
CountryService.ɵfac = function CountryService_Factory(t) { return new (t || CountryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
CountryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CountryService, factory: CountryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "v2M4":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class NotFoundComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe((data) => {
            console.log(data);
            this.path = data.path;
        });
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 1, vars: 1, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 404 - Page not found You might want to go to the \"", ctx.path, "\" page ");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                // templateUrl: './not-found.component.html',
                // styleUrls: ['./not-found.component.scss'],
                template: `
    404 - Page not found 
    
    You might want to go to the "{{ path }}" page
  `,
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "v2M4");
/* harmony import */ var _service_path_resolve_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/path-resolve.service */ "UIJH");






const routes = [
    { path: '', redirectTo: 'countries', pathMatch: 'full' },
    {
        path: 'countries',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-home-home-module */ "pages-home-home-module").then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "99Un")).then(m => m.HomeModule)
    }, {
        path: 'country/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-country-country-module */ "pages-country-country-module").then(__webpack_require__.bind(null, /*! ./pages/country/country.module */ "mmpa")).then(m => m.CountryModule)
    },
    {
        path: '**',
        resolve: {
            path: _service_path_resolve_service__WEBPACK_IMPORTED_MODULE_3__["PathResolveService"]
        },
        component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "w2sJ":
/*!*********************************************!*\
  !*** ./src/app/states/country.selectors.ts ***!
  \*********************************************/
/*! exports provided: selectCountries, selectLoading, selectLoaded, selectRegions, getSelectedCountryId, selectCountry, getCountryDict */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCountries", function() { return selectCountries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoading", function() { return selectLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoaded", function() { return selectLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRegions", function() { return selectRegions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedCountryId", function() { return getSelectedCountryId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCountry", function() { return selectCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountryDict", function() { return getCountryDict; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _country_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country.reducer */ "K5GV");


const getCountryFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('state');
const { selectAll } = _country_reducer__WEBPACK_IMPORTED_MODULE_1__["countryAdapter"].getSelectors();
const selectCountries = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCountryFeatureState, selectAll);
const selectLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])((state) => state['state'], (state) => state.loading);
const selectLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])((state) => state['state'], (state) => state.loaded);
const selectRegions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCountryFeatureState, (state) => {
    const regionDict = Object.values(state.entities).reduce((acc, curr) => (Object.assign(Object.assign({}, acc), { [curr.region]: 1 })), {});
    return Object.keys(regionDict);
});
const getSelectedCountryId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCountryFeatureState, (state) => state.selectedCountryId);
const selectCountry = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCountryFeatureState, 
// selectEntities,
// getSelectedCountryId,
// (entities, id) => entities[id]
(state) => state.entities[state.selectedCountryId]);
const getCountryDict = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCountryFeatureState, (state) => Object.keys(state.entities).reduce((acc, curr) => (Object.assign(Object.assign({}, acc), { [curr]: state.entities[curr].name })), {}));


/***/ }),

/***/ "xOnX":
/*!********************************!*\
  !*** ./src/app/models/mode.ts ***!
  \********************************/
/*! exports provided: Mode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mode", function() { return Mode; });
var Mode;
(function (Mode) {
    Mode["LIGHT"] = "light";
    Mode["DARK"] = "dark";
})(Mode || (Mode = {}));


/***/ }),

/***/ "xgbN":
/*!*******************************************!*\
  !*** ./src/app/states/country.effects.ts ***!
  \*******************************************/
/*! exports provided: CountryEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryEffects", function() { return CountryEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _country_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country.actions */ "s7yh");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _service_country_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/country.service */ "sByV");









class CountryEffects {
    constructor(store, actions$, countryService) {
        this.store = store;
        this.actions$ = actions$;
        this.countryService = countryService;
        this.loadCountries$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_country_actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].LOAD_COUNTRIES), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.store.dispatch(Object(_country_actions__WEBPACK_IMPORTED_MODULE_2__["setLoadingAction"])({ loading: true }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => this.countryService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((countries) => Object(_country_actions__WEBPACK_IMPORTED_MODULE_2__["loadCountriesSuccessAction"])({ countries })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Object(_country_actions__WEBPACK_IMPORTED_MODULE_2__["loadCountriesFailAction"])()))))));
    }
}
CountryEffects.ɵfac = function CountryEffects_Factory(t) { return new (t || CountryEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_country_service__WEBPACK_IMPORTED_MODULE_6__["CountryService"])); };
CountryEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CountryEffects, factory: CountryEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }, { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _service_country_service__WEBPACK_IMPORTED_MODULE_6__["CountryService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map