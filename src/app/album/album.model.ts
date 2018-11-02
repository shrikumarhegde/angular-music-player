export class Album {
  albumId: string;
  albumName: string;
  albumImageURL: string;
  artistId: string;
  artistName: string;
  genre: string;
  releaseDate: string;
  trackCount: number;
  constructor(albumObj: any) {
    this.albumId = albumObj.collectionId;
    this.albumName = albumObj.collectionName;
    this.albumImageURL = this.replaceArtwork(albumObj.artworkUrl100);
    this.artistId = albumObj.artistId;
    this.artistName = albumObj.artistName;
    this.genre = albumObj.primaryGenreName;
    this.releaseDate = albumObj.releaseDate;
    this.trackCount = +albumObj.trackCount;
  }
  private replaceArtwork(url: string) {
    let urlArray = url.split('/');
    urlArray[urlArray.length - 1] = '300x300bb.jpg';
    return urlArray.join('/');
  }
}
