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
      (click)="onButtonClick()"
      class="button"
      [ngClass]="{ 'w-full': !shrink }">
      {{ text }}
    </button>
  `,
})
export class ButtonComponent {
  @Input({ required: true }) text = "";
  @Input() shrink = true;
  @Input() testId = "";

  @Output() clickButton = new EventEmitter();

  protected onButtonClick() {
    this.clickButton.emit();
  }
}
