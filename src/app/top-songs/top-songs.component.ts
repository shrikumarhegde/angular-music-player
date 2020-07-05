import { Component, OnInit } from "@angular/core";
import { ItunesService } from "../shared/itunes.service";
import { Observable } from "rxjs";
import { PlayerService } from "../shared/player.service";

@Component({
  selector: "app-top-songs",
  templateUrl: "./top-songs.component.html",
  styleUrls: ["./top-songs.component.css"],
})
export class TopSongsComponent implements OnInit {
  topSongs$: Observable<any>;
  displayedColumns: string[] = ["Number", "image", "Name"];
  constructor(
    private ituneService: ItunesService,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.topSongs$ = this.ituneService.getTopTracks();
  }

  playTrack(track) {
    this.playerService.playTrack({
      url: track.link[1].attributes.href,
      image: track["im:image"][1].label,
      name: track["im:name"].label,
    });
  }
}
