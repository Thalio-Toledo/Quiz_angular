export interface CardPergunta{
  id?:number
  pergunta:string
  alternativas?:string[]
  alternativaCerta:string
  alternativaSelecionada? : string
  ativo? : boolean
}
