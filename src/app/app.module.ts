import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
// import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { lookUpList, lookupListToken } from './providers';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http'
import { MockXHRBackend } from './mock-xhr-backend';
import { routing } from './app-routing/app-routing.module';
import { NewItemModule } from './new-item/new-item.module';
import { CategoryListComponent } from './category-list/category-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    CategoryListComponent,
    // MediaItemFormComponent
  ],
  imports: [
    BrowserModule,
    // ReactiveFormsModule,
    HttpClientModule,
    routing,
    // NewItemModule
  ],
  providers: [
    { provide: lookupListToken, useValue: lookUpList },
    { provide: HttpXhrBackend, useClass: MockXHRBackend }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
