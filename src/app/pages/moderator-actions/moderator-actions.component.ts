import { Component, Input, inject } from "@angular/core";
import { ButtonComponent, SelectComponent } from "@scp/components";
import { FirebaseService } from "@scp/services";
import { CARD_TYPES, GameStatus, Room, cardsToOptions } from "@scp/types";

@Component({
  selector: "scp-moderator-actions",
  standalone: true,
  imports: [ButtonComponent, SelectComponent],
  styleUrl: "./moderator-actions.component.css",
  template: `
    @if (room?.moderator === sessionId) {
      @if (room?.status === GameStatus.VOTING) {
        <scp-select
          [id]="'select-scale'"
          [label]="'Scale'"
          [options]="cardsOptions"
          [selectedValue]="startingScale"
          (selectChange)="onScaleChange($event)" />
      }
      <scp-button
        class="mt-6 block"
        [text]="moderatorButtonText"
        [shrink]="false"
        (clickButton)="onModeratorAction()" />
    } @else {
      <scp-button
        class="mt-6 block"
        [text]="'Moderate'"
        [shrink]="false"
        [style]="'secondary'"
        (clickButton)="onModerate()" />
    }
  `,
})
export class ModeratorActionsComponent {
  @Input({ required: true }) sessionId: string | null = "";
  @Input({ required: true }) room: Room | null = null;
  @Input({ required: true }) roomId: string | null = "";

  private firebaseService = inject(FirebaseService);

  protected GameStatus = GameStatus;
  protected readonly cardsOptions = cardsToOptions();
  protected readonly startingScale = this.cardsOptions[0].value;

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

  protected onScaleChange(scale: string) {
    this.firebaseService.updateGameStatus({
      scale: scale as CARD_TYPES,
    });
    this.firebaseService.resetParticipantsVote(this.roomId!);
  }

  protected onModerate() {
    this.firebaseService.updateGameStatus({
      moderator: this.sessionId!,
    });
  }
}
