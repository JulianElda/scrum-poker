import {
  Spectator,
  byTestId,
  byText,
  createComponentFactory,
  mockProvider,
} from "@ngneat/spectator/jest";
import { HomeComponent } from "./home.component";
import { Router } from "@angular/router";

describe("HomeComponent", () => {
  let spectator: Spectator<HomeComponent>;
  const createComponent = createComponentFactory({
    component: HomeComponent,
    providers: [mockProvider(Router)],
  });

  test("shows elements", () => {
    spectator = createComponent();

    expect(spectator.query(byText("Start a game"))).toBeTruthy();
    expect(spectator.query(byTestId("author-github"))).toBeTruthy();
    expect(spectator.query(byTestId("author-repo"))).toBeTruthy();
    expect(spectator.query(byTestId("author-firebase"))).toBeTruthy();
    expect(spectator.query(byTestId("author-angular"))).toBeTruthy();
    expect(spectator.query(byTestId("author-nx"))).toBeTruthy();
    expect(spectator.query(byTestId("author-jest"))).toBeTruthy();
    expect(spectator.query(byTestId("author-storybook"))).toBeTruthy();
    expect(spectator.query(byTestId("author-tailwind"))).toBeTruthy();
    expect(spectator.query(byTestId("author-fontawesome"))).toBeTruthy();
  });
});
