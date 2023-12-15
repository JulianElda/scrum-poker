import {
  Spectator,
  createComponentFactory,
  byLabel,
} from "@ngneat/spectator/jest";
import { ShareLinkComponent } from "./share-link.component";

describe("ShareLinkComponent", () => {
  let spectator: Spectator<ShareLinkComponent>;
  const createComponent = createComponentFactory({
    component: ShareLinkComponent,
  });

  test("shows input element with value", () => {
    spectator = createComponent();

    expect(spectator.query(byLabel("Game link"))).toBeTruthy();
  });
});
