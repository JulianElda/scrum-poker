import { Pipe, PipeTransform } from "@angular/core";
import { Participant } from "@scp/types";

@Pipe({
  name: "votedParticipant",
  standalone: true,
})
export class VotedParticipantPipe implements PipeTransform {
  transform(participants: Participant[]): Participant[] {
    return participants?.slice().filter((participant) => !!participant.vote);
  }
}
