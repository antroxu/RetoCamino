import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the RetoInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-reto-info',
  templateUrl: 'reto-info.html',
})
export class RetoInfoPage {

    fotos = [];
  constructor(private storage: Storage) {
   
    this.cargarFotos();
  }

  cargarFotos(){
  let marcadores: any;

    this.storage.get('marcadores').then(
      ok => {
        marcadores = ok;
        console.log("Tenemos los marcadores")
        for (let posicion in marcadores) {
          this.fotos.push(marcadores[posicion].foto);
          console.log ("fotos " + this.fotos);
        }
      },
      error =>
      console.log(" error al leer los marcadores" + error));
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RetoInfoPage');
  }

}
