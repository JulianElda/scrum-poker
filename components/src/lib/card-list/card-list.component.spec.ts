import {
  Spectator,
  byText,
  createComponentFactory,
} from "@ngneat/spectator/jest";
import { FIBONACCI } from "@scp/types";
import { CardListComponent } from "./card-list.component";

describe("CardListComponent", () => {
  let spectator: Spectator<CardListComponent>;
  const createComponent = createComponentFactory({
    component: CardListComponent,
  });

  test("shows card texts", () => {
    spectator = createComponent({
      props: {
        cards: FIBONACCI,
      },
    });

    [...FIBONACCI].forEach((text) => {
      expect(spectator.query(byText(text))).toBeTruthy();
    });
  });
});
