(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+8Fg":
/*!****************************************************!*\
  !*** ./src/app/aside-menu/aside-menu.component.ts ***!
  \****************************************************/
/*! exports provided: AsideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideMenuComponent", function() { return AsideMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _progress_kendo_angular_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/kendo-angular-menu */ "3l5A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function AsideMenuComponent_ng_template_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("k-icon ", item_r1.icon, "");
} }
function AsideMenuComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AsideMenuComponent_ng_template_2_span_1_Template, 1, 3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.item;
    const index_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("kendoMenuItemLink", index_r2)("routerLink", item_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.icon);
} }
class AsideMenuComponent {
    constructor(router) {
        this.router = router;
        this.items = this.mapItems(router.config);
    }
    mapItems(routes, path) {
        return routes.map(item => {
            const result = {
                icon: item.icon,
                path: (path ? `${path}/` : '') + item.path
            };
            return result;
        });
    }
    ngOnInit() {
    }
}
AsideMenuComponent.ɵfac = function AsideMenuComponent_Factory(t) { return new (t || AsideMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AsideMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsideMenuComponent, selectors: [["app-aside-menu"]], decls: 3, vars: 2, consts: [[1, "navigation"], [3, "items", "vertical"], ["kendoMenuItemLinkTemplate", ""], [3, "kendoMenuItemLink", "routerLink"], [3, "class", 4, "ngIf"]], template: function AsideMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "kendo-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AsideMenuComponent_ng_template_2_Template, 2, 3, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items)("vertical", true);
    } }, directives: [_progress_kendo_angular_menu__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _progress_kendo_angular_menu__WEBPACK_IMPORTED_MODULE_2__["ItemLinkTemplateDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _progress_kendo_angular_menu__WEBPACK_IMPORTED_MODULE_2__["LinkDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".navigation[_ngcontent-%COMP%]{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height: calc(100vh - 170px);\r\n    border: 1px solid black;\r\n    padding: 10px;\r\n    border-top: 0px;\r\n    border-bottom: 0px;\r\n}\r\n\r\n.k-menu-vertical[_ngcontent-%COMP%]{\r\n    padding-top: 30px;\r\n}\r\n\r\na.k-menu-link[_ngcontent-%COMP%] {\r\n    margin: 10px auto;\r\n    padding: 10px !important;\r\n}\r\n\r\n.k-icon[_ngcontent-%COMP%]{\r\n    font-size: 45px;\r\n    margin: 0 auto;\r\n    color: #000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzaWRlLW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxXQUFXO0FBQ2YiLCJmaWxlIjoiYXNpZGUtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb257XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNzBweCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5rLW1lbnUtdmVydGljYWx7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuYS5rLW1lbnUtbGluayB7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmstaWNvbntcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! Y:\ТЕСТОВОЕ\test-Stoyanova\src\main.ts */"zUnb");


/***/ }),

/***/ "0bJH":
/*!**********************************************************!*\
  !*** ./src/app/search-images/search-images.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchImagesComponent", function() { return SearchImagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_flickr_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/flickr.service */ "0g4Q");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "xoAz");
/* harmony import */ var _foto_display_foto_display_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../foto-display/foto-display.component */ "L1lT");




