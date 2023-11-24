import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "scp-button",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"],
})
export class ButtonComponent {
  @Input({ required: true }) text = "";
  @Input() shrink = true;

  @Output() clickButton = new EventEmitter();

  onButtonClick() {
    this.clickButton.emit();
  }
}
