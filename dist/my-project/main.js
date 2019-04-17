(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./assignment/directives/sortable.directive.ts":
/*!*****************************************************!*\
  !*** ./assignment/directives/sortable.directive.ts ***!
  \*****************************************************/
/*! exports provided: SortableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableDirective", function() { return SortableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SortableDirective = /** @class */ (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexs = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                console.log('Old position: ' + ui.item.index());
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                console.log('New position: ' + ui.item.index());
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SortableDirective.prototype, "newIndexs", void 0);
    SortableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appSortable]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SortableDirective);
    return SortableDirective;
}());



/***/ }),

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_houses_houses_list_houses_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/houses/houses-list/houses-list.component */ "./src/app/views/houses/houses-list/houses-list.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _views_houses_houses_new_houses_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/houses/houses-new/houses-new.component */ "./src/app/views/houses/houses-new/houses-new.component.ts");
/* harmony import */ var _views_houses_houses_edit_houses_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/houses/houses-edit/houses-edit.component */ "./src/app/views/houses/houses-edit/houses-edit.component.ts");
/* harmony import */ var _views_comments_comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/comments/comments-list/comments-list.component */ "./src/app/views/comments/comments-list/comments-list.component.ts");
/* harmony import */ var _views_comments_comments_new_comments_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/comments/comments-new/comments-new.component */ "./src/app/views/comments/comments-new/comments-new.component.ts");
/* harmony import */ var _views_comments_comments_edit_comments_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/comments/comments-edit/comments-edit.component */ "./src/app/views/comments/comments-edit/comments-edit.component.ts");
/* harmony import */ var _views_houses_houses_detail_houses_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/houses/houses-detail/houses-detail.component */ "./src/app/views/houses/houses-detail/houses-detail.component.ts");
/* harmony import */ var _views_houses_houses_order_houses_order_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/houses/houses-order/houses-order.component */ "./src/app/views/houses/houses-order/houses-order.component.ts");
/* harmony import */ var _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/landing/landing.component */ "./src/app/views/landing/landing.component.ts");














var appRoutes = [
    { path: '', component: _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_13__["LandingComponent"] },
    { path: 'login', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'register', component: _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'user/:uid', component: _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'user/:uid/house', component: _views_houses_houses_list_houses_list_component__WEBPACK_IMPORTED_MODULE_4__["HousesListComponent"] },
    { path: 'user/:uid/order', component: _views_houses_houses_order_houses_order_component__WEBPACK_IMPORTED_MODULE_12__["HousesOrderComponent"] },
    { path: 'user/:uid/house/new', component: _views_houses_houses_new_houses_new_component__WEBPACK_IMPORTED_MODULE_6__["HousesNewComponent"] },
    { path: 'user/:uid/house/:hid', component: _views_houses_houses_edit_houses_edit_component__WEBPACK_IMPORTED_MODULE_7__["HousesEditComponent"] },
    { path: 'user/:uid/house/:hid/detail', component: _views_houses_houses_detail_houses_detail_component__WEBPACK_IMPORTED_MODULE_11__["HousesDetailComponent"] },
    { path: 'user/:uid/house/:hid/comment', component: _views_comments_comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_8__["CommentsListComponent"] },
    { path: 'user/:uid/house/:hid/comment/new', component: _views_comments_comments_new_comments_new_component__WEBPACK_IMPORTED_MODULE_9__["CommentsNewComponent"] },
    { path: 'user/:uid/house/:hid/comment/:cid', component: _views_comments_comments_edit_comments_edit_component__WEBPACK_IMPORTED_MODULE_10__["CommentsEditComponent"] },
];
// @NgModule({
//   imports: [RouterModule.forRoot(appRoutes)],
//   exports: [RouterModule]
// })
//
// export class AppRoutingModule { }
var AppRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: true });


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-project';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_quill_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-quill-editor */ "./node_modules/ngx-quill-editor/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_flickr_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/flickr.service */ "./src/app/services/flickr.service.ts");
/* harmony import */ var _assignment_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assignment/directives/sortable.directive */ "./assignment/directives/sortable.directive.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _views_houses_houses_edit_houses_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/houses/houses-edit/houses-edit.component */ "./src/app/views/houses/houses-edit/houses-edit.component.ts");
/* harmony import */ var _views_houses_houses_list_houses_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/houses/houses-list/houses-list.component */ "./src/app/views/houses/houses-list/houses-list.component.ts");
/* harmony import */ var _views_houses_houses_new_houses_new_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/houses/houses-new/houses-new.component */ "./src/app/views/houses/houses-new/houses-new.component.ts");
/* harmony import */ var _views_comments_comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/comments/comments-list/comments-list.component */ "./src/app/views/comments/comments-list/comments-list.component.ts");
/* harmony import */ var _views_comments_comments_edit_comments_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/comments/comments-edit/comments-edit.component */ "./src/app/views/comments/comments-edit/comments-edit.component.ts");
/* harmony import */ var _views_comments_comments_new_comments_new_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/comments/comments-new/comments-new.component */ "./src/app/views/comments/comments-new/comments-new.component.ts");
/* harmony import */ var _services_house_service_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/house.service.client */ "./src/app/services/house.service.client.ts");
/* harmony import */ var _services_comment_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/comment.service.client */ "./src/app/services/comment.service.client.ts");
/* harmony import */ var _views_houses_houses_detail_houses_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./views/houses/houses-detail/houses-detail.component */ "./src/app/views/houses/houses-detail/houses-detail.component.ts");
/* harmony import */ var _views_houses_houses_order_houses_order_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./views/houses/houses-order/houses-order.component */ "./src/app/views/houses/houses-order/houses-order.component.ts");
/* harmony import */ var _services_public_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/public.service */ "./src/app/services/public.service.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _views_houses_houses_detail_map_map_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./views/houses/houses-detail/map/map.component */ "./src/app/views/houses/houses-detail/map/map.component.ts");
/* harmony import */ var _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./views/landing/landing.component */ "./src/app/views/landing/landing.component.ts");






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _assignment_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_14__["SortableDirective"],
                _views_houses_houses_edit_houses_edit_component__WEBPACK_IMPORTED_MODULE_16__["HousesEditComponent"],
                _views_houses_houses_list_houses_list_component__WEBPACK_IMPORTED_MODULE_17__["HousesListComponent"],
                _views_houses_houses_new_houses_new_component__WEBPACK_IMPORTED_MODULE_18__["HousesNewComponent"],
                _views_comments_comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_19__["CommentsListComponent"],
                _views_comments_comments_edit_comments_edit_component__WEBPACK_IMPORTED_MODULE_20__["CommentsEditComponent"],
                _views_comments_comments_new_comments_new_component__WEBPACK_IMPORTED_MODULE_21__["CommentsNewComponent"],
                _views_houses_houses_detail_houses_detail_component__WEBPACK_IMPORTED_MODULE_24__["HousesDetailComponent"],
                _views_houses_houses_order_houses_order_component__WEBPACK_IMPORTED_MODULE_25__["HousesOrderComponent"],
                _views_houses_houses_detail_map_map_component__WEBPACK_IMPORTED_MODULE_28__["MapComponent"],
                _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_29__["LandingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_quill_editor__WEBPACK_IMPORTED_MODULE_5__["QuillEditorModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_27__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyDOzeEzBBf1fY_pG1_PcUUthiqmWU8Bpr0' }),
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_11__["UserService"], _services_house_service_client__WEBPACK_IMPORTED_MODULE_22__["HouseService"], _services_comment_service_client__WEBPACK_IMPORTED_MODULE_23__["CommentService"], _services_public_service__WEBPACK_IMPORTED_MODULE_26__["PublicService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_12__["SharedService"], _services_flickr_service__WEBPACK_IMPORTED_MODULE_13__["FlickrService"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/comment.model.client.ts":
/*!************************************************!*\
  !*** ./src/app/models/comment.model.client.ts ***!
  \************************************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
var Comment = /** @class */ (function () {
    function Comment(_id, description) {
        this._id = _id;
        this.description = description;
    }
    return Comment;
}());



/***/ }),

