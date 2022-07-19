import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaItemFormComponent } from '../media-item-form/media-item-form.component';

const newItemRoutes: Routes = [
  { path: '', component: MediaItemFormComponent }
];

// @NgModule({
//   imports: [RouterModule.forChild(newItemRoutes)],
//   exports: [RouterModule]
// })
// export class NewItemRoutingModule { }
export const newItemRouting = RouterModule.forChild(newItemRoutes);
