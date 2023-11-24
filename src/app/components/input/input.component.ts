import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "scp-input",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"],
})
export class InputComponent {
  @Input({ required: true }) id = "";
  @Input({ required: true }) label = "";
  @Input() placeholder = "";
  @Input({ required: true }) formControl = new FormControl("");
}
