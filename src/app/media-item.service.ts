import { Injectable } from '@angular/core';
import { MediaItem } from './media-item';

@Injectable({
  providedIn: 'root'
})
export class MediaItemService {

  mediaItems: MediaItem[] = [
    {
      id: 1,
      name: 'Firebug',
      medium: 'Series',
      category: 'Science Fiction',
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false
    },
    {
      id: 2,
      name: 'The Small Tall',
      medium: 'Movies',
      category: 'Comedy',
      year: 2015,
      watchedOn: 0,
      isFavorite: true
    }, {
      id: 3,
      name: 'The Redemption',
      medium: 'Movies',
      category: 'Action',
      year: 2016,
      watchedOn: 0,
      isFavorite: false
    }, {
      id: 4,
      name: 'Hoopers',
      medium: 'Series',
      category: 'Drama',
      year: 0,
      watchedOn: 0,
      isFavorite: true
    }, {
      id: 5,
      name: 'Happy Joe: Cheery Road',
      medium: 'Movies',
      category: 'Action',
      year: 2015,
      watchedOn: 1457166565384,
      isFavorite: false
    }
  ];

  constructor() { }

  get(){
    return this.mediaItems;
  }

  add(mediaItem: MediaItem){
    this.mediaItems.push(mediaItem);
  }

  delete(mediaItem: MediaItem){
    const index = this.mediaItems.indexOf(mediaItem);
    if(index >= 0){
      this.mediaItems.splice(index, 1);
    }
  }
}
