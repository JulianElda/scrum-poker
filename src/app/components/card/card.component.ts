import { Component, HostBinding, Input } from "@angular/core";

@Component({
  selector: "scp-card",
  standalone: true,
  styleUrl: "./card.component.css",
  template: `
    <div class="card-content">
      <span>{{ text }}</span>
    </div>
  `,
})
export class CardComponent {
  @Input({ required: true }) text = "";

  @HostBinding("class.selected")
  @Input()
  selected = false;
}
