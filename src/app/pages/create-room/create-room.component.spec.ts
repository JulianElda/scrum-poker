import { Auth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import {
  Spectator,
  byLabel,
  byText,
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

  test("shows name input field and button", () => {
    spectator = createComponent();
    expect(spectator.query(byLabel("Name"))).toBeTruthy();
    expect(spectator.query(byText("Create game"))).toBeTruthy();
  });
});
