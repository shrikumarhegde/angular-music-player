import { Component, OnInit, Input } from '@angular/core';
import { ItunesService } from '../shared/itunes.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  _artistID: number = 0;
  albumArray: Array<any> = [];
  collectionId: number = 0;
  @Input()
  set artistID(artistId: number) {
    this._artistID = artistId;
    this.getAlbum();
  }
  @Input()
  artistName;

  get artistID() {
    return this._artistID;
  }
  displayedColumns: string[] = [
    'artworkUrl60',
    'collectionName',
    'releaseDate',
  ];
  constructor(private ituneService: ItunesService) {}

  ngOnInit() {}

  getCollectionID(row) {
    this.collectionId = row.collectionId;
  }

  getAlbum() {
    this.ituneService
      .getAlbum(this.artistID)
      .subscribe((results: Array<any>) => {
        console.log('res ', results);
        this.albumArray = results;
      });
  }
}
