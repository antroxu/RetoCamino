import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'detalle_reto',
  templateUrl: 'detallereto.html'
})


export class DetalleReto {
  public detallereto: string;
  constructor(private storage: Storage) { 
    this.detallereto = "info";
    let marcadores = [{
      nombre: 'Sol',
      lat: 40.465315,
      long: -3.616530, 
      completado: true,
      direccion: 'Pabellón 2 de IFEMA',
      foto: 'assets/imgs/menina_sol.jpg'
    },{
      nombre: 'Gold mirror',
      lat: 40.418238,
      long: -3.691775, 
      completado: false,
      direccion: 'Montalbán, 1.(Delante Ayuntamiento)',
      foto: 'assets/imgs/gold_menina.jpg'
    },{
      nombre: 'Vertical Garden',
      lat: 40.420289,
      long: -3.688782,
      completado: true,
      direccion: 'Plaza de la Independencia, 1',
      foto: 'assets/imgs/vertical_garden.jpg'
    },{
      nombre: 'Libertad',
      lat: 40.425567,
      long: -3.690949, 
      completado: false,
      direccion: 'Plaza de Colón, 1',
      foto: 'assets/imgs/menina_libertad.jpg'
    },{
      nombre: 'A medida',
      lat: 40.418814,
      long: -3.692562, 
      completado: true,
      direccion: 'Montalbán, 1',
      foto: 'assets/imgs/menina_a_medida.jpg'

    },{
      nombre: 'Cielo de día y cielo de noche',
      lat: 40.417936,
      long: -3.704893, 
      completado: false,
      direccion: 'Preciados, 3',
      foto: 'assets/imgs/menina_cielo_dia_noche.jpg'
    },{
      nombre: 'MENINA DECONSTRUIDA',
      lat: 40.422313,
      long: -3.692546, 
      completado: true,
      direccion: 'Paseo de Recoletos, 19',
      foto: 'assets/imgs/menina_deconstruida.jpg'

    },{
      nombre: 'Musha',
      lat: 40.418604,
      long: -3.712794, 
      completado: false,
      direccion: 'Bailén, 17',
      foto: 'assets/imgs/menina_musa.jpg'
    },{
      nombre: 'Menina Binaria',
      lat: 40.421789,
      long: -3.679959, 
      completado: false,
      direccion: 'O’Donnell con Menéndez Pelayo',
      foto: 'assets/imgs/menina_binaria.jpg'
    },/*{
      nombre: 'Platera y yo',
      lat: 40.418015,
      long: -3.692718, 
      completado: false,
    },{
      nombre: 'Menina Flamenca',
      lat: 40.425402,
      long: -3.686924, 
      completado: false,
    },{
      nombre: '¿Porque me miras tanto?',
      lat: 40.415531,
      long: -3.694983, 
      completado: true,
    },{
      nombre: 'Madrid en mi ADN',
      lat: 40.415335,
      long: -3.707583, 
      completado: true,
    },{
      nombre: 'Infanta Carlota',
      lat: 40.421145,
      long: -3.699051, 
      completado: true,
    },{
      nombre: 'OpenNina',
      lat: 40.424736,
      long: -3.691258, 
      completado: false,
    },{
      nombre: 'Conciencia Social',
      lat: 40.425167,
      long: -3.684331, 
      completado: false,
    },{
      nombre: 'Faceless',
      lat: 40.409753,
      long: -3.696155, 
      completado: false,
    },{
      nombre: 'Madrid nuestra escuela',
      lat: 40.423829,
      long: -3.684008, 
      completado: true,
    },{
      nombre: 'Terra Madre II – La Vida',
      lat: 40.424648,
      long: -3.691397, 
      completado: false,
    },{
      nombre: 'Luna Menguante',
      lat: 40.422658,
      long: -3.697709,
      completado: false, 
    },{
      nombre: 'Menina enmarcada',
      lat: 40.423799,
      long: -3.691729,
      completado: false, 
    },{
      nombre: 'La vida es un sueño',
      lat: 40.408841,
      long: -3.694024, 
      completado: true,
    },{
      nombre: 'Menina en Rojo',
      lat: 40.414381,
      long: -3.692131, 
      completado: true,
    },{
      nombre: 'El toreo, el arte de las artes',
      lat: 40.432368,
      long: -3.663336, 
      completado: true,
    },{
      nombre: 'Madrid, encuentro de miradas',
      lat: 40.446227,
      long: -3.677738, 
      completado: false,
    },{
      nombre: 'MENINA OSADA',
      lat: 40.421606,
      long: -3.690929, 
      completado: false,
    },{
      nombre: 'Susurros de piedra',
      lat: 40.415576,
      long: -3.688677, 
      completado: false,
    },{
      nombre: 'Sueña Madrid',
      lat: 40.425219,
      long: -3.689903, 
      completado: true,
    },{
      nombre: 'LA MENINA GALÁCTICA',
      lat: 40.424736,
      long: -3.691258,
      completado: false, 
    },{
      nombre: 'Menina gastronómica',
      lat: 40.417487,
      long: -3.702385, 
      completado: false,
    },{
      nombre: 'Legado soterrado',
      lat: 40.426146,
      long: -3.673585, 
      completado: true,
    },{
      nombre: 'Cosmogonía Fe-Menina',
      lat: 40.423761,
      long: -3.689408, 
      completado: true,
    },{
      nombre: 'MENINA VADER',
      lat: 40.420338,
      long: -3.706159, 
      completado: false,
    },{
      nombre: 'Yolanda, la reina de la parranda',
      lat: 40.427568,
      long: -3.684286, 
      completado: false,
    },{
      nombre: 'Menina All over',
      lat: 40.423955,
      long: -3.687957, 
      completado: false,
    },{
      nombre: 'Cenestesia',
      lat: 40.408673,
      long: -3.691983,
      completado: false, 
    },{
      nombre: 'Uniendo la península',
      lat: 40.424376,
      long: -3.694151, 
      completado: true,
    },{
      nombre: 'Menina Secreta',
      lat: 40.420428,
      long: -3.689619,
      completado: true, 
    },{
      nombre: 'La menina postal',
      lat: 40.415551,
      long: -3.707320,
      completado: false, 
    },{
      nombre: 'Sin nombre',
      lat: 40.425235,
      long: -3.689914, 
      completado: false,
    },{
      nombre: 'Un cielo de ciudad',
      lat: 40.425227,
      long: -3.689849, 
      completado: true,
    },{
      nombre: 'Menina Escoté',
      lat: 40.447711,
      long: -3.694459, 
      completado: false,
    },{
      nombre: 'Madrid a corazón abierto',
      lat: 40.427031,
      long: -3.696321, 
    },{
      nombre: 'Mi corazón es España',
      lat: 40.425794,
      long: -3.687445,
      completado: false, 
    },{
      nombre: 'Anacronismo',
      lat: 40.421161,
      long: -3.699041, 
      completado: true,
    },{
      nombre: 'NOTICIAS CORTESANAS',
      lat: 40.430454,
      long: -3.687569,
      completado: false, 
    },{
      nombre: 'Infanta Isabel Trampantoja',
      lat: 40.427165,
      long: -3.696196, 
      completado: false,
    },{
      nombre: 'Electriciudad',
      lat: 40.452002,
      long: -3.692694, 
      completado: false,
    },{
      nombre: '#Aladina contra el cáncer infantil',
      lat: 40.427911,
      long: -3.687129, 
      completado: false,
    },{
      nombre: '“Y yo me iré. Y se quedarán los pájaros cantando”. Juan Ramón Jiménez',
      lat: 40.460046,
      long: -3.691662,
      completado: false, 
    },{
      nombre: 'La menina alegre',
      lat: 40.432949,
      long: -3.686421, 
      completado: true,
    },{
      nombre: 'Dejar el rastro del nombre',
      lat: 40.422634,
      long: -3.697666,
      completado: false, 
    },{
      nombre: 'Soto como pretexto (Soto Magic I ambivalence)',
      lat: 40.422991,
      long: -3.690945,
      completado: false, 
    },{
      nombre: 'Teselaciones caóticas con peces de ciudad',
      lat: 40.429206,
      long: -3.683645,
      completado: false, 
    },{
      nombre: 'XMENina',
      lat: 40.424485,
      long: -3.687767, 
      completado: true,
    },{
      nombre: 'Asteroide 310 Margarita',
      lat: 40.420493,
      long: -3.696382,
      completado: false, 
    },{
      nombre: 'Arte, Contemporánea…',
      lat: 40.414645,
      long: -3.701053,
      completado: false, 
    },{
      nombre: 'NINA COOL',
      lat: 40.425260,
      long: -3.689903,
      completado: true, 
    },{
      nombre: 'Reyna de Corazones',
      lat: 40.427047,
      long: -3.696321, 
      completado: true,
    },*/
  ];


  this.storage.set('marcadores', marcadores);

  }

}

