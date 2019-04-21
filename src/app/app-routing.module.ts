import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { VisualizationComponent } from './visualization/visualization.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'visualization', component: VisualizationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
