import { Timestamp } from "@angular/fire/firestore";
import { CARD_TYPES } from "./cards";

export enum Collections {
  ROOM = "rooms",
  PARTICIPANT = "participants",
}

export enum GameStatus {
  VOTING = "VOTING",
  REVEAL = "REVEAL",
}

export interface Room {
  date: Timestamp;
  moderator: string;
  status: GameStatus;
  scale: CARD_TYPES;
}

export interface Participant {
  name: string;
  uid: string;
  vote?: string;
}
