import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PlayerService {
  constructor() {}

  private playTrackSource = new Subject<Track>();
  private pauseTrackSource = new Subject();
  private trackEndedSource = new Subject();

  playTrack$ = this.playTrackSource.asObservable();
  pauseTrack$ = this.pauseTrackSource.asObservable();
  trackEnded$ = this.trackEndedSource.asObservable();

  playTrack(track: Track) {
    this.playTrackSource.next(track);
  }

  pauseTrack() {
    this.pauseTrackSource.next();
  }

  trackEnded() {
    this.trackEndedSource.next();
  }
}

interface Track {
  url: string;
  name: string;
  image: string;
}
