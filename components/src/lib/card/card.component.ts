import { NgClass } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "scp-card",
  standalone: true,
  imports: [NgClass],
  styleUrl: "./card.component.css",
  template: `
    <div
      class="container"
      [ngClass]="{ selected: selected }">
      <div class="content">
        <span>{{ text }}</span>
      </div>
    </div>
  `,
})
export class CardComponent {
  @Input({ required: true }) text = "";
  @Input() selected = false;
}
