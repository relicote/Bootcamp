import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input()
  gameCover:string= ""
  @Input()
  gameLabel:string =""
  @Input()
  gameType:string=""
  @Input()
  gamePrice:string=""

}
