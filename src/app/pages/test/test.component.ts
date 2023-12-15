import { Component, signal } from "@angular/core";
import { CardListComponent } from "@scp/components/card-list/card-list.component";
import { ParticipantsComponent } from "@scp/components/participants/participants.component";
import { ResultComponent } from "@scp/components/result/result.component";
import { FIBONACCI } from "@scp/types";
import { Participant } from "@scp/types";

@Component({
  selector: "scp-test",
  standalone: true,
  imports: [CardListComponent, ParticipantsComponent, ResultComponent],
  styleUrl: "./test.component.css",
  template: `
    <div class="mx-auto max-w-3xl">
      <div class="mx-auto max-w-2xl">
        <scp-card-list
          [cards]="sequence"
          (selectCard)="setSelected($event)" />
      </div>
      <scp-participants [participants]="participants" />
      <scp-result [participants]="participants" />
    </div>
  `,
})
export class TestComponent {
  sequence = FIBONACCI;
  selectedCard = signal("");

  participants: Participant[] = [
    {
      name: "Donald",
      uid: "Donald",
      vote: "20",
    },
    {
      name: "Joe",
      uid: "Joe",
      vote: "8",
    },
    {
      name: "Obama",
      uid: "Obama",
      vote: "13",
    },
    {
      name: "Bush",
      uid: "Bush",
      vote: "20",
    },
  ];

  setSelected(value: string | null) {
    this.selectedCard.set(value!);
  }
}
