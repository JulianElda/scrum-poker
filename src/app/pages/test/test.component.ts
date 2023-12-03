import { Component, signal } from "@angular/core";
import { CardListComponent } from "@scp/components/card-list/card-list.component";
import { ParticipantsComponent } from "@scp/components/participants/participants.component";
import { FIBONACCI } from "@scp/types";
import { ParticipantsVotes } from "src/app/types/participant";

@Component({
  selector: "scp-test",
  standalone: true,
  imports: [CardListComponent, ParticipantsComponent],
  styleUrl: "./test.component.css",
  template: `
    <div class="mx-auto max-w-3xl">
      <div class="mx-auto max-w-2xl">
        <scp-card-list
          [cards]="sequence"
          (selectCard)="setSelected($event)" />
      </div>
      <scp-participants [participants]="participants" />
    </div>
  `,
})
export class TestComponent {
  sequence = signal(FIBONACCI);
  selectedCard = signal("");

  participants = signal<ParticipantsVotes[]>([
    {
      name: "Donald",
      voted: true,
    },
    {
      name: "Joe",
      voted: true,
    },
    {
      name: "Obama",
      voted: false,
    },
  ]);

  setSelected(value: string) {
    this.selectedCard.set(value);
  }
}
