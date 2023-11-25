import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Auth, signInAnonymously } from "@angular/fire/auth";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { ButtonComponent } from "@scp/components/button/button.component";
import { CardLayoutComponent } from "@scp/components/card-layout/card-layout.component";
import { InputComponent } from "@scp/components/input/input.component";
import { FirebaseService } from "@scp/services/firebase.service";

@Component({
  selector: "scp-create-room",
  standalone: true,
  imports: [CommonModule, CardLayoutComponent, InputComponent, ButtonComponent],
  styleUrl: "./create-room.component.css",
  template: `
    <div class="mx-auto max-w-sm space-y-2">
      <scp-card-layout>
        <scp-input
          [id]="'input-id'"
          [label]="'Moderator name'"
          [placeholder]="'My name'"
          [formControl]="moderatorName" />
        <scp-button
          [text]="'Create room'"
          [shrink]="false"
          (clickButton)="onCreateRoom()" />
      </scp-card-layout>
    </div>
  `,
})
export class CreateRoomComponent {
  private auth = inject(Auth);
  private router = inject(Router);
  private firebaseService = inject(FirebaseService);

  protected moderatorName = new FormControl("My name");

  protected async onCreateRoom() {
    const authUser = await signInAnonymously(this.auth);
    const newRoom = await this.firebaseService.createRoom(authUser.user.uid);
    await this.firebaseService.createRoomParticipant(
      newRoom.id,
      authUser.user.uid,
      this.moderatorName.value!
    );
    this.router.navigate(["/room", { id: newRoom.id }]);
  }
}
