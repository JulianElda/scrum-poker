import { Firestore } from "@angular/fire/firestore";
import {
  Spectator,
  byLabel,
  createComponentFactory,
  mockProvider,
} from "@ngneat/spectator/jest";
import { CreateRoomComponent } from "./create-room.component";

describe("CreateRoomComponent", () => {
  let spectator: Spectator<CreateRoomComponent>;
  const createComponent = createComponentFactory({
    component: CreateRoomComponent,
    providers: [mockProvider(Firestore)],
  });

  it("shows name input field", () => {
    spectator = createComponent();
    expect(spectator.query(byLabel("Moderator name"))).toBeTruthy();
  });
});
