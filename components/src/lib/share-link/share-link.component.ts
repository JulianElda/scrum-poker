import { Clipboard } from "@angular/cdk/clipboard";
import { Component, Input, OnInit, inject } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faPaste } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: "scp-share-link",
  standalone: true,
  imports: [FontAwesomeModule],
  styleUrls: ["./share-link.component.css", "./../input/input.component.css"],
  template: `
    <div class="mx-auto max-w-xs">
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
            [value]="joinLink" />
        </div>
        <button
          type="button"
          class="copy-button"
          aria-label="Copy to clipboard"
          (click)="onCopyLink()">
          <fa-icon
            class="h-4 w-4"
            [icon]="copyIcon" />
        </button>
      </div>
    </div>
  `,
})
export class ShareLinkComponent implements OnInit {
  @Input({ required: true }) roomId: string | null = "";

  private readonly clipboard = inject(Clipboard);

  protected readonly copyIcon = faPaste;
  protected joinLink: string = "";

  ngOnInit() {
    this.joinLink = window.location.origin + "/join;id=" + this.roomId;
  }

  protected onCopyLink() {
    this.clipboard.copy(this.joinLink);
  }
}
