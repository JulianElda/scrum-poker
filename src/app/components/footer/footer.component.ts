import { Component } from "@angular/core";
import { HyperlinkComponent } from "@scp/components/hyperlink/hyperlink.component";

@Component({
  selector: "scp-footer",
  standalone: true,
  imports: [HyperlinkComponent],
  styleUrl: "./footer.component.css",
  template: `
    <footer class="container mx-auto">
      <div class="flex justify-end">
        <span
          tabindex="1"
          class="cursor-pointer text-sm"
          (click)="changeTheme()"
          (keyup.enter)="changeTheme()">
          change theme
        </span>
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
  changeTheme() {
    if (localStorage["theme"] !== "dark") {
      localStorage["theme"] = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
    }
  }
}
