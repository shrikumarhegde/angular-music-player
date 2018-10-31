import { Component, OnInit, Input } from '@angular/core';
import { ItunesService } from '../shared/itunes.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
})
export class TrackComponent implements OnInit {
  trackArray: Array<any> = [];
  displayedColumns: string[] = ['trackCensoredName'];

  @Input()
  set collectionId(collectionId: number) {
    this.getTracks(collectionId);
  }

  constructor(private ituneSer: ItunesService) {}

  ngOnInit() {}

  getTracks(trackId: number) {
    this.ituneSer.getTracks(trackId).subscribe(results => {
      this.trackArray = results;
    });
  }
}
