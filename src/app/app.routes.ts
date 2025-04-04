import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { CursosComponent } from './cursos/cursos.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { TrayectoriaComponent } from './trayectoria/trayectoria.component';

export const routes: Routes = [
    // { path: 'home', component: BodyComponent },
    { path: 'curso', component: CursosComponent },
    { path: 'proyectos', component: ProyectosComponent },
    { path: 'trayectoria', component: TrayectoriaComponent},
    { path: '**', component: BodyComponent } 
];