class SearchImagesComponent {
    constructor(flickServise) {
        this.flickServise = flickServise;
        this.images = [];
    }
    ngOnInit() {
        this.currentComponent = 'Search';
    }
    search(event) {
        this.keyword = event.target.value.toLowerCase();
        if (this.keyword && this.keyword.length > 0) {
            this.flickServise.search_keyword(this.keyword)
                .toPromise()
                .then(res => {
                this.images = res;
            });
        }
    }
}
SearchImagesComponent.ɵfac = function SearchImagesComponent_Factory(t) { return new (t || SearchImagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_flickr_service__WEBPACK_IMPORTED_MODULE_1__["FlickrService"])); };
SearchImagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchImagesComponent, selectors: [["app-search-images"]], decls: 4, vars: 2, consts: [[1, "container"], [1, "form-group"], ["kendoTextBox", "", "type", "search", "placeholder", "Find images", 1, "search-input", 3, "change"], [3, "parentComponent", "images"]], template: function SearchImagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SearchImagesComponent_Template_input_change_2_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-foto-display", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentComponent", ctx.currentComponent)("images", ctx.images);
    } }, directives: [_progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_2__["TextBoxDirective"], _foto_display_foto_display_component__WEBPACK_IMPORTED_MODULE_3__["FotoDisplayComponent"]], styles: ["[_nghost-%COMP%]{\r\n    width: 100%;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding: 30px;\r\n}\r\n.defaultText[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n}\r\n.search-input[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n    padding: 5px;\r\n    font-size: 16px;\r\n    border-color: #000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1pbWFnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzZWFyY2gtaW1hZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbi5kZWZhdWx0VGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnNlYXJjaC1pbnB1dHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDA7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "0g4Q":
/*!********************************************!*\
  !*** ./src/app/services/flickr.service.ts ***!
  \********************************************/
/*! exports provided: FlickrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrService", function() { return FlickrService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class FlickrService {
    constructor(http) {
        this.http = http;
    }
    search_keyword(key) {
        const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
        const params = `api_key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].flickr.key}&text=${key}&format=json&nojsoncallback=1`;
        return this.http.get(url + params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((res) => {
            const urlArr = [];
            res.photos.photo.forEach((photoItem) => {
                const photoObj = {
                    url: `https://live.staticflickr.com/${photoItem.server}/${photoItem.id}_${photoItem.secret}.jpg`,
                    title: photoItem.title
                };
                urlArr.push(photoObj);
            });
            return urlArr;
        }));
    }
}
FlickrService.ɵfac = function FlickrService_Factory(t) { return new (t || FlickrService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
FlickrService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FlickrService, factory: FlickrService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _search_images_search_images_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search-images/search-images.component */ "0bJH");


class HomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 1, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-search-images");
    } }, directives: [_search_images_search_images_component__WEBPACK_IMPORTED_MODULE_1__["SearchImagesComponent"]], styles: ["[_nghost-%COMP%] {\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbjpob3N0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Amxa":
/*!************************************************************!*\
  !*** ./src/app/foto-item-book/foto-item-book.component.ts ***!
  \************************************************************/
/*! exports provided: FotoItemBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotoItemBookComponent", function() { return FotoItemBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/local-storage.service */ "DRYZ");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "Nb5R");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "yq7R");





class FotoItemBookComponent {
    constructor(localStorageService) {
        this.localStorageService = localStorageService;
        this.deleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    deleteItem(del) {
        this.localStorageService.removeItem(this.image.image.title);
        this.deleted.emit(del);
    }
}
FotoItemBookComponent.ɵfac = function FotoItemBookComponent_Factory(t) { return new (t || FotoItemBookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"])); };
FotoItemBookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FotoItemBookComponent, selectors: [["app-foto-item-book"]], inputs: { image: "image" }, outputs: { deleted: "deleted" }, decls: 6, vars: 2, consts: [[1, "imageBox", 3, "width"], [1, "k-hbox"], [3, "src"], ["kendoButton", "", "type", "button", "look", "outline", 1, "button", "delete-save", 3, "click"]], template: function FotoItemBookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "kendo-card-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "kendo-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FotoItemBookComponent_Template_button_click_4_listener() { return ctx.deleteItem(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Remove me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.image["image"]["url"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_2__["CardHeaderComponent"], _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_2__["CardBodyComponent"], _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_3__["Button"]], styles: [".k-hbox[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    max-height: 290px;\r\n    padding: 0px;\r\n}\r\n\r\n.k-hbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    object-fit: contain;\r\n    height: inherit;\r\n}\r\n\r\nkendo-card.imageBox[_ngcontent-%COMP%]{\r\n    border: 1px solid black;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n    padding: 5px;\r\n    margin-bottom: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvdG8taXRlbS1ib29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJmb3RvLWl0ZW0tYm9vay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmstaGJveHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDI5MHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uay1oYm94IGltZ3tcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbmtlbmRvLWNhcmQuaW1hZ2VCb3h7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuXHJcbi5idXR0b257XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiJdfQ== */"] });


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
    flickr: {
        key: '9c253ccc4764e0e83249ad2198c10b8d'
    }
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

/***/ "Bhsp":
/*!************************************************!*\
  !*** ./src/app/bookmark/bookmark.component.ts ***!
  \************************************************/
/*! exports provided: BookmarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarkComponent", function() { return BookmarkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _foto_display_foto_display_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../foto-display/foto-display.component */ "L1lT");


class BookmarkComponent {
    constructor() {
        this.currentComponent = 'Bookmark';
    }
    ngOnInit() {
    }
}
BookmarkComponent.ɵfac = function BookmarkComponent_Factory(t) { return new (t || BookmarkComponent)(); };
BookmarkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookmarkComponent, selectors: [["app-bookmark"]], decls: 1, vars: 1, consts: [[3, "parentComponent"]], template: function BookmarkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-foto-display", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentComponent", ctx.currentComponent);
    } }, directives: [_foto_display_foto_display_component__WEBPACK_IMPORTED_MODULE_1__["FotoDisplayComponent"]], styles: ["[_nghost-%COMP%] {\r\n    width: 100%;\r\n    padding: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2ttYXJrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQiIsImZpbGUiOiJib29rbWFyay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "DRYZ":
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LocalStorageService {
    constructor() { }
    setItem(key, value) {
        localStorage.setItem(key, value);
    }
    getItem(key) {
        return localStorage.getItem(key);
    }
    removeItem(key) {
        localStorage.removeItem(key);
    }
    getAllItem() {
        return Object.keys(localStorage).map(key => this.getItem(key));
    }
    clear() {
        localStorage.clear();
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "L0XU":
/*!**************************************************!*\
  !*** ./src/app/foto-item/foto-item.component.ts ***!
  \**************************************************/
/*! exports provided: FotoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotoItemComponent", function() { return FotoItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/local-storage.service */ "DRYZ");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "Nb5R");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "yq7R");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "xoAz");





