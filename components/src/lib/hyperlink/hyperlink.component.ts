import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "scp-hyperlink",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a
      [href]="link"
      target="_blank"
      rel="noreferrer"
      [id]="id"
      [attr.data-testid]="id"
      class="text-sky-950 decoration-dotted hover:text-sky-800 hover:underline dark:text-sky-100">
      {{ text }}*
    </a>
  `,
})
export class HyperlinkComponent {
  @Input({ required: true }) link = "";
  @Input({ required: true }) text = "";
  @Input() id = "";
}
