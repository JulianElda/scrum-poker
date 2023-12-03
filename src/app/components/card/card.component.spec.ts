import {
  Spectator,
  byText,
  createComponentFactory,
} from "@ngneat/spectator/jest";
import { CardComponent } from "./card.component";

describe("CardComponent", () => {
  let spectator: Spectator<CardComponent>;
  const createComponent = createComponentFactory({
    component: CardComponent,
  });

  test("shows text", () => {
    spectator = createComponent({
      props: {
        text: "13",
      },
    });
    expect(spectator.query(byText("13"))).toBeTruthy();
  });
});
