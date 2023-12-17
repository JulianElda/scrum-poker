import { Component } from "@angular/core";

@Component({
  selector: "scp-header",
  standalone: true,
  styleUrl: "./header.component.css",
  template: `
    <h1 class="font-heading text-center text-3xl font-semibold">
      Planning Poker
    </h1>
  `,
})
export class HeaderComponent {}
