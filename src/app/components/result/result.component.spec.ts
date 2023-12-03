import {
  Spectator,
  byText,
  createComponentFactory,
} from "@ngneat/spectator/jest";
import { ResultComponent } from "./result.component";
import { signal } from "@angular/core";

describe("ResultComponent", () => {
  let spectator: Spectator<ResultComponent>;
  const createComponent = createComponentFactory({
    component: ResultComponent,
  });

  test("shows participants names and votes", () => {
    spectator = createComponent({
      props: {
        participantsVotes: signal([
          {
            name: "Donald",
            vote: "13",
          },
          {
            name: "Joe",
            vote: "8",
          },
        ]),
      },
    });

    expect(spectator.query(byText("Donald"))).toBeTruthy();
    expect(spectator.query(byText("13"))).toBeTruthy();
    expect(spectator.query(byText("Joe"))).toBeTruthy();
    expect(spectator.query(byText("8"))).toBeTruthy();
  });
});
