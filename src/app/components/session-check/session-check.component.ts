import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { Auth, User, user } from "@angular/fire/auth";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "scp-session-check",
  standalone: true,
  template: `<ng-content></ng-content>`,
})
export class SessionCheckComponent implements OnInit, OnDestroy {
  private activatedRoute = inject(ActivatedRoute);
  private auth = inject(Auth);
  private router = inject(Router);

  private user$ = user(this.auth);
  private userSignIn: Subscription | undefined;

  ngOnInit(): void {
    const roomId = this.activatedRoute.snapshot.paramMap.get("id") || "";
    this.userSignIn = this.user$.subscribe((user: User | null) => {
      if (!user) this.router.navigate(["/join", { id: roomId }]);
    });
  }

  ngOnDestroy(): void {
    if (this.userSignIn) this.userSignIn.unsubscribe();
  }
}
