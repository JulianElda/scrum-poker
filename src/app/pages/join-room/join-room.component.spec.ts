import { Auth } from "@angular/fire/auth";
import {
  Spectator,
  byLabel,
  createComponentFactory,
  mockProvider,
} from "@ngneat/spectator/jest";
import { FirebaseService } from "@scp/services/firebase.service";
import { ActivatedRoute, Router } from "@angular/router";
import { JoinRoomComponent } from "./join-room.component";

describe("JoinRoomComponent", () => {
  let spectator: Spectator<JoinRoomComponent>;
  const createComponent = createComponentFactory({
    component: JoinRoomComponent,
    providers: [
      mockProvider(Auth),
      mockProvider(FirebaseService),
      mockProvider(ActivatedRoute),
      mockProvider(Router),
    ],
  });

  test("shows name input field", () => {
    spectator = createComponent();
    expect(spectator.query(byLabel("Name"))).toBeTruthy();
  });
});
