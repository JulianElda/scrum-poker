import { Auth } from "@angular/fire/auth";
import { ActivatedRoute, Router } from "@angular/router";
import {
  Spectator,
  byLabel,
  byText,
  createComponentFactory,
  mockProvider,
} from "@ngneat/spectator/jest";
import { FirebaseService } from "@scp/services";
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

  test("shows name input field and button", () => {
    spectator = createComponent();
    expect(spectator.query(byLabel("Name"))).toBeTruthy();
    expect(spectator.query(byText("Join"))).toBeTruthy();
  });
});
