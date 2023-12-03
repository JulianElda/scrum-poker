import { CommonModule } from "@angular/common";
import { Component, Input, signal } from "@angular/core";
import { CardLayoutComponent } from "@scp/components/card-layout/card-layout.component";
import { ParticipantsVotes } from "src/app/types/participant";

@Component({
  selector: "scp-participants",
  standalone: true,
  imports: [CommonModule, CardLayoutComponent],
  styleUrl: "./participants.component.css",
  template: `
    <div class="mx-auto my-6 max-w-xs">
      <scp-card-layout>
        <div
          class="my-2 text-xl"
          *ngFor="let participant of participants()">
          @if (participant.voted) {
            <span class="text-green-400">&#x2714;</span>
          } @else {
            <span class="text-red-400">&#x2717;</span>
          }
          <span class="mx-2">{{ participant.name }}</span>
        </div>
      </scp-card-layout>
    </div>
  `,
})
export class ParticipantsComponent {
  @Input({ required: true }) participants = signal<
    ParticipantsVotes[] | undefined
  >(undefined);
}
