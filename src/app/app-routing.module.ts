import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlbumComponent } from './album/album.component';
import { TracksComponent } from './tracks/tracks.component';

const routes: Routes = [
  { path: '', redirectTo: '/music', pathMatch: 'full' },
  { path: 'music', component: HomeComponent },
  { path: ':id/:name', component: AlbumComponent },
  { path: ':id/:name/:colllection_id/:collection_name', component: TracksComponent },
  { path: '***', redirectTo: '/music', pathMatch: 'full' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
