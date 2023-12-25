import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { ButtonComponent, HyperlinkComponent } from "@scp/components";

@Component({
  selector: "scp-home",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, HyperlinkComponent],
  template: `
    <div class="mx-auto max-w-4xl space-y-6 text-xl">
      <div class="space-y-2">
        <p><strong>Item #:</strong> SCP-Poker</p>
      </div>

      <div class="space-y-2">
        <p><strong>Object Class:</strong> Safe</p>
      </div>

      <div class="space-y-2">
        <p>
          <strong>Special Containment Procedures:</strong>
          SCP-Poker is to be contained in a secure server in
          <scp-hyperlink
            [text]="'GitHub'"
            [link]="'https://github.com/JulianElda/scrum-poker'"
            [id]="'home-github'" />. Due to its open-source nature, access to
          SCP-Poker is unrestricted for any personnel with access to this
          document.
        </p>

        <p>Personnel may initiate a new planning session here.</p>

        <p class="pt-2 text-center">
          <scp-button
            [shrink]="true"
            [id]="'home-new-game'"
            [style]="'secondary'"
            [text]="'Start a game'"
            (clickButton)="onStart()" />
        </p>
      </div>

      <div class="space-y-2">
        <p class="pb-2">
          <strong>Description:</strong> "SCrum Planning - Poker" (SCP-Poker) is
          a web application to play Scrum Poker online. "Scrum Poker" or
          "Planning Poker", is a technique for project planning and estimation,
          commonly used in agile software development.
        </p>

        <p class="pb-2">
          SCP-Poker was developed by
          <scp-hyperlink
            [text]="'Julius Polar'"
            [link]="'https://www.linkedin.com/in/julius-polar/'"
            [id]="'home-linkedin'" />, and is built with
          <scp-hyperlink
            [text]="'Firebase'"
            [link]="'https://firebase.google.com/'"
            [id]="'home-firebase'" />,
          <scp-hyperlink
            [text]="'Angular'"
            [link]="'https://angular.dev/'"
            [id]="'home-angular'" />,
          <scp-hyperlink
            [text]="'nx'"
            [link]="'https://nx.dev/nx-api/angular'"
            [id]="'home-nx'" />,
          <scp-hyperlink
            [text]="'jest'"
            [link]="'https://jestjs.io/'"
            [id]="'home-jest'" />,
          <scp-hyperlink
            [text]="'Cypress'"
            [link]="'https://www.cypress.io/'"
            [id]="'home-cypress'" />,
          <scp-hyperlink
            [text]="'Storybook'"
            [link]="'https://storybook.js.org/'"
            [id]="'home-storybook'" />,
          <scp-hyperlink
            [text]="'tailwindcss'"
            [link]="'https://tailwindcss.com/'"
            [id]="'home-tailwind'" />,
          <scp-hyperlink
            [text]="'Font Awesome'"
            [link]="'https://fontawesome.com/'"
            [id]="'home-fontawesome'" />.
        </p>

        <p class="pb-2">
          SCP-Poker does not exhibit any anomalous properties on its own and
          functions like a typical planning poker tool, though it appears to be
          in its early developmental stages, and may inhibit unknown anomalies.
        </p>

        <p>
          Initial testing of SCP-Poker has shown promising results in improving
          many team's efficiency and productivity. Further research and
          development is ongoing to improve its potential applications.
        </p>
      </div>

      <div class="space-y-2">
        <p>
          <strong>Addendum 1:</strong> A dark mode button has been discovered in
          the footer of the application, allowing personnel to toggle between
          light and dark mode.
        </p>
      </div>

      <div class="space-y-2">
        <p>
          <strong>Note:</strong> This SCP entry is entirely fictional and
          created for entertainment purposes. It does not adhere to the canon of
          the
          <scp-hyperlink
            [text]="'SCP Foundation'"
            [link]="'https://scp-wiki.wikidot.com/'"
            [id]="'home-scp'" />
          and is not part of the official SCP database.
        </p>
      </div>
    </div>
  `,
})
export class HomeComponent {
  private router = inject(Router);

  protected onStart() {
    this.router.navigate(["/new"]);
  }
}
