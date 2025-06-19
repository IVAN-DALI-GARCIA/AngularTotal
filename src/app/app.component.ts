import { Component } from '@angular/core';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { USUARIOS_FALSOS } from './usuarios-falsos'; // Importa la lista de usuarios falsos

@Component({
  selector: 'app-raiz',
  standalone: true,
  imports: [EncabezadoComponent, UsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
 usuarios = USUARIOS_FALSOS; // Asigna la lista de usuarios falsos a la propiedad usuarios}
}
