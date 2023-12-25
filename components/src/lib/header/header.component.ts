import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "scp-header",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  styleUrl: "./header.component.css",
  template: `
    <h1 class="text-center font-heading text-3xl font-semibold">
      <a [routerLink]="'/'"> Planning Poker </a>
    </h1>
  `,
})
export class HeaderComponent {}
