import { Timestamp } from "@angular/fire/firestore";
import {
  Spectator,
  byText,
  createComponentFactory,
  mockProvider,
} from "@ngneat/spectator/jest";
import { FirebaseService } from "@scp/services";
import { GameStatus } from "@scp/types";
import { ModeratorActionsComponent } from "./moderator-actions.component";

describe("ModeratorActionsComponent", () => {
  let spectator: Spectator<ModeratorActionsComponent>;
  const createComponent = createComponentFactory({
    component: ModeratorActionsComponent,
    providers: [mockProvider(FirebaseService)],
  });

  test("shows reveal action when game is in voting phase", () => {
    spectator = createComponent({
      props: {
        room: {
          date: Timestamp.fromDate(new Date()),
          moderator: "moderator",
          status: GameStatus.VOTING,
        },
        sessionId: "moderator",
      },
    });
    expect(spectator.query(byText("Reveal cards"))).toBeTruthy();
  });

  test("shows reset action when game is in reveal phase", () => {
    spectator = createComponent({
      props: {
        room: {
          date: Timestamp.fromDate(new Date()),
          moderator: "moderator",
          status: GameStatus.REVEAL,
        },
        sessionId: "moderator",
      },
    });
    expect(spectator.query(byText("Play again"))).toBeTruthy();
  });

  test("shows nothing if user is not the game moderator", () => {
    spectator = createComponent({
      props: {
        room: {
          date: Timestamp.fromDate(new Date()),
          moderator: "moderator",
          status: GameStatus.REVEAL,
        },
        sessionId: "player",
      },
    });
    expect(spectator.query(byText("Reveal cards"))).not.toBeTruthy();
    expect(spectator.query(byText("Play again"))).not.toBeTruthy();
  });
});
