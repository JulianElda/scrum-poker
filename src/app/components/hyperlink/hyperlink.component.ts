import { Component, Input } from "@angular/core";

@Component({
  selector: "scp-hyperlink",
  standalone: true,
  template: `
    <a
      [href]="link"
      target="_blank"
      rel="noreferrer"
      class="text-sky-950 decoration-dotted hover:text-sky-800 hover:underline">
      {{ text }}*
    </a>
  `,
})
export class HyperlinkComponent {
  @Input({ required: true }) link = "";
  @Input({ required: true }) text = "";
}
