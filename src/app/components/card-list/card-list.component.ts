import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CardComponent } from "@scp/components/card/card.component";
import { Card } from "@scp/types";

@Component({
  selector: "scp-card-list",
  standalone: true,
  imports: [CommonModule, CardComponent],
  styleUrl: "./card-list.component.css",
  template: `
    <ng-container *ngFor="let card of cards">
      <scp-card [text]="card.display" />
    </ng-container>
  `,
})
export class CardListComponent {
  protected cards: Card[] = [
    {
      display: "1",
      selected: false,
    },
    {
      display: "2",
      selected: false,
    },
    {
      display: "3",
      selected: false,
    },
    {
      display: "5",
      selected: false,
    },
    {
      display: "8",
      selected: false,
    },
    {
      display: "13",
      selected: false,
    },
    {
      display: "20",
      selected: false,
    },
  ];
}
