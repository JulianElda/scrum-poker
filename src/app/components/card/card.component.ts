import { Component, Input } from "@angular/core";

@Component({
  selector: "scp-card",
  standalone: true,
  template: `
    <div
      class="h-[200px] w-[120px] rounded-lg border border-solid border-gray-300 bg-white p-2">
      <div class="m-auto text-2xl">
        {{ text }}
      </div>
    </div>
  `,
})
export class CardComponent {
  @Input({ required: true }) text = "";
}
