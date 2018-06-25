import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the RetoHitosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-reto-hitos',
  templateUrl: 'reto-hitos.html',
})
export class RetoHitosPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>; 
  marcadores: any;
  marcadores_listo: boolean;

  constructor(private storage: Storage) {
    //let marcadores: any;
    // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    // 'american-football', 'boat', 'bluetooth', 'build'];

    // this.items = [];
    // for(let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }

    this.marcadores_listo = false;

    this.storage.get('marcadores').then(
      ok => {
        this.marcadores = ok;
        console.log('marcadores: ',this.marcadores);
        this.marcadores_listo = true;
        this.items =[]; 
        for(let i = 0; i < this.marcadores.length; i++) {
          console.log('el '+i+': ', this.marcadores[i].nombre);
          this.items.push({
            title: this.marcadores[i].nombre,
            note: this.marcadores[i].direccion,
            icon: this.marcadores[i].foto
          });
          console.log('parada')
        }
      })
  }


  
  itemTapped($event, item){
    console.log("click")
  }

}
