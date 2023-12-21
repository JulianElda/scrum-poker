import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from "@angular/core";
import { ButtonComponent } from "@scp/components/button/button.component";
import { SelectComponent } from "@scp/components/select/select.component";
import { FirebaseService } from "@scp/services";
import { CARD_TYPES, GameStatus, Room, cardsToOptions } from "@scp/types";

@Component({
  selector: "scp-moderator-actions",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, SelectComponent],
  styleUrl: "./moderator-actions.component.css",
  template: `
    @if (room?.moderator === sessionId) {
      @if (room?.status === GameStatus.VOTING) {
        <scp-select
          [id]="'select-scale'"
          [label]="'Scale'"
          [options]="cardsOptions"
          [selectedValue]="selectedScale"
          (selectChange)="onScaleChange($event)" />
      }
      <scp-button
        class="mt-6 block"
        [shrink]="false"
        [id]="'moderator-action'"
        [text]="moderatorButtonText"
        (clickButton)="onModeratorAction()" />
    } @else {
      <scp-button
        class="mt-6 block"
        [shrink]="false"
        [id]="'moderator-moderate'"
        [text]="'Moderate'"
        [style]="'secondary'"
        (clickButton)="onModerate()" />
    }
  `,
})
export class ModeratorActionsComponent {
  @Input({ required: true }) sessionId: string | null = "";
  @Input({ required: true }) room: Room | null = null;
  @Input({ required: true }) roomId: string | null = "";
  @Input({ required: true }) scale: CARD_TYPES | undefined = CARD_TYPES.COHN;

  private firebaseService = inject(FirebaseService);

  protected GameStatus = GameStatus;
  protected readonly cardsOptions = cardsToOptions();

  protected get selectedScale(): string {
    return this.cardsOptions[
      this.cardsOptions
        .map((option) => option.value)
        .indexOf(this.scale as string)
    ].value;
  }

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
