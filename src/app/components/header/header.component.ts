import { Component } from "@angular/core";

@Component({
  selector: "scp-header",
  standalone: true,
  template: `
    <div class="pb-2 sm:pb-4">
      <h1 class="text-center text-2xl">Planning Poker</h1>
    </div>
  `,
})
export class HeaderComponent {}
