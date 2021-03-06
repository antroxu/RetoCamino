import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { Homepage } from '../pages/homepage/homepage';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SubscripcionComponent } from '../pages/subscripcion/subscripcion';
import { VerDetalleRetoComponent } from '../pages/verDetalle/verDetalleReto';
import { GuardarHitoComponent } from '../pages/guardarHito/guardarHito';
import { CompartirComponent } from '../pages/compartir/compartir';
import { DetalleReto } from '../pages/detalleReto/detalleReto';
import { MapaComponent } from '../pages/mapa/mapa';
import { Storage } from '@ionic/storage';
import { RetoHitosPage } from '../pages/reto-hitos/reto-hitos';
import { IonicCreditosComponent } from '../pages/creditos/creditos';





@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = DetalleReto;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private storage: Storage
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      //{ title: 'Homepage', component: Homepage },
      //{ title: 'Lista de Retos', component: ListPage },
      //{ title: 'Subscripcion a Reto', component: SubscripcionComponent },
      //{ title: 'Ver detalle Reto', component: VerDetalleRetoComponent },
      //{ title: 'Guardar Hito', component: GuardarHitoComponent },
      //{ title: 'Compartir', component: CompartirComponent },
      { title: 'Detalle Reto', component: DetalleReto },
      //{ title: 'Mapa', component: MapaComponent },
      //{ title: 'Reto Hitos', component: RetoHitosPage },
      { title: 'Creditos', component: IonicCreditosComponent },

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
