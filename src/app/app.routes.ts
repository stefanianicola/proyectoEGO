import { RouterModule, Routes } from '@angular/router';
import { ModelosComponent } from './components/modelos/modelos.component';
import { FichaComponent } from './components/modelos/ficha/ficha.component';

const APP_ROUTES: Routes = [
{path: 'modelos', component: ModelosComponent},
{path: 'ficha/:id', component: FichaComponent},
{path: '**', pathMatch: 'full', redirectTo: 'modelos'}

]; 

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);