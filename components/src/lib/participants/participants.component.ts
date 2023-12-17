import { NgForOf } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
  faCircleCheck,
  faCommentDots,
} from "@fortawesome/free-regular-svg-icons";
import { CardLayoutComponent } from "@scp/components/card-layout/card-layout.component";
import { Participant } from "@scp/types";

@Component({
  selector: "scp-participants",
  standalone: true,
  imports: [NgForOf, FontAwesomeModule, CardLayoutComponent],
  styleUrl: "./participants.component.css",
  template: `
    <div class="mx-auto max-w-xs">
      <scp-card-layout>
        <div
          class="my-2 text-xl"
          *ngFor="let participant of participants">
          @if (!!participant.vote) {
            <fa-icon
              aria-hidden="true"
              class="inline-block h-5 w-5 text-sky-600 dark:text-sky-400"
              [icon]="icons.voted" />
            <span class="fa-sr-only sr-only">Ready</span>
          } @else {
            <fa-icon
              aria-hidden="true"
              class="inline-block h-5 w-5 text-gray-400"
              [icon]="icons.pending" />
            <span class="fa-sr-only sr-only">Pending</span>
          }
          <span class="mx-2">{{ participant.name }}</span>
        </div>
      </scp-card-layout>
    </div>
  `,
})
export class ParticipantsComponent {
  @Input({ required: true }) participants: Participant[] | null = null;

  protected readonly icons = {
    voted: faCircleCheck,
    pending: faCommentDots,
  };
}
