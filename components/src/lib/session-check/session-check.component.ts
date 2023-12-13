import { Component, OnDestroy, OnInit, inject, signal } from "@angular/core";
import { Auth, User, user } from "@angular/fire/auth";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "@scp/services/auth.service";
import { FirebaseService } from "@scp/services/firebase.service";
import {
  Observable,
  Subscription,
  combineLatest,
  concatMap,
  filter,
  map,
  take,
  tap,
} from "rxjs";

@Component({
  selector: "scp-session-check",
  standalone: true,
  template: `
    @if (isLoggedIn()) {
      <ng-content></ng-content>
    }
  `,
})
export class SessionCheckComponent implements OnInit, OnDestroy {
  private activatedRoute = inject(ActivatedRoute);
  private auth = inject(Auth);
  private router = inject(Router);
  private authService = inject(AuthService);
  private firebaseService = inject(FirebaseService);

  protected isLoggedIn = signal(false);

  private userSignIn: Subscription | undefined;
  private currentParticipant: Subscription | undefined;

  private user$ = this.activatedRoute.params
    .pipe(map((param) => param["id"]))
    .pipe(
      concatMap((roomId: string) => {
        return user(this.auth).pipe(
          tap((user: User | null) => {
            if (!user) this.router.navigate(["/join", { id: roomId }]);
            else {
              this.authService.sessionId$.next(user.uid);
              this.isLoggedIn.set(true);
            }
          })
        );
      })
    );

  private currentParticipant$ = combineLatest([
    this.authService.sessionId$
      .pipe(filter((sessionId) => sessionId !== ""))
      .pipe(take(1)),
    this.activatedRoute.params.pipe(map((param) => param["id"])).pipe(take(1)),
  ]).pipe(
    concatMap(([sessionId, roomId]) => {
      return this.firebaseService
        .getParticipant(roomId, sessionId)
        .then((result) => {
          if (result.exists()) {
            const participant = result.data();
            this.authService.participantName$.next(participant["name"]);
            this.authService.sessionId$.next(participant["uid"]);
          }
        });
    })
  );

  ngOnInit(): void {
    this.userSignIn = this.user$.subscribe();
    this.currentParticipant = this.currentParticipant$.subscribe();
  }

  ngOnDestroy(): void {
    this.userSignIn?.unsubscribe();
    this.currentParticipant?.unsubscribe();
  }
}
