import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { StarwarsService } from '../services/starwars/starwars.service';

@Component({
  selector: 'app-film-grid',
  templateUrl: './film-grid.component.html',
  styleUrls: ['./film-grid.component.css']
})
export class FilmGridComponent {
  cards:any;
  errors;
  ngOnInit() {
    this.showFilms();
  }
 
  constructor(private srvc:StarwarsService) {}

  showFilms(){
    this.srvc.getfilms().subscribe(
      (res) => 
      {
        this.cards=res;
        console.log(this.cards)
      },
      error => {
        this.errors = error;
      }
      )
  }
}
