import {
  Spectator,
  byTestId,
  byText,
  createComponentFactory,
} from "@ngneat/spectator/jest";
import { ButtonComponent } from "./button.component";

describe("ButtonComponent", () => {
  let spectator: Spectator<ButtonComponent>;
  const createComponent = createComponentFactory({
    component: ButtonComponent,
  });

  test("shows text", () => {
    spectator = createComponent({
      props: {
        text: "Button text",
        id: "test-id",
      },
    });

    expect(spectator.query(byText("Button text"))).toBeTruthy();
    expect(spectator.query(byTestId("test-id"))).toBeTruthy();
  });
});
