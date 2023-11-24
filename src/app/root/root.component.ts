import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "src/app/components/footer/footer.component";
import { HeaderComponent } from "src/app/components/header/header.component";

@Component({
  selector: "scp-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: "./root.component.html",
  styleUrls: ["./root.component.css"],
})
export class RootComponent {}
