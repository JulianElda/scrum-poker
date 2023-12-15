import { VotedParticipantPipe } from "./voted-participant.pipe";

describe("VotedParticipantPipe", () => {
  it("create an instance", () => {
    const pipe = new VotedParticipantPipe();
    expect(pipe).toBeTruthy();
  });
});
