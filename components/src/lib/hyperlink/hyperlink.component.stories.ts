import type { Meta, StoryObj } from "@storybook/angular";
import { argsToTemplate } from "@storybook/angular";
import { HyperlinkComponent } from "./hyperlink.component";

const meta: Meta<HyperlinkComponent> = {
  title: "Hyperlink",
  component: HyperlinkComponent,
  render: (args: HyperlinkComponent) => ({
    props: {
      ...args,
    },
    template: `<scp-hyperlink ${argsToTemplate(args)}></scp-hyperlink>`,
  }),
};
export default meta;
type Story = StoryObj<HyperlinkComponent>;

export const Hyperlink: Story = {
  args: {
    text: "Julius Polar@GitHub",
    link: "https://github.com/JulianElda/scrum-poker",
  },
};
