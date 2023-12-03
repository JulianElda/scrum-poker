import { Component, signal } from "@angular/core";
import { CardComponent } from "@scp/components/card/card.component";

@Component({
  selector: "scp-card-list",
  standalone: true,
  imports: [CardComponent],
  styleUrl: "./card-list.component.css",
  template: `
    <scp-card
      *ngFor="let card of cards()"
      [text]="card"
      [selected]="card === selectedCard()"
      (click)="selectCard(card)" />
  `,
})
export class CardListComponent {
  protected cards = signal(["1", "2", "3", "5", "8", "13", "20", "?"]);
  protected selectedCard = signal("");

  protected selectCard(card: string) {
    this.selectedCard.set(card);
  }
}
