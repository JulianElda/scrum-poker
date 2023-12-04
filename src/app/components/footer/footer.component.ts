import { Component } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { HyperlinkComponent } from "@scp/components/hyperlink/hyperlink.component";

@Component({
  selector: "scp-footer",
  standalone: true,
  imports: [FontAwesomeModule, HyperlinkComponent],
  styleUrl: "./footer.component.css",
  template: `
    <footer class="container mx-auto">
      <div class="flex justify-end">
        @if (isDarkTheme()) {
          <fa-icon
            class="h-6 w-6 cursor-pointer"
            [icon]="icons.dark"
            (click)="changeTheme()" />
        } @else {
          <fa-icon
            class="h-6 w-6 cursor-pointer"
            [icon]="icons.light"
            (click)="changeTheme()" />
        }
        <scp-hyperlink
          class="flex-1 text-end"
          [text]="'Julius Polar@Github'"
          [link]="'https://github.com/JulianElda/scrum-poker'"
          [testId]="'footer-link'" />
      </div>
    </footer>
  `,
})
export class FooterComponent {
  protected icons = {
    dark: faMoon,
    light: faSun,
  };

  protected isDarkTheme() {
    return Boolean(localStorage["theme"] === "dark");
  }

  protected changeTheme() {
    if (localStorage["theme"] !== "dark") {
      localStorage["theme"] = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
    }
  }
}
