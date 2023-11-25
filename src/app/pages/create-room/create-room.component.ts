import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Auth, signInAnonymously } from "@angular/fire/auth";
import {
  DocumentReference,
  Firestore,
  Timestamp,
  addDoc,
  collection,
} from "@angular/fire/firestore";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { ButtonComponent } from "@scp/components/button/button.component";
import { CardLayoutComponent } from "@scp/components/card-layout/card-layout.component";
import { InputComponent } from "@scp/components/input/input.component";
import { Collections, Room } from "@scp/types";

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
  private firestore = inject(Firestore);
  private auth = inject(Auth);
  private router = inject(Router);

  protected moderatorName = new FormControl("My name");

  protected async onCreateRoom() {
    const authUser = await signInAnonymously(this.auth);
    const newRoom = await this.createRoom(authUser.user.uid);
    await this.createRoomModerator(
      newRoom.id,
      authUser.user.uid,
      this.moderatorName.value!
    );
    this.router.navigate(["/room", { id: newRoom.id }]);
  }

  private async createRoom(moderator: string): Promise<DocumentReference> {
    return addDoc(collection(this.firestore, Collections.ROOM), <Room>{
      date: Timestamp.fromDate(new Date()),
      moderator,
    });
  }

  private async createRoomModerator(
    roomId: string,
    uid: string,
    name: string
  ): Promise<DocumentReference> {
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
