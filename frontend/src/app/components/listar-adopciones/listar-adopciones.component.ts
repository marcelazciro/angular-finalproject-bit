import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Adopcion } from 'src/app/models/adopcion';
import { AdopcionService } from 'src/app/services/adopcion.service';

@Component({
  selector: 'app-listar-adopciones',
  templateUrl: './listar-adopciones.component.html',
  styleUrls: ['./listar-adopciones.component.css']
})
export class ListarAdopcionesComponent implements OnInit {
  listAdopciones: Adopcion[] = [];

  constructor(private _adopcionService: AdopcionService,
    private toastr: ToastrService) { }

ngOnInit(): void {
this.obtenerAdopciones();
}

obtenerAdopciones() {
  this._adopcionService.getAdopciones().subscribe(data => {
    console.log(data);
    this.listAdopciones = data;
  }, error => {
    console.log(error);
  })
}
eliminarAdopcion(id: any) {
  this._adopcionService.eliminarAdopcion(id).subscribe(data => {
    this.toastr.error('La adopcion fue eliminada con exito' ,'Adopcion Eliminada');
    this.obtenerAdopciones();
  }, error => {
    console.log(error);
  })
}

}
