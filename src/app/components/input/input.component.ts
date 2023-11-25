import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "scp-input",
  styleUrl: "./input.component.css",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="my-2">
      <label
        [for]="id"
        class="label">
        {{ label }}
      </label>
      <div class="mt-1">
        <input
          type="text"
          class="input"
          [name]="id"
          [id]="id"
          [attr.data-testid]="id"
          [placeholder]="placeholder"
          [formControl]="formControl" />
      </div>
    </div>
  `,
})
export class InputComponent {
  @Input({ required: true }) id = "";
  @Input({ required: true }) label = "";
  @Input() placeholder = "";
  @Input({ required: true }) formControl = new FormControl("");
}
