import { Injectable } from '@angular/core';
import { MediaItem } from './media-item';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaItemService {


  constructor(private http: HttpClient) {  }

  get(medium){
    const getOptions = {
      params: { medium }
    };
    return this.http.get<MediaItemsResponse>('mediaitems', getOptions)
      .pipe(
        map((response: MediaItemsResponse) => { return response.mediaItems; }), 
        catchError(this.handleError)
        );
  }

  add(mediaItem: MediaItem){
    return this.http.post('mediaitems', mediaItem)
    .pipe(catchError(this.handleError));
  }

  delete(mediaItem: MediaItem){
    return this.http.delete(`mediaitems/${mediaItem.id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError("error occured try again");
  }

}

interface MediaItemsResponse{
  mediaItems: MediaItem[];
}