import { Route } from "@angular/router";
import { CreateRoomComponent } from "@/pages/create-room/create-room.component";

export const rootRoutes: Route[] = [
  {
    path: "new",
    component: CreateRoomComponent,
  },
];
