import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { Auth, User, user } from "@angular/fire/auth";
import { Firestore, collectionData, collection } from "@angular/fire/firestore";
import { ActivatedRoute, Router } from "@angular/router";
import { Collections, Participant } from "@scp/types";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "scp-game-room",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <p>game-room {{ roomId }}</p>
      <ul>
        <li *ngFor="let participant of participants$ | async">
          {{ participant.name }}
        </li>
      </ul>
    </div>
  `,
  styleUrl: "./game-room.component.css",
})
export class GameRoomComponent implements OnInit, OnDestroy {
  private activatedRoute = inject(ActivatedRoute);
  private firestore = inject(Firestore);
  private auth = inject(Auth);
  private router = inject(Router);

  private user$ = user(this.auth);
  private userSignIn: Subscription | undefined;

  roomId = this.activatedRoute.snapshot.paramMap.get("id") || "";
  protected participants$ = collectionData(
    collection(
      this.firestore,
      Collections.ROOM,
      this.roomId,
      Collections.PARTICIPANT
    )
  ) as Observable<Participant[]>;

  ngOnInit(): void {
    this.userSignIn = this.user$.subscribe((user: User | null) => {
      if (!user) this.router.navigate(["/join", { id: this.roomId }]);
    });
  }

  ngOnDestroy(): void {
    if (this.userSignIn) this.userSignIn.unsubscribe();
  }
}
