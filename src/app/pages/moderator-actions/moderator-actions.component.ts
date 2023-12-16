import { Component, Input, inject } from "@angular/core";
import { FirebaseService } from "@scp/services";
import { GameStatus, Room } from "@scp/types";
import { ButtonComponent } from "components";

@Component({
  selector: "scp-moderator-actions",
  standalone: true,
  imports: [ButtonComponent],
  styleUrl: "./moderator-actions.component.css",
  template: `
    @if (room?.moderator === sessionId) {
      <div class="mx-auto max-w-xs">
        <scp-button
          [text]="moderatorButtonText"
          [shrink]="false"
          (clickButton)="onModeratorAction()" />
      </div>
    }
  `,
})
export class ModeratorActionsComponent {
  @Input({ required: true }) sessionId: string | null = "";
  @Input({ required: true }) room: Room | null = null;
  @Input({ required: true }) roomId: string | null = "";

  private firebaseService = inject(FirebaseService);

  protected get moderatorButtonText(): string {
    return this.room?.status === GameStatus.VOTING
      ? "Reveal cards"
      : "Play again";
  }

  protected onModeratorAction() {
    const newStatus =
      this.room?.status === GameStatus.VOTING
        ? GameStatus.REVEAL
        : GameStatus.VOTING;

    this.firebaseService.updateGameStatus({
      status: newStatus,
    });

    if (newStatus === GameStatus.VOTING)
      this.firebaseService.resetParticipantsVote(this.roomId!);
  }
}
