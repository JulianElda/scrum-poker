import { Component } from "@angular/core";
import { CardListComponent } from "@scp/components/card-list/card-list.component";

@Component({
  selector: "scp-test",
  standalone: true,
  imports: [CardListComponent],
  styleUrl: "./test.component.css",
  template: ` <scp-card-list /> `,
})
export class TestComponent {}
