webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_calendar__ = __webpack_require__("./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_login_login_component__ = __webpack_require__("./src/app/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_user_module__ = __webpack_require__("./src/app/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_slot_user_slot_module__ = __webpack_require__("./src/app/user-slot/user-slot.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__user_user_module__["a" /* UserModule */],
                __WEBPACK_IMPORTED_MODULE_11__user_slot_user_slot_module__["a" /* UserSlotModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular_calendar__["a" /* CalendarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot([
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__user_login_login_component__["a" /* LoginComponent */], pathMatch: 'full' },
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: '*', component: __WEBPACK_IMPORTED_MODULE_8__user_login_login_component__["a" /* LoginComponent */] },
                    { path: '**', component: __WEBPACK_IMPORTED_MODULE_8__user_login_login_component__["a" /* LoginComponent */] }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__app_service__["a" /* AppService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppService = /** @class */ (function () {
    function AppService(http) {
        var _this = this;
        this.http = http;
        // private url =  'http://localhost:3003';
        this.url = 'http://meetingplanner-backend.testmanoj.com';
        this.allCountryNames = 'https://restcountries.eu/rest/v2/all';
        this.getUserInfoFromLocalstorage = function () {
            return JSON.parse(localStorage.getItem('userInfo'));
        }; // end getUserInfoFromLocalstorage
        this.setUserInfoInLocalStorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        };
        this.getCountryNames = function () {
            var response = _this.http.get(_this.allCountryNames);
            return response;
        };
    }
    AppService.prototype.signupFunction = function (data) {
        var params = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpParams */]()
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('mobileNumber', data.mobile)
            .set('email', data.email)
            .set('password', data.password)
            .set('countryCode', data.countryCode);
        return this.http.post(this.url + "/api/v1/meetingPlanner/signup", params);
    }; // end of signupFunction function.
    AppService.prototype.signinFunction = function (data) {
        var params = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpParams */]()
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.url + "/api/v1/meetingPlanner/login", params);
    }; // end of signinFunction function.
    AppService.prototype.resetFunction = function (data) {
        var params = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpParams */]()
            .set('resetPassword', data.resetPassword)
            .set('resetPasswordToken', data.resetPasswordToken);
        return this.http.post(this.url + "/api/v1/meetingPlanner/reset", params);
    }; // end of resetFunction .
    AppService.prototype.forgotFunction = function (data) {
        debugger;
        var params = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpParams */]()
            .set('forgotEmail', data.forgotEmail);
        return this.http.post(this.url + "/api/v1/meetingPlanner/forgot", params);
    };
    AppService.prototype.getallUsers = function () {
        debugger;
        return this.http.get(this.url + "/api/v1/meetingPlanner/allUsers");
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/user-slot/admin/admin.component.css":
/***/ (function(module, exports) {

module.exports = ".adminuserlistwrapper {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    padding: 2rem;\r\n    margin: 2rem 0px;\r\n    background-color: rgb(246, 246, 246);\r\n    border-top-left-radius: 1rem;\r\n    border-top-right-radius: 1rem;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    border-color: rgb(193, 183, 183);\r\n}"

/***/ }),

/***/ "./src/app/user-slot/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n  <a class=\"navbar-brand\" href=\"javascript:void(0)\" >Meeting Planner</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav\">\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link cursorPointer\" (click)=\"logout()\">Logout</a>\n\n      </li>\n\n    </ul>\n\n  </div>\n</nav>\n\n<div class=\"row p-0 m-0\">\n\n  <div class=\"col-sm col-md-auto col-lg-auto\"></div>\n\n  <div class=\"col-sm p-5\">\n\n        User List\n\n        <div *ngFor=\"let userdata of allUsers;let i = index\">\n           <p class=\"adminuserlistwrapper\"> User {{i+1}}: {{userdata.firstName}} {{userdata.lastName}} </p>\n        </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/user-slot/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__ = __webpack_require__("./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminComponent = /** @class */ (function () {
    function AdminComponent(appService, router, toastr, _route, vcr) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this._route = _route;
        this.logout = function () {
            window.localStorage.clear();
            __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__["Cookie"].deleteAll();
            _this.router.navigate(['/']);
        }; // end logout
        this.getAllUsers = function () {
            _this.appService.getallUsers()
                .subscribe(function (apiResponse) {
                var that = _this;
                if (apiResponse.status === 200) {
                    console.log(apiResponse);
                    _this.allUsers = apiResponse.data;
                    _this.toastr.success('user List  get Successfully');
                }
                else {
                    _this.toastr.error(apiResponse.message);
                }
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        };
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getAllUsers();
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("./src/app/user-slot/admin/admin.component.html"),
            styles: [__webpack_require__("./src/app/user-slot/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/user-slot/normal-user/normal-user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-slot/normal-user/normal-user.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\r\n\r\n  <a class=\"navbar-brand\" href=\"javascript:void(0)\" >Meeting Planner</a>\r\n\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n\r\n    <ul class=\"navbar-nav\">\r\n\r\n      <li class=\"nav-item\">\r\n\r\n        <a class=\"nav-link cursorPointer\"  (click)=\"logout()\">Logout</a>\r\n\r\n      </li>\r\n\r\n    </ul>\r\n\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"row p-0 m-0\">\r\n\r\n  <div class=\"col-sm col-md-auto col-lg-auto\"></div>\r\n\r\n  <div class=\"col-sm p-5\">\r\n\r\n       Calendar\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/user-slot/normal-user/normal-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NormalUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__ = __webpack_require__("./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NormalUserComponent = /** @class */ (function () {
    function NormalUserComponent(appService, router, toastr, _route, vcr) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this._route = _route;
        this.logout = function () {
            window.localStorage.clear();
            __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__["Cookie"].deleteAll();
            _this.router.navigate(['/']);
        }; // end logout
    }
    NormalUserComponent.prototype.ngOnInit = function () {
    };
    NormalUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-normal-user',
            template: __webpack_require__("./src/app/user-slot/normal-user/normal-user.component.html"),
            styles: [__webpack_require__("./src/app/user-slot/normal-user/normal-user.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], NormalUserComponent);
    return NormalUserComponent;
}());

// import { Component, ChangeDetectionStrategy } from '@angular/core';
// import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
// import { colors } from '../demo-utils/colors';
// @Component({
//   selector: 'mwl-demo-component',
//   changeDetection: ChangeDetectionStrategy.OnPush,
//   templateUrl: 'template.html'
// })
// export class NormalUserComponent {
//   viewDate: Date = new Date();
//   events: Array<CalendarEvent<{ incrementsBadgeTotal: boolean }>> = [
//     {
//       title: 'Increments badge total on the day cell',
//       color: colors.yellow,
//       start: new Date(),
//       meta: {
//         incrementsBadgeTotal: true
//       }
//     },
//     {
//       title: 'Does not increment the badge total on the day cell',
//       color: colors.blue,
//       start: new Date(),
//       meta: {
//         incrementsBadgeTotal: false
//       }
//     }
//   ];
//   beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
//     body.forEach(day => {
//       day.badgeTotal = day.events.filter(
//         event => event.meta.incrementsBadgeTotal
//       ).length;
//     });
//   }
// }
// import {
//   Component,
//   ChangeDetectionStrategy,
//   ViewChild,
//   TemplateRef
// } from '@angular/core';
// import {
//   startOfDay,
//   endOfDay,
//   subDays,
//   addDays,
//   endOfMonth,
//   isSameDay,
//   isSameMonth,
//   addHours
// } from 'date-fns';
// import { Subject } from 'rxjs';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
// import {
//   CalendarEvent,
//   CalendarEventAction,
//   CalendarEventTimesChangedEvent
// } from 'angular-calendar';
// const colors: any = {
//   red: {
//     primary: '#ad2121',
//     secondary: '#FAE3E3'
//   },
//   blue: {
//     primary: '#1e90ff',
//     secondary: '#D1E8FF'
//   },
//   yellow: {
//     primary: '#e3bc08',
//     secondary: '#FDF1BA'
//   }
// };
// @Component({
//   selector: 'mwl-demo-component',
//   changeDetection: ChangeDetectionStrategy.OnPush,
//   templateUrl: './normal-user.component.html',
//   styleUrls: ['./normal-user.component.css'],
// })
// export class NormalUserComponent {
//   @ViewChild('modalContent') modalContent: TemplateRef<any>;
//   view: string = 'month';
//   viewDate: Date = new Date();
//   modalData: {
//     action: string;
//     event: CalendarEvent;
//   };
//   actions: CalendarEventAction[] = [
//     {
//       label: '<i class="fa fa-fw fa-pencil"></i>',
//       onClick: ({ event }: { event: CalendarEvent }): void => {
//         this.handleEvent('Edited', event);
//       }
//     },
//     {
//       label: '<i class="fa fa-fw fa-times"></i>',
//       onClick: ({ event }: { event: CalendarEvent }): void => {
//         this.events = this.events.filter(iEvent => iEvent !== event);
//         this.handleEvent('Deleted', event);
//       }
//     }
//   ];
//   refresh: Subject<any> = new Subject();
//   events: CalendarEvent[] = [
//     {
//       start: subDays(startOfDay(new Date()), 1),
//       end: addDays(new Date(), 1),
//       title: 'A 3 day event',
//       color: colors.red,
//       actions: this.actions
//     },
//     {
//       start: startOfDay(new Date()),
//       title: 'An event with no end date',
//       color: colors.yellow,
//       actions: this.actions
//     },
//     {
//       start: subDays(endOfMonth(new Date()), 3),
//       end: addDays(endOfMonth(new Date()), 3),
//       title: 'A long event that spans 2 months',
//       color: colors.blue
//     },
//     {
//       start: addHours(startOfDay(new Date()), 2),
//       end: new Date(),
//       title: 'A draggable and resizable event',
//       color: colors.yellow,
//       actions: this.actions,
//       resizable: {
//         beforeStart: true,
//         afterEnd: true
//       },
//       draggable: true
//     }
//   ];
//   activeDayIsOpen: boolean = true;
//   constructor(private modal: NgbModal) {}
//   dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
//     if (isSameMonth(date, this.viewDate)) {
//       this.viewDate = date;
//       if (
//         (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
//         events.length === 0
//       ) {
//         this.activeDayIsOpen = false;
//       } else {
//         this.activeDayIsOpen = true;
//       }
//     }
//   }
//   eventTimesChanged({
//     event,
//     newStart,
//     newEnd
//   }: CalendarEventTimesChangedEvent): void {
//     event.start = newStart;
//     event.end = newEnd;
//     this.handleEvent('Dropped or resized', event);
//     this.refresh.next();
//   }
//   handleEvent(action: string, event: CalendarEvent): void {
//     this.modalData = { event, action };
//     this.modal.open(this.modalContent, { size: 'lg' });
//   }
//   addEvent(): void {
//     this.events.push({
//       title: 'New event',
//       start: startOfDay(new Date()),
//       end: endOfDay(new Date()),
//       color: colors.red,
//       draggable: true,
//       resizable: {
//         beforeStart: true,
//         afterEnd: true
//       }
//     });
//     this.refresh.next();
//   }
// }


/***/ }),

/***/ "./src/app/user-slot/user-slot.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSlotModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__normal_user_normal_user_component__ = __webpack_require__("./src/app/user-slot/normal-user/normal-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_admin_component__ = __webpack_require__("./src/app/user-slot/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_modal_modal_module__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
// import { NgModule } from '@angular/core';
// import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { CommonModule } from '@angular/common';
// import { NormalUserComponent } from './normal-user/normal-user.component';
// import { AdminComponent } from './admin/admin.component';
// import { RouterModule, Routes } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToastModule } from 'ng2-toastr';
// import { HttpClientModule } from '@angular/common/http';
// @NgModule({
//   imports: [
//     CommonModule,
//      FormsModule,
//     BrowserAnimationsModule,
//     HttpClientModule,
//        NgbModalModule.forRoot(),
//     ToastModule.forRoot(),
//     RouterModule.forChild([
//       { path: 'normal-user', component: NormalUserComponent },
//       {path:'admin',component:AdminComponent}
//     ])
//   ],
//   declarations: [NormalUserComponent, AdminComponent]
// })
// export class UserSlotModule { }
// import 'flatpickr/dist/flatpickr.css';






// import { FlatpickrModule } from 'angularx-flatpickr';
// import { DemoComponent } from './component';

var UserSlotModule = /** @class */ (function () {
    function UserSlotModule() {
    }
    UserSlotModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_modal_modal_module__["a" /* NgbModalModule */].forRoot(),
                // FlatpickrModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forChild([
                    { path: 'normal-user', component: __WEBPACK_IMPORTED_MODULE_1__normal_user_normal_user_component__["a" /* NormalUserComponent */] },
                    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_2__admin_admin_component__["a" /* AdminComponent */] }
                ])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__normal_user_normal_user_component__["a" /* NormalUserComponent */], __WEBPACK_IMPORTED_MODULE_2__admin_admin_component__["a" /* AdminComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__normal_user_normal_user_component__["a" /* NormalUserComponent */]]
        })
    ], UserSlotModule);
    return UserSlotModule;
}());



