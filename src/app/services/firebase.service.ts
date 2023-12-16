import { Injectable, inject } from "@angular/core";
import {
  DocumentReference,
  Firestore,
  Timestamp,
  addDoc,
  collection,
  collectionData,
  doc,
  docData,
  getDoc,
  getDocs,
  limit,
  query,
  updateDoc,
  where,
} from "@angular/fire/firestore";
import {
  CARD_TYPES,
  Collections,
  GameStatus,
  Participant,
  Room,
} from "@scp/types";
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
        status: GameStatus.VOTING,
        scale: CARD_TYPES.COHN,
      }
    );
    return this.currentRoomRef;
  }

  getRoom(roomId: string): Observable<Room> {
    const roomRef = doc(this.firestore, Collections.ROOM, roomId);
    if (!this.currentRoomRef) this.currentRoomRef = roomRef;
    return docData(roomRef) as Observable<Room>;
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

  async resetParticipantsVote(roomId: string) {
    const participantCollectionRef = collection(
      this.firestore,
      Collections.ROOM,
      roomId,
      Collections.PARTICIPANT
    );

    const participantsDocs = await getDocs(participantCollectionRef);

    participantsDocs.forEach(async (participantsDoc) => {
      const resultDoc = doc(
        this.firestore,
        Collections.ROOM,
        roomId,
        Collections.PARTICIPANT,
        participantsDoc.id!
      );
      await updateDoc(resultDoc, { vote: null });
    });
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

  updateGameStatus(data: Partial<Room>) {
    return updateDoc(this.currentRoomRef!, { ...data });
  }

  updateParticipantVote(data: Partial<Participant>) {
    return updateDoc(this.currentParticipantRef!, { ...data });
  }
}