/***/ "./src/app/models/house.model.client.ts":
/*!**********************************************!*\
  !*** ./src/app/models/house.model.client.ts ***!
  \**********************************************/
/*! exports provided: House */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "House", function() { return House; });
var House = /** @class */ (function () {
    function House(_id, name, address, price, url, owner, buyer, agent, description) {
        this._id = _id;
        this.name = name;
        this.address = address;
        this.price = price;
        this.url = url;
        this.owner = owner;
        this.buyer = buyer;
        this.agent = agent;
        this.description = description;
    }
    return House;
}());



/***/ }),

/***/ "./src/app/models/user.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/user.model.client.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(_id, username, password, firstName, lastName, email, role) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.role = role;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.service */ "./src/app/services/shared.service.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
    }
    AuthGuard.prototype.f = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.loggedIn().toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // @ts-ignore
    AuthGuard.prototype.canActivate = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var auth;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        auth = false;
                        return [4 /*yield*/, this.f().then(function (data) {
                                var user = data;
                                if (user !== '0') {
                                    _this.sharedService.user = user.username;
                                    _this.sharedService.role = user.role;
                                    auth = true;
                                }
                                else {
                                    _this.router.navigate(['/login']);
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, auth];
                }
            });
        });
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/comment.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/comment.service.client.ts ***!
  \****************************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var CommentService = /** @class */ (function () {
    function CommentService(_http) {
        this._http = _http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    CommentService.prototype.createComment = function (houseId, comment) {
        return this._http.post(this.baseUrl + '/api/house/' + houseId + '/comment', comment);
    };
    CommentService.prototype.findCommentsByUser = function (houseId) {
        return this._http.get(this.baseUrl + '/api/house/' + houseId + '/comment');
    };
    CommentService.prototype.findCommentById = function (commentId) {
        return this._http.get(this.baseUrl + '/api/comment/' + commentId);
    };
    CommentService.prototype.updateComment = function (commentId, comment) {
        return this._http.put(this.baseUrl + '/api/comment/' + commentId, comment);
    };
    CommentService.prototype.deleteComment = function (commentId) {
        return this._http.delete(this.baseUrl + '/api/comment/' + commentId);
    };
    CommentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "./src/app/services/flickr.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/flickr.service.ts ***!
  \********************************************/
/*! exports provided: FlickrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrService", function() { return FlickrService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FlickrService = /** @class */ (function () {
    function FlickrService(_http) {
        this._http = _http;
        this.key = '007d3ca946cbdd2230f55d22a5c0b3e2';
        this.secret = '9eb168009b8b9e79';
        this.urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        return this._http.get(url, { responseType: 'text' });
    };
    FlickrService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])() // needed as we're injecting Http service into this service
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FlickrService);
    return FlickrService;
}());



/***/ }),

/***/ "./src/app/services/house.service.client.ts":
/*!**************************************************!*\
  !*** ./src/app/services/house.service.client.ts ***!
  \**************************************************/
/*! exports provided: HouseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseService", function() { return HouseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var HouseService = /** @class */ (function () {
    function HouseService(_http) {
        this._http = _http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    HouseService.prototype.createHouse = function (userId, house) {
        return this._http.post(this.baseUrl + '/api/user/' + userId + '/house', house);
    };
    HouseService.prototype.findHouses = function () {
        return this._http.get(this.baseUrl + '/api/house');
    };
    HouseService.prototype.findHousesByUser = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId + '/house');
    };
    HouseService.prototype.findHouseById = function (houseId) {
        return this._http.get(this.baseUrl + '/api/house/' + houseId);
    };
    HouseService.prototype.findHouseByBuyerId = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId + '/order');
    };
    HouseService.prototype.findHouseByAgentId = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId + '/agentOrder');
    };
    HouseService.prototype.updateHouse = function (houseId, house) {
        return this._http.put(this.baseUrl + '/api/house/' + houseId, house);
    };
    HouseService.prototype.deleteHouse = function (houseId) {
        return this._http.delete(this.baseUrl + '/api/house/' + houseId);
    };
    HouseService.prototype.deleteOrder = function (houseId, house) {
        return this._http.put(this.baseUrl + '/api/house/' + houseId + '/order', house);
    };
    HouseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HouseService);
    return HouseService;
}());



/***/ }),

/***/ "./src/app/services/public.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/public.service.ts ***!
  \********************************************/
