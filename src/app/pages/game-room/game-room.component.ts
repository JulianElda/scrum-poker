import { AsyncPipe } from "@angular/common";
import { Component, Input, inject } from "@angular/core";
import { CardListComponent } from "@scp/components/card-list/card-list.component";
import { ParticipantsComponent } from "@scp/components/participants/participants.component";
import { ResultComponent } from "@scp/components/result/result.component";
import { SessionCheckComponent } from "@scp/components/session-check/session-check.component";
import { ModeratorActionsComponent } from "@scp/pages/moderator-actions/moderator-actions.component";
import { FirebaseService } from "@scp/services/firebase.service";
import { FIBONACCI, GameStatus, ParticipantsHasVoted, Room } from "@scp/types";

@Component({
  selector: "scp-game-room",
  standalone: true,
  imports: [
    AsyncPipe,
    SessionCheckComponent,
    ParticipantsComponent,
    CardListComponent,
    ResultComponent,
    ModeratorActionsComponent,
  ],
  styleUrl: "./game-room.component.css",
  template: `
    <div class="mx-auto max-w-3xl">
      <div class="mx-auto max-w-2xl">
        @if (room?.status === GameStatus.VOTING) {
          <scp-card-list
            [cards]="cards"
            (selectCard)="onSelectCard($event)" />
          <scp-participants [participants]="participants" />
        } @else if (room?.status === GameStatus.REVEAL) {
          <p>todo reveal</p>
        }
        <scp-moderator-actions
          [room]="room"
          [sessionId]="sessionId" />
      </div>
    </div>
  `,
})
export class GameRoomComponent {
  @Input({ required: true }) roomId: string | null = "";
  @Input({ required: true }) sessionId: string | null = "";
  @Input({ required: true }) participantName: string | null = "";
  @Input({ required: true }) participants: ParticipantsHasVoted[] | null = [];
  @Input({ required: true }) room: Room | null = null;

  private firebaseService = inject(FirebaseService);

  protected GameStatus = GameStatus;

  protected cards = FIBONACCI;

  protected onSelectCard(card: string) {
    this.firebaseService.updateParticipantVote({
      vote: card,
    });
  }
}
