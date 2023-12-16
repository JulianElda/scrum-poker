import { NgForOf } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CardComponent } from "@scp/components/card/card.component";

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
  @Input({ required: true }) cards: string[] = [];
  @Input() selectedCard: string | null = null;

  @Output() selectCard = new EventEmitter<string | null>();

  protected clickCard(card: string) {
    //if (card === this.selectedCard) this.selectedCard = null;
    //else this.selectedCard = card;
    this.selectCard.emit(card === this.selectedCard ? null : card);
  }
}