/*! exports provided: PublicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicService", function() { return PublicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PublicService = /** @class */ (function () {
    function PublicService(_http) {
        this._http = _http;
        this.key = 'AIzaSyDOzeEzBBf1fY_pG1_PcUUthiqmWU8Bpr0';
        this.urlBase = 'https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&key=' + this.key;
    }
    PublicService.prototype.getMap = function (address) {
        var url = this.urlBase + '&center=' + address;
        return this._http.get(url);
    };
    PublicService.prototype.getCoordinate = function (address) {
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + this.key;
        return this._http.get(url);
    };
    PublicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])() // needed as we're injecting Http service into this service
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PublicService);
    return PublicService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SharedService = /** @class */ (function () {
    function SharedService() {
        this.user = '';
        this.role = '';
    }
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var UserService = /** @class */ (function () {
    function UserService(_http, sharedService, router) {
        this._http = _http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    UserService.prototype.createUser = function (user) {
        return this._http.post(this.baseUrl + '/api/user/', user);
    };
    UserService.prototype.findUserByCredential = function (username, password) {
        return this._http.get(this.baseUrl + '/api/user/?username=' + username + '&password=' + password);
    };
    UserService.prototype.findUserById = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId);
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this._http.get(this.baseUrl + '/api/user/?username=' + username);
    };
    UserService.prototype.updateUser = function (user) {
        return this._http.put(this.baseUrl + '/api/user/' + user._id, user);
    };
    UserService.prototype.deleteUser = function (userId) {
        return this._http.delete(this.baseUrl + '/api/user/' + userId);
    };
    UserService.prototype.login = function (username, password) {
        var body = { username: username, password: password };
        return this._http.post(this.baseUrl + '/api/login', body, { withCredentials: true });
    };
    UserService.prototype.logout = function () {
        return this._http.post(this.baseUrl + '/api/logout', '', { withCredentials: true });
    };
    UserService.prototype.register = function (username, password, role) {
        var user = { username: username, password: password, role: role };
        return this._http.post(this.baseUrl + '/api/register', user, { withCredentials: true });
    };
    UserService.prototype.loggedIn = function () {
        return this._http.get(this.baseUrl + '/api/loggedin', { withCredentials: true });
        // .subscribe((res: any) => {
        //   const user = res;
        //   if (user !== '0') {
        //     this.sharedService.user = user;
        //     return true;
        //   } else {
        //     this.router.navigate(['/login']);
        //     return false;
        //   }
        // });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/views/comments/comments-edit/comments-edit.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/views/comments/comments-edit/comments-edit.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbW1lbnRzL2NvbW1lbnRzLWVkaXQvY29tbWVudHMtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/comments/comments-edit/comments-edit.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/comments/comments-edit/comments-edit.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar fixed-top cl-blue-navbar\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-12 d-none d-sm-block\">\n      <div class=\"container-fluid\">\n        <a routerLink=\"./detail\" class=\"navbar-link cl-text-white\">\n          <span class=\"fas fa-chevron-left\"></span>\n        </a>\n        <a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\"./\">\n          Edit Comment\n        </a>\n        <a (click)=\"updateComment()\" class=\"navbar-link navbar-text float-right cl-text-white cl-icon-padding\">\n          <span class=\"fas fa-check\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"row container-fluid\">\n\n  <div class=\"col-sm-12\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"comment-description\">Comment Description</label>\n        <textarea [(ngModel)]=\"comment.description\" name=\"description\" id=\"comment-description\" class=\"form-control\" rows=\"5\"\n                  placeholder=\"Blog is a blog-publishing service.\"></textarea>\n      </div>\n      <a class=\"btn btn-danger  btn-block\" (click)=\"deleteComment()\">Delete</a>\n    </form>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"/user/{{userId}}\" class=\"navbar-link float-right cl-text-white cl-icon-padding\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/comments/comments-edit/comments-edit.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/comments/comments-edit/comments-edit.component.ts ***!
  \*************************************************************************/
/*! exports provided: CommentsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsEditComponent", function() { return CommentsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_comment_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/comment.model.client */ "./src/app/models/comment.model.client.ts");
/* harmony import */ var _services_comment_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/comment.service.client */ "./src/app/services/comment.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CommentsEditComponent = /** @class */ (function () {
    function CommentsEditComponent(commentService, router, activatedRouter) {
        this.commentService = commentService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.comment = new _models_comment_model_client__WEBPACK_IMPORTED_MODULE_2__["Comment"]('123', 'Facebook');
    }
    CommentsEditComponent.prototype.updateComment = function () {
        var _this = this;
        this.commentService.updateComment(this.comment._id, this.comment).subscribe(function (comment) {
            _this.router.navigateByUrl('/user/' + _this.userId + '/house/' + _this.houseId + '/detail');
        });
    };
    CommentsEditComponent.prototype.deleteComment = function () {
        var _this = this;
        this.commentService.deleteComment(this.comment._id).subscribe(function (comment) {
            _this.router.navigateByUrl('/user/' + _this.userId + '/house/' + _this.houseId + '/detail');
        });
    };
    CommentsEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.comment._id = params['cid'];
            _this.userId = params['uid'];
            _this.houseId = params['hid'];
            console.log('comment id: ' + _this.comment._id);
        });
        this.commentService.findCommentById(this.comment._id)
            .subscribe(function (data) {
            console.log('in comment-edit comp...');
            console.log(data);
            _this.comment = data;
        });
    };
    CommentsEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comments-edit',
            template: __webpack_require__(/*! ./comments-edit.component.html */ "./src/app/views/comments/comments-edit/comments-edit.component.html"),
            styles: [__webpack_require__(/*! ./comments-edit.component.css */ "./src/app/views/comments/comments-edit/comments-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_comment_service_client__WEBPACK_IMPORTED_MODULE_3__["CommentService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CommentsEditComponent);
    return CommentsEditComponent;
}());



/***/ }),

/***/ "./src/app/views/comments/comments-list/comments-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/views/comments/comments-list/comments-list.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbW1lbnRzL2NvbW1lbnRzLWxpc3QvY29tbWVudHMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/comments/comments-list/comments-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/comments/comments-list/comments-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container card\">\n  <p>\n  <a routerLink=\"/user/{{userId}}/house/{{houseId}}/comment/new\" class=\"btn btn-success float-right\" role=\"button\">Add Comment</a>\n  </p>\n  <ul class=\"list-group cl-list-group-borderless\">\n\n    <li class=\"list-group-item cl-list-item-borderless\" *ngFor=\"let comment of comments\">\n      <div class=\"card-header\">\n        <a routerLink=\"/user/{{userId}}/house/{{houseId}}/comment/{{comment._id}}\"\n           *ngIf=\"role === 'Admin' || comment.owner === user\"><span class=\"fas fa-cog float-right\"></span></a>\n        <strong>{{comment.owner}}</strong>\n        <span class=\"float-right\">{{comment.dateCreate}}</span>\n      </div>\n      <div class=\"card-body\">\n        <p>{{comment.description}}</p>\n      </div>\n    </li>\n\n  </ul>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/views/comments/comments-list/comments-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/comments/comments-list/comments-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: CommentsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsListComponent", function() { return CommentsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_comment_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/comment.service.client */ "./src/app/services/comment.service.client.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");





var CommentsListComponent = /** @class */ (function () {
    function CommentsListComponent(commentService, activatedRoute, sharedService) {
        this.commentService = commentService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.comments = [{}];
        this.user = sharedService.user;
        this.role = sharedService.role;
    }
    CommentsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.houseId = params['hid'];
        });
        this.commentService.findCommentsByUser(this.houseId)
            .subscribe(function (data) {
            console.log('in comment-list comp...');
            console.log(data);
            _this.comments = data;
        });
    };
    CommentsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comments-list',
            template: __webpack_require__(/*! ./comments-list.component.html */ "./src/app/views/comments/comments-list/comments-list.component.html"),
            styles: [__webpack_require__(/*! ./comments-list.component.css */ "./src/app/views/comments/comments-list/comments-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_comment_service_client__WEBPACK_IMPORTED_MODULE_3__["CommentService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], CommentsListComponent);
    return CommentsListComponent;
}());



/***/ }),

/***/ "./src/app/views/comments/comments-new/comments-new.component.css":
/*!************************************************************************!*\
  !*** ./src/app/views/comments/comments-new/comments-new.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbW1lbnRzL2NvbW1lbnRzLW5ldy9jb21tZW50cy1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/comments/comments-new/comments-new.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/views/comments/comments-new/comments-new.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar fixed-top cl-blue-navbar\">\n  <div class=\"row container-fluid\">\n    <div class=\"container-fluid\">\n      <a routerLink=\"/user/{{userId}}/house\" class=\"navbar-link cl-text-white\">\n        <span class=\"fas fa-chevron-left\"></span>\n      </a>\n      <a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\"./\">\n        New Comments\n      </a>\n      <a (click)=\"createComment()\" class=\"navbar-text navbar-link float-right cl-text-white cl-icon-padding\">\n        <span class=\"fas fa-check\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"row contain-fluid\">\n  <div class=\"col-sm-12\">\n    <form #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"comment-description\">Description</label>\n        <textarea name=\"description\" id=\"comment-description\" class=\"form-control\" rows=\"5\" placeholder=\"Description\" ngModel required #description=\"ngModel\"></textarea>\n      </div>\n    </form>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"/user/{{userId}}\" class=\"navbar-link float-right cl-text-white cl-icon-padding\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/views/comments/comments-new/comments-new.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/comments/comments-new/comments-new.component.ts ***!
  \***********************************************************************/
/*! exports provided: CommentsNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsNewComponent", function() { return CommentsNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_comment_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/comment.service.client */ "./src/app/services/comment.service.client.ts");






