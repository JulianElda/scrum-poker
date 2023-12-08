import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Auth, signInAnonymously } from "@angular/fire/auth";
import { FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ButtonComponent } from "@scp/components/button/button.component";
import { CardLayoutComponent } from "@scp/components/card-layout/card-layout.component";
import { InputComponent } from "@scp/components/input/input.component";
import { AuthService } from "@scp/services/auth.service";
import { FirebaseService } from "@scp/services/firebase.service";

@Component({
  selector: "scp-join-room",
  standalone: true,
  imports: [CommonModule, CardLayoutComponent, InputComponent, ButtonComponent],
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
          [text]="'Join room'"
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
    this.authService.uid = authUser.user.uid;
    await this.firebaseService.createRoomParticipant(
      roomId,
      authUser.user.uid,
      this.name.value!
    );
    this.router.navigate(["/room", { id: roomId }]);
  }
}
