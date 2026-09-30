import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PacienteService } from '../services/paciente';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {

  nombre = signal('');
  edad = signal(0);

  constructor(private servicio: PacienteService) {}

  registrar() {

    const paciente = {
      nombre: this.nombre(),
      edad: this.edad()
    };

    this.servicio.agregar(paciente);

    this.nombre.set('');
    this.edad.set(0);
  }

}