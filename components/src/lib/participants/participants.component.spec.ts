import {
  Spectator,
  byText,
  createComponentFactory,
} from "@ngneat/spectator/jest";
import { ParticipantsComponent } from "./participants.component";

describe("ParticipantsComponent", () => {
  let spectator: Spectator<ParticipantsComponent>;
  const createComponent = createComponentFactory({
    component: ParticipantsComponent,
  });

  test("shows participants names", () => {
    spectator = createComponent({
      props: {
        participants: [
          {
            name: "Donald",
            voted: true,
          },
          {
            name: "Joe",
            voted: false,
          },
        ],
      },
    });
    expect(spectator.query(byText("Donald"))).toBeTruthy();
    expect(spectator.query(byText("Joe"))).toBeTruthy();
  });
});
