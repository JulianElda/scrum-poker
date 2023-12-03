import { NgForOf } from "@angular/common";
import { Component, EventEmitter, Input, Output, signal } from "@angular/core";
import { CardComponent } from "@scp/components/card/card.component";

@Component({
  selector: "scp-card-list",
  standalone: true,
  imports: [NgForOf, CardComponent],
  styleUrl: "./card-list.component.css",
  template: `
    <scp-card
      *ngFor="let card of cards()"
      [text]="card"
      [selected]="card === selectedCard()"
      (click)="clickCard(card)" />
  `,
})
export class CardListComponent {
  @Input({ required: true }) cards = signal([""]);
  @Output() selectCard = new EventEmitter<string>();

  protected selectedCard = signal("");

  protected clickCard(card: string) {
    this.selectedCard.set(card);
    this.selectCard.emit(card);
  }
}
