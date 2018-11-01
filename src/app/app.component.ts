import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { ItunesService } from './shared/itunes.service';
import { fromEvent,interval } from 'rxjs';
import { debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit,AfterViewInit {
  @ViewChild('searchBox') searchInput: ElementRef;
  // (keyup)="search(searchBox.value)"

  hideResult:boolean;
  searchResults: Array<any> = [];
  constructor(private ituneService: ItunesService) {}

  ngOnInit(){
  }

  ngAfterViewInit(){
    let buttonStream$=fromEvent(this.searchInput.nativeElement, 'keyup')
    .pipe(debounceTime(1000))
    .subscribe(()=>{
      this.search(this.searchInput.nativeElement.value);
    });

  }

  onResultClick(){
    this.hideResult=true;
    this.searchInput.nativeElement.value='';
  }

  search(param) {
    this.ituneService.search(param).subscribe(
      data => {
        // console.log(data['results']);
        this.hideResult=false;
        this.searchResults = data['results'];
      },
      err => console.log(err)
    );
  }
}
