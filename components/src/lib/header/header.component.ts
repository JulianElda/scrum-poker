import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "scp-header",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: "./header.component.css",
  template: `
    <h1 class="text-center font-heading text-3xl font-semibold">
      Planning Poker
    </h1>
  `,
})
export class HeaderComponent {}
