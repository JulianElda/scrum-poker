import { Clipboard } from "@angular/cdk/clipboard";
import { Component, Input, OnChanges, inject } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faPaste } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: "scp-share-link",
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule],
  styleUrls: ["./share-link.component.css", "./../input/input.component.css"],
  template: `
    <div class="mx-auto my-6 max-w-xs">
      <label
        for="game-link"
        class="label">
        Game link
      </label>
      <div class="mt-1 flex rounded-md shadow-sm">
        <div class="relative flex flex-grow items-stretch">
          <input
            type="text"
            readonly
            name="game-link"
            id="game-link"
            class="input input-link"
            [formControl]="formControl" />
        </div>
        <button
          type="button"
          class="copy-button"
          (click)="onCopyLink()">
          <fa-icon
            class="h-4 w-4"
            [icon]="copyIcon" />
        </button>
      </div>
    </div>
  `,
})
export class ShareLinkComponent implements OnChanges {
  @Input({ required: true }) roomId: string | null = "";

  private readonly clipboard = inject(Clipboard);

  protected readonly copyIcon = faPaste;
  private joinLink: string = "";
  protected formControl = new FormControl("");

  ngOnChanges() {
    this.joinLink = window.location.origin + "/join?id=" + this.roomId;
    this.formControl = new FormControl(this.joinLink);
  }

  protected onCopyLink() {
    this.clipboard.copy(window.location.href);
  }
}
