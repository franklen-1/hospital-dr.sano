import { Injectable, signal } from '@angular/core';
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  pacientes = signal<Paciente[]>([]);

  agregar(paciente: Paciente) {
    this.pacientes.update(lista => [...lista, paciente]);
  }

}