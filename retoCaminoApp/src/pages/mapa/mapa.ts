import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { Geolocation} from '@ionic-native/geolocation';


declare var google : any;

@Component({
  selector: 'mapa',
  templateUrl: 'mapa.html'
})
export class MapaComponent {

  map : any;
  markers: any;
  
  @ViewChild('map') mapRef: ElementRef;

  constructor(public navCtrl: NavController, private plt: Platform, private geolocation: Geolocation) {
    
  } 
  ionViewDidLoad(){
    this.showMap();
  }

  showMap(){

    const madrid = new google.maps.LatLng(40.415335, -3.707583);
    
      this.geolocation.getCurrentPosition().then(pos=>{
        let miPosicion = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        let icon = "assets/imgs/Monigote.png"
        this.addMarkerIcono(miPosicion,this.map, icon);

    });

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
    },{
      nombre: 'Gold mirror',
      lat: 40.418238,
      long: -3.691775, 
    },{
      nombre: 'Vertical Garden',
      lat: 40.420289,
      long: -3.688782,
    },{
      nombre: 'Libertad',
      lat: 40.425567,
      long: -3.690949, 
    },{
      nombre: 'A medida',
      lat: 40.418814,
      long: -3.692562, 
    },{
      nombre: 'Cielo de día y cielo de noche',
      lat: 40.417936,
      long: -3.704893, 
    },{
      nombre: 'MENINA DECONSTRUIDA',
      lat: 40.422313,
      long: -3.692546, 
    },{
      nombre: 'Musha',
      lat: 40.418604,
      long: -3.712794, 
    },{
      nombre: 'MENINA DECONSTRUIDA',
      lat: 40.422313,
      long: -3.692546, 
    },{
      nombre: 'MENINA DECONSTRUIDA',
      lat: 40.422313,
      long: -3.692546, 
    },{
      nombre: 'MENINA DECONSTRUIDA',
      lat: 40.422313,
      long: -3.692546, 
    },
  ];
  console.log("el array "+ marcadores);
  for (let posicion in marcadores){
    this.cargarPuntos(marcadores);}
  }

    
  cargarPuntos(marcadores){
      
      for (let posicion in marcadores){
        let latLong = new google.maps.LatLng(marcadores[posicion].lat, marcadores[posicion].long );
        console.log("posiciones "+ latLong);
         let marker = new google.maps.Marker({
          position: latLong,
          title: marcadores[posicion].nombre,
          icon: 'assets/imgs/menina.png',
        })
 
        this.addMarker(marker, this.map);
        marker.setMap(this.map);
      }
      

  }

  addMarker(position, map){
    
    return new google.maps.Marker({
      position,
      map,
      
      
    })
  }
  addMarkerIcono(position, map, icon){
    
    return new google.maps.Marker({
      position,
      map,
      icon,
      
    })
  }
  }

