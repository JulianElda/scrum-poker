import type { Meta, StoryObj } from "@storybook/angular";
import { argsToTemplate } from "@storybook/angular";
import { SelectComponent } from "./select.component";

const meta: Meta<SelectComponent> = {
  title: "Select",
  component: SelectComponent,
  argTypes: {
    selectChange: { action: "selectChange" },
  },
  render: (args: SelectComponent) => ({
    props: {
      ...args,
    },
    template: `
      <div class="max-w-xs">
        <scp-select ${argsToTemplate(args)}></scp-select>
      </div>
    `,
  }),
};
export default meta;
type Story = StoryObj<SelectComponent>;

export const Select: Story = {
  args: {
    id: "select-id",
    label: "Select label",
    options: [
      {
        label: "Trump",
        value: "trump",
      },
      {
        label: "Bush",
        value: "bush",
      },
      {
        label: "Obama",
        value: "obama",
      },
      {
        label: "Clinton",
        value: "clinton",
      },
      {
        label: "Biden",
        value: "biden",
      },
    ],
  },
};
