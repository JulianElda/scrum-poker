import { NgForOf } from "@angular/common";
import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from "@angular/core";
import { CardComponent } from "@scp/components/card/card.component";
import { FIBONACCI } from "@scp/types";
import { trigger } from "@angular/animations";
import { cardsEnterAnimation } from "@scp/animations";

@Component({
  selector: "scp-card-list",
  standalone: true,
  imports: [NgForOf, CardComponent],
  animations: [trigger("cardsEnterAnimation", [cardsEnterAnimation])],
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
  @Input() selectedCard: string | null = null;

  @Output() selectCard = new EventEmitter<string | null>();

  @HostBinding("@cardsEnterAnimation") get listAnimation() {
    return this.cards.length;
  }

  protected clickCard(card: string) {
    if (card === this.selectedCard) this.selectedCard = null;
    else this.selectedCard = card;
    this.selectCard.emit(this.selectedCard);
  }
}
