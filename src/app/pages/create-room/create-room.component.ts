import { Component, inject } from "@angular/core";
import { Auth, signInAnonymously } from "@angular/fire/auth";
import { Router } from "@angular/router";
import {
  ButtonComponent,
  CardLayoutComponent,
  InputComponent,
} from "@scp/components";
import { AuthService, FirebaseService } from "@scp/services";

@Component({
  selector: "scp-create-room",
  standalone: true,
  imports: [ButtonComponent, CardLayoutComponent, InputComponent],
  styleUrl: "./create-room.component.css",
  template: `
    <div class="mx-auto max-w-sm space-y-2">
      <scp-card-layout>
        <scp-input
          [id]="'input-id'"
          [label]="'Name'"
          [placeholder]="'My name'"
          [value]="name"
          (inputChange)="name = $event" />
        @if (!inProgress) {
          <scp-button
            [text]="'Create game'"
            [shrink]="false"
            (clickButton)="onCreateRoom()" />
        } @else {
          <scp-button
            [text]="'...'"
            [shrink]="false" />
        }
      </scp-card-layout>
    </div>
  `,
})
export class CreateRoomComponent {
  private auth = inject(Auth);
  private router = inject(Router);
  private authService = inject(AuthService);
  private firebaseService = inject(FirebaseService);

  protected name = "";
  protected inProgress = false;

  protected async onCreateRoom() {
    this.inProgress = true;
    try {
      const authUser = await signInAnonymously(this.auth);

      const newRoom = await this.firebaseService.createRoom(authUser.user.uid);
      const participant = await this.firebaseService.createRoomParticipant(
        newRoom.id,
        authUser.user.uid,
        this.name
      );

      this.authService.sessionId$.next(authUser.user.uid);
      this.authService.participantId$.next(participant.id);
      this.authService.participantName$.next(this.name);
      this.router.navigate(["/room", { id: newRoom.id }]);
    } catch (_err) {
      this.inProgress = false;
    }
  }
}
