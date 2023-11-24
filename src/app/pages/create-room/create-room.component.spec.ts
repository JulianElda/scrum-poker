import {
  Spectator,
  byLabel,
  createComponentFactory,
} from "@ngneat/spectator/jest";
import { CreateRoomComponent } from "./create-room.component";

describe("CreateRoomComponent", () => {
  let spectator: Spectator<CreateRoomComponent>;
  const createComponent = createComponentFactory({
    component: CreateRoomComponent,
  });

  it("shows name input field", () => {
    spectator = createComponent();
    expect(spectator.query(byLabel("Name"))).toBeTruthy();
  });
});
