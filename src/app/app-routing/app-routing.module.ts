import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MediaItemFormComponent } from '../media-item-form/media-item-form.component';
import { MediaItemListComponent } from '../media-item-list/media-item-list.component';
import { NewItemModule } from '../new-item/new-item.module';

const appRoutes: Routes = [
  {
    path: 'add', 
    loadChildren: () => import('../new-item/new-item.module').then(m => m.NewItemModule)
  },
  { path: ':medium', component: MediaItemListComponent },
  { path: '', redirectTo: 'all', pathMatch: 'full' }
];

// @NgModule({
//   declarations: [],
//   imports: [
//     RouterModule.forRoot(appRoutes),
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

export const routing = RouterModule.forRoot(appRoutes);