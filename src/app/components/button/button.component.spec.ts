import {
  Spectator,
  byText,
  createComponentFactory,
} from "@ngneat/spectator/jest";
import { ButtonComponent } from "./button.component";

describe("ButtonComponent", () => {
  let spectator: Spectator<ButtonComponent>;
  const createComponent = createComponentFactory({
    component: ButtonComponent,
  });

  it("shows text", () => {
    spectator = createComponent({
      props: {
        text: "Button text",
      },
    });

    expect(spectator.query(byText("Button text"))).toBeTruthy();
  });
});
