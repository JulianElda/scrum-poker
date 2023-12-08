import { Component, OnDestroy, OnInit, inject, signal } from "@angular/core";
import { Auth, User, user } from "@angular/fire/auth";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "@scp/services/auth.service";
import { FirebaseService } from "@scp/services/firebase.service";
import { Subscription, combineLatest, concatMap, filter, map, tap } from "rxjs";

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
    this.authService.sessionId$.pipe(filter((sessionId) => sessionId !== "")),
    this.activatedRoute.params.pipe(map((param) => param["id"])),
  ]).pipe(
    concatMap(([sessionId, roomId]) => {
      return this.firebaseService.getParticipant(roomId, sessionId).pipe(
        tap((result) => {
          const participant = result[0];
          this.authService.participantName$.next(participant["name"]);
          this.authService.participantId$.next(participant["id"]);
        })
      );
    })
  );

  ngOnInit(): void {
    this.userSignIn = this.user$.subscribe();
    this.currentParticipant = this.currentParticipant$.subscribe();
  }

  ngOnDestroy(): void {
    if (this.userSignIn) this.userSignIn.unsubscribe();
    if (this.currentParticipant) this.currentParticipant.unsubscribe();
  }
}
