import { NgForOf } from "@angular/common";
import { Component, Input } from "@angular/core";
import { CardComponent } from "@scp/components/card/card.component";
import { ParticipantsVote } from "@scp/types";

@Component({
  selector: "scp-result",
  standalone: true,
  imports: [NgForOf, CardComponent],
  styleUrl: "./result.component.css",
  template: `
    <div class="mx-auto max-w-xl">
      <div class="grid grid-cols-4 place-content-evenly gap-4">
        <div *ngFor="let participantsVote of participantsVotes">
          <scp-card [text]="participantsVote.vote" />
          <div class="my-2 text-center text-xl">
            {{ participantsVote.name }}
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ResultComponent {
  @Input({ required: true }) participantsVotes: ParticipantsVote[] | undefined =
    undefined;
}