var CommentsNewComponent = /** @class */ (function () {
    function CommentsNewComponent(commentService, router, activatedRoute, sharedService) {
        this.commentService = commentService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
    }
    CommentsNewComponent.prototype.createComment = function () {
        var _this = this;
        var description = this.loginForm.value.description;
        var comment = { description: description, owner: this.sharedService.user };
        this.commentService.createComment(this.houseId, comment).subscribe(function (cmt) {
            _this.router.navigateByUrl('/user/' + _this.userId + '/house/' + _this.houseId + '/detail');
        });
    };
    CommentsNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.houseId = params['hid'];
            _this.userId = params['uid'];
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], CommentsNewComponent.prototype, "loginForm", void 0);
    CommentsNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comments-new',
            template: __webpack_require__(/*! ./comments-new.component.html */ "./src/app/views/comments/comments-new/comments-new.component.html"),
            styles: [__webpack_require__(/*! ./comments-new.component.css */ "./src/app/views/comments/comments-new/comments-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_comment_service_client__WEBPACK_IMPORTED_MODULE_5__["CommentService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], CommentsNewComponent);
    return CommentsNewComponent;
}());



/***/ }),

/***/ "./src/app/views/houses/houses-detail/houses-detail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/views/houses/houses-detail/houses-detail.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvdXNlcy9ob3VzZXMtZGV0YWlsL2hvdXNlcy1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/houses/houses-detail/houses-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/views/houses/houses-detail/houses-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top cl-blue-navbar\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"float-left\">\r\n      <a [routerLink]=\"userId?['/user', userId, 'house']:[]\" class=\"navbar-link cl-text-white\">\r\n        <span class=\"fas fa-chevron-left\"></span>\r\n      </a>\r\n      <a class=\"cl-text-white navbar-brand cl-text-bold\">\r\n        House Detail\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</nav>\r\n<div class=\"container\">\r\n  <div class=\"row\" style=\"display:flex; flex-wrap: wrap;\">\r\n    <div class=\"col-sm-4 d-none d-sm-block\" *ngIf=\"house\">\r\n      <app-map [address]=house.address></app-map>\r\n    </div>\r\n    <div class=\"col-sm-8 d-none d-sm-block\" *ngIf=\"house\">\r\n      <div class=\"img-thumbnail img-fluid\">\r\n        <img src=\"{{house.url}}\" style=\"max-width: 90%; height: auto\">\r\n        <div class=\"caption-full\">\r\n          <h4 class=\"float-right\">{{house.price}}</h4>\r\n          <h4><a>{{house.name}}</a></h4>\r\n          <h4>{{house.address}}</h4>\r\n          <p><em>{{house.description}}</em></p>\r\n          <h3 *ngIf=\"house && house.buyer\">Sold Out</h3>\r\n        </div>\r\n        <p>\r\n          <a routerLink=\"/user/{{userId}}/house/{{houseId}}\" class=\"btn btn-primary\"\r\n             *ngIf=\"house && (role === 'Admin' || house.owner === user)\">Edit</a>\r\n        </p>\r\n\r\n        <form #f=\"ngForm\">\r\n          <div class=\"form-group\" *ngIf=\"role === 'Agent' && house && (!house.buyer || house.buyer==null)\">\r\n            <label for=\"buyer\">Buyer username (* required for Agent Role)</label>\r\n            <input type=\"text\" name=\"buyer\" class=\"form-control\" id=\"buyer\" placeholder=\"Buyer ID\" ngModel required #buyer=\"ngModel\">\r\n          </div>\r\n        </form>\r\n\r\n        <a class=\"btn btn-primary\" (click)=\"buy(house)\" *ngIf=\"(role === 'Buyer' || role === 'Agent') && house && (!house.buyer || house.buyer==null)\">Buy</a>\r\n\r\n      </div>\r\n      <app-comments-list></app-comments-list>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\r\n  <div class=\"container-fuild\">\r\n    <a routerLink=\"/user/{{userId}}\" class=\"navbar-link float-right cl-text-white cl-icon-padding\">\r\n      <span class=\"fas fa-user\"></span>\r\n    </a>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/views/houses/houses-detail/houses-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/houses/houses-detail/houses-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: HousesDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousesDetailComponent", function() { return HousesDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_house_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/house.service.client */ "./src/app/services/house.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_public_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/public.service */ "./src/app/services/public.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");








var HousesDetailComponent = /** @class */ (function () {
    function HousesDetailComponent(houseService, userService, activatedRoute, router, sharedService, publicService) {
        this.houseService = houseService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.publicService = publicService;
        // this.house = new House('1', '1', '1', '1', '1', '1', '1', '1');
        this.user = sharedService.user;
        this.role = sharedService.role;
    }
    HousesDetailComponent.prototype.buy = function (house) {
        var _this = this;
        if (this.role === 'Agent') {
            var buyer = this.loginForm.value.buyer;
            this.house.agent = this.userId;
            this.userService.findUserByUsername(buyer).subscribe(function (user) {
                _this.house.buyer = user._id;
                _this.houseService.updateHouse(_this.houseId, _this.house).subscribe(function (hou) {
                    _this.router.navigateByUrl('/user/' + _this.userId + '/order');
                });
            });
        }
        else {
            this.house.buyer = this.userId;
            this.houseService.updateHouse(this.houseId, this.house).subscribe(function (hou) {
                _this.router.navigateByUrl('/user/' + _this.userId + '/order');
            });
        }
    };
    HousesDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.houseId = params['hid'];
        });
        this.houseService.findHouseById(this.houseId)
            .subscribe(function (data) {
            console.log('in houses-detail comp...');
            console.log(data);
            _this.house = data;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"])
    ], HousesDetailComponent.prototype, "loginForm", void 0);
    HousesDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-houses-detail',
            template: __webpack_require__(/*! ./houses-detail.component.html */ "./src/app/views/houses/houses-detail/houses-detail.component.html"),
            styles: [__webpack_require__(/*! ./houses-detail.component.css */ "./src/app/views/houses/houses-detail/houses-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_house_service_client__WEBPACK_IMPORTED_MODULE_2__["HouseService"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_7__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _services_public_service__WEBPACK_IMPORTED_MODULE_5__["PublicService"]])
    ], HousesDetailComponent);
    return HousesDetailComponent;
}());



/***/ }),

/***/ "./src/app/views/houses/houses-detail/map/map.component.css":
/*!******************************************************************!*\
  !*** ./src/app/views/houses/houses-detail/map/map.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n  height: 300px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaG91c2VzL2hvdXNlcy1kZXRhaWwvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvaG91c2VzL2hvdXNlcy1kZXRhaWwvbWFwL21hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/houses/houses-detail/map/map.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/views/houses/houses-detail/map/map.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<agm-map [latitude]=\"location.lat\" [longitude]=\"location.lng\" [zoom]=\"location.zoom\">\r\n  <agm-marker [latitude]=\"location.marker.lat\" [longitude]=\"location.marker.lng\"></agm-marker>\r\n</agm-map>\r\n"

/***/ }),

/***/ "./src/app/views/houses/houses-detail/map/map.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/houses/houses-detail/map/map.component.ts ***!
  \*****************************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _services_public_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/public.service */ "./src/app/services/public.service.ts");




