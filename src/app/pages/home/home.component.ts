import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { ButtonComponent, HyperlinkComponent } from "@scp/components";

@Component({
  selector: "scp-home",
  standalone: true,
  imports: [ButtonComponent, HyperlinkComponent],
  template: `
    <div class="mx-auto max-w-4xl space-y-6 text-xl">
      <div class="space-y-2">
        <h2 class="font-heading font-semibold">What is this?</h2>
        <p>It's a web application to play Planning / Scrum poker online.</p>
        <p class="text-center">
          <scp-button
            [shrink]="true"
            [id]="'home-new-game'"
            [style]="'secondary'"
            [text]="'Start a game'"
            (clickButton)="onStart()" />
        </p>
      </div>

      <div class="space-y-2">
        <h2 class="font-heading font-semibold">Planning poker?</h2>
        <blockquote
          class="italic"
          cite="https://en.wikipedia.org/wiki/Planning_poker">
          <p>
            "Planning poker, also called Scrum poker, is a consensus-based,
            gamified technique for estimating, mostly used for timeboxing in
            Agile principles. In planning poker, members of the group make
            estimates by playing numbered cards face-down to the table, instead
            of speaking them aloud. The cards are revealed, and the estimates
            are then discussed. By hiding the figures in this way, the group can
            avoid the cognitive bias of anchoring, where the first number spoken
            aloud sets a precedent for subsequent estimates. "
          </p>
          <footer class="text-right">Gandhi (probably)</footer>
        </blockquote>
      </div>

      <div class="space-y-2">
        <h2 class="font-heading font-semibold">Who made this?</h2>
        <p>
          This application was developed by
          <scp-hyperlink
            [text]="'Julius Polar'"
            [link]="'https://www.linkedin.com/in/julius-polar/'"
            [id]="'author-github'" />. The source code is available on
          <scp-hyperlink
            [text]="'GitHub'"
            [link]="'https://github.com/JulianElda/scrum-poker'"
            [id]="'author-repo'" />.
        </p>

        <p>
          The tech stack:
          <scp-hyperlink
            [text]="'Firebase'"
            [link]="'https://firebase.google.com/'"
            [id]="'author-firebase'" />,
          <scp-hyperlink
            [text]="'Angular'"
            [link]="'https://angular.dev/'"
            [id]="'author-angular'" />,
          <scp-hyperlink
            [text]="'nx'"
            [link]="'https://nx.dev/nx-api/angular'"
            [id]="'author-nx'" />,
          <scp-hyperlink
            [text]="'jest'"
            [link]="'https://jestjs.io/'"
            [id]="'author-jest'" />,
          <scp-hyperlink
            [text]="'Cypress'"
            [link]="'https://www.cypress.io/'"
            [id]="'author-cypress'" />,
          <scp-hyperlink
            [text]="'Storybook'"
            [link]="'https://storybook.js.org/'"
            [id]="'author-storybook'" />,
          <scp-hyperlink
            [text]="'tailwindcss'"
            [link]="'https://tailwindcss.com/'"
            [id]="'author-tailwind'" />,
          <scp-hyperlink
            [text]="'Font Awesome'"
            [link]="'https://fontawesome.com/'"
            [id]="'author-fontawesome'" />
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
