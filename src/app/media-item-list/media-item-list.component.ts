import { Component, OnInit } from '@angular/core';
import { MediaItem } from '../media-item';
import { MediaItemService } from '../media-item.service';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {

  mediaItems: MediaItem[];
  medium = '';
  constructor(private mediaItemService: MediaItemService) {

   }

  ngOnInit(): void {
    this.getMediaItems(this.medium);
  }


  onMediaItemDelete(mediaItem:MediaItem) {
    this.mediaItemService.delete(mediaItem)
    .subscribe(() => {
      this.getMediaItems(this.medium)
    });
  }

  getMediaItems(medium){
    this.medium = medium;
    this.mediaItemService.get(medium)
      .subscribe(mediaItems => 
       { this.mediaItems = mediaItems; });
  }
}
