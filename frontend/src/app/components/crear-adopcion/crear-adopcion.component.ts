import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Adopcion } from 'src/app/models/adopcion';
import { AdopcionService } from 'src/app/services/adopcion.service';

@Component({
  selector: 'app-crear-adopcion',
  templateUrl: './crear-adopcion.component.html',
  styleUrls: ['./crear-adopcion.component.css']
})
export class CrearAdopcionComponent implements OnInit {
  adopcionForm: FormGroup;
  titulo = 'Crear adopcion';
    id: string | null;
    constructor(private fb: FormBuilder,
      private router: Router,
      private toastr: ToastrService,
      private _adopcionService: AdopcionService,
      private aRouter: ActivatedRoute) {
        this.adopcionForm = this.fb.group({
      nombre: ['', Validators.required],
      especie: ['', Validators.required],
      genero: ['', Validators.required],  
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }


  ngOnInit(): void {
    this.esEditar();
  }

  agregarAdopcion() {

    const ADOPCION: Adopcion = {
      nombre: this.adopcionForm.get('nombre')?.value,
      especie: this.adopcionForm.get('especie')?.value,
      genero: this.adopcionForm.get('genero')?.value,
    }

    console.log(ADOPCION);
    this._adopcionService.guardarAdopcion(ADOPCION).subscribe(data => {
      this.toastr.success('La adopción fue registrada con éxito!', 'Adopción Registrada!');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.adopcionForm.reset();
    })
  }

  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Editar adopcion';
      this._adopcionService.obtenerAdopcion(this.id).subscribe(data => {
        this.adopcionForm.setValue({
          nombre: data.nombre,
          especie: data.especie,
          genero: data.genero,
        })
      })
    }
  }
}

