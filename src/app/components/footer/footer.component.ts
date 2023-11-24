import { HyperlinkComponent } from "@/components/hyperlink/hyperlink.component";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "scp-footer",
  standalone: true,
  imports: [CommonModule, HyperlinkComponent],
  styleUrls: ["./footer.component.css"],
  template: `
    <div class="container mx-auto">
      <div class="flex justify-end">
        <scp-hyperlink
          [text]="'Julius Polar@Github'"
          [link]="'https://github.com/JulianElda/scrum-poker'"
          [testId]="'footer-link'" />
      </div>
    </div>
  `,
})
export class FooterComponent {}
