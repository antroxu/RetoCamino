import { Component, ViewChild, ElementRef } from '@angular/core';
//import { NavController, Platform } from 'ionic-angular';

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
  constructor(public geolocation: Geolocation) {
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


    let miPosicion = new google.maps.LatLng(40.465315, -3.616530);
    let icon = "assets/imgs/Monigote.png";
    this.addMarkerIcono(miPosicion, this.map, icon);

    const options = {
      center: madrid,
      zoom: 12,
      mapTypeId: 'terrain' //'terrain', 'satellite','hybrid'
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);

    //this.addMarker(madrid, this.map);

    let marcadores = [{
      nombre: 'Sol',
      lat: 40.465315,
      long: -3.616530,
    }, {
      nombre: 'Gold mirror',
      lat: 40.418238,
      long: -3.691775,
    }];

    console.log("el array " + marcadores);
    for (let posicion in marcadores) {
      this.cargarPuntos(marcadores, posicion);
    }

    let mapEle: HTMLElement = document.getElementById('map');

    console.log ("fin");


  }


  cargarPuntos(marcadores, posicion) {

    let latLong = new google.maps.LatLng(marcadores[posicion].lat, marcadores[posicion].long);

    console.log("posiciones " + latLong);

    let marker = new google.maps.Marker({
      position: latLong,
      title: marcadores[posicion].nombre,
      icon: 'assets/imgs/menina.png',
    })

    this.addMarker(marker, this.map);
    marker.setMap(this.map);
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

