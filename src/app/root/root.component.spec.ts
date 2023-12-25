import { ActivatedRoute } from "@angular/router";
import { describe, expect, test } from "@jest/globals";
import {
  Spectator,
  byTestId,
  byText,
  createComponentFactory,
  mockProvider,
} from "@ngneat/spectator/jest";
import { RootComponent } from "./root.component";

describe("RootComponent", () => {
  let spectator: Spectator<RootComponent>;
  const createComponent = createComponentFactory({
    component: RootComponent,
    providers: [mockProvider(ActivatedRoute)],
  });

  test("shows title and footer", () => {
    spectator = createComponent();
    expect(spectator.query(byTestId("footer-link"))).toBeTruthy();
    expect(spectator.query(byText("SCP-Poker"))).toBeTruthy();
  });
});
