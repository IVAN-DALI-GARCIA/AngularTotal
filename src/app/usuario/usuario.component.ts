import { Component, computed, Input, input } from '@angular/core'; // Importa el decorador Component de Angular.


//  Generar un índice aleatorio para seleccionar un usuario al azar
//  de la lista de usuarios falsos.
// esta es una cosntante global que se define fuera de la clase UsuarioComponent.
// Se utiliza Math.random() para generar un número aleatorio entre 0 y la longitud de

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css',
})
export class UsuarioComponent {
  
  // Uso de decoradores de Angular para definir las propiedades de entrada del componente.
  // Estas propiedades son requeridas y se inicializan desde el componente padre.
  @Input({required:true}) avatar!: string; 
  @Input({required: true}) nombre!: string;


  // uso de signature de TypeScript para definir las propiedades del componente.
  // avatar = input.required<string>();
  // nombre = input.required<string>();

  // USo de signals para pdoer definir propiedades reactivas en Angular.
  // rutaImagen = computed(() => `assets/usuarios/${this.avatar()}`);
  
  get rutaImagen(){
    return`assets/usuarios/${this.avatar}`;  }
  
  alSeleccionarUsuario() {
   
  }
}

function inputavatar(target: UsuarioComponent, propertyKey: 'alSeleccionarUsuario', descriptor: TypedPropertyDescriptor<() => void>): void | TypedPropertyDescriptor<() => void> {
  throw new Error('Function not implemented.');
}