var MapComponent = /** @class */ (function () {
    function MapComponent(publicService) {
        this.publicService = publicService;
        this.location = {
            lat: 51.678418,
            lng: 7.809007,
            marker: {
                lat: 51.678418,
                lng: 7.809007,
                draggable: true
            },
            zoom: 13
        };
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.address);
        this.publicService.getCoordinate(this.address ? this.address : 'Seattle').subscribe(function (data) {
            _this.location.lat = data.results[0].geometry.location.lat;
            _this.location.lng = data.results[0].geometry.location.lng;
            _this.location.marker.lat = data.results[0].geometry.location.lat;
            _this.location.marker.lng = data.results[0].geometry.location.lng;
            _this.location.viewport = data.results[0].geometry.viewport;
        });
        // this.findLocation(this.address);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MapComponent.prototype, "address", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmMap"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmMap"])
    ], MapComponent.prototype, "map", void 0);
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/views/houses/houses-detail/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/views/houses/houses-detail/map/map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_public_service__WEBPACK_IMPORTED_MODULE_3__["PublicService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/views/houses/houses-edit/houses-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/houses/houses-edit/houses-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvdXNlcy9ob3VzZXMtZWRpdC9ob3VzZXMtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/houses/houses-edit/houses-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/houses/houses-edit/houses-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar fixed-top cl-blue-navbar\">\r\n  <div class=\"row container-fluid\">\r\n    <div class=\"col-sm-12 d-none d-sm-block\">\r\n      <div class=\"container-fluid\">\r\n        <a routerLink=\"../\" class=\"navbar-link cl-text-white\">\r\n          <span class=\"fas fa-chevron-left\"></span>\r\n        </a>\r\n        <a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\"/user/{{userId}}/house/{{house._id}}\">\r\n          Edit House\r\n        </a>\r\n        <a (click)=\"updateHouse()\" class=\"navbar-link navbar-text float-right cl-text-white cl-icon-padding\">\r\n          <span class=\"fas fa-check\"></span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"row container-fluid\">\r\n\r\n  <div class=\"col-sm-12\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"house-name\">House Name</label>\r\n        <input [(ngModel)]=\"house.name\" name=\"name\" type=\"text\" class=\"form-control\" id=\"house-name\" placeholder=\"Blogger\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"house-address\">House Address</label>\r\n        <input [(ngModel)]=\"house.address\" name=\"address\" type=\"text\" class=\"form-control\" id=\"house-address\" placeholder=\"Blogger\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"house-price\">House Price</label>\r\n        <input [(ngModel)]=\"house.price\" name=\"price\" type=\"text\" class=\"form-control\" id=\"house-price\" placeholder=\"Blogger\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"house-url\">House Url</label>\r\n        <input [(ngModel)]=\"house.url\" name=\"url\" type=\"text\" class=\"form-control\" id=\"house-url\" placeholder=\"Blogger\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"house-description\">House Description</label>\r\n        <textarea [(ngModel)]=\"house.description\" name=\"description\" id=\"house-description\" class=\"form-control\" rows=\"5\"\r\n                  placeholder=\"Blog is a blog-publishing service.\"></textarea>\r\n      </div>\r\n      <a class=\"btn btn-danger  btn-block\" (click)=\"deleteHouse()\">Delete</a>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\r\n  <div class=\"container-fuild\">\r\n    <a routerLink=\"/user/{{userId}}\" class=\"navbar-link float-right cl-text-white cl-icon-padding\">\r\n      <span class=\"fas fa-user\"></span>\r\n    </a>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/views/houses/houses-edit/houses-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/houses/houses-edit/houses-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: HousesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousesEditComponent", function() { return HousesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_house_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/house.model.client */ "./src/app/models/house.model.client.ts");
/* harmony import */ var _services_house_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/house.service.client */ "./src/app/services/house.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HousesEditComponent = /** @class */ (function () {
    function HousesEditComponent(houseService, router, activatedRouter) {
        this.houseService = houseService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.house = new _models_house_model_client__WEBPACK_IMPORTED_MODULE_2__["House"]('123', 'Facebook', '123', '456', '#', 'Lorem', '123', 'agent', 'house');
    }
    HousesEditComponent.prototype.updateHouse = function () {
        var _this = this;
        this.houseService.updateHouse(this.house._id, this.house).subscribe(function (house) {
            _this.router.navigateByUrl('/user/' + _this.userId + '/house/' + _this.house._id + '/detail');
        });
    };
    HousesEditComponent.prototype.deleteHouse = function () {
        var _this = this;
        this.houseService.deleteHouse(this.house._id).subscribe(function (house) {
            _this.router.navigateByUrl('/user/' + _this.userId + '/house');
        });
    };
    HousesEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.house._id = params['hid'];
            _this.userId = params['uid'];
            console.log('house id: ' + _this.house._id);
        });
        this.houseService.findHouseById(this.house._id)
            .subscribe(function (data) {
            console.log('in house-edit comp...');
            console.log(data);
            _this.house = data;
        });
    };
    HousesEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-houses-edit',
            template: __webpack_require__(/*! ./houses-edit.component.html */ "./src/app/views/houses/houses-edit/houses-edit.component.html"),
            styles: [__webpack_require__(/*! ./houses-edit.component.css */ "./src/app/views/houses/houses-edit/houses-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_house_service_client__WEBPACK_IMPORTED_MODULE_3__["HouseService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], HousesEditComponent);
    return HousesEditComponent;
}());



/***/ }),

/***/ "./src/app/views/houses/houses-list/houses-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/houses/houses-list/houses-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvdXNlcy9ob3VzZXMtbGlzdC9ob3VzZXMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/houses/houses-list/houses-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/houses/houses-list/houses-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top cl-blue-navbar\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"float-left\">\r\n      <a routerLink=\"/user/{{userId}}\" class=\"navbar-link cl-text-white\">\r\n        <span class=\"fas fa-chevron-left\"></span>\r\n      </a>\r\n      <a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\"/user/{{userId}}/house\">\r\n        Houses\r\n      </a>\r\n    </div>\r\n\r\n    <a routerLink=\"/user/{{userId}}/house/new\" class=\"navbar-link float-right cl-text-white cl-icon-padding\" *ngIf=\"role === 'Seller'\">\r\n      <span class=\"fas fa-plus\"></span>\r\n    </a>\r\n    <a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\"/user/{{userId}}/order\" *ngIf=\"role === 'Buyer'\">\r\n      My Order\r\n    </a>\r\n    <a routerLink=\"/user/{{userId}}/house/new\" class=\"navbar-link float-right cl-text-white cl-icon-padding\" *ngIf=\"role === 'Agent'\">\r\n      <span class=\"fas fa-plus\"></span>\r\n    </a>\r\n    <a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\"/user/{{userId}}/order\" *ngIf=\"role === 'Agent'\">\r\n      My Order\r\n    </a>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n  <header class=\"jumbotron\">\r\n    <div class=\"container\">\r\n      <h1>Welcome to House Trading!</h1>\r\n      <p>View our hand-picked houses from all over the world</p>\r\n    </div>\r\n  </header>\r\n\r\n  <div  *ngIf=\"role !== 'Buyer'\">\r\n    <input [(ngModel)]=\"myflag\" type=\"checkbox\" [ngModelOptions]=\"{standalone: true}\" (change)=\"onChange()\"/> List My Houses\r\n  </div>\r\n  <div class=\"row\" style=\"display:flex; flex-wrap: wrap;\">\r\n    <div class=\"col-sm-4 d-none d-sm-block\" *ngFor=\"let house of houses\">\r\n      <div class=\"img-thumbnail img-fluid\">\r\n        <img src=\"{{house.url}}\" style=\"max-width: 100%; height: 250px\">\r\n      </div>\r\n        <div class=\"caption\">\r\n          <h4>{{house.name}}</h4>\r\n          <h4>{{house.price}}</h4>\r\n        </div>\r\n        <p>\r\n          <a routerLink=\"/user/{{userId}}/house/{{house._id}}/detail\" class=\"btn btn-primary\">More Info</a>\r\n        </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\r\n  <div class=\"container-fuild\">\r\n    <a routerLink=\"/user/{{userId}}\" class=\"navbar-link float-right cl-text-white cl-icon-padding\">\r\n      <span class=\"fas fa-user\"></span>\r\n    </a>\r\n  </div>\r\n</nav>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/views/houses/houses-list/houses-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/houses/houses-list/houses-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: HousesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousesListComponent", function() { return HousesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_house_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/house.service.client */ "./src/app/services/house.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");





