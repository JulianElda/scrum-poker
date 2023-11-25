import { Component } from "@angular/core";

@Component({
  selector: "scp-card-layout",
  standalone: true,
  styleUrl: "./card-layout.component.css",
  template: `<ng-content></ng-content>`,
})
export class CardLayoutComponent {}
