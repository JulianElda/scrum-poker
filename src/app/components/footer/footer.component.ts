import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HyperlinkComponent } from "src/app/components/hyperlink/hyperlink.component";

@Component({
  selector: "scp-footer",
  standalone: true,
  imports: [CommonModule, HyperlinkComponent],
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent {}
