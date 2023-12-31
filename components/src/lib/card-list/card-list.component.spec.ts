import {
  Spectator,
  byText,
  createComponentFactory,
} from "@ngneat/spectator/jest";
import { COHN } from "@scp/types";
import { CardListComponent } from "./card-list.component";

describe("CardListComponent", () => {
  let spectator: Spectator<CardListComponent>;
  const createComponent = createComponentFactory({
    component: CardListComponent,
  });

  test("shows card texts", () => {
    spectator = createComponent({
      props: {
        cards: COHN,
      },
    });

    [...COHN].forEach((text) => {
      expect(spectator.query(byText(text))).toBeTruthy();
    });
  });

  test("emits selected card value", () => {
    spectator = createComponent({
      props: {
        cards: COHN,
      },
    });

    const emitSpy = jest.spyOn(spectator.component.selectCard, "emit");

    spectator.click(byText("13"));
    expect(emitSpy).toHaveBeenCalledWith("13");
  });

  test("emits null when deselecting card", () => {
    spectator = createComponent({
      props: {
        cards: COHN,
      },
    });

    const emitSpy = jest.spyOn(spectator.component.selectCard, "emit");

    spectator.click(byText("13"));
    spectator.click(byText("13"));
    expect(emitSpy).toHaveBeenCalledWith(null);
  });
});
