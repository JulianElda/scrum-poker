import type { Meta, StoryObj } from "@storybook/angular";
import { argsToTemplate } from "@storybook/angular";
import { HeaderComponent } from "./header.component";

const meta: Meta<HeaderComponent> = {
  title: "Header",
  component: HeaderComponent,
  render: (args: HeaderComponent) => ({
    props: {
      ...args,
    },
    template: `<scp-header ${argsToTemplate(args)}></scp-header>`,
  }),
};
export default meta;
type Story = StoryObj<HeaderComponent>;

export const Header: Story = {};
