import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  sessionId$: BehaviorSubject<string> = new BehaviorSubject<string>("");
  participantId$: BehaviorSubject<string> = new BehaviorSubject<string>("");
  participantName$: BehaviorSubject<string> = new BehaviorSubject<string>("");
  participantVote$: BehaviorSubject<string> = new BehaviorSubject<string>("");
}
