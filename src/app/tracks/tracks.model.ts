export class Track {
  artistId: number;
  artistName: string;
  artistURL: string;
  albumName: string;
  trackURL: string;
  trackName: string;
  trackNumber: number;

  constructor(trackbj: any) {
    this.artistId = trackbj.artistId;
    this.artistName = trackbj.artistName;
    this.artistURL = trackbj.artistViewUrl;
    this.albumName = trackbj.collectionName;
    this.trackURL = trackbj.previewUrl;
    this.trackName = trackbj.trackName;
    this.trackNumber = trackbj.trackNumber;
  }
}
