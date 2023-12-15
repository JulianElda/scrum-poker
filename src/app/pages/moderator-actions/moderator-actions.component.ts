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
      <div class="flex justify-center">
        <scp-button
          [text]="moderatorButtonText"
          (clickButton)="onModeratorAction()" />
      </div>
    }
  `,
})
export class ModeratorActionsComponent {
  @Input({ required: true }) sessionId: string | null = "";
  @Input({ required: true }) room: Room | null = null;

  private firebaseService = inject(FirebaseService);

  protected get moderatorButtonText(): string {
    return this.room?.status === GameStatus.VOTING
      ? "Reveal votes"
      : "Reset game";
  }

  protected onModeratorAction() {
    const status =
      this.room?.status === GameStatus.VOTING
        ? GameStatus.REVEAL
        : GameStatus.VOTING;

    this.firebaseService.updateGameStatus({
      status,
    });
  }
}
