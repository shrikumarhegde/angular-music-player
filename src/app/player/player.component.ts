import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayerService } from '../shared/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  @ViewChild('player')
  playerRef;
  player: any;

  constructor(private playerSer: PlayerService) {
    playerSer.playTrack$.subscribe(previewUrl => {
      this.playTrack(previewUrl);
    });
    playerSer.pauseTrack$.subscribe(() => {
      this.pauseTrack();
    });
  }

  ngOnInit() {
    this.player = this.playerRef.nativeElement;
  }

  playTrack(previewUrl) {
    this.player.src = previewUrl;
    this.player.play();
  }

  pauseTrack() {
    this.player.pause();
  }

  playerEnded() {
    this.playerSer.trackEnded();
  }
}
