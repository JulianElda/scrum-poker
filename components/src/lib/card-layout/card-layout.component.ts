import { Component } from "@angular/core";

@Component({
  selector: "scp-card-layout",
  standalone: true,
  styleUrl: "./card-layout.component.css",
  template: `
    <div class="rounded-md bg-white p-2 shadow dark:bg-slate-700 sm:p-4">
      <ng-content></ng-content>
    </div>
  `,
})
export class CardLayoutComponent {}
