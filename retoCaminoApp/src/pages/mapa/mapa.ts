import { Component, ViewChild, ElementRef } from '@angular/core';
//import { NavController, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';


import { Geolocation } from '@ionic-native/geolocation';


declare var google;

@Component({
  selector: 'mapa',
  templateUrl: 'mapa.html'
})
export class MapaComponent {

  map: any;
  markers: any;

  @ViewChild('map') mapRef: ElementRef;

  //constructor(public navCtrl: NavController, private plt: Platform, public geolocation: Geolocation) {
  constructor(public geolocation: Geolocation, private storage: Storage) {
    console.log("HA ENTRADO EN MapaComponent");
  }

  ngOnInit() { console.log("HA ENTRADO EN ngOnInit"); this.showMap(); };

  //ionViewDidLoad() { console.log("HA ENTRADO EN ionViewDidLoad"); this.showMap(); }


  showMap() {
    console.log("HA ENTRADO EN showMap");
    const madrid = new google.maps.LatLng(40.415335, -3.707583);
    console.log("Se va a mostrar el mapa");

    this.geolocation.getCurrentPosition()
      .then(
        pos => {
          let miPosicion = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
          let icon = "assets/imgs/Monigote.png";
          this.addMarkerIcono(miPosicion, this.map, icon);
        }
      )
      .catch(
        error => { console.log("Error en getCurrentPosition" + error) }
      );

    const options = {
      center: madrid,
      zoom: 12,
      mapTypeId: 'terrain' //'terrain', 'satellite','hybrid'
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);

    //this.addMarker(madrid, this.map);

    this.cargarPuntos();
  }

  cargarPuntos() {

    let marcadores: any;

    this.storage.get('marcadores').then(
      ok => {
        marcadores = ok;
        console.log("Tenemos los marcadores");

        for (let posicion in marcadores) {
          let latLong = new google.maps.LatLng(marcadores[posicion].lat, marcadores[posicion].long);
          //console.log("posiciones "+ latLong);
          let color: string = "";
          if (marcadores[posicion].completado) {
            color = 'assets/imgs/imageverde.png';
          } else {
            color = 'assets/imgs/menina.png';
          }
          let marker = new google.maps.Marker({
            position: latLong,
            title: marcadores[posicion].nombre,
            icon: color, //'assets/imgs/menina.png'  
    
          })
          //this.addMarker(marker, this.map);
          marker.setMap(this.map);
        }


      },
      error =>
        console.log(" error al leer los marcadores" + error));

    console.log("Empezamos a marcar los puntos");

    
  }

  addMarker(position, map) {

    return new google.maps.Marker({
      position,
      map,


    })
  }
  addMarkerIcono(position, map, icon) {

    return new google.maps.Marker({
      position,
      map,
      icon,

    })
  }
}

