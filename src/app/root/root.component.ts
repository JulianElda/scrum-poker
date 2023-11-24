import { Component } from "@angular/core";

@Component({
  selector: "scp-root",
  styleUrls: ["./root.component.css"],
  template: `
    <scp-header />
    <div class="mx-auto max-w-7xl">
      <router-outlet />
    </div>
    <scp-footer />
  `,
})
export class RootComponent {}
