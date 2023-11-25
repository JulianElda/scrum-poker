import {
  Spectator,
  byTestId,
  createComponentFactory,
} from "@ngneat/spectator/jest";
import { HyperlinkComponent } from "@scp/components/hyperlink/hyperlink.component";

describe("HyperlinkComponent", () => {
  let spectator: Spectator<HyperlinkComponent>;
  const createComponent = createComponentFactory({
    component: HyperlinkComponent,
  });

  it("creates hyperlink", () => {
    spectator = createComponent({
      props: {
        link: "https://github.com/JulianElda",
        text: "JulianElda@GitHub",
        testId: "github",
      },
    });
    const hyperlinkElement = spectator.query(byTestId("github"));
    expect(hyperlinkElement).toHaveText("JulianElda@GitHub");
    expect(hyperlinkElement).toHaveAttribute(
      "href",
      "https://github.com/JulianElda"
    );
  });
});
