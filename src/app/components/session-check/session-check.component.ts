import { Component, OnDestroy, OnInit, inject, signal } from "@angular/core";
import { Auth, User, user } from "@angular/fire/auth";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "@scp/services/auth.service";
import { Subscription } from "rxjs";

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

  private user$ = user(this.auth);
  private userSignIn: Subscription | undefined;

  protected isLoggedIn = signal(false);

  ngOnInit(): void {
    const roomId = this.activatedRoute.snapshot.paramMap.get("id") || "";
    this.userSignIn = this.user$.subscribe((user: User | null) => {
      if (!user) this.router.navigate(["/join", { id: roomId }]);
      else {
        this.authService.uid = user.uid;
        this.isLoggedIn.set(true);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.userSignIn) this.userSignIn.unsubscribe();
  }
}
