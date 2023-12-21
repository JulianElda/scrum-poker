import { NgClass } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "scp-card",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass],
  styleUrl: "./card.component.css",
  template: `
    <div
      class="container"
      [attr.data-testid]="'card-' + text"
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
