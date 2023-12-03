import {
  Spectator,
  byText,
  createComponentFactory,
} from "@ngneat/spectator/jest";
import { CardListComponent } from "./card-list.component";

describe("CardListComponent", () => {
  let spectator: Spectator<CardListComponent>;
  const createComponent = createComponentFactory({
    component: CardListComponent,
  });

  test("shows card texts", () => {
    spectator = createComponent();

    ["1", "2", "3", "5", "8", "13", "20", "?"].forEach((text) => {
      expect(spectator.query(byText(text)));
    });
  });
});
