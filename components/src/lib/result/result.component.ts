import { query, transition, trigger } from "@angular/animations";
import { NgForOf } from "@angular/common";
import { Component, HostBinding, Input } from "@angular/core";
import { resultCardsAnimation } from "@scp/animations";
import { CardComponent } from "@scp/components/card/card.component";
import { Participant } from "@scp/types";

@Component({
  selector: "scp-result",
  standalone: true,
  imports: [NgForOf, CardComponent],
  animations: [resultCardsAnimation],
  styleUrl: "./result.component.css",
  template: `
    <div class="mx-auto my-10 max-w-xl">
      <div class="grid auto-cols-auto grid-flow-col place-content-evenly gap-4">
        <div
          *ngFor="let participantsVote of participants"
          class="result-section">
          <scp-card [text]="participantsVote.vote!" />
          <div class="my-2 text-center text-xl">
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

  @HostBinding("@cardsEnterAnimation") get listAnimation() {
    return true;
  }
}
