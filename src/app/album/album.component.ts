import { Component, OnInit, Input } from '@angular/core';
import { ItunesService } from '../shared/itunes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  albumArray: Array<any> = [];
  artistName: string;
  artistId: string;
  displayedColumns: string[] = [
    'artworkUrl60',
    'collectionName',
    'releaseDate',
  ];
  constructor(
    private ituneService: ItunesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.artistId = param.id;
      this.artistName = param.name;
      this.getAlbum(param.id);
    });
  }

  getAlbum(artistId: number) {
    this.ituneService.getAlbum(artistId).subscribe((results: Array<any>) => {
      this.albumArray = results.map(albums => {
        albums.artworkUrl100 = this.replaceArtwork(albums.artworkUrl100);
        return albums;
      });
    });
  }

  private replaceArtwork(url: string) {
    let urlArray = url.split('/');
    urlArray[urlArray.length - 1] = '300x300bb.jpg';
    return urlArray.join('/');
  }

  onGetTracks(album) {
    this.ituneService.tracksSubject.next(album);
    this.router.navigate([
      this.artistId,
      this.artistName,
      album.collectionId,
      album.collectionName,
    ]);
  }
}
