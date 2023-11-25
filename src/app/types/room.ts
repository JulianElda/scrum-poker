import { Timestamp } from "@angular/fire/firestore";

export interface Room {
  date: Timestamp;
  moderator: string;
}

export interface Participant {
  name: string;
  uid: string;
}
