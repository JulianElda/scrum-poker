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
  doc,
  getDoc,
  limit,
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

  async getRoom(roomId: string) {
    const roomRef = doc(this.firestore, Collections.ROOM, roomId);
    if (this.currentRoomRef) this.currentRoomRef = roomRef;

    return getDoc(roomRef);
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

  async getParticipant(roomId: string, sessionId: string) {
    const results = await getDocs(
      query(
        collection(
          this.firestore,
          Collections.ROOM,
          roomId,
          Collections.PARTICIPANT
        ),
        where("uid", "==", sessionId),
        limit(1)
      )
    );
    let result;
    results.forEach((doc) => {
      result = doc.id;
    });

    this.currentParticipantRef = doc(
      this.firestore,
      Collections.ROOM,
      roomId,
      Collections.PARTICIPANT,
      result!
    );

    return getDoc(this.currentParticipantRef);
  }

  updateParticipantVote(data: Participant) {
    return updateDoc(this.currentParticipantRef!, { ...data });
  }
}
