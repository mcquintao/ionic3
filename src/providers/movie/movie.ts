import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private url = "https://api.themoviedb.org/3";
  private key = "?api_key=14f5e8d8d4259d37b07fc20570566ccb";
  
  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies(){
    return this.http.get(this.url + "/movie/latest" + this.key);
  }

  getPopularMovies(){
    return this.http.get(this.url + "/movie/popular" + this.key);
  }

}
