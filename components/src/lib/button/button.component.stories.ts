import type { Meta, StoryObj } from "@storybook/angular";
import { argsToTemplate } from "@storybook/angular";
import { ButtonComponent } from "./button.component";

const meta: Meta<ButtonComponent> = {
  title: "Button",
  component: ButtonComponent,
  argTypes: {
    clickButton: { action: "clickButton" },
  },
  render: (args: ButtonComponent) => ({
    props: {
      ...args,
    },
    template: `<scp-button ${argsToTemplate(args)}></scp-button>`,
  }),
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    text: "Primary button",
  },
};

export const Secondary: Story = {
  args: {
    text: "Secondary button",
    style: "secondary",
  },
};
