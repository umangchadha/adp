import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class StarwarsService {
  filmsApiUrl;
  configUrl = 'assets/characters.json';
  constructor(private http:HttpClient) { }

  characters(){
    return this.http.get(this.configUrl) ;
  }

  films(x){ this.filmsApiUrl=x;
  }

  getfilms(){
    return this.http.get(this.filmsApiUrl)
      }

      getFilmDetail(x){
        return this.http.get(x)
      }

}
