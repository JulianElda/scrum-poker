import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SessionCheckComponent } from "@scp/components/session-check/session-check.component";
import { FirebaseService } from "@scp/services/firebase.service";

@Component({
  selector: "scp-game-room",
  standalone: true,
  imports: [CommonModule, SessionCheckComponent],
  template: `
    <scp-session-check>
      <p>game-room</p>
      <ul>
        <li *ngFor="let participant of participants$ | async">
          {{ participant.name }}
        </li>
      </ul>
    </scp-session-check>
  `,
  styleUrl: "./game-room.component.css",
})
export class GameRoomComponent {
  private firebaseService = inject(FirebaseService);
  private activatedRoute = inject(ActivatedRoute);

  protected participants$ = this.firebaseService.getParticipants(
    this.activatedRoute.snapshot.paramMap.get("id") || ""
  );
}
