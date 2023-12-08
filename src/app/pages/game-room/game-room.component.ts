import { AsyncPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CardListComponent } from "@scp/components/card-list/card-list.component";
import { ParticipantsComponent } from "@scp/components/participants/participants.component";
import { ResultComponent } from "@scp/components/result/result.component";
import { SessionCheckComponent } from "@scp/components/session-check/session-check.component";
import { AuthService } from "@scp/services/auth.service";
import { FirebaseService } from "@scp/services/firebase.service";
import { FIBONACCI, ParticipantsHasVoted } from "@scp/types";
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
          <scp-card-list [cards]="cards" />
          <scp-participants [participants]="participants$ | async" />
          <scp-result [participantsVotes]="" />
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
}
