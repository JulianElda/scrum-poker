import {
  Spectator,
  byText,
  createComponentFactory,
  mockProvider,
} from "@ngneat/spectator/jest";
import { RouterLink } from "@angular/router";
import { HeaderComponent } from "./header.component";

describe("HeaderComponent", () => {
  let spectator: Spectator<HeaderComponent>;
  const createComponent = createComponentFactory({
    component: HeaderComponent,
    providers: [mockProvider(RouterLink)],
  });

  test("shows title", () => {
    spectator = createComponent();
    expect(spectator.query(byText("Planning Poker"))).toBeTruthy();
  });
});
