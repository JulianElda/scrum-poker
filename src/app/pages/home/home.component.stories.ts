import type { Meta, StoryObj } from "@storybook/angular";
import { argsToTemplate } from "@storybook/angular";
import { HomeComponent } from "./home.component";

const meta: Meta<HomeComponent> = {
  title: "Home",
  component: HomeComponent,
  render: (args: HomeComponent) => ({
    props: {
      ...args,
    },
    template: `<scp-home ${argsToTemplate(args)}></scp-home>`,
  }),
};
export default meta;
type Story = StoryObj<HomeComponent>;

export const Home: Story = {};
