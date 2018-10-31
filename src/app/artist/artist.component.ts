import { Component, OnInit, Input } from '@angular/core';
import { ItunesService } from '../shared/itunes.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  @Input()
  set searchKey(key: string) {
    this.search(key);
  }
  searchResults: Array<any> = [];
  artistID: number = 0;
  selectedArtist: string;
  constructor(private ituneService: ItunesService) {}

  ngOnInit() {}

  search(param) {
    this.ituneService.search(param).subscribe(
      data => {
        // console.log(data['results']);
        this.searchResults = data['results'];
      },
      err => console.log(err)
    );
  }

  getAlbums(artistId: number, artistName: string) {
    this.artistID = artistId;
    this.selectedArtist = artistName;
  }
}
