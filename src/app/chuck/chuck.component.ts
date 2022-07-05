import { Component, OnInit } from '@angular/core';
import { ChuckApiServiceService } from 'src/API_Service/chuck-api-service.service';
import { ChuckObject } from 'src/models/chuck-object';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent implements OnInit {

  //crear un objeto publico para acceder a el desde la vista y que recoja los datos del metodo del servicio
  public request: ChuckObject = { value: "", icon_url: "", id: "", url: "" };

  //Inyectar el servicio
  constructor(private service:ChuckApiServiceService) { }


  //en el metodo onInit utilizar una funcion flecha para suscribirse al metodo de recoger informacion del servicio. Asignar el resultado al objeto request
  ngOnInit(): void {
    this.service.getInfo().subscribe(request => (this.request = request));
  }

}
