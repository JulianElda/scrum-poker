import {
  Spectator,
  byLabel,
  byPlaceholder,
  byTestId,
  byValue,
  createComponentFactory,
} from "@ngneat/spectator/jest";
import { InputComponent } from "./input.component";
import { FormControl } from "@angular/forms";

describe("InputComponent", () => {
  let spectator: Spectator<InputComponent>;
  const createComponent = createComponentFactory({
    component: InputComponent,
  });

  test("shows input and label elements", () => {
    spectator = createComponent({
      props: {
        id: "input-id",
        label: "Input label",
        placeholder: "Input placeholder",
        formControl: new FormControl("Initial value"),
      },
    });

    expect(spectator.query(byLabel("Input label"))).toBeTruthy();
    expect(spectator.query(byTestId("input-id"))).toBeTruthy();
    expect(spectator.query(byPlaceholder("Input placeholder"))).toBeTruthy();
    expect(spectator.query(byValue("Initial value"))).toBeTruthy();
  });
});
