import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardLayoutComponent } from "@scp/components/card-layout/card-layout.component";
import { InputComponent } from "@scp/components/input/input.component";
import { ButtonComponent } from "@scp/components/button/button.component";
import { FormControl } from "@angular/forms";
import { Auth, signInAnonymously } from "@angular/fire/auth";
import { Firestore, addDoc, collection } from "@angular/fire/firestore";
import { ActivatedRoute, Router } from "@angular/router";
import { Collections } from "@scp/types";

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
  private firestore = inject(Firestore);
  private auth = inject(Auth);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  private roomId = this.activatedRoute.snapshot.paramMap.get("id") || "";

  protected name = new FormControl("My name");

  protected async onJoinRoom() {
    const authUser = await signInAnonymously(this.auth);
    await this.createRoomParticipant(
      this.roomId,
      authUser.user.uid,
      this.name.value!
    );
    this.router.navigate(["/room", { id: this.roomId }]);
  }

  private async createRoomParticipant(
    roomId: string,
    uid: string,
    name: string
  ) {
    return addDoc(
      collection(
        this.firestore,
        Collections.ROOM,
        roomId,
        Collections.PARTICIPANT
      ),
      {
        name,
        uid,
      }
    );
  }
}
