import { Timestamp } from "@angular/fire/firestore";
import { describe, expect, test } from "@jest/globals";
import {
  Spectator,
  byText,
  createComponentFactory,
  mockProvider,
} from "@ngneat/spectator/jest";
import { FirebaseService } from "@scp/services";
import { CARD_TYPES, GameStatus } from "@scp/types";
import { GameRoomComponent } from "./game-room.component";

describe("GameRoomComponent", () => {
  let spectator: Spectator<GameRoomComponent>;
  const createComponent = createComponentFactory({
    component: GameRoomComponent,
    providers: [mockProvider(FirebaseService)],
  });

  const participants = [
    {
      name: "Trump",
      uid: "trump",
      vote: "13",
    },
    {
      name: "Biden",
      uid: "biden",
      vote: undefined,
    },
    {
      name: "Obama",
      uid: "obama",
      vote: "8",
    },
    {
      name: "Clinton",
      uid: "clinton",
      vote: "8",
    },
  ];

  test("shows participants in voting phase", () => {
    spectator = createComponent({
      props: {
        roomId: "aXN9HDKy10M5oT8yC7b9waALkKv6u10z",
        sessionId: "trump",
        participantName: "Trump",
        participantVote: "13",
        room: {
          date: Timestamp.fromDate(new Date()),
          moderator: "trump",
          status: GameStatus.VOTING,
          scale: CARD_TYPES.COHN,
        },
        participants: [...participants],
      },
    });

    expect(spectator.query(byText("Trump"))).toBeTruthy();
    expect(spectator.query(byText("Biden"))).toBeTruthy();
    expect(spectator.query(byText("Obama"))).toBeTruthy();
    expect(spectator.query(byText("Clinton"))).toBeTruthy();
  });

  test("dont show participant who hasnt vote", () => {
    spectator = createComponent({
      props: {
        roomId: "aXN9HDKy10M5oT8yC7b9waALkKv6u10z",
        sessionId: "trump",
        participantName: "Trump",
        participantVote: "13",
        room: {
          date: Timestamp.fromDate(new Date()),
          moderator: "trump",
          status: GameStatus.REVEAL,
          scale: CARD_TYPES.COHN,
        },
        participants: [...participants],
      },
    });

    expect(spectator.query(byText("Trump"))).toBeTruthy();
    expect(spectator.query(byText("Biden"))).not.toBeTruthy();
    expect(spectator.query(byText("Obama"))).toBeTruthy();
    expect(spectator.query(byText("Clinton"))).toBeTruthy();
  });
});
