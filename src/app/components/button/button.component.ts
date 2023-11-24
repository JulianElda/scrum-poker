import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "scp-button",
  standalone: true,
  imports: [CommonModule],
  styleUrls: ["./button.component.css"],
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
