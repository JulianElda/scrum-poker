import { Component, signal } from "@angular/core";
import { CardListComponent } from "@scp/components/card-list/card-list.component";
import { ParticipantsComponent } from "@scp/components/participants/participants.component";
import { ResultComponent } from "@scp/components/result/result.component";
import { FIBONACCI } from "@scp/types";
import {
  ParticipantsHasVoted,
  ParticipantsVote,
} from "src/app/types/participant";

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
      <scp-result [participantsVotes]="participantVotes" />
    </div>
  `,
})
export class TestComponent {
  sequence = FIBONACCI;
  selectedCard = signal("");

  participants: ParticipantsHasVoted[] = [
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
      voted: true,
    },
    {
      name: "Bush",
      voted: false,
    },
  ];

  participantVotes: ParticipantsVote[] = [
    {
      name: "Donald",
      vote: "20",
    },
    {
      name: "Joe",
      vote: "8",
    },
    {
      name: "Obama",
      vote: "13",
    },
  ];

  setSelected(value: string | null) {
    this.selectedCard.set(value!);
  }
}
