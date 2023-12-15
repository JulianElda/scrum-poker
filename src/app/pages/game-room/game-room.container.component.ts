import { AsyncPipe, NgIf } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SessionCheckComponent } from "@scp/components/session-check/session-check.component";
import { GameRoomComponent } from "@scp/pages/game-room/game-room.component";
import { AuthService } from "@scp/services/auth.service";
import { FirebaseService } from "@scp/services/firebase.service";
import { ParticipantsHasVoted, Room } from "@scp/types";
import { Observable, concatMap, map, take } from "rxjs";

@Component({
  selector: "scp-game-room-container",
  standalone: true,
  imports: [AsyncPipe, NgIf, GameRoomComponent, SessionCheckComponent],
  template: `
    <scp-session-check>
      @if (
        (roomId$ | async) !== "" &&
        (sessionId$ | async) !== "" &&
        (participantName$ | async) !== "" &&
        (gameRoom$ | async)
      ) {
        <scp-game-room
          [roomId]="roomId$ | async"
          [sessionId]="sessionId$ | async"
          [participantName]="participantName$ | async"
          [participantVote]="participantVote$ | async"
          [participants]="participants$ | async"
          [room]="gameRoom$ | async" />
      }
    </scp-session-check>
  `,
})
export class GameRoomContainerComponent {
  private activatedRoute = inject(ActivatedRoute);
  private authService = inject(AuthService);
  private firebaseService = inject(FirebaseService);

  protected roomId$: Observable<string> = this.activatedRoute.params
    .pipe(take(1))
    .pipe(map((param) => param["id"]));
  protected sessionId$ = this.authService.sessionId$;
  protected participantName$ = this.authService.participantName$;
  protected participantVote$ = this.authService.participantVote$;

  protected participants$: Observable<ParticipantsHasVoted[]> =
    this.roomId$.pipe(
      concatMap((roomId: string) => {
        return this.firebaseService.getParticipants(roomId).pipe(
          map((participants) =>
            participants.map((participant) => ({
              name: participant.name,
              voted: !!participant.vote,
            }))
          )
        );
      })
    );

  protected gameRoom$: Observable<Room> = this.roomId$.pipe(
    concatMap((roomId: string) => {
      return this.firebaseService.getRoom(roomId);
    })
  );
}