var HousesListComponent = /** @class */ (function () {
    function HousesListComponent(houseService, activatedRoute, sharedService) {
        this.houseService = houseService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.houses = [{}];
        this.myflag = false;
        this.role = sharedService.role;
    }
    HousesListComponent.prototype.onChange = function () {
        var _this = this;
        if (this.myflag) {
            this.houseService.findHousesByUser(this.userId)
                .subscribe(function (data) {
                console.log(data);
                _this.houses = data;
            });
        }
        else {
            this.houseService.findHouses()
                .subscribe(function (data) {
                console.log(data);
                _this.houses = data;
            });
        }
    };
    HousesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.onChange();
    };
    HousesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-houses-list',
            template: __webpack_require__(/*! ./houses-list.component.html */ "./src/app/views/houses/houses-list/houses-list.component.html"),
            styles: [__webpack_require__(/*! ./houses-list.component.css */ "./src/app/views/houses/houses-list/houses-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_house_service_client__WEBPACK_IMPORTED_MODULE_2__["HouseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], HousesListComponent);
    return HousesListComponent;
}());



/***/ }),

/***/ "./src/app/views/houses/houses-new/houses-new.component.css":
/*!******************************************************************!*\
  !*** ./src/app/views/houses/houses-new/houses-new.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvdXNlcy9ob3VzZXMtbmV3L2hvdXNlcy1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/houses/houses-new/houses-new.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/views/houses/houses-new/houses-new.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar fixed-top cl-blue-navbar\">\r\n  <div class=\"row container-fluid\">\r\n      <div class=\"container-fluid\">\r\n        <a routerLink=\"/user/{{userId}}/house\" class=\"navbar-link cl-text-white\">\r\n          <span class=\"fas fa-chevron-left\"></span>\r\n        </a>\r\n        <a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\"./\">\r\n          New Houses\r\n        </a>\r\n        <a (click)=\"createHouse()\" class=\"navbar-text navbar-link float-right cl-text-white cl-icon-padding\">\r\n          <span class=\"fas fa-check\"></span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n</nav>\r\n\r\n<div class=\"row contain-fluid\">\r\n  <div class=\"col-sm-12\">\r\n    <form #f=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label for=\"house-name\">Name</label>\r\n        <input type=\"text\" name=\"name\" class=\"form-control\" id=\"house-name\" placeholder=\"Name\" ngModel required #name=\"ngModel\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"house-address\">Address</label>\r\n        <input type=\"text\" name=\"address\" class=\"form-control\" id=\"house-address\" placeholder=\"Address\" ngModel required #address=\"ngModel\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"house-price\">Price</label>\r\n        <input type=\"text\" name=\"price\" class=\"form-control\" id=\"house-price\" placeholder=\"Price\" ngModel required #price=\"ngModel\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"house-url\">Url</label>\r\n        <input type=\"text\" name=\"url\" class=\"form-control\" id=\"house-url\" placeholder=\"Url\" ngModel required #url=\"ngModel\">\r\n      </div>\r\n      <div class=\"form-group\" *ngIf=\"role === 'Agent'\">\r\n        <label for=\"owner\">Seller username (* required for Agent Role)</label>\r\n        <input type=\"text\" name=\"owner\" class=\"form-control\" id=\"owner\" placeholder=\"Seller ID\" ngModel required #owner=\"ngModel\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"house-description\">Description</label>\r\n        <textarea name=\"description\" id=\"house-description\" class=\"form-control\" rows=\"5\" placeholder=\"Description\" ngModel required #description=\"ngModel\"></textarea>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\r\n  <div class=\"container-fuild\">\r\n    <a routerLink=\"/user/{{userId}}\" class=\"navbar-link float-right cl-text-white cl-icon-padding\">\r\n      <span class=\"fas fa-user\"></span>\r\n    </a>\r\n  </div>\r\n</nav>\r\n\r\n"

/***/ }),

/***/ "./src/app/views/houses/houses-new/houses-new.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/houses/houses-new/houses-new.component.ts ***!
  \*****************************************************************/
/*! exports provided: HousesNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousesNewComponent", function() { return HousesNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_house_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/house.service.client */ "./src/app/services/house.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");







var HousesNewComponent = /** @class */ (function () {
    function HousesNewComponent(houseService, userService, router, activatedRoute, sharedService) {
        this.houseService = houseService;
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
    }
    HousesNewComponent.prototype.createHouse = function () {
        var _this = this;
        var name = this.loginForm.value.name;
        var address = this.loginForm.value.address;
        var description = this.loginForm.value.description;
        var price = this.loginForm.value.price;
        var url = this.loginForm.value.url;
        if (this.sharedService.role !== 'Agent') {
            this.house = { name: name, address: address, description: description, price: price, url: url, owner: this.sharedService.user };
            this.houseService.createHouse(this.userId, this.house).subscribe(function (hou) {
                _this.router.navigateByUrl('/user/' + _this.userId + '/house');
            });
        }
        else {
            var owner = this.loginForm.value.owner;
            this.userService.findUserByUsername(owner).subscribe(function (user) {
                _this.house = { name: name, description: description, price: price, url: url, agent: _this.userId, owner: user._id };
                _this.houseService.createHouse(_this.userId, _this.house).subscribe(function (hou) {
                    _this.router.navigateByUrl('/user/' + _this.userId + '/house');
                });
            });
        }
    };
    HousesNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.sharedService.user);
        this.role = this.sharedService.role;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], HousesNewComponent.prototype, "loginForm", void 0);
    HousesNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-houses-new',
            template: __webpack_require__(/*! ./houses-new.component.html */ "./src/app/views/houses/houses-new/houses-new.component.html"),
            styles: [__webpack_require__(/*! ./houses-new.component.css */ "./src/app/views/houses/houses-new/houses-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_house_service_client__WEBPACK_IMPORTED_MODULE_3__["HouseService"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_6__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], HousesNewComponent);
    return HousesNewComponent;
}());



/***/ }),

/***/ "./src/app/views/houses/houses-order/houses-order.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/views/houses/houses-order/houses-order.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvdXNlcy9ob3VzZXMtb3JkZXIvaG91c2VzLW9yZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/houses/houses-order/houses-order.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/views/houses/houses-order/houses-order.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top cl-blue-navbar\">\n  <div class=\"container-fluid\">\n    <div class=\"float-left\">\n      <a routerLink=\"/user/{{userId}}/house\" class=\"navbar-link cl-text-white\">\n        <span class=\"fas fa-chevron-left\"></span>\n      </a>\n      <a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\"./\">\n        My Order\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n  <div class=\"row\" style=\"display:flex; flex-wrap: wrap;\">\n    <div class=\"col-sm-6 d-none d-sm-block\" *ngFor=\"let house of houses\">\n      <div class=\"img-thumbnail img-fluid\">\n        <img src=\"{{house.url}}\" style=\"width: 100%; height: 250px\">\n      </div>\n      <div class=\"caption\">\n        <h4>{{house.name}}</h4>\n        <h4>{{house.price}}</h4>\n      </div>\n      <a class=\"btn btn-danger  btn-block\" (click)=\"delete(house)\">Delete</a>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"/user/{{userId}}\" class=\"navbar-link float-right cl-text-white cl-icon-padding\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/houses/houses-order/houses-order.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/houses/houses-order/houses-order.component.ts ***!
  \*********************************************************************/
