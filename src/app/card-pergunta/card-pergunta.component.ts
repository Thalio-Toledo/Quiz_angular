import { CardPergunta } from './../componentes/pergunta/CardPergunta';
import { Component } from '@angular/core';
import { valorMilhao } from '../caminho-do-milhao/valorMilhao';

@Component({
  selector: 'app-card-pergunta',
  templateUrl: './card-pergunta.component.html',
  styleUrls: ['./card-pergunta.component.css'],
})
export class CardPerguntaComponent {
  cardPerguntas: CardPergunta[] = [
    {
      id: 1,
      pergunta: 'Qual é a cor do cavalo branco de napoleão?',
      alternativas: ['azul', 'branco', 'rosa', 'verde'],
      alternativaCerta: 'branco',
      ativo: true,
    },
    {
      id: 2,
      pergunta: 'Qual é a cor do cavalo preto de julio cesar?',
      alternativas: ['preto', 'cinza', 'transparente', 'vermelho'],
      alternativaCerta: 'preto',
    },
    {
      id: 3,
      pergunta: 'Dentre os números qual não é divisor de 49?',
      alternativas: ['7', '49', '1', '6'],
      alternativaCerta: '6',
    },
  ];

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

  jogo:boolean = false

  verificarResposta(cardPergunta: CardPergunta, alternativa: string): void {
    cardPergunta.alternativaSelecionada = alternativa;

    if (alternativa === cardPergunta.alternativaCerta) {
      // cardPergunta.ativo = false
      setTimeout(()=>{
        this.proximaPergunta(cardPergunta);
      },1000)

      console.log('Grande coisa!');
    } else {
      console.log('Você é muito burro!');
      //redirect para pagina inicial do jogo
    }
  }

  proximaPergunta(cardPergunta: CardPergunta) {
    cardPergunta.ativo = false;
    let indexPerguntaAtual: number = this.cardPerguntas.findIndex(
      (perguntaFind) => perguntaFind.id == cardPergunta.id
    );
    let proximaPergunta: CardPergunta =
      this.cardPerguntas[indexPerguntaAtual + 1];

      if(proximaPergunta){
        proximaPergunta.ativo = true;
      }else{
        this.jogo = true
        // alert("Você ganhou um milhão de reaisssss!")

      }




 console.log(indexPerguntaAtual)
// console.log(this.cardPerguntas.length-1)
    }
  }

