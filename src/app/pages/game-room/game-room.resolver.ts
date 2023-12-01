import { inject } from "@angular/core";
import { Firestore, doc, getDoc } from "@angular/fire/firestore";
import { ActivatedRouteSnapshot, CanActivateFn } from "@angular/router";
import { Collections } from "@scp/types";

export const gameRoomCanActivate: CanActivateFn = async (
  route: ActivatedRouteSnapshot
): Promise<boolean> => {
  const firestore = inject(Firestore);

  const roomId = route.paramMap.get("id") || "";

  const gameDocument = await getDoc(doc(firestore, Collections.ROOM, roomId));

  return gameDocument.exists();
};
