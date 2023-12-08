import { Injectable, inject } from "@angular/core";
import {
  DocumentReference,
  Firestore,
  Timestamp,
  addDoc,
  updateDoc,
  collection,
  collectionData,
  query,
  where,
  getDocs,
} from "@angular/fire/firestore";
import { Collections, Participant, Room } from "@scp/types";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  private firestore = inject(Firestore);

  private currentRoomRef: DocumentReference | null = null;
  private currentParticipantRef: DocumentReference | null = null;

  async createRoom(moderator: string): Promise<DocumentReference> {
    this.currentRoomRef = await addDoc(
      collection(this.firestore, Collections.ROOM),
      <Room>{
        date: Timestamp.fromDate(new Date()),
        moderator,
      }
    );
    return this.currentRoomRef;
  }

  async createRoomParticipant(
    roomId: string,
    uid: string,
    name: string
  ): Promise<DocumentReference> {
    this.currentParticipantRef = await addDoc(
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
    return this.currentParticipantRef;
  }

  getParticipants(roomId: string): Observable<Participant[]> {
    return collectionData(
      collection(
        this.firestore,
        Collections.ROOM,
        roomId,
        Collections.PARTICIPANT
      )
    ) as Observable<Participant[]>;
  }

  getParticipant(roomId: string, sessionId: string) {
    const result = getDocs(
      query(
        collection(
          this.firestore,
          Collections.ROOM,
          roomId,
          Collections.PARTICIPANT
        ),
        where("uid", "==", sessionId)
      )
    );

    return result;
  }

  updateParticipantVote(data: Participant) {
    return updateDoc(this.currentParticipantRef!, { ...data });
  }
}
