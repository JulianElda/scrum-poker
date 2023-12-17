import type { Meta, StoryObj } from "@storybook/angular";
import { argsToTemplate } from "@storybook/angular";
import { CardComponent } from "./card.component";

const meta: Meta<CardComponent> = {
  title: "Card",
  component: CardComponent,
  render: (args: CardComponent) => ({
    props: {
      ...args,
    },
    template: `<scp-card ${argsToTemplate(args)}></scp-card>`,
  }),
};
export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {
    text: "13",
  },
};

export const Selected: Story = {
  args: {
    text: "13",
    selected: true,
  },
};

export const Text: Story = {
  args: {
    text: "Take a break",
  },
};