class FotoItemComponent {
    constructor(localStorageService) {
        this.localStorageService = localStorageService;
        this.tag = '';
    }
    ngOnInit() {
    }
    saveTag(event) {
        console.dir(this.image);
        this.tag = event.target.value;
    }
    saveItem(event) {
        const imageItem = {
            image: this.image,
            imageTag: this.tag
        };
        event.target.setAttribute('disabled', true);
        this.localStorageService.setItem(this.image.title, JSON.stringify(imageItem));
    }
}
FotoItemComponent.ɵfac = function FotoItemComponent_Factory(t) { return new (t || FotoItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"])); };
FotoItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FotoItemComponent, selectors: [["app-foto-item"]], inputs: { image: "image" }, decls: 8, vars: 3, consts: [[1, "imageBox", 3, "width"], [1, "k-hbox"], [3, "src"], ["kendoButton", "", "type", "button", "look", "outline", 1, "button", "image-save", 3, "click"], ["placeholder", "Add some tag", 1, "tagField", 3, "clearButton", "change"]], template: function FotoItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "kendo-card-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "kendo-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FotoItemComponent_Template_button_click_4_listener($event) { return ctx.saveItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bookmark me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "kendo-textbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FotoItemComponent_Template_kendo_textbox_change_7_listener($event) { return ctx.saveTag($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.image["url"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clearButton", true);
    } }, directives: [_progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_2__["CardHeaderComponent"], _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_2__["CardBodyComponent"], _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_3__["Button"], _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_4__["TextBoxComponent"]], styles: [".k-hbox[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    max-height: 290px;\r\n    padding: 0px;\r\n}\r\n\r\n.k-hbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    object-fit: contain;\r\n    height: inherit;\r\n}\r\n\r\nkendo-card.imageBox[_ngcontent-%COMP%]{\r\n    border: 1px solid black;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n    padding: 5px;\r\n    margin-bottom: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvdG8taXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUdBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixtQkFBbUI7QUFDdkIiLCJmaWxlIjoiZm90by1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuay1oYm94e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWF4LWhlaWdodDogMjkwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5rLWhib3ggaW1ne1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxufVxyXG5cclxua2VuZG8tY2FyZC5pbWFnZUJveHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5cclxuLmJ1dHRvbntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "L1lT":
/*!********************************************************!*\
  !*** ./src/app/foto-display/foto-display.component.ts ***!
  \********************************************************/
/*! exports provided: FotoDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotoDisplayComponent", function() { return FotoDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/local-storage.service */ "DRYZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "Nb5R");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _foto_item_foto_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../foto-item/foto-item.component */ "L0XU");
/* harmony import */ var _foto_item_book_foto_item_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../foto-item-book/foto-item-book.component */ "Amxa");







function FotoDisplayComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No images here. Would you try to search ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FotoDisplayComponent_div_2_pagination_controls_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination-controls", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function FotoDisplayComponent_div_2_pagination_controls_1_Template_pagination_controls_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.p = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FotoDisplayComponent_div_2_kendo_tilelayout_item_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-tilelayout-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-foto-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("col", i_r8 % 3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", image_r7);
} }
const _c0 = function (a1) { return { itemsPerPage: 12, currentPage: a1 }; };
function FotoDisplayComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FotoDisplayComponent_div_2_pagination_controls_1_Template, 1, 0, "pagination-controls", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "kendo-tilelayout", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FotoDisplayComponent_div_2_kendo_tilelayout_item_3_Template, 2, 2, "kendo-tilelayout-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.images.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", 3)("rowHeight", 400)("reorderable", true)("resizable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 6, ctx_r1.images, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx_r1.p)));
} }
function FotoDisplayComponent_div_3_kendo_tilelayout_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-tilelayout-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-foto-item-book", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleted", function FotoDisplayComponent_div_3_kendo_tilelayout_item_2_Template_app_foto_item_book_deleted_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.onDelete($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("col", i_r11 % 3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", image_r10);
} }
function FotoDisplayComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "kendo-tilelayout", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FotoDisplayComponent_div_3_kendo_tilelayout_item_2_Template, 2, 2, "kendo-tilelayout-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", 3)("rowHeight", 400)("reorderable", true)("resizable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.images);
} }
class FotoDisplayComponent {
    constructor(localStorageService) {
        this.localStorageService = localStorageService;
        this.images = [];
        this.p = 1;
    }
    ngOnInit() {
        if (this.parentComponent == 'Bookmark') {
            this.images = this.getAllItem();
        }
    }
    getAllItem() {
        return this.localStorageService.getAllItem().map(item => JSON.parse(item));
    }
    onDelete(del) {
        if (del) {
            this.images = this.getAllItem();
        }
    }
}
FotoDisplayComponent.ɵfac = function FotoDisplayComponent_Factory(t) { return new (t || FotoDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"])); };
FotoDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FotoDisplayComponent, selectors: [["app-foto-display"]], inputs: { parentComponent: "parentComponent", images: "images" }, decls: 4, vars: 3, consts: [[1, "tilelayout-wrapper"], ["class", "defaultText", 4, "ngIf"], [4, "ngIf"], [1, "defaultText"], [3, "pageChange", 4, "ngIf"], [3, "columns", "rowHeight", "reorderable", "resizable"], [3, "col", 4, "ngFor", "ngForOf"], [3, "pageChange"], [3, "col"], [3, "image"], [3, "image", "deleted"]], template: function FotoDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FotoDisplayComponent_p_1_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FotoDisplayComponent_div_2_Template, 5, 11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FotoDisplayComponent_div_3_Template, 3, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.images.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.parentComponent == "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.parentComponent == "Bookmark");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_3__["TileLayoutComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationControlsComponent"], _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_3__["TileLayoutItemComponent"], _foto_item_foto_item_component__WEBPACK_IMPORTED_MODULE_5__["FotoItemComponent"], _foto_item_book_foto_item_book_component__WEBPACK_IMPORTED_MODULE_6__["FotoItemBookComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"]], styles: [".tilelayout-wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n    margin-top: 30px;\r\n    max-height: calc(100vh - 300px);\r\n    overflow-y: auto;\r\n}\r\n\r\nkendo-tilelayout-item[_ngcontent-%COMP%]{\r\n    justify-content: center !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvdG8tZGlzcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEMiLCJmaWxlIjoiZm90by1kaXNwbGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGlsZWxheW91dC13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzAwcHgpO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxua2VuZG8tdGlsZWxheW91dC1pdGVte1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


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
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _aside_menu_aside_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aside-menu/aside-menu.component */ "+8Fg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");





class AppComponent {
    constructor() {
        this.title = 'test-Stoyanova';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "content_wrapper"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-aside-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _aside_menu_aside_menu_component__WEBPACK_IMPORTED_MODULE_2__["AsideMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".content_wrapper[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50X3dyYXBwZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _search_images_search_images_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-images/search-images.component */ "0bJH");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "yq7R");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "xoAz");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _bookmark_bookmark_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bookmark/bookmark.component */ "Bhsp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _aside_menu_aside_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./aside-menu/aside-menu.component */ "+8Fg");
/* harmony import */ var _progress_kendo_angular_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-menu */ "3l5A");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _foto_display_foto_display_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./foto-display/foto-display.component */ "L1lT");
/* harmony import */ var _foto_item_foto_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./foto-item/foto-item.component */ "L0XU");
/* harmony import */ var _foto_item_book_foto_item_book_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./foto-item-book/foto-item-book.component */ "Amxa");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "Nb5R");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");





