/*! exports provided: HousesOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousesOrderComponent", function() { return HousesOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_house_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/house.service.client */ "./src/app/services/house.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");





var HousesOrderComponent = /** @class */ (function () {
    function HousesOrderComponent(houseService, activatedRoute, router, sharedService) {
        this.houseService = houseService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.user = sharedService.user;
        this.role = sharedService.role;
    }
    HousesOrderComponent.prototype.delete = function (house) {
        var _this = this;
        house.buyer = null;
        this.houseService.deleteOrder(house._id, house).subscribe(function (hou) {
            _this.houseService.findHouseByBuyerId(_this.userId).subscribe(function (data) { return _this.houses = data; });
            // this.router.navigateByUrl('/user/' + this.userId + '/house');
        });
    };
    HousesOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
        if (this.role !== 'Agent') {
            this.houseService.findHouseByBuyerId(this.userId)
                .subscribe(function (data) {
                console.log('in houses-order comp...');
                console.log(data);
                _this.houses = data;
            });
        }
        else {
            this.houseService.findHouseByAgentId(this.userId)
                .subscribe(function (data) {
                console.log('in houses-order comp...');
                console.log(data);
                _this.houses = data;
            });
        }
    };
    HousesOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-houses-order',
            template: __webpack_require__(/*! ./houses-order.component.html */ "./src/app/views/houses/houses-order/houses-order.component.html"),
            styles: [__webpack_require__(/*! ./houses-order.component.css */ "./src/app/views/houses/houses-order/houses-order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_house_service_client__WEBPACK_IMPORTED_MODULE_2__["HouseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], HousesOrderComponent);
    return HousesOrderComponent;
}());



/***/ }),

/***/ "./src/app/views/landing/landing.component.css":
/*!*****************************************************!*\
  !*** ./src/app/views/landing/landing.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  background-color: #000;\r\n}\r\n\r\n#landing-header {\r\n  z-index: 1;\r\n  position: relative;\r\n  text-align: center;\r\n  padding-top: 40vh;\r\n}\r\n\r\n#landing-header h1 {\r\n  color: #fff;\r\n}\r\n\r\n.slideshow {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 0;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.slideshow li {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background-size: cover;\r\n  background-position: 50% 50%;\r\n  background-repeat: no-repeat;\r\n  opacity: 0;\r\n  z-index: 0;\r\n  -webkit-animation: imageAnimation 50s linear infinite;\r\n          animation: imageAnimation 50s linear infinite;\r\n}\r\n\r\n.slideshow li:nth-child(1) {\r\n  background-image: url(http://i.imgur.com/K3mPv14.jpg)\r\n}\r\n\r\n.slideshow li:nth-child(2) {\r\n  background-image: url(http://i.imgur.com/SBEmFpv.jpg);\r\n  -webkit-animation-delay: 10s;\r\n          animation-delay: 10s;\r\n}\r\n\r\n.slideshow li:nth-child(3) {\r\n  background-image: url(http://i.imgur.com/emvhOnb.jpg);\r\n  -webkit-animation-delay: 20s;\r\n          animation-delay: 20s;\r\n}\r\n\r\n.slideshow li:nth-child(4) {\r\n  background-image: url(http://i.imgur.com/2LSMCmJ.jpg);\r\n  -webkit-animation-delay: 30s;\r\n          animation-delay: 30s;\r\n}\r\n\r\n.slideshow li:nth-child(5) {\r\n  background-image: url(http://i.imgur.com/TVGe0Ef.jpg);\r\n  -webkit-animation-delay: 40s;\r\n          animation-delay: 40s;\r\n}\r\n\r\n@-webkit-keyframes imageAnimation {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-animation-timing-function: ease-in;\r\n            animation-timing-function: ease-in;\r\n  }\r\n  10% {\r\n    opacity: 1;\r\n    -webkit-animation-timing-function: ease-out;\r\n            animation-timing-function: ease-out;\r\n  }\r\n  20% {\r\n    opacity: 1\r\n  }\r\n  30% {\r\n    opacity: 0\r\n  }\r\n}\r\n\r\n@keyframes imageAnimation {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-animation-timing-function: ease-in;\r\n            animation-timing-function: ease-in;\r\n  }\r\n  10% {\r\n    opacity: 1;\r\n    -webkit-animation-timing-function: ease-out;\r\n            animation-timing-function: ease-out;\r\n  }\r\n  20% {\r\n    opacity: 1\r\n  }\r\n  30% {\r\n    opacity: 0\r\n  }\r\n}\r\n\r\n/* Older browser support - .no-cssanimations class added by modernizr */\r\n\r\n.no-cssanimations .slideshow li {\r\n  opacity: 1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsVUFBVTtFQUNWLFVBQVU7RUFDVixxREFBNkM7VUFBN0MsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0U7QUFDRjs7QUFDQTtFQUNFLHFEQUFxRDtFQUNyRCw0QkFBb0I7VUFBcEIsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UscURBQXFEO0VBQ3JELDRCQUFvQjtVQUFwQixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxxREFBcUQ7RUFDckQsNEJBQW9CO1VBQXBCLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLHFEQUFxRDtFQUNyRCw0QkFBb0I7VUFBcEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsMENBQWtDO1lBQWxDLGtDQUFrQztFQUNwQztFQUNBO0lBQ0UsVUFBVTtJQUNWLDJDQUFtQztZQUFuQyxtQ0FBbUM7RUFDckM7RUFDQTtJQUNFO0VBQ0Y7RUFDQTtJQUNFO0VBQ0Y7QUFDRjs7QUFmQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLDBDQUFrQztZQUFsQyxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLFVBQVU7SUFDViwyQ0FBbUM7WUFBbkMsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRTtFQUNGO0VBQ0E7SUFDRTtFQUNGO0FBQ0Y7O0FBRUEsdUVBQXVFOztBQUN2RTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxufVxyXG5cclxuI2xhbmRpbmctaGVhZGVyIHtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDQwdmg7XHJcbn1cclxuXHJcbiNsYW5kaW5nLWhlYWRlciBoMSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5zbGlkZXNob3cge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uc2xpZGVzaG93IGxpIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgei1pbmRleDogMDtcclxuICBhbmltYXRpb246IGltYWdlQW5pbWF0aW9uIDUwcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5zbGlkZXNob3cgbGk6bnRoLWNoaWxkKDEpIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cDovL2kuaW1ndXIuY29tL0szbVB2MTQuanBnKVxyXG59XHJcbi5zbGlkZXNob3cgbGk6bnRoLWNoaWxkKDIpIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cDovL2kuaW1ndXIuY29tL1NCRW1GcHYuanBnKTtcclxuICBhbmltYXRpb24tZGVsYXk6IDEwcztcclxufVxyXG4uc2xpZGVzaG93IGxpOm50aC1jaGlsZCgzKSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHA6Ly9pLmltZ3VyLmNvbS9lbXZoT25iLmpwZyk7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAyMHM7XHJcbn1cclxuLnNsaWRlc2hvdyBsaTpudGgtY2hpbGQoNCkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwOi8vaS5pbWd1ci5jb20vMkxTTUNtSi5qcGcpO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMzBzO1xyXG59XHJcbi5zbGlkZXNob3cgbGk6bnRoLWNoaWxkKDUpIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cDovL2kuaW1ndXIuY29tL1RWR2UwRWYuanBnKTtcclxuICBhbmltYXRpb24tZGVsYXk6IDQwcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBpbWFnZUFuaW1hdGlvbiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG4gIDEwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG4gIDIwJSB7XHJcbiAgICBvcGFjaXR5OiAxXHJcbiAgfVxyXG4gIDMwJSB7XHJcbiAgICBvcGFjaXR5OiAwXHJcbiAgfVxyXG59XHJcblxyXG4vKiBPbGRlciBicm93c2VyIHN1cHBvcnQgLSAubm8tY3NzYW5pbWF0aW9ucyBjbGFzcyBhZGRlZCBieSBtb2Rlcm5penIgKi9cclxuLm5vLWNzc2FuaW1hdGlvbnMgLnNsaWRlc2hvdyBsaSB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/landing/landing.component.html":
/*!******************************************************!*\
  !*** ./src/app/views/landing/landing.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <title>YelpCamp</title>\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css\">\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js\" type=\"text/javascript\"\n          async></script>\n</head>\n<body>\n<div id=\"landing-header\">\n  <h1>Welcome to House Trading!</h1>\n  <a routerLink=\"/login\" class=\"btn btn-lg btn-success\">Login</a>\n</div>\n<ul class=\"slideshow\">\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n</ul>\n</body>\n"

/***/ }),

