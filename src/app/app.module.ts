import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPerguntaComponent } from './card-pergunta/card-pergunta.component';
import { CaminhoDoMilhaoComponent } from './caminho-do-milhao/caminho-do-milhao.component';

@NgModule({
  declarations: [
    AppComponent,
    CardPerguntaComponent,
    CaminhoDoMilhaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
