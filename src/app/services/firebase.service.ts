import { Injectable, inject } from "@angular/core";
import {
  DocumentReference,
  Firestore,
  Timestamp,
  addDoc,
  updateDoc,
  collection,
  collectionData,
  doc,
  getDoc,
  DocumentSnapshot,
  query,
  where,
} from "@angular/fire/firestore";
import { Collections, Participant, Room } from "@scp/types";
import { Observable } from "rxjs";

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
    /*
    return getDoc(
      doc(
        this.firestore,
        Collections.ROOM,
        roomId,
        Collections.PARTICIPANT,
        participantId
      )
    );
    */

    console.log("result", roomId, sessionId);
    const result = collectionData(
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

  updateParticipantVote(
    roomId: string,
    participantId: string,
    data: Participant
  ) {
    return updateDoc(
      doc(
        this.firestore,
        Collections.ROOM,
        roomId,
        Collections.PARTICIPANT,
        participantId
      ),
      { ...data }
    );
  }
}
