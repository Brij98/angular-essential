import { Pipe, PipeTransform } from '@angular/core';
import { MediaItem } from './media-item';

@Pipe({
  name: 'categoryList'
})
export class CategoryListPipe implements PipeTransform {

  transform(mediaItems: MediaItem[]): unknown {
    const categories: string[] = [];
    mediaItems.forEach(mediaItem => {
    if (categories.indexOf(mediaItem.category) <= -1) {
      categories.push(mediaItem.category);
    }
    });
    return categories.join(', ');
  }

}
