import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "scp-button",
  styleUrl: "./button.component.css",
  standalone: true,
  imports: [CommonModule],
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

  onButtonClick() {
    this.clickButton.emit();
  }
}
