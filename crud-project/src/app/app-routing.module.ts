import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEditComponent } from './create-edit/create-edit.component'
import { ListComponent } from './list/list.component'

const routes: Routes = [
  { path: 'create-edit', component: CreateEditComponent },
  { path: '', component: ListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
