import { Component,ViewChild } from "@angular/core";
import { Observable } from "rxjs/Observable";
//import { Companeros } from "../../app/creditos.model";
import { List } from "ionic-angular";

@Component({
  selector: "creditos",
  templateUrl: "creditos.html",
})
export class IonicCreditosComponent {
  array_compañeros;
  private gente : any [];
  private clicks : number;
  constructor( ) {
    this.clicks = 0;
    console.log ("constructor");

    //let compa1: Companeros = new Companeros ("Angel J. Cachón", "https://github.com/acachon","https://www.linkedin.com/in/angelcachon/","https://avatars0.githubusercontent.com/u/36812721?s=460&v=4");
    //this.gente.push (compa1);
    this.gente = [
      {
        nombre: "Angel Fernandez Alvarez",
        github: "https://github.com/antroxu",
        linkedin: "https://www.linkedin.com/in/ángel-fernández-álvarez-60083521",
        image: "https://media.licdn.com/dms/image/C5603AQEvFRqszVsoqw/profile-displayphoto-shrink_800_800/0?e=1534982400&v=beta&t=Odz7zsutS6mciHhvxn5ekF3vjmzB3GgMpJhe9201_oE"
      },
      {
        nombre: "Amaya Valdiviejas Ruiz",
        github: "https://github.com/amaya1234",
        linkedin: "https://es.linkedin.com/in/amaya-valdiviejas-ruiz-3696869b",
        image: "../../assets/imgs/foto_amaya.PNG"
      },
      {
        nombre: "Carlos Moreno",
        github: "https://github.com/cmcarlos",
        linkedin:'https://www.linkedin.com/in/carlos-moreno-c%C3%A1mara-70222a48/',
        image: "../../assets/imgs/foto_carlos.jpg"
      },
      {
        nombre: "Juan Madrigal Vergel",
        github: "https://github.com/Skattspa",
        linkedin: "https://www.linkedin.com/in/jmvergel/",
        image: "../../assets/imgs/foto_juan.png"
      }
    ];
    
    this.mostrar(this.gente);
  }
  
  mostrar (gente){
    console.log(gente);
    
  }

  huevoPascua (){
    console.log("click logo");
    this.clicks = this.clicks + 1
    if (this.clicks === 7){
      console.log('has hecho click '+this.clicks+' veces');
      let logo = document.getElementById('logo');
      logo.setAttribute('src','../../assets/imgs/correcaminos.gif');
      // logo.style.width = "500px";
      // logo.style.height = "500px";
    } 
  }


}
