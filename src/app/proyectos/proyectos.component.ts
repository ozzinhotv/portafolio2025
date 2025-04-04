import { Component } from '@angular/core';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [NgFor, NgIf, UpperCasePipe], // Include UpperCasePipe here
  templateUrl: './proyectos.component.html', // Vincula la plantilla HTML
})
export class ProyectosComponent {
  proyectos = [
    {
      titulo: 'Pagina de la Fundación Villanueva',
      descripcion: 'Pagina web de la Fundación Villanueva, donde se pueden ver los proyectos y actividades que realiza la fundación. (Sigue en desarrollo)',
      librerias: 'React, Boostrap, i18n',
      imagen: 'assets/fvillanueva.jpg',
      verDetalles: 'https://fundacionvillanueva.vercel.app/'
    },
    {
      titulo: 'Reservalo',
      descripcion: 'Proyecto personal de aplicación movil, para la reservas de espacios deportivos en Caracas.',
      librerias: 'Figma',
      imagen: 'assets/Reservalo.png',
    },
  ];

  verDetalles(proyecto: any) {
    if (proyecto.verDetalles) {
      window.open(proyecto.verDetalles, '_blank');
    }
  }
}
