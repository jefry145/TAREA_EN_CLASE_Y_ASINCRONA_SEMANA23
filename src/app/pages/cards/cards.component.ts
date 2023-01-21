import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );
  constructor(private breakpointObserver: BreakpointObserver) {}

  valor1!:any
  valor2!:any

  Suma!:any
  Resta!:any
  Divicion!:any
  Mult!:any

  resultSuma:any
  resultResta:any
  resultMult:any
  resultDiv:any
  OperacionesAritmeticas(){
    console.log(this.Resta)
   if(this.Suma == true){
      this.resultSuma= this.valor1 + this.valor2
   }else{
     this.resultSuma=0
   }
   if(this.Resta == true){
      this.resultResta = this.valor1 - this.valor2
   }else{
     this.resultResta=0
   }
   if(this.Divicion == true){
      this.resultDiv = this.valor1 / this.valor2
   }else{
    this.resultDiv=0
   }
   if(this.Mult == true){
      this.resultMult = this.valor1*this.valor2
   }else{
    this.resultMult=0
   }

  }
}
