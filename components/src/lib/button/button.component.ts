import { NgClass } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";

@Component({
  selector: "scp-button",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass],
  styleUrl: "./button.component.css",
  template: `
    <button
      type="button"
      class="button {{ style }}"
      [id]="id"
      [attr.aria-label]="text"
      [attr.data-testid]="id"
      [ngClass]="{ 'w-full': !shrink }"
      (click)="onButtonClick()">
      {{ text }}
    </button>
  `,
})
export class ButtonComponent {
  @Input({ required: true }) text = "";
  @Input() style: "primary" | "secondary" = "primary";
  @Input() shrink = true;
  @Input() id = "";

  @Output() clickButton = new EventEmitter();

  protected onButtonClick() {
    this.clickButton.emit();
  }
}
