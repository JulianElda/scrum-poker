import { FooterComponent } from "@/components/footer/footer.component";
import { HeaderComponent } from "@/components/header/header.component";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "scp-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
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
