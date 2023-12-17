import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NgForOf } from "@angular/common";

@Component({
  selector: "scp-select",
  standalone: true,
  imports: [NgForOf],
  styleUrls: ["./select.component.css", "./../input/input.component.css"],
  template: `
    <div>
      <label
        [for]="id"
        class="label">
        {{ label }}
      </label>
      <div class="mt-1">
        <select
          [name]="id"
          [id]="id"
          [attr.data-testid]="id"
          (change)="onChange($event.target)"
          class="select">
          <ng-container *ngFor="let option of options">
            <option
              [value]="option.value"
              [selected]="option.value === selectedValue">
              {{ option.label }}
            </option>
          </ng-container>
        </select>
      </div>
    </div>
  `,
})
export class SelectComponent {
  @Input({ required: true }) id = "";
  @Input({ required: true }) label = "";
  @Input({ required: true }) options: { label: string; value: string }[] = [];
  @Input() selectedValue: string = "";

  @Output() selectChange = new EventEmitter<string>();

  protected onChange(eventTarget: EventTarget | null) {
    const value = (eventTarget as HTMLSelectElement)?.value;
    this.selectedValue = value;
    this.selectChange.emit(value);
  }
}
