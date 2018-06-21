webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Homepage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Homepage = /** @class */ (function () {
    function Homepage() {
    }
    Homepage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'homepage',template:/*ion-inline-start:"/Users/Dev1/Desktop/Projects/lastday/RetoCamino/retoCaminoApp/src/pages/homepage/homepage.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Reto Camino Homepage</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <img src="" alt="imagen correcaminos presentacion">\n      <form>\n        <ion-label>Email</ion-label><ion-input placeholder="introduce tu nombre"></ion-input>\n        <ion-label>Contraseña</ion-label><ion-input placeholder="introduce tu email"></ion-input>\n        <section>\n            <button ion-button color="primary">Entrar</button>\n            <button ion-button color="primary">Registrarse</button>\n        </section>\n      </form>    \n</ion-content>\n'/*ion-inline-end:"/Users/Dev1/Desktop/Projects/lastday/RetoCamino/retoCaminoApp/src/pages/homepage/homepage.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], Homepage);
    return Homepage;
}());

//# sourceMappingURL=homepage.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_details_item_details__["a" /* ItemDetailsPage */], {
            item: item
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/Dev1/Desktop/Projects/lastday/RetoCamino/retoCaminoApp/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Lista de retos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Dev1/Desktop/Projects/lastday/RetoCamino/retoCaminoApp/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailsPage = /** @class */ (function () {
    function ItemDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    ItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-details',template:/*ion-inline-start:"/Users/Dev1/Desktop/Projects/lastday/RetoCamino/retoCaminoApp/src/pages/item-details/item-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Item Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 text-center *ngIf="selectedItem">\n    {{selectedItem.title}}\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n  </h3>\n  <h4 text-center *ngIf="selectedItem">\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </h4>\n</ion-content>\n'/*ion-inline-end:"/Users/Dev1/Desktop/Projects/lastday/RetoCamino/retoCaminoApp/src/pages/item-details/item-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscripcionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubscripcionComponent = /** @class */ (function () {
    function SubscripcionComponent() {
    }
    SubscripcionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'subscripcion',template:/*ion-inline-start:"/Users/Dev1/Desktop/Projects/lastday/RetoCamino/retoCaminoApp/src/pages/subscripcion/subscripcion.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Subscripcion a Reto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n    Subscripcion\n  </div>\n \n\n</ion-content>\n'/*ion-inline-end:"/Users/Dev1/Desktop/Projects/lastday/RetoCamino/retoCaminoApp/src/pages/subscripcion/subscripcion.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SubscripcionComponent);
    return SubscripcionComponent;
}());

//# sourceMappingURL=subscripcion.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerDetalleRetoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VerDetalleRetoComponent = /** @class */ (function () {
    function VerDetalleRetoComponent() {
    }
    VerDetalleRetoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'verDetalleReto',template:/*ion-inline-start:"/Users/Dev1/Desktop/Projects/lastday/RetoCamino/retoCaminoApp/src/pages/verDetalle/verDetalleReto.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Ver detalle reto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  verDetalle\n\n</ion-content>\n'/*ion-inline-end:"/Users/Dev1/Desktop/Projects/lastday/RetoCamino/retoCaminoApp/src/pages/verDetalle/verDetalleReto.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], VerDetalleRetoComponent);
    return VerDetalleRetoComponent;
}());

//# sourceMappingURL=verDetalleReto.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardarHitoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GuardarHitoComponent = /** @class */ (function () {
    function GuardarHitoComponent() {
    }
    GuardarHitoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'guardarHito',template:/*ion-inline-start:"/Users/Dev1/Desktop/Projects/lastday/RetoCamino/retoCaminoApp/src/pages/guardarHito/guardarHito.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>  Guardar Hito    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  Guardar Hito\n\n</ion-content>\n'/*ion-inline-end:"/Users/Dev1/Desktop/Projects/lastday/RetoCamino/retoCaminoApp/src/pages/guardarHito/guardarHito.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], GuardarHitoComponent);
    return GuardarHitoComponent;
}());

//# sourceMappingURL=guardarHito.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompartirComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompartirComponent = /** @class */ (function () {
    function CompartirComponent() {
    }
    CompartirComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'compartir',template:/*ion-inline-start:"/Users/Dev1/Desktop/Projects/lastday/RetoCamino/retoCaminoApp/src/pages/compartir/compartir.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Compartir</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  Compartir\n\n</ion-content>\n'/*ion-inline-end:"/Users/Dev1/Desktop/Projects/lastday/RetoCamino/retoCaminoApp/src/pages/compartir/compartir.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CompartirComponent);
    return CompartirComponent;
}());

//# sourceMappingURL=compartir.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleReto; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetalleReto = /** @class */ (function () {
    function DetalleReto() {
    }
    DetalleReto = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'detalle_reto',template:/*ion-inline-start:"/Users/Dev1/Desktop/Projects/lastday/RetoCamino/retoCaminoApp/src/pages/detalleReto/detallereto.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Detalle Reto</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="detallereto" border-color = "#FFFFFF" color = "#FFFFFF">\n      <ion-segment-button value="info" border-color = "#FFFFFF" color = "#FFFFFF">\n        Info\n      </ion-segment-button>\n      <ion-segment-button value="hitos">\n        Hitos\n      </ion-segment-button>\n      <ion-segment-button value="mapa">\n        Mapa\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div [ngSwitch]="detallereto">\n    <!-- Primer pestaña, información del reto-->\n    <ion-list *ngSwitchCase="\'info\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="../../assets/imgs/Asteroide.png">\n        </ion-thumbnail>\n        <h2>Menina 1</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="../../assets/imgs/Asteroide.png">\n        </ion-thumbnail>\n        <h2>Menina 2</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="../../assets/imgs/Asteroide.png">\n        </ion-thumbnail>\n        <h2>Menina 3</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="../../assets/imgs/Asteroide.png">\n        </ion-thumbnail>\n        <h2>Menina 4</h2>\n      </ion-item>\n    </ion-list>\n\n    <!-- Segunda pestaña, lista de hitos-->\n    <ion-list *ngSwitchCase="\'hitos\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="../../assets/imgs/VGarden.png">\n        </ion-thumbnail>\n        <h2>Menina 5</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="../../assets/imgs/VGarden.png">\n        </ion-thumbnail>\n        <h2>Menina 6</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="../../assets/imgs/VGarden.png">\n        </ion-thumbnail>\n        <h2>Menina 7</h2>\n      </ion-item>\n     \n    </ion-list>\n\n    \n    <ion-list *ngSwitchCase="\'mapa\'">\n\n      <mapa></mapa>\n      \n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/Dev1/Desktop/Projects/lastday/RetoCamino/retoCaminoApp/src/pages/detalleReto/detallereto.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], DetalleReto);
    return DetalleReto;
}());

//# sourceMappingURL=detalleReto.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { NavController, Platform } from 'ionic-angular';

var MapaComponent = /** @class */ (function () {
    //constructor(public navCtrl: NavController, private plt: Platform, public geolocation: Geolocation) {
    function MapaComponent(geolocation) {
        this.geolocation = geolocation;
        console.log("HA ENTRADO EN MapaComponent");
    }
    MapaComponent.prototype.ngOnInit = function () { console.log("HA ENTRADO EN ngOnInit"); this.showMap(); };
    ;
    //ionViewDidLoad() { console.log("HA ENTRADO EN ionViewDidLoad"); this.showMap(); }
    MapaComponent.prototype.showMap = function () {
        var _this = this;
        console.log("HA ENTRADO EN showMap");
        var madrid = new google.maps.LatLng(40.415335, -3.707583);
        console.log("Se va a mostrar el mapa");
        this.geolocation.getCurrentPosition()
            .then(function (pos) {
            var miPosicion = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
            var icon = "assets/imgs/Monigote.png";
            _this.addMarkerIcono(miPosicion, _this.map, icon);
        })
            .catch(function (error) { console.log("Error en getCurrentPosition" + error); });
        var miPosicion = new google.maps.LatLng(40.465315, -3.616530);
        var icon = "assets/imgs/Monigote.png";
        this.addMarkerIcono(miPosicion, this.map, icon);
        var options = {
            center: madrid,
            zoom: 12,
            mapTypeId: 'terrain' //'terrain', 'satellite','hybrid'
        };
        this.map = new google.maps.Map(this.mapRef.nativeElement, options);
        //this.addMarker(madrid, this.map);
        var marcadores = [{
                nombre: 'Sol',
                lat: 40.465315,
                long: -3.616530,
            }, {
                nombre: 'Gold mirror',
                lat: 40.418238,
                long: -3.691775,
            }];
        console.log("el array " + marcadores);
        for (var posicion in marcadores) {
            this.cargarPuntos(marcadores, posicion);
        }
        var mapEle = document.getElementById('map');
        console.log("fin");
    };
    MapaComponent.prototype.cargarPuntos = function (marcadores, posicion) {
        var latLong = new google.maps.LatLng(marcadores[posicion].lat, marcadores[posicion].long);
        console.log("posiciones " + latLong);
        var marker = new google.maps.Marker({
            position: latLong,
            title: marcadores[posicion].nombre,
            icon: 'assets/imgs/menina.png',
        });
        this.addMarker(marker, this.map);
        marker.setMap(this.map);
    };
    MapaComponent.prototype.addMarker = function (position, map) {
        return new google.maps.Marker({
            position: position,
            map: map,
        });
    };
    MapaComponent.prototype.addMarkerIcono = function (position, map, icon) {
        return new google.maps.Marker({
            position: position,
            map: map,
            icon: icon,
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapaComponent.prototype, "mapRef", void 0);
    MapaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'mapa',template:/*ion-inline-start:"/Users/Dev1/Desktop/Projects/lastday/RetoCamino/retoCaminoApp/src/pages/mapa/mapa.html"*/'<!--  <ion-content>  -->  \n        <div #map id="map"></div>\n<!--  </ion-content> --> '/*ion-inline-end:"/Users/Dev1/Desktop/Projects/lastday/RetoCamino/retoCaminoApp/src/pages/mapa/mapa.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MapaComponent);
    return MapaComponent;
}());

//# sourceMappingURL=mapa.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_homepage_homepage__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_subscripcion_subscripcion__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_verDetalle_verDetalleReto__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_guardarHito_guardarHito__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_compartir_compartir__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_mapa_mapa__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_detalleReto_detalleReto__ = __webpack_require__(200);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_homepage_homepage__["a" /* Homepage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_subscripcion_subscripcion__["a" /* SubscripcionComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_verDetalle_verDetalleReto__["a" /* VerDetalleRetoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_guardarHito_guardarHito__["a" /* GuardarHitoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_compartir_compartir__["a" /* CompartirComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_mapa_mapa__["a" /* MapaComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_detalleReto_detalleReto__["a" /* DetalleReto */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_homepage_homepage__["a" /* Homepage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_subscripcion_subscripcion__["a" /* SubscripcionComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_verDetalle_verDetalleReto__["a" /* VerDetalleRetoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_guardarHito_guardarHito__["a" /* GuardarHitoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_compartir_compartir__["a" /* CompartirComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_mapa_mapa__["a" /* MapaComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_detalleReto_detalleReto__["a" /* DetalleReto */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__["a" /* Geolocation */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_homepage_homepage__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_list_list__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_subscripcion_subscripcion__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_verDetalle_verDetalleReto__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_guardarHito_guardarHito__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_compartir_compartir__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_detalleReto_detalleReto__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mapa_mapa__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_homepage_homepage__["a" /* Homepage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Homepage', component: __WEBPACK_IMPORTED_MODULE_2__pages_homepage_homepage__["a" /* Homepage */] },
            { title: 'Lista de Retos', component: __WEBPACK_IMPORTED_MODULE_3__pages_list_list__["a" /* ListPage */] },
            { title: 'Subscripcion a Reto', component: __WEBPACK_IMPORTED_MODULE_6__pages_subscripcion_subscripcion__["a" /* SubscripcionComponent */] },
            { title: 'Ver detalle Reto', component: __WEBPACK_IMPORTED_MODULE_7__pages_verDetalle_verDetalleReto__["a" /* VerDetalleRetoComponent */] },
            { title: 'Guardar Hito', component: __WEBPACK_IMPORTED_MODULE_8__pages_guardarHito_guardarHito__["a" /* GuardarHitoComponent */] },
            { title: 'Compartir', component: __WEBPACK_IMPORTED_MODULE_9__pages_compartir_compartir__["a" /* CompartirComponent */] },
            { title: 'Detalle Reto', component: __WEBPACK_IMPORTED_MODULE_10__pages_detalleReto_detalleReto__["a" /* DetalleReto */] },
            { title: 'Mapa', component: __WEBPACK_IMPORTED_MODULE_11__pages_mapa_mapa__["a" /* MapaComponent */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Dev1/Desktop/Projects/lastday/RetoCamino/retoCaminoApp/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/Dev1/Desktop/Projects/lastday/RetoCamino/retoCaminoApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map