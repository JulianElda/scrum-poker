import { NgForOf } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import { CardLayoutComponent } from "@scp/components/card-layout/card-layout.component";
import { Participant } from "@scp/types";

@Component({
  selector: "scp-participants",
  standalone: true,
  imports: [NgForOf, FontAwesomeModule, CardLayoutComponent],
  styleUrl: "./participants.component.css",
  template: `
    <div class="mx-auto my-6 max-w-xs">
      <scp-card-layout>
        <div
          class="my-2 text-xl"
          *ngFor="let participant of participants">
          @if (!!participant.vote) {
            <fa-icon
              aria-hidden="true"
              class="h-4 w-4 text-green-400"
              [icon]="icons.voted" />
            <span class="fa-sr-only sr-only">Ready</span>
          } @else {
            <fa-icon
              aria-hidden="true"
              class="h-4 w-4 text-red-400"
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
    pending: faCircleXmark,
  };
}
