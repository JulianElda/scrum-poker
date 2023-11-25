import { Injectable, inject } from "@angular/core";
import {
  DocumentReference,
  Firestore,
  Timestamp,
  addDoc,
  collection,
} from "@angular/fire/firestore";
import { Collections, Room } from "@scp/types";

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  private firestore = inject(Firestore);

  async createRoom(moderator: string): Promise<DocumentReference> {
    return addDoc(collection(this.firestore, Collections.ROOM), <Room>{
      date: Timestamp.fromDate(new Date()),
      moderator,
    });
  }

  async createRoomParticipant(
    roomId: string,
    uid: string,
    name: string
  ): Promise<DocumentReference> {
    return addDoc(
      collection(
        this.firestore,
        Collections.ROOM,
        roomId,
        Collections.PARTICIPANT
      ),
      {
        name,
        uid,
      }
    );
  }
}