/***/ "./src/app/views/landing/landing.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/landing/landing.component.ts ***!
  \****************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/views/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/views/landing/landing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/views/user/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/user/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form input.ng-invalid {\r\n  border: 2px solid red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSBpbnB1dC5uZy1pbnZhbGlkIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/user/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/user/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"center\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n<div class=\"position\">\n  <h1>Login</h1>\n  <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n\n    <div class=\"form-group\">\n      <input ng-model=\"myName\" type=\"text\" name=\"username\" placeholder=\"username\" class=\"form-control\" ngModel required #username=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n\n    <div class=\"form-group\">\n      <input ng-model=\"password\" type=\"password\" name=\"password\" placeholder=\"password\" class=\"form-control\" ngModel required #password=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span>\n    <div class=\"form-group\">\n      <a href=\"/facebook/login\" class=\"btn btn-primary btn-block\"> <span class=\"fab fa-facebook\"></span> Facebook </a>\n    </div>\n    <div class=\"form-group\">\n      <button [disabled]=\"!f.valid\" class=\"btn btn-success btn-block\" type=\"submit\">Login</button>\n    </div>\n\n    <div class=\"form-group\">\n      <a routerLink=\"/register\" class=\"btn btn-info btn-block\">Register</a>\n    </div>\n  </form>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/user/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService, sharedService) {
        this.router = router;
        this.userService = userService;
        this.sharedService = sharedService;
        this.errorMsg = 'Invalid username or password !';
        this.errorFlag = false;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        console.log(this.username);
        console.log(this.password);
        // this.userService.findUserByCredential(this.username, this.password)
        //   .subscribe((user: User) => {
        //     if (user) {
        //       this.router.navigate(['/user', user._id]);
        //     }
        //   });
        this.userService.login(this.username, this.password).subscribe(function (user) {
            _this.sharedService.user = user.username;
            _this.sharedService.role = user.role;
            _this.router.navigate(['/user', user._id]);
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/user/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid \">\n\n    <a class=\"navbar-brand cl-text-white\" routerLink=\"\">Profile</a>\n    <a (click)=\"UpdateUser()\" class=\"navbar-link navbar-text float-right\"><span class=\"fas fa-check\"></span></a>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input [(ngModel)]=\"user.username\" type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Username\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\">Email address</label>\n    <input [(ngModel)]=\"user.email\" type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"alice@wonderland.com\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"first-name\">First Name</label>\n    <input [(ngModel)]=\"user.firstName\" type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"Alice\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"last-name\">Last Name</label>\n    <input [(ngModel)]=\"user.lastName\" type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"Wonderland\">\n  </div>\n\n  <a class=\"btn btn-primary btn-block\" routerLink=\"/user/{{user._id}}/house\">Houses</a>\n  <a class=\"btn btn-danger  btn-block\" routerLink=\"/login\">Logout</a>\n</div>\n\n<nav class=\"navbar navbar-light bg-light fixed-bottom\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-3 text-center\">\n        <a href=\"#\">\n          <span class=\"fas fa-check\"></span>\n        </a>\n      </div>\n      <div class=\"col-xs-3 text-center\">\n        <a href=\"#\">\n          <span class=\"fas fa-plus\"></span>\n        </a>\n      </div>\n      <div class=\"col-xs-3 text-center\">\n        <a href=\"#\">\n          <span class=\"fas fa-star\"></span>\n        </a>\n      </div>\n      <div class=\"col-xs-3 text-center\">\n        <a href=\"#\">\n          <span class=\"fas fa-heart\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/user.model.client */ "./src/app/models/user.model.client.ts");





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, activatedRouter, router) {
        this.userService = userService;
        this.activatedRouter = activatedRouter;
        this.router = router;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_4__["User"]('111', 'alice', 'alice', 'alice', 'alice', 'alice@alice', '123');
    }
    ProfileComponent.prototype.UpdateUser = function () {
        this.userService.updateUser(this.user).subscribe();
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.user._id = params['uid'];
            console.log('user id: ' + _this.user._id);
        });
        this.userService.findUserById(this.user._id.toString())
            .subscribe(function (data) {
            console.log('in login comp...');
            console.log(data);
            _this.user = data;
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout().subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/views/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/user/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/user/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/user/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/user/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Register</h1>\n  <form (ngSubmit)=\"register()\" #f=\"ngForm\">\n    <input type=\"text\" name=\"username\" placeholder=\"username\" class=\"form-control\" ngModel required #username=\"ngModel\">\n    <input type=\"password\" name=\"password\" placeholder=\"password\" class=\"form-control\" ngModel required\n           #password=\"ngModel\">\n    <input type=\"password\" name=\"verifyPassword\" placeholder=\"verifyPassword\" class=\"form-control\" ngModel required\n           #verifyPassword=\"ngModel\">\n    <select class=\"form-control\" name=\"role\" ngModel required #role=\"ngModel\">\n      <option disabled selected value>-- select a role --</option>\n      <option *ngFor=\"let role of roles\" [value]=\"role\">{{role}}</option>\n    </select>\n    <button [disabled]=\"!f.valid || password.value !== verifyPassword.value\" class=\"btn btn-primary btn-block\" type=\"submit\">\n      Register\n    </button>\n  </form>\n  <a class=\"btn btn-danger  btn-block\"\n     routerLink=\"/login\">Cancel</a>\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/user/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.roles = ['Admin', 'Seller', 'Buyer', 'Agent'];
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        var username = this.loginForm.value.username;
        var password = this.loginForm.value.password;
        var role = this.loginForm.value.role;
        this.user = { username: username, password: password, role: role };
        // this.userService.createUser(this.user)
        //   .subscribe((user: User) => {
        //     if (user) {
        //       this.router.navigate(['/user', user._id]);
        //     }
        //   });
        this.userService.register(username, password, role).subscribe(function (user) {
            _this.router.navigate(['/user', user._id]);
        }, function (error) {
            _this.error = error._body;
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], RegisterComponent.prototype, "loginForm", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/views/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/views/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3200'
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

module.exports = __webpack_require__(/*! C:\US\CS5610\CS5610-final\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map