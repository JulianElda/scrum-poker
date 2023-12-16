import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "scp-input",
  standalone: true,
  styleUrl: "./input.component.css",
  template: `
    <div class="mb-2">
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
          (change)="onChange($event.target)"
          [value]="value"
          [maxLength]="32" />
      </div>
    </div>
  `,
})
export class InputComponent {
  @Input({ required: true }) id = "";
  @Input({ required: true }) label = "";
  @Input() placeholder = "";
  @Input() value = "";

  @Output() inputChange = new EventEmitter<string>();

  protected onChange(eventTarget: EventTarget | null) {
    const value = (eventTarget as HTMLInputElement)?.value;
    this.inputChange.emit(value);
  }
}
