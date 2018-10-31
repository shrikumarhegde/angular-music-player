import { Component, OnInit, Input } from '@angular/core';
import { ItunesService } from '../shared/itunes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  albumArray: Array<any> = [];
  displayedColumns: string[] = [
    'artworkUrl60',
    'collectionName',
    'releaseDate',
  ];
  constructor(
    private ituneService: ItunesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.getAlbum(param.id);
    });
  }

  getAlbum(artistId: number) {
    this.ituneService.getAlbum(artistId).subscribe((results: Array<any>) => {
      this.albumArray = results;
    });
  }
}
