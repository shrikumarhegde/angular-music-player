import { Component, OnInit, Input } from "@angular/core";
import { ItunesService } from "../shared/itunes.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap, map, mergeAll, toArray } from "rxjs/operators";

@Component({
  selector: "app-album",
  templateUrl: "./album.component.html",
  styleUrls: ["./album.component.scss"],
})
export class AlbumComponent implements OnInit {
  displayedColumns: string[] = [
    "artworkUrl60",
    "collectionName",
    "releaseDate",
  ];
  albums$: Observable<any>;
  artistName: string;

  constructor(
    private ituneService: ItunesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.albums$ = this.route.params.pipe(
      switchMap((param) => {
        this.artistName = param.name;
        return this.ituneService.getAlbum(param.id).pipe(
          mergeAll(),
          map((res: any) => {
            res.artworkUrl100 = this.replaceArtwork(res.artworkUrl100);
            return res;
          }),
          toArray()
        );
      })
    );
  }

  private replaceArtwork(url: string) {
    if (!url) return null;
    let urlArray = url.split("/");
    urlArray[urlArray.length - 1] = "300x300bb.jpg";
    return urlArray.join("/");
  }

  onGetTracks(album) {
    this.ituneService.tracksSubject.next(album);
    this.router.navigate([
      album.artistId,
      album.artistName,
      album.collectionId,
      album.collectionName,
    ]);
  }
}
