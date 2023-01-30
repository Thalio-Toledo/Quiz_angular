// import { Component, OnInit } from '@angular/core';
// import { Pergunta } from './CardPergunta';

// @Component({
//   selector: 'app-pergunta',
//   templateUrl: './pergunta.component.html',
//   styleUrls: ['./pergunta.component.css'],
// })
// export class PerguntaComponent implements OnInit {

//   perguntas: Pergunta[] = [
//     {
//       id: 1,
//       questao: 'Qual é a cor do cavalo branco de napoleão?',
//       alternativas: ['azul', 'branco', 'rosa', 'verde'],
//       alternativaCerta: 'branco',
//       ativo : true
//     },
//     {
//       id: 2,
//       questao: 'Qual é a cor do cavalo preto de julio cesar?',
//       alternativas: ['preto', 'cinsa', 'transparente', 'vermelho'],
//       alternativaCerta: 'preto',
//     }
//   ]

//   classe: string = ''
//   c1: boolean = false
//   certo: boolean = false

//   constructor() {}

//   ngOnInit(): void {}

//   verificarResposta(itemPergunta: Pergunta, opcao: string): void {
//     itemPergunta.alternativaSelecionada = opcao

//     if(opcao == itemPergunta.alternativaCerta){

//       setTimeout(()=>{
//         itemPergunta.ativo = false

//         let indicePerguntaAtual : number = this.perguntas.findIndex( perguntaFind => perguntaFind.id == itemPergunta.id )
//         if(indicePerguntaAtual >= 0){
//           let proximaPergunta : Pergunta= this.perguntas[indicePerguntaAtual + 1]
//           if(proximaPergunta ){
//             proximaPergunta.ativo = true
//           }else{
//             alert("Questionario encerrado")
//           }

//         }
//       },1000)
//     }else{
//     }
//   }

//   getCssClassAlternativa(itemPergunta : Pergunta, opcao: string) : string[]{
//     let cssClass : string[] = []

//     if(itemPergunta.alternativaSelecionada){
//       if(opcao == itemPergunta.alternativaSelecionada){
//         if(itemPergunta.alternativaCerta == opcao){
//           cssClass.push("correto")
//         }else{
//           cssClass.push("incorreto")
//         }
//       }else{
//         if(opcao == itemPergunta.alternativaCerta){
//           cssClass.push("correto")
//         }else{
//           cssClass.push("invalido")
//         }
//       }
//     }

//     return cssClass
//   }
// }
