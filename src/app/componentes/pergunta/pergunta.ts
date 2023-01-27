export interface Pergunta{
  id?:number
  questao:string
  alternativaCerta:string
  alternativas?:string[]
  ativo? : boolean
  alternativaSelecionada? : string
}
