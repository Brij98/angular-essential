import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { newItemRouting } from './new-item-routing.module';
import { MediaItemFormComponent } from '../media-item-form/media-item-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MediaItemFormComponent
  ],
  imports: [
    CommonModule,
    newItemRouting,
    ReactiveFormsModule
  ]
})
export class NewItemModule { }
