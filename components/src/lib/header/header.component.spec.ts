import {
  Spectator,
  byText,
  createComponentFactory,
} from "@ngneat/spectator/jest";
import { HeaderComponent } from "./header.component";

describe("HeaderComponent", () => {
  let spectator: Spectator<HeaderComponent>;
  const createComponent = createComponentFactory({
    component: HeaderComponent,
  });

  test("shows title", () => {
    spectator = createComponent();
    expect(spectator.query(byText("Planning Poker"))).toBeTruthy();
  });
});
