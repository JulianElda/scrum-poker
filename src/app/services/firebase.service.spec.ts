import {
  createServiceFactory,
  mockProvider,
  SpectatorService,
} from "@ngneat/spectator/jest";
import { Firestore } from "@angular/fire/firestore";
import { FirebaseService } from "./firebase.service";

describe("FirebaseService", () => {
  let spectator: SpectatorService<FirebaseService>;
  const createService = createServiceFactory({
    service: FirebaseService,
    providers: [mockProvider(Firestore)],
  });

  test("should be created", () => {
    spectator = createService();
    expect(spectator).toBeTruthy();
  });
});
