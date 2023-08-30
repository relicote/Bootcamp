import { Component, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export default class CheckSampleComponent
implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {

  quantidade:number = 0

  constructor() { }

  adicionar(){
    this.quantidade += 1
  }
  decrementar(){
    this.quantidade -= 1
  }


  // Checked -> Content ->

  //Quando o primeiro conteudo é iniciado
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  //Depois da inicialização da view
  ngAfterViewInit(): void {
    console.log('ngAfterViewIniti')
  }

  //Após alguma alteração, verifica o conteudo
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  // Depois da inicialização da view
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

  ngDoCheck(): void {
      console.log('ngDoCheck')
  }

  ngOnInit(): void {
    console.log('ngOnIniti')
  }

}
