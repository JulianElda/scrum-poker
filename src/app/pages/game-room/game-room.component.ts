import { AsyncPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CardListComponent } from "@scp/components/card-list/card-list.component";
import { ParticipantsComponent } from "@scp/components/participants/participants.component";
import { ResultComponent } from "@scp/components/result/result.component";
import { SessionCheckComponent } from "@scp/components/session-check/session-check.component";
import { AuthService } from "@scp/services/auth.service";
import { FirebaseService } from "@scp/services/firebase.service";
import { FIBONACCI, Participant, ParticipantsHasVoted } from "@scp/types";
import { Observable, map } from "rxjs";

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
    <scp-session-check>
      <div class="mx-auto max-w-3xl">
        <div class="mx-auto max-w-2xl">
          <scp-card-list
            [cards]="cards"
            (selectCard)="onSelectCard($event)" />
          <scp-participants [participants]="participants$ | async" />
          <scp-result [participantsVotes]="" />
          <button (click)="test()">test</button>
        </div>
      </div>
    </scp-session-check>
  `,
})
export class GameRoomComponent {
  private activatedRoute = inject(ActivatedRoute);
  private authService = inject(AuthService);
  private firebaseService = inject(FirebaseService);

  private roomId = this.activatedRoute.snapshot.paramMap.get("id") || "";
  protected cards = FIBONACCI;

  protected participants$: Observable<ParticipantsHasVoted[]> =
    this.firebaseService.getParticipants(this.roomId).pipe(
      map((participants) =>
        participants.map((participant) => ({
          name: participant.name,
          voted: true,
        }))
      )
    );

  /*
  protected currentParticipant$: Observable<unknown> = this.firebaseService
    .getParticipant(
      this.activatedRoute.snapshot.paramMap.get("id") || "",
      this.authService.sessionId
    )
    .pipe(
      map((result) => {
        console.log("currentParticipant", result);
        return result;
      })
    );
    */

  protected onSelectCard(card: string) {
    this.firebaseService.updateParticipantVote(
      this.roomId,
      this.authService.participantId,
      {
        name: this.authService.participantName,
        uid: this.authService.sessionId,
        vote: card,
      }
    );
  }

  test() {
    this.firebaseService
      .getParticipant(
        this.activatedRoute.snapshot.paramMap.get("id") || "",
        this.authService.sessionId
      )
      .pipe(
        map((result) => {
          console.log("currentParticipant", result);
          return result;
        })
      )
      .subscribe();
  }
}
