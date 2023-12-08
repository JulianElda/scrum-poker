import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  sessionId = "";
  sessionId$: BehaviorSubject<string> = new BehaviorSubject<string>("");
  participantId = "";
  participantId$: BehaviorSubject<string> = new BehaviorSubject<string>("");
  participantName = "";
  participantName$: BehaviorSubject<string> = new BehaviorSubject<string>("");
}
