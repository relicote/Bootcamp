import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    console.log('Ola eu sou o nascimento do Title Component')
  }

}
