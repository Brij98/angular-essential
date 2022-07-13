import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MediaItem } from '../media-item';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {

  @Input() mediaItem: MediaItem = new MediaItem;
  @Output() delete:EventEmitter<MediaItem> = new EventEmitter<MediaItem>();
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    console.log("Deleted");
    this.delete.emit(this.mediaItem);
  }

}
