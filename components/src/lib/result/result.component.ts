import { NgForOf } from "@angular/common";
import { Component, Input } from "@angular/core";
import { CardComponent } from "@scp/components/card/card.component";
import { Participant } from "@scp/types";

@Component({
  selector: "scp-result",
  standalone: true,
  imports: [NgForOf, CardComponent],
  styleUrl: "./result.component.css",
  template: `
    <div class="mx-auto my-10 max-w-xl">
      <div class="container">
        <div
          *ngFor="let participantsVote of participants"
          class="result-section">
          <scp-card [text]="participantsVote.vote!" />
          <div
            class="my-2 text-center text-xl"
            [attr.data-testid]="
              'result-' + participantsVote.name + '-' + participantsVote.vote
            ">
            {{ participantsVote.name }}
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ResultComponent {
  @Input({ required: true }) participants: Participant[] | undefined =
    undefined;
}
