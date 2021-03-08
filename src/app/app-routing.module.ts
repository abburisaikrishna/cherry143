import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { PersonalComponent } from './personal/personal.component';

const routes: Routes = [
  {path: '', component:InfoComponent },
 {path: 'life', component: PersonalComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
