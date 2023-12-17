import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FooterComponent, HeaderComponent } from "@scp/components";

@Component({
  selector: "scp-root",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  styleUrl: "./root.component.css",
  template: `
    <scp-header />
    <div class="mx-auto max-w-7xl">
      <router-outlet />
    </div>
    <scp-footer />
  `,
})
export class RootComponent implements OnInit {
  ngOnInit() {
    if (localStorage["theme"] === "dark")
      document.documentElement.classList.add("dark");
  }
}
