import type { Meta, StoryObj } from "@storybook/angular";
import { argsToTemplate } from "@storybook/angular";
import { ResultComponent } from "./result.component";

const meta: Meta<ResultComponent> = {
  title: "Result",
  component: ResultComponent,
  render: (args: ResultComponent) => ({
    props: {
      ...args,
    },
    template: `
      <div class="mx-auto max-w-5xl">
        <scp-result ${argsToTemplate(args)}></scp-result>
      </div>
    `,
  }),
};
export default meta;
type Story = StoryObj<ResultComponent>;

export const Participants: Story = {
  args: {
    participants: [
      {
        name: "Trump",
        uid: "trump",
        vote: "13",
      },
      {
        name: "Bush",
        uid: "bush",
        vote: "8",
      },
      {
        name: "Obama",
        uid: "obama",
        vote: "8",
      },
      {
        name: "Clinton",
        uid: "clinton",
        vote: "?",
      },
      {
        name: "Biden",
        uid: "biden",
        vote: "20",
      },
    ],
  },
};
