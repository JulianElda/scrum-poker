import { NgClass } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "scp-button",
  standalone: true,
  imports: [NgClass],
  styleUrl: "./button.component.css",
  template: `
    <button
      type="button"
      [attr.aria-label]="text"
      [attr.data-testid]="testId"
      class="button {{ style }}"
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
  @Input() testId = "";

  @Output() clickButton = new EventEmitter();

  protected onButtonClick() {
    this.clickButton.emit();
  }
}
