import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import {
  DocumentReference,
  Firestore,
  Timestamp,
  addDoc,
  collection,
} from "@angular/fire/firestore";
import { FormControl } from "@angular/forms";
import { ButtonComponent } from "@scp/components/button/button.component";
import { InputComponent } from "@scp/components/input/input.component";
import { CardLayoutComponent } from "@scp/components/card-layout/card-layout.component";
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

      <div>
        {{ roomId }}
      </div>
    </div>
  `,
})
export class CreateRoomComponent {
  private firestore: Firestore = inject(Firestore);

  protected moderatorName = new FormControl("My name");

  protected roomId: string = "";

  protected async onCreateRoom() {
    const newRoom = await this.createRoom();
    await this.createRoomModerator(newRoom.id);
    this.roomId = newRoom.id;
  }

  private async createRoom(): Promise<DocumentReference> {
    return addDoc(collection(this.firestore, Collections.ROOM), <Room>{
      date: Timestamp.fromDate(new Date()),
    });
  }

  private async createRoomModerator(
    roomId: string
  ): Promise<DocumentReference> {
    return addDoc(
      collection(
        this.firestore,
        Collections.ROOM,
        roomId,
        Collections.PARTICIPANT
      ),
      {
        name: this.moderatorName.value,
      }
    );
  }
}
