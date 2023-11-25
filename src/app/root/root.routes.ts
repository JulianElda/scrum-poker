import { Route } from "@angular/router";

export const rootRoutes: Route[] = [
  {
    path: "new",
    loadComponent: () =>
      import("./../pages/create-room/create-room.component").then(
        (m) => m.CreateRoomComponent
      ),
  },
];
