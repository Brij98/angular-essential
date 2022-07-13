import { Component, OnInit } from '@angular/core';
import { MediaItem } from '../media-item';
import { MediaItemService } from '../media-item.service';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {

  mediaItems!: MediaItem[];

  constructor(private mediaItemService: MediaItemService) {

   }

  ngOnInit(): void {
    this.mediaItems = this.mediaItemService.get();
  }


  onMediaItemDelete(mediaItem:MediaItem) {
    this.mediaItemService.delete(mediaItem);
  }
}
