import { Component, computed, signal } from '@angular/core'; // Importa el decorador Component de Angular.
import { USUARIOS_FALSOS } from '../usuarios-falsos';// Importa la lista de usuarios falsos desde el archivo correspondiente.


//  Generar un índice aleatorio para seleccionar un usuario al azar
//  de la lista de usuarios falsos.
// esta es una cosntante global que se define fuera de la clase UsuarioComponent.
// Se utiliza Math.random() para generar un número aleatorio entre 0 y la longitud de
const indiceAleatorio = Math.floor(Math.random() * USUARIOS_FALSOS.length);

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css',
})
export class UsuarioComponent {
  usuarioSeleccionado =signal(USUARIOS_FALSOS[indiceAleatorio]); // Utiliza la señal para almacenar el usuario seleccionado, inicializándolo con un usuario aleatorio de la lista de usuarios falsos.

  rutaImagen = computed(() => `assets/usuarios/${this.usuarioSeleccionado().avatar}`)  
  // Método para seleccionar un usuario aleatorio de la lista de usuarios falsos.
  // Este método se puede llamar desde el template para cambiar el usuario seleccionado.
  // Se utiliza Math.random() para generar un número aleatorio entre 0 y la longitud de la lista de usuarios falsos.
  // Luego, se utiliza Math.floor() para redondear hacia abajo y obtener un índice válido dentro del rango de la lista.
  // Finalmente, se asigna el usuario correspondiente a la propiedad usuarioSeleccionado.
  alSeleccionarUsuario() {
    const indiceAleatorio = Math.floor(Math.random() * USUARIOS_FALSOS.length);
    this.usuarioSeleccionado.set(USUARIOS_FALSOS[indiceAleatorio]);
  }
}