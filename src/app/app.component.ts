import { Component } from '@angular/core';
import { ItunesService } from './shared/itunes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  searchResults: Array<any> = [];
  constructor(private ituneService: ItunesService) {}

  search(param) {
    this.ituneService.search(param).subscribe(
      data => {
        // console.log(data['results']);
        this.searchResults = data['results'];
      },
      err => console.log(err)
    );
  }
}