/***/ }),

/***/ "./src/app/user/forgot/forgot.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/forgot/forgot.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n  <a class=\"navbar-brand\" href=\"javascript:void(0)\" (click)=\"goToSignIn()\">Meeting Planner</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav\">\n\n      <!--<li class=\"nav-item\">\n\n        <a class=\"nav-link\" (click)=\"goToSignUp()\">Sign-Up</a>\n\n      </li>-->\n\n    </ul>\n\n  </div>\n\n</nav>\n\n<div class=\"row p-0 m-0\">\n\n  <div class=\"col-sm\"></div>\n\n  <div class=\"col-sm p-5\">\n\n   \n   <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"forgotEmailValue\" placeholder=\"Enter Email\" required autofocus>\n\n    <br>\n\n\n\n   \n\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"forgotEmail()\">Submit</button>\n\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/user/forgot/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotComponent = /** @class */ (function () {
    function ForgotComponent(appService, router, toastr, _route, vcr) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this._route = _route;
        this.goToSignIn = function () {
            _this.router.navigate(['/']);
        }; // end goToSignIn
        this.forgotEmail = function () {
            if (!_this.forgotEmailValue) {
                _this.toastr.warning('enter Email');
            }
            else {
                debugger;
                var data = {
                    forgotEmail: _this.forgotEmailValue
                };
                _this.appService.forgotFunction(data)
                    .subscribe(function (apiResponse) {
                    debugger;
                    if (apiResponse.status === 200) {
                        console.log(apiResponse);
                        _this.toastr.success('Link Sent to your email Successfull');
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    _this.toastr.error('some error occured');
                });
            }
        };
        this.toastr.setRootViewContainerRef(vcr);
    }
    ForgotComponent.prototype.ngOnInit = function () {
    };
    ForgotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__("./src/app/user/forgot/forgot.component.html"),
            styles: [__webpack_require__("./src/app/user/forgot/forgot.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n  <a class=\"navbar-brand\" href=\"javascript:void(0)\">Meeting Planner</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav\">\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link cursorPointer\" (click)=\"goToSignUp()\">Sign-Up</a>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</nav>\n\n<div class=\"row p-0 m-0\">\n\n  <div class=\"col-sm\"></div>\n\n  <div class=\"col-sm p-5\">\n\n    <h2 class=\"form-signin-heading\">Please sign in</h2>\n\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required autofocus>\n\n    <br>\n\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\n\n    <p class=\"forgot\" (click)=\"forgotFunction()\">Forgot Password ?</p>\n\n    <br>\n\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"signinFunction()\">Sign in</button>\n\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__ = __webpack_require__("./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(appService, router, toastr, vcr) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.goToSignUp = function () {
            _this.router.navigate(['/sign-up']);
        }; // end goToSignUp
        this.forgotFunction = function () {
            _this.router.navigate(['/forgot']);
        }; // end goToSignUp
        this.signinFunction = function () {
            if (!_this.email) {
                _this.toastr.warning('enter email');
            }
            else if (!_this.password) {
                _this.toastr.warning('enter password');
            }
            else {
                var data = {
                    email: _this.email,
                    password: _this.password
                };
                _this.appService.signinFunction(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        debugger;
                        var that_1 = _this;
                        console.log(apiResponse);
                        __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].set('authtoken', apiResponse.data.authToken);
                        __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].set('receiverId', apiResponse.data.userDetails.userId);
                        __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
                        _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                        _this.toastr.success('You successfully logged in');
                        setTimeout(function () {
                            if (apiResponse.data && apiResponse.data.userDetails &&
                                (apiResponse.data.userDetails.firstName && apiResponse.data.userDetails.firstName.toLowerCase().includes('admin')) ||
                                (apiResponse.data.userDetails.lastName && apiResponse.data.userDetails.lastName.toLowerCase().includes('admin'))) {
                                that_1.router.navigate(['/admin']);
                            }
                            else {
                                that_1.router.navigate(['/normal-user']);
                            }
                        }, 1000);
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    if (err && err.error && err.error.message) {
                        _this.toastr.error(err.error.message);
                    }
                    else {
                        _this.toastr.error('some error occured');
                    }
                });
            } // end condition
        }; // end signinFunction
        this.toastr.setRootViewContainerRef(vcr);
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/user/login/login.component.html"),
            styles: [__webpack_require__("./src/app/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/reset/reset.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/reset/reset.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n  <a class=\"navbar-brand\" href=\"javascript:void(0)\" (click)=\"goToSignIn()\">Meeting Planner</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav\">\n<!--\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link\" (click)=\"goToSignUp()\">Sign-Up</a>\n\n      </li>-->\n\n    </ul>\n\n  </div>\n\n</nav>\n\n<div class=\"row p-0 m-0\">\n\n  <div class=\"col-sm\"></div>\n\n  <div class=\"col-sm p-5\">\n\n   \n\n    <label for=\"inputPassword\" class=\"sr-only\">Enter Password</label>\n\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"newPassword\" placeholder=\" Enter Password\" required>\n\n\n    <br>\n\n    <label for=\"inputPassword\" class=\"sr-only\">Confirm Password</label>\n\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"confirmPassword\" placeholder=\"Confrim Password\" required>\n\n\n    <br>\n\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"updatePasswordFunction()\">Update Password</button>\n\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/user/reset/reset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetComponent = /** @class */ (function () {
    function ResetComponent(appService, router, toastr, _route, vcr) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this._route = _route;
        this.goToSignIn = function () {
            _this.router.navigate(['/']);
        }; // end goToSignIn
        this.updatePasswordFunction = function () {
            if (!_this.newPassword) {
                _this.toastr.warning('enter Password');
            }
            else if (_this.newPassword != _this.confirmPassword) {
                _this.toastr.warning('Your Password is mismatch');
            }
            else {
                var resetPasswordToken = _this._route.snapshot.paramMap.get('token');
                var data = {
                    resetPassword: _this.confirmPassword,
                    resetPasswordToken: resetPasswordToken
                };
                _this.appService.resetFunction(data)
                    .subscribe(function (apiResponse) {
                    var that = _this;
                    if (apiResponse.status === 200) {
                        console.log(apiResponse);
                        _this.toastr.success('Your Password Updated Successfully');
                        setTimeout(function () {
                            that.router.navigate(['/list-view']);
                        }, 1000);
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    _this.toastr.error('some error occured');
                });
            } // end condition
        }; //
        this.toastr.setRootViewContainerRef(vcr);
    }
    ResetComponent.prototype.ngOnInit = function () {
    };
    ResetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reset',
            template: __webpack_require__("./src/app/user/reset/reset.component.html"),
            styles: [__webpack_require__("./src/app/user/reset/reset.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], ResetComponent);
    return ResetComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n  <a class=\"navbar-brand\" href=\"javascript:void(0)\">Meeting Planner</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav mr-auto\">\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link cursorPointer\" (click)=\"goToSignIn()\">Sign-In</a>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</nav>\n\n<div class=\"row p-0 m-0\">\n\n  <div class=\"col-sm\"></div>\n\n  <div class=\"col-sm p-5\">\n\n    <h2 class=\"form-signin-heading\">Sign Up To Start Create Your Lists</h2>\n\n    <br>\n\n    <span>FirstName: </span>\n\n    <label for=\"inputFirstName\" class=\"sr-only\">FirstName</label>\n\n    <input type=\"text\" id=\"inputFirstName\" class=\"form-control\" [(ngModel)]=\"firstName\" placeholder=\"FirstName\" required autofocus>\n\n    <br>\n\n    <span>LastName: </span>\n\n    <label for=\"inputLastName\" class=\"sr-only\">LastName</label>\n\n    <input type=\"text\" id=\"inputLastName\" class=\"form-control\" [(ngModel)]=\"lastName\" placeholder=\"LastName\" required>\n\n    <br>\n    <span>Select Country: </span>\n\n      <select class=\"form-control\" (change)=\"countryCode()\" [(ngModel)]=\"userProfile\" >\n        <option value=\"\">Country</option>\n      <option  *ngFor=\"let country of allCountryNames\" value={{country.callingCodes[0]}} >{{country.name}}</option>\n      </select>\n\n    <br>\n\n    <span *ngIf=\"countryCodeValue\">Mobile Code: +{{countryCodeValue}}</span>\n\n    <label for=\"inputMobile\" class=\"sr-only\">Mobile</label>\n    \n    <input type=\"number\" id=\"inputMobile\" class=\"form-control\" [(ngModel)]=\"mobile\" placeholder=\"Mobile\" required>\n\n    <br>\n\n    <span>Email: </span>\n\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required>\n\n    <br>\n\n    <span>Password: </span>\n\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\n\n    <br>\n\n\n    <!--<span>API Key: </span>\n\n    <label for=\"inputPassword\" class=\"sr-only\">AuthKey</label>\n\n    <textarea type=\"password\" id=\"AuthKey\" class=\"form-control\" [(ngModel)]=\"apiKey\" placeholder=\"API Key\" required></textarea>\n\n    <br>-->\n\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"signupFunction()\">Sign Up</button>\n\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(appService, router, toastr, vcr) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.goToSignIn = function () {
            _this.router.navigate(['/']);
        }; // end goToSignIn
        this.signupFunction = function () {
            if (!_this.firstName) {
                _this.toastr.warning('enter first name');
            }
            else if (!_this.lastName) {
                _this.toastr.warning('enter last name');
            }
            else if (!_this.mobile) {
                _this.toastr.warning('enter mobile');
            }
            else if (!_this.email) {
                _this.toastr.warning('enter email');
            }
            else if (!_this.password) {
                _this.toastr.warning('enter password');
            }
            else if (!_this.countryCodeValue) {
                _this.toastr.warning('select country name');
            }
            else {
                var data = {
                    firstName: _this.firstName,
                    lastName: _this.lastName,
                    mobile: _this.mobile,
                    email: _this.email,
                    password: _this.password,
                    countryCode: _this.countryCodeValue
                };
                console.log(data);
                _this.appService.signupFunction(data)
                    .subscribe(function (apiResponse) {
                    console.log(apiResponse);
                    if (apiResponse.status === 200) {
                        _this.toastr.success('Signup successful');
                        setTimeout(function () {
                            _this.goToSignIn();
                        }, 2000);
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    _this.toastr.error('some error occured');
                });
            } // end condition
        }; // end signupFunction
        this.countryCode = function () {
            debugger;
            _this.countryCodeValue = _this.userProfile;
        };
        this.toastr.setRootViewContainerRef(vcr);
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getCountryNames().subscribe(function (data) {
            // alert("Books Response" + JSON.stringify(data));
            // this.getBooksSortedData(data);
            // this.allBooks = data;
            debugger;
            _this.allCountryNames = data;
        }, function (error) {
            alert("error" + error);
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/user/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__ = __webpack_require__("./src/app/user/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgot_forgot_component__ = __webpack_require__("./src/app/user/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reset_reset_component__ = __webpack_require__("./src/app/user/reset/reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */].forChild([
                    { path: 'sign-up', component: __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__["a" /* SignupComponent */] },
                    { path: 'reset/:token', component: __WEBPACK_IMPORTED_MODULE_5__reset_reset_component__["a" /* ResetComponent */] },
                    { path: 'forgot', component: __WEBPACK_IMPORTED_MODULE_4__forgot_forgot_component__["a" /* ForgotComponent */] }
                ])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__["a" /* SignupComponent */], __WEBPACK_IMPORTED_MODULE_4__forgot_forgot_component__["a" /* ForgotComponent */], __WEBPACK_IMPORTED_MODULE_5__reset_reset_component__["a" /* ResetComponent */]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map