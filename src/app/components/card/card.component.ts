import { NgClass } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "scp-card",
  standalone: true,
  imports: [NgClass],
  template: `
    <div
      class="h-[200px] w-[120px]
        cursor-pointer rounded-lg border border-solid
        border-gray-300
        bg-white p-2"
      [ngClass]="{ 'border-2 border-sky-500': selected }">
      <div class="m-auto text-2xl">
        {{ text }}
      </div>
    </div>
  `,
})
export class CardComponent {
  @Input({ required: true }) text = "";
  @Input() selected = false;
}
