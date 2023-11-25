import { FooterComponent } from "@/components/footer/footer.component";
import { HeaderComponent } from "@/components/header/header.component";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "scp-root",
  styleUrl: "./root.component.css",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <scp-header />
    <div class="mx-auto max-w-7xl">
      <router-outlet />
    </div>
    <scp-footer />
  `,
})
export class RootComponent {}
