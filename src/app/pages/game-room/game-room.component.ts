import { AsyncPipe } from "@angular/common";
import { Component, Input, inject } from "@angular/core";
import {
  cardListAnimation,
  componentEnterAnimation,
  resultCardsAnimation,
} from "@scp/animations";
import { ModeratorActionsComponent } from "@scp/pages/moderator-actions/moderator-actions.component";
import { VotedParticipantPipe } from "@scp/pipes";
import { FirebaseService } from "@scp/services";
import { FIBONACCI, GameStatus, Participant, Room } from "@scp/types";
import {
  CardListComponent,
  ParticipantsComponent,
  ResultComponent,
  SessionCheckComponent,
  ShareLinkComponent,
} from "components";

@Component({
  selector: "scp-game-room",
  standalone: true,
  imports: [
    AsyncPipe,
    CardListComponent,
    ParticipantsComponent,
    ResultComponent,
    SessionCheckComponent,
    ShareLinkComponent,
    ModeratorActionsComponent,
    VotedParticipantPipe,
  ],
  animations: [
    cardListAnimation,
    componentEnterAnimation,
    resultCardsAnimation,
  ],
  styleUrl: "./game-room.component.css",
  template: `
    <div class="mx-auto max-w-3xl">
      <div class="mx-auto max-w-2xl">
        @if (room?.status === GameStatus.VOTING) {
          <scp-card-list
            [cards]="cards"
            [selectedCard]="participantVote"
            (selectCard)="onSelectCard($event)"
            [@cardListAnimation]="true" />
          <scp-participants
            [participants]="participants"
            [@componentEnterAnimation]="true" />
          <scp-share-link [@componentEnterAnimation]="true" />
        } @else if (room?.status === GameStatus.REVEAL) {
          <scp-result
            [participants]="participants | votedParticipant"
            [@resultCardsAnimation]="true" />
        }
        <scp-moderator-actions
          [room]="room"
          [sessionId]="sessionId"
          [@componentEnterAnimation]="true" />
      </div>
    </div>
  `,
})
export class GameRoomComponent {
  @Input({ required: true }) roomId: string | null = "";
  @Input({ required: true }) participants: Participant[] = [];
  @Input({ required: true }) sessionId: string | null = "";
  @Input({ required: true }) participantName: string | null = "";
  @Input({ required: true }) participantVote: string | null = "";
  @Input({ required: true }) room: Room | null = null;

  private firebaseService = inject(FirebaseService);

  protected GameStatus = GameStatus;

  protected cards = FIBONACCI;

  protected onSelectCard(card: string | null) {
    this.firebaseService.updateParticipantVote({
      vote: card!,
    });
  }
}
