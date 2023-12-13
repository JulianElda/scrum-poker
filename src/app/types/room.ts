import { Timestamp } from "@angular/fire/firestore";

export enum GameStatus {
  VOTING = "VOTING",
  REVEAL = "REVEAL",
}

export interface Room {
  date: Timestamp;
  moderator: string;
  status: GameStatus;
}

export interface Participant {
  name: string;
  uid: string;
  vote?: string;
}
