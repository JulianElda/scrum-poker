import type { Meta, StoryObj } from "@storybook/angular";
import { argsToTemplate } from "@storybook/angular";
import { FooterComponent } from "./footer.component";

const meta: Meta<FooterComponent> = {
  title: "Footer",
  component: FooterComponent,
  render: (args: FooterComponent) => ({
    props: {
      ...args,
    },
    template: `<scp-footer ${argsToTemplate(args)}></scp-footer>`,
  }),
};
export default meta;
type Story = StoryObj<FooterComponent>;

export const Footer: Story = {};
