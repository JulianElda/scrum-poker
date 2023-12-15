import {
  createHostFactory,
  byText,
  SpectatorHost,
} from "@ngneat/spectator/jest";
import { CardLayoutComponent } from "./card-layout.component";

describe("CardLayoutComponent", () => {
  let spectator: SpectatorHost<CardLayoutComponent>;
  const createHost = createHostFactory({
    component: CardLayoutComponent,
    template: `
      <scp-card-layout>test-content</scp-card-layout>
    `,
  });

  test("projects content", () => {
    spectator = createHost();
    expect(spectator.query(byText("test-content"))).toBeTruthy();
  });
});
