import { inject } from "@angular/core";
import { Firestore, doc, getDoc } from "@angular/fire/firestore";
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from "@angular/router";
import { Collections } from "@scp/types";

export const gameRoomCanActivate: CanActivateFn = async (
  route: ActivatedRouteSnapshot,
  _state: RouterStateSnapshot
): Promise<boolean> => {
  const firestore = inject(Firestore);

  const roomId = route.paramMap.get("id") || "";

  const gameDocument = await getDoc(doc(firestore, Collections.ROOM, roomId));

  return gameDocument.exists();
};
