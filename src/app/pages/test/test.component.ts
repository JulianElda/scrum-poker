import { Component, signal } from "@angular/core";
import { CardListComponent } from "@scp/components/card-list/card-list.component";
import { FIBONACCI } from "@scp/types";

@Component({
  selector: "scp-test",
  standalone: true,
  imports: [CardListComponent],
  styleUrl: "./test.component.css",
  template: `
    <div class="mx-auto max-w-2xl">
      <scp-card-list
        [cards]="sequence"
        (selectCard)="setSelected($event)" />
      <p>selected card: {{ selectedCard() }}</p>
    </div>
  `,
})
export class TestComponent {
  sequence = signal(FIBONACCI);
  selectedCard = signal("");

  setSelected(value: string) {
    this.selectedCard.set(value);
  }
}
