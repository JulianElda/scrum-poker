import {
  Spectator,
  byTestId,
  createComponentFactory,
} from "@ngneat/spectator/jest";
import { FooterComponent } from "./footer.component";

describe("FooterComponent", () => {
  let spectator: Spectator<FooterComponent>;
  const createComponent = createComponentFactory({
    component: FooterComponent,
  });

  it("shows text", () => {
    spectator = createComponent();
    const hyperlinkElement = spectator.query(byTestId("footer-link"));
    expect(hyperlinkElement).toHaveAttribute(
      "href",
      "https://github.com/JulianElda/scrum-poker"
    );
  });
});
