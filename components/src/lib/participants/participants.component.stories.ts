import type { Meta, StoryObj } from "@storybook/angular";
import { argsToTemplate } from "@storybook/angular";
import { ParticipantsComponent } from "./participants.component";

const meta: Meta<ParticipantsComponent> = {
  title: "Participants",
  component: ParticipantsComponent,
  render: (args: ParticipantsComponent) => ({
    props: {
      ...args,
    },
    template: `
      <div class="max-w-xs">
        <scp-participants ${argsToTemplate(args)}></scp-participants>
      </div>
    `,
  }),
};
export default meta;
type Story = StoryObj<ParticipantsComponent>;

export const Participants: Story = {
  args: {
    participants: [
      {
        name: "Trump",
        uid: "trump",
        vote: "13",
      },
      {
        name: "Obama",
        uid: "obama",
        vote: "8",
      },
      {
        name: "Biden",
        uid: "biden",
        vote: undefined,
      },
    ],
  },
};

export const ParticipantsWithVotes: Story = {
  args: {
    participants: [
      {
        name: "Trump",
        uid: "trump",
        vote: "13",
      },
      {
        name: "Obama",
        uid: "obama",
        vote: "8",
      },
      {
        name: "Biden",
        uid: "biden",
        vote: "20",
      },
    ],
  },
};

export const ParticipantsWithNoVotes: Story = {
  args: {
    participants: [
      {
        name: "Trump",
        uid: "trump",
        vote: undefined,
      },
      {
        name: "Obama",
        uid: "obama",
        vote: undefined,
      },
      {
        name: "Biden",
        uid: "biden",
        vote: undefined,
      },
    ],
  },
};
