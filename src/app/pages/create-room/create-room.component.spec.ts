import { Auth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import {
  Spectator,
  byLabel,
  createComponentFactory,
  mockProvider,
} from "@ngneat/spectator/jest";
import { FirebaseService } from "@scp/services/firebase.service";
import { CreateRoomComponent } from "./create-room.component";

describe("CreateRoomComponent", () => {
  let spectator: Spectator<CreateRoomComponent>;
  const createComponent = createComponentFactory({
    component: CreateRoomComponent,
    providers: [
      mockProvider(Auth),
      mockProvider(FirebaseService),
      mockProvider(Router),
    ],
  });

  it("shows name input field", () => {
    spectator = createComponent();
    expect(spectator.query(byLabel("Moderator name"))).toBeTruthy();
  });
});
