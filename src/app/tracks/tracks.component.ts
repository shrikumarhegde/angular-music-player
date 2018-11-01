import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItunesService } from '../shared/itunes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit, OnDestroy {
  selectedAlbum;
  routeParams;
  tracks:Array<any>=[];
  displayedColumns: string[] = ['Number', 'Name',];

  constructor(private ituneService:ItunesService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.routeParams=params;
      console.log(params);
      this.ituneService.getTracks(params.colllection_id).subscribe(tracks=>{
        console.log(tracks);
        this.tracks=tracks;
        this.selectedAlbum=this.tracks.shift();
      })
    })
  }
  ngOnDestroy(){
  }

}
