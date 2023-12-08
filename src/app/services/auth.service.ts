import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  sessionId = "";

  participantId = "";

  participantName = "";
}
