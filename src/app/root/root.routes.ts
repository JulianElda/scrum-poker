import { Route } from "@angular/router";
import { gameRoomCanActivate } from "@scp/pages/game-room/game-room.resolver";

export const rootRoutes: Route[] = [
  {
    path: "new",
    loadComponent: () =>
      import("./../pages/create-room/create-room.component").then(
        (m) => m.CreateRoomComponent
      ),
  },
  {
    path: "room",
    loadComponent: () =>
      import("./../pages/game-room/game-room.component").then(
        (m) => m.GameRoomComponent
      ),
    canActivate: [gameRoomCanActivate],
  },
  {
    path: "join",
    loadComponent: () =>
      import("./../pages/join-room/join-room.component").then(
        (m) => m.JoinRoomComponent
      ),
    canActivate: [gameRoomCanActivate],
  },
];
