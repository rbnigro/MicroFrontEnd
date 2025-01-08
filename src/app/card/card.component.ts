import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,

  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom, // isola o componente atual não deixando que alterações globais o afetem
})
export class CardComponent {
   plano: any = {
     infos:  {
       tipo: 'Simples',
       preco: 100
     }
   }
  }
