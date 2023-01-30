import { Component } from '@angular/core';
import { valorMilhao } from './valorMilhao';

@Component({
  selector: 'app-caminho-do-milhao',
  templateUrl: './caminho-do-milhao.component.html',
  styleUrls: ['./caminho-do-milhao.component.css']
})
export class CaminhoDoMilhaoComponent {
  caminhoDoMilao:valorMilhao[]=[
    {id:1,valor:'R$ 500'},
    {id:1,valor:'R$ 1.000'},
    {id:1,valor:'R$ 2.000'},
    {id:1,valor:'R$ 5.000'},
    {id:1,valor:'R$ 10.000'},
    {id:1,valor:'R$ 25.000'},
    {id:1,valor:'R$ 50.000'},
    {id:1,valor:'R$ 100.000'},
    {id:1,valor:'R$ 500.000'},
    {id:1,valor:'R$ 1000.000'}
  ]

}
