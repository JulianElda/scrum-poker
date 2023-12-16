import { Component, inject } from "@angular/core";
import { Auth, signInAnonymously } from "@angular/fire/auth";
import { FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import {
  ButtonComponent,
  CardLayoutComponent,
  InputComponent,
} from "@scp/components";
import { AuthService, FirebaseService } from "@scp/services";

@Component({
  selector: "scp-join-room",
  standalone: true,
  imports: [ButtonComponent, CardLayoutComponent, InputComponent],
  styleUrl: "./join-room.component.css",
  template: `
    <div class="mx-auto max-w-sm space-y-2">
      <scp-card-layout>
        <scp-input
          [id]="'input-id'"
          [label]="'Name'"
          [placeholder]="'My name'"
          [formControl]="name" />
        <scp-button
          [text]="'Join'"
          [shrink]="false"
          (clickButton)="onJoinRoom()" />
      </scp-card-layout>
    </div>
  `,
})
export class JoinRoomComponent {
  private auth = inject(Auth);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private authService = inject(AuthService);
  private firebaseService = inject(FirebaseService);

  protected name = new FormControl("My name");

  protected async onJoinRoom() {
    const roomId = this.activatedRoute.snapshot.paramMap.get("id") || "";

    const authUser = await signInAnonymously(this.auth);

    const participant = await this.firebaseService.createRoomParticipant(
      roomId,
      authUser.user.uid,
      this.name.value!
    );

    this.authService.sessionId$.next(authUser.user.uid);
    this.authService.participantId$.next(participant.id);
    this.authService.participantName$.next(this.name.value!);
    this.router.navigate(["/room", { id: roomId }]);
  }
}
