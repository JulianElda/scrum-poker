import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "@scp/components/footer/footer.component";
import { HeaderComponent } from "@scp/components/header/header.component";

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
