import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { Auth, User, user, signInAnonymously } from "@angular/fire/auth";
import { doc, getDoc, Firestore } from "@angular/fire/firestore";
import { ActivatedRoute, Router } from "@angular/router";
import { Collections } from "@scp/types";
import { Subscription } from "rxjs";

@Component({
  selector: "scp-game-room",
  standalone: true,
  imports: [CommonModule],
  template: ` <p>game-room {{ roomId }}</p> `,
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

  ngOnInit(): void {
    this.userSignIn = this.user$.subscribe((user: User | null) => {
      if (!user) this.router.navigate(["/join", { id: this.roomId }]);
    });
  }

  ngOnDestroy(): void {
    if (this.userSignIn) this.userSignIn.unsubscribe();
  }
}
