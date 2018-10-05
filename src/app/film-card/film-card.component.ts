import { Component, OnInit, Input } from '@angular/core';
import { StarwarsService } from '../services/starwars/starwars.service';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  @Input() url:any;
  filmDetail:any
  isLoaded:boolean=false
  constructor(private srvc:StarwarsService) { }

  ngOnInit() {
    this.showFilmDetail()
  }

    showFilmDetail(){
        this.srvc.getFilmDetail(this.url).subscribe(
          (res)=>{
                this.filmDetail=res;
                this.isLoaded=true
          },
          error => {
            this.isLoaded=true
          }
        )
    }
}
