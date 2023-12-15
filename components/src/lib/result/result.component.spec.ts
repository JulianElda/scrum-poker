import {
  Spectator,
  byText,
  createComponentFactory,
} from "@ngneat/spectator/jest";
import { ResultComponent } from "./result.component";

describe("ResultComponent", () => {
  let spectator: Spectator<ResultComponent>;
  const createComponent = createComponentFactory({
    component: ResultComponent,
  });

  test("shows participants names and votes", () => {
    spectator = createComponent({
      props: {
        participants: [
          {
            name: "Donald",
            uid: "Donald",
            vote: "13",
          },
          {
            name: "Joe",
            uid: "Joe",
            vote: "8",
          },
        ],
      },
    });

    expect(spectator.query(byText("Donald"))).toBeTruthy();
    expect(spectator.query(byText("13"))).toBeTruthy();
    expect(spectator.query(byText("Joe"))).toBeTruthy();
    expect(spectator.query(byText("8"))).toBeTruthy();
  });
});
