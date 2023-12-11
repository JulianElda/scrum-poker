import { AsyncPipe } from "@angular/common";
import { Component, Input, inject } from "@angular/core";
import { CardListComponent } from "@scp/components/card-list/card-list.component";
import { ParticipantsComponent } from "@scp/components/participants/participants.component";
import { ResultComponent } from "@scp/components/result/result.component";
import { SessionCheckComponent } from "@scp/components/session-check/session-check.component";
import { FirebaseService } from "@scp/services/firebase.service";
import { FIBONACCI, ParticipantsHasVoted } from "@scp/types";

@Component({
  selector: "scp-game-room",
  standalone: true,
  imports: [
    AsyncPipe,
    SessionCheckComponent,
    ParticipantsComponent,
    CardListComponent,
    ResultComponent,
  ],
  styleUrl: "./game-room.component.css",
  template: `
    <div class="mx-auto max-w-3xl">
      <div class="mx-auto max-w-2xl">
        <scp-card-list
          [cards]="cards"
          (selectCard)="onSelectCard($event)" />
        <scp-participants [participants]="participants" />
      </div>
    </div>
  `,
})
export class GameRoomComponent {
  @Input({ required: true }) roomId: string | null = "";
  @Input({ required: true }) sessionId: string | null = "";
  @Input({ required: true }) participantName: string | null = "";
  @Input({ required: true }) participants: ParticipantsHasVoted[] | null = [];

  private firebaseService = inject(FirebaseService);

  protected cards = FIBONACCI;

  protected onSelectCard(card: string) {
    this.firebaseService.updateParticipantVote({
      name: this.participantName!,
      uid: this.sessionId!,
      vote: card,
    });
  }
}
