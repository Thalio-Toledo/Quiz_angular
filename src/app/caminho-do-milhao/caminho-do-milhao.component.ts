import { CardPergunta } from './../componentes/pergunta/CardPergunta';
import { Component, Input } from '@angular/core';
import { valorMilhao } from './valorMilhao';

@Component({
  selector: 'app-caminho-do-milhao',
  templateUrl: './caminho-do-milhao.component.html',
  styleUrls: ['./caminho-do-milhao.component.css']
})
export class CaminhoDoMilhaoComponent {
  caminhoDoMilao:valorMilhao[]=[
    {id:1,valor:'R$ 500'},
    {id:2,valor:'R$ 1.000'},
    {id:3,valor:'R$ 2.000'},
    {id:4,valor:'R$ 5.000'},
    {id:5,valor:'R$ 10.000'},
    {id:6,valor:'R$ 25.000'},
    {id:7,valor:'R$ 50.000'},
    {id:8,valor:'R$ 100.000'},
    {id:9,valor:'R$ 500.000'},
    {id:10,valor:'R$ 1000.000'}
  ]
  @Input() autor:string= '';
  @Input() perguntas:CardPergunta[] = []


  getValor(teste:CardPergunta):void{
    console.log(teste)
  }
  // getClassCss(pergunta:CardPergunta):string[]{
  //   let cssClass:string[] =[]
  //   cssClass.push(pergunta.teste)
  //   return cssClass
  // }

}
