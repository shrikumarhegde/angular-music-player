import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItunesService } from '../shared/itunes.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album/album.model';
import { PlayerService } from '../shared/player.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss'],
})
export class TracksComponent implements OnInit, OnDestroy {
  selectedAlbum: Album;
  routeParams;
  tracks: Array<any> = [];
  displayedColumns: string[] = ['Number', 'Name'];

  constructor(
    private ituneService: ItunesService,
    private route: ActivatedRoute,
    private playerService: PlayerService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.routeParams = params;
      this.ituneService.getTracks(params.colllection_id).subscribe(tracks => {
        this.tracks = tracks;
        this.selectedAlbum = new Album(this.tracks.shift());
      });
    });
  }
  ngOnDestroy() {}

  playTrack(track) {
    this.playerService.playTrack(track.previewUrl);
  }
}