const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], icon: 'k-i-table' },
    { path: 'bookmark', component: _bookmark_bookmark_component__WEBPACK_IMPORTED_MODULE_9__["BookmarkComponent"], icon: "k-i-heart-outline" }
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_6__["ButtonsModule"],
            _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_7__["InputsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(routes),
            _progress_kendo_angular_menu__WEBPACK_IMPORTED_MODULE_12__["MenuModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["NgxPaginationModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _search_images_search_images_component__WEBPACK_IMPORTED_MODULE_4__["SearchImagesComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _bookmark_bookmark_component__WEBPACK_IMPORTED_MODULE_9__["BookmarkComponent"],
        _aside_menu_aside_menu_component__WEBPACK_IMPORTED_MODULE_11__["AsideMenuComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
        _foto_display_foto_display_component__WEBPACK_IMPORTED_MODULE_14__["FotoDisplayComponent"],
        _foto_item_foto_item_component__WEBPACK_IMPORTED_MODULE_15__["FotoItemComponent"],
        _foto_item_book_foto_item_book_component__WEBPACK_IMPORTED_MODULE_16__["FotoItemBookComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_6__["ButtonsModule"],
        _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_7__["InputsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _progress_kendo_angular_menu__WEBPACK_IMPORTED_MODULE_12__["MenuModule"],
        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["NgxPaginationModule"]] }); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 6, vars: 0, consts: [[1, "header"], [1, "header__inner"], ["href", "/", 1, "logo"], ["href", "/", 1, "user"], [1, "k-icon", "k-i-user"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Image Finder ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".header[_ngcontent-%COMP%]{\r\n    width: 100%;\r\nbox-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2);\r\n}\r\n\r\n.header__inner[_ngcontent-%COMP%]{\r\n    color: #000;\r\n    max-width: 1300px;\r\n    margin: 0 auto;\r\n    padding: 20px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%], .user[_ngcontent-%COMP%]{\r\n    color: #000;\r\n    font-weight: 500;\r\n    font-size: 25px;\r\n    text-decoration: none;\r\n}\r\n\r\n.user[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 50px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border: 1px solid #000;\r\n    border-radius: 50%;\r\n}\r\n\r\n.k-i-user[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7QUFHZixpREFBaUQ7QUFDakQ7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5oZWFkZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA4cHggMHB4IHJnYmEoMzQsIDYwLCA4MCwgMC4yKTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDhweCAwcHggcmdiYSgzNCwgNjAsIDgwLCAwLjIpO1xyXG5ib3gtc2hhZG93OiAwcHggNXB4IDhweCAwcHggcmdiYSgzNCwgNjAsIDgwLCAwLjIpO1xyXG59XHJcblxyXG4uaGVhZGVyX19pbm5lcntcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgbWF4LXdpZHRoOiAxMzAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ28sIC51c2Vye1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4udXNlcntcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5rLWktdXNlcntcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 4, vars: 0, consts: [[1, "footer"], [1, "footer__inner"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Copyrights!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\r\n  box-shadow: 0px -2px 8px 0px rgba(34, 60, 80, 0.2);\r\n  height: 80px;\r\n}\r\n\r\n.footer__inner[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0Usa0RBQWtEO0VBQ2xELFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggLTJweCA4cHggMHB4IHJnYmEoMzQsIDYwLCA4MCwgMC4yKTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAtMnB4IDhweCAwcHggcmdiYSgzNCwgNjAsIDgwLCAwLjIpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAtMnB4IDhweCAwcHggcmdiYSgzNCwgNjAsIDgwLCAwLjIpO1xyXG4gIGhlaWdodDogODBweDtcclxufVxyXG5cclxuLmZvb3Rlcl9faW5uZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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