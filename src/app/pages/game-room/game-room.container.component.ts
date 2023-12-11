import { AsyncPipe, NgIf } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SessionCheckComponent } from "@scp/components/session-check/session-check.component";
import { GameRoomComponent } from "@scp/pages/game-room/game-room.component";
import { AuthService } from "@scp/services/auth.service";
import { FirebaseService } from "@scp/services/firebase.service";
import { FIBONACCI, ParticipantsHasVoted } from "@scp/types";
import { Observable, concatMap, map } from "rxjs";

@Component({
  selector: "scp-game-room-container",
  standalone: true,
  imports: [AsyncPipe, NgIf, GameRoomComponent, SessionCheckComponent],
  template: `
    <scp-session-check>
      @if (
        (roomId$ | async) !== "" &&
        (sessionId$ | async) !== "" &&
        (participantName$ | async) !== ""
      ) {
        <scp-game-room
          [roomId]="roomId$ | async"
          [sessionId]="sessionId$ | async"
          [participantName]="participantName$ | async"
          [participants]="participants$ | async" />
      }
    </scp-session-check>
  `,
})
export class GameRoomContainerComponent {
  private activatedRoute = inject(ActivatedRoute);
  private authService = inject(AuthService);
  private firebaseService = inject(FirebaseService);

  protected roomId$: Observable<string> = this.activatedRoute.params.pipe(
    map((param) => param["id"])
  );
  protected sessionId$ = this.authService.sessionId$;
  protected participantName$ = this.authService.participantName$;
  protected cards = FIBONACCI;

  protected participants$: Observable<ParticipantsHasVoted[]> =
    this.roomId$.pipe(
      concatMap((roomId: string) => {
        return this.firebaseService.getParticipants(roomId).pipe(
          map((participants) =>
            participants.map((participant) => ({
              name: participant.name,
              voted: participant.vote !== "",
            }))
          )
        );
      })
    );
}
