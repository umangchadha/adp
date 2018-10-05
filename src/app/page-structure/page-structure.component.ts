import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../services/messenger/messenger.service';

@Component({
  selector: 'app-page-structure',
  templateUrl: './page-structure.component.html',
  styleUrls: ['./page-structure.component.css']
})
export class PageStructureComponent implements OnInit {

  constructor(public msg:MessengerService) { }

  ngOnInit() {
  }

}
