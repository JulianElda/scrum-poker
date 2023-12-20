import { AsyncPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SessionCheckComponent } from "@scp/components";
import { GameRoomComponent } from "@scp/pages/game-room/game-room.component";
import { AuthService, FirebaseService } from "@scp/services";
import { Participant, Room } from "@scp/types";
import { Observable, concatMap, map, take } from "rxjs";

@Component({
  selector: "scp-game-room-container",
  standalone: true,
  imports: [AsyncPipe, GameRoomComponent, SessionCheckComponent],
  template: `
    <scp-session-check>
      @if (
        (roomId$ | async) !== "" &&
        (sessionId$ | async) !== "" &&
        (participantName$ | async) !== "" &&
        (gameRoom$ | async)
      ) {
        @defer {
          <scp-game-room
            [roomId]="roomId$ | async"
            [sessionId]="sessionId$ | async"
            [participantName]="participantName$ | async"
            [participantVote]="participantVote$ | async"
            [participants]="(participants$ | async)!"
            [room]="gameRoom$ | async" />
        } @placeholder (minimum 200ms) {
          <p class="p-4 text-center text-lg">now loading ...</p>
        }
      } @else {
        <p class="p-4 text-center text-lg">now loading ...</p>
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

  protected participants$: Observable<Participant[]> = this.roomId$.pipe(
    concatMap((roomId: string) => {
      return this.firebaseService.getParticipants(roomId);
    })
  );

  protected gameRoom$: Observable<Room> = this.roomId$.pipe(
    concatMap((roomId: string) => {
      return this.firebaseService.getRoom(roomId);
    })
  );
}
