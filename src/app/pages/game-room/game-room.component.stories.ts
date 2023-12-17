import { Timestamp } from "@angular/fire/firestore";
import {
  BrowserAnimationsModule,
  provideAnimations,
} from "@angular/platform-browser/animations";
import { FirebaseService } from "@scp/services";
import { CARD_TYPES, GameStatus } from "@scp/types";
import type { Meta, StoryObj } from "@storybook/angular";
import { argsToTemplate } from "@storybook/angular";
import { GameRoomComponent } from "./game-room.component";

const meta: Meta<GameRoomComponent> = {
  title: "Game room",
  component: GameRoomComponent,
  render: (args: GameRoomComponent) => ({
    props: {
      ...args,
    },
    moduleMetadata: {
      imports: [BrowserAnimationsModule],
      providers: [
        {
          provide: FirebaseService,
          useValue: {},
        },
        provideAnimations(),
      ],
    },
    template: `<scp-game-room ${argsToTemplate(args)}></scp-game-room>`,
  }),
};
export default meta;
type Story = StoryObj<GameRoomComponent>;

export const Moderator: Story = {
  args: {
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
    participants: [
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
    ],
  },
};

export const Player: Story = {
  args: {
    roomId: "aXN9HDKy10M5oT8yC7b9waALkKv6u10z",
    sessionId: "trump",
    participantName: "Trump",
    participantVote: "13",
    room: {
      date: Timestamp.fromDate(new Date()),
      moderator: "biden",
      status: GameStatus.VOTING,
      scale: CARD_TYPES.COHN,
    },
    participants: [
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
    ],
  },
};

export const Fibbonaci: Story = {
  args: {
    roomId: "aXN9HDKy10M5oT8yC7b9waALkKv6u10z",
    sessionId: "trump",
    participantName: "Trump",
    participantVote: "13",
    room: {
      date: Timestamp.fromDate(new Date()),
      moderator: "trump",
      status: GameStatus.VOTING,
      scale: CARD_TYPES.FIBONNACI,
    },
    participants: [
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
    ],
  },
};

export const TSHIRT: Story = {
  args: {
    roomId: "aXN9HDKy10M5oT8yC7b9waALkKv6u10z",
    sessionId: "trump",
    participantName: "Trump",
    participantVote: "13",
    room: {
      date: Timestamp.fromDate(new Date()),
      moderator: "trump",
      status: GameStatus.VOTING,
      scale: CARD_TYPES.TSHIRT,
    },
    participants: [
      {
        name: "Trump",
        uid: "trump",
        vote: "XXL",
      },
      {
        name: "Biden",
        uid: "biden",
        vote: "M",
      },
      {
        name: "Obama",
        uid: "obama",
        vote: "M",
      },
      {
        name: "Clinton",
        uid: "clinton",
        vote: "L",
      },
    ],
  },
};

export const Result: Story = {
  args: {
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
    participants: [
      {
        name: "Trump",
        uid: "trump",
        vote: "13",
      },
      {
        name: "Biden",
        uid: "biden",
        vote: "?",
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
    ],
  },
};
