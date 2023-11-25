import { Timestamp } from "@angular/fire/firestore";

export interface Room {
  date: Timestamp;
  moderator: string;
}
