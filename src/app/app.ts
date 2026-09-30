import { Component } from '@angular/core';
import { Formulario } from './formulario/formulario';
import { PacienteService } from './services/paciente';

@Component({
  selector: 'app-root',
  imports: [Formulario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  pacientes: any;

  constructor(private servicio: PacienteService) {
    this.pacientes = this.servicio.pacientes;
  }

}