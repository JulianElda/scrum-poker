import { NgForOf } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CardComponent } from "@scp/components/card/card.component";
import { FIBONACCI } from "@scp/types";

@Component({
  selector: "scp-card-list",
  standalone: true,
  imports: [NgForOf, CardComponent],
  styleUrl: "./card-list.component.css",
  template: `
    <scp-card
      *ngFor="let card of cards"
      [text]="card"
      [selected]="card === selectedCard"
      (click)="clickCard(card)" />
  `,
})
export class CardListComponent {
  @Input({ required: true }) cards = FIBONACCI;
  @Output() selectCard = new EventEmitter<string>();

  protected selectedCard = "";

  protected clickCard(card: string) {
    this.selectedCard = card;
    this.selectCard.emit(card);
  }
}
