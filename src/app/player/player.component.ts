import { Component, OnInit, ViewChild } from "@angular/core";
import { PlayerService } from "../shared/player.service";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.scss"],
})
export class PlayerComponent implements OnInit {
  @ViewChild("player", { static: true })
  playerRef;
  player: any;
  track: any;
  currentPercent: any;

  constructor(private playerSer: PlayerService) {
    playerSer.playTrack$.subscribe((track: any) => {
      this.playTrack(track.url);
      this.track = track;
    });
  }

  ngOnInit() {
    this.player = this.playerRef.nativeElement;
  }

  playTrack(previewUrl: string) {
    this.player.src = previewUrl;
    this.player.play();
  }

  onTimeUpdate() {
    this.currentPercent = Math.round(
      (this.player.currentTime / this.player.duration) * 100
    );
  }
}
