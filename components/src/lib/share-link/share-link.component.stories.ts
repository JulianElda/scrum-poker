import type { Meta, StoryObj } from "@storybook/angular";
import { argsToTemplate } from "@storybook/angular";
import { ShareLinkComponent } from "./share-link.component";

const meta: Meta<ShareLinkComponent> = {
  title: "Share link",
  component: ShareLinkComponent,
  render: (args: ShareLinkComponent) => ({
    props: {
      ...args,
    },
    template: `
      <div class="max-w-xs">
        <scp-share-link ${argsToTemplate(args)}></scp-share-link>
      </div>
    `,
  }),
};
export default meta;
type Story = StoryObj<ShareLinkComponent>;

export const ShareLink: Story = {};
