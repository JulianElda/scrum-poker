import {
  Spectator,
  byTestId,
  byText,
  createComponentFactory,
} from "@ngneat/spectator/jest";
import { RootComponent } from "./root.component";

describe("RootComponent", () => {
  let spectator: Spectator<RootComponent>;
  const createComponent = createComponentFactory({
    component: RootComponent,
  });

  test("shows title and footer", () => {
    spectator = createComponent();
    expect(spectator.query(byTestId("footer-link"))).toBeTruthy();
    expect(spectator.query(byText("Planning Poker"))).toBeTruthy();
  });
});
