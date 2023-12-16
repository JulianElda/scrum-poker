import { Route } from "@angular/router";
import { gameRoomCanActivate } from "@scp/pages/game-room/game-room.resolver";
import { HomeComponent } from "@scp/pages/home/home.component";

export const rootRoutes: Route[] = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "test",
    loadComponent: () =>
      import("./../pages/test/test.component").then((m) => m.TestComponent),
  },
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
      import("./../pages/game-room/game-room.container.component").then(
        (m) => m.GameRoomContainerComponent
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
