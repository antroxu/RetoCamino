import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Homepage } from '../pages/homepage/homepage';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SubscripcionComponent } from '../pages/subscripcion/subscripcion';
import { VerDetalleRetoComponent } from '../pages/verDetalle/verDetalleReto';
import { GuardarHitoComponent } from '../pages/guardarHito/guardarHito';
import { CompartirComponent } from '../pages/compartir/compartir';

@NgModule({
  declarations: [
    MyApp,
    Homepage,
    ItemDetailsPage,
    ListPage,
    SubscripcionComponent,
    VerDetalleRetoComponent,
    GuardarHitoComponent,
    CompartirComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Homepage,
    ItemDetailsPage,
    ListPage,
    SubscripcionComponent,
    VerDetalleRetoComponent,
    GuardarHitoComponent,
    CompartirComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
