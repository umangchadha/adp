import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../services/starwars/starwars.service';
import { MessengerService } from '../services/messenger/messenger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  characters:any = [];
  constructor(private srvc:StarwarsService,private msg:MessengerService) { }

  ngOnInit() {
     this.showCharacters()
     this.msg.headerChange("Characters")
  }
  
  showCharacters() {
    this.srvc.characters().subscribe(
      (res) => 
      {
            this.characters=res;
            this.characters=this.characters.characters
            //array/json object has to be refined first as it is throwing array in ngFor
            //Complete explaintion can be seen in
            //https://medium.com/@papaponmx/looping-over-object-properties-with-ngfor-in-angular-869cd7b2ddcc

            let badArray = Object.keys(this.characters);
            let goodArray = [];
            
              for (let prop of badArray) { 
                  goodArray.push(this.characters[prop]);
                }
                this.characters=goodArray
      }
    )}



}
