import { CardPergunta } from './../componentes/pergunta/CardPergunta';
import { Component } from '@angular/core';
import { valorMilhao } from '../caminho-do-milhao/valorMilhao';
import { Router } from '@angular/router';

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
      valor:'R$ 500'

    },
    {
      id: 2,
      pergunta: 'Qual é a cor do cavalo preto de julio cesar?',
      alternativas: ['preto', 'cinza', 'transparente', 'vermelho'],
      alternativaCerta: 'preto',
      valor:'R$ 1.000'

    },
    {
      id: 3,
      pergunta: 'Dentre os números qual não é divisor de 49?',
      alternativas: ['7', '49', '1', '6'],
      alternativaCerta: '6',
      valor:'R$ 2.000'

    },
    {
      id: 4,
      pergunta: 'Qual é o nome do mestre Jedi de star Wars?',
      alternativas: ['Yoga', 'mestre dos magos', 'Yoda', 'Hulk'],
      alternativaCerta: 'Yoda',
      valor:'R$ 5.000'

    },
    {
      id: 5,
      pergunta: 'Qual o nome do metal que envolve o esqueleto e garras de Wolverine?',
      alternativas: ['Estanho', 'Platina', 'Titanium', 'Adamantium'],
      alternativaCerta: 'Adamantium',
      valor:'R$ 10.000'

    },
    {
      id: 6,
      pergunta: 'Qual é o verdadeiro nome do batman?',
      alternativas: ['Clark Kent', 'Bruce Lee', 'Bruce Wayne', 'Bruce banner'],
      alternativaCerta: 'Bruce Wayne',
      valor:'R$ 25.000'

    },
    {
      id: 7,
      pergunta: 'Dentre os números qual não é divisor de 49?',
      alternativas: ['7', '49', '1', '6'],
      alternativaCerta: '6',
      valor:'R$ 50.000'

    },
    {
      id: 8,
      pergunta: 'Qual é a cor do cavalo branco de napoleão?',
      alternativas: ['azul', 'branco', 'rosa', 'verde'],
      alternativaCerta: 'branco',

      valor:'R$ 100.000'

    },
    {
      id: 9,
      pergunta: 'Qual é a cor do cavalo preto de julio cesar?',
      alternativas: ['preto', 'cinza', 'transparente', 'vermelho'],
      alternativaCerta: 'preto',
      valor:'R$ 500.000'
    },
    {
      id: 10,
      pergunta: 'Dentre os números qual não é divisor de 49?',
      alternativas: ['7', '49', '1', '6'],
      alternativaCerta: '6',
      valor:'R$ 1000.000'

    },
  ];



  jogo:boolean = false
  gameOver:boolean = false

  constructor(private router: Router){

  }

  verificarResposta(cardPergunta: CardPergunta, alternativa: string): void {
    cardPergunta.alternativaSelecionada = alternativa;

    if (alternativa === cardPergunta.alternativaCerta) {
      // cardPergunta.ativo = false
      setTimeout(()=>{
        this.proximaPergunta(cardPergunta);
        let cssClass:string[] = []
        cssClass.push("certo")
        cardPergunta.teste = cssClass

      },1000)

      console.log('Grande coisa!');
    } else {
      setTimeout(()=>{
        this.gameOver = true
        this.terminarJogo()

      },1000)

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
        setTimeout(()=>{
          this.terminarJogo()
        },5000)
        // alert("Você ganhou um milhão de reaisssss!")

      }

    }

    terminarJogo():void{
      this.router.navigate(['/inicio'])
    }

    getClass(cardPergunta: CardPergunta, alternativa: string):string[]{
      let cssClass:string[] =[]

      if(cardPergunta.alternativaSelecionada){
        if(alternativa == cardPergunta.alternativaCerta){
          cssClass.push("certo")
        }else{
          cssClass.push("errado")
        }


      }
      return cssClass

    }

  }



