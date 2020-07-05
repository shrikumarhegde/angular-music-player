import { Component, OnInit, OnDestroy } from "@angular/core";
import { ItunesService } from "../shared/itunes.service";
import { ActivatedRoute } from "@angular/router";
import { Album } from "../album/album.model";
import { PlayerService } from "../shared/player.service";
import { Observable } from "rxjs";
import { switchMap, tap, map } from "rxjs/operators";

@Component({
  selector: "app-tracks",
  templateUrl: "./tracks.component.html",
  styleUrls: ["./tracks.component.scss"],
})
export class TracksComponent implements OnInit {
  selectedAlbum: Album;
  displayedColumns: string[] = ["Number", "Name"];

  tracks$: Observable<any>;

  constructor(
    private ituneService: ItunesService,
    private route: ActivatedRoute,
    private playerService: PlayerService
  ) {}

  ngOnInit() {
    this.tracks$ = this.route.params
      .pipe(
        switchMap((param) => {
          return this.ituneService.getTracks(param.colllection_id);
        })
      )
      .pipe(
        map((res: Array<Album>) => {
          this.selectedAlbum = new Album(res.shift());
          return res;
        })
      );
  }

  playTrack(track) {
    this.playerService.playTrack({
      url: track.previewUrl,
      name: track.trackName,
      image: track.artworkUrl100,
    });
  }
}
