import { Router } from "@angular/router";
import { describe, expect, test } from "@jest/globals";
import {
  Spectator,
  byTestId,
  byText,
  createComponentFactory,
  mockProvider,
} from "@ngneat/spectator/jest";
import { HomeComponent } from "./home.component";

describe("HomeComponent", () => {
  let spectator: Spectator<HomeComponent>;
  const createComponent = createComponentFactory({
    component: HomeComponent,
    providers: [mockProvider(Router)],
  });

  test("shows elements", () => {
    spectator = createComponent();

    expect(spectator.query(byText("Start a game"))).toBeTruthy();
    expect(spectator.query(byTestId("home-github"))).toBeTruthy();
    expect(spectator.query(byTestId("home-linkedin"))).toBeTruthy();
    expect(spectator.query(byTestId("home-firebase"))).toBeTruthy();
    expect(spectator.query(byTestId("home-angular"))).toBeTruthy();
    expect(spectator.query(byTestId("home-nx"))).toBeTruthy();
    expect(spectator.query(byTestId("home-jest"))).toBeTruthy();
    expect(spectator.query(byTestId("home-storybook"))).toBeTruthy();
    expect(spectator.query(byTestId("home-tailwind"))).toBeTruthy();
    expect(spectator.query(byTestId("home-fontawesome"))).toBeTruthy();
    expect(spectator.query(byTestId("home-scp"))).toBeTruthy();
  });
});
