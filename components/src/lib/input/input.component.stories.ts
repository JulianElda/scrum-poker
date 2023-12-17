import type { Meta, StoryObj } from "@storybook/angular";
import { argsToTemplate } from "@storybook/angular";
import { InputComponent } from "./input.component";

const meta: Meta<InputComponent> = {
  title: "Input",
  component: InputComponent,
  argTypes: {
    inputChange: { action: "inputChange" },
  },
  render: (args: InputComponent) => ({
    props: {
      ...args,
    },
    template: `
      <div class="max-w-xs">
        <scp-input ${argsToTemplate(args)}></scp-input>
      </div>
    `,
  }),
};
export default meta;
type Story = StoryObj<InputComponent>;

export const Input: Story = {
  args: {
    id: "input-id",
    label: "Input label",
  },
};

export const InputWithInitialValue: Story = {
  args: {
    id: "input-id",
    label: "Input label",
    value: "Initial value",
  },
};

export const InputWithInitialValueAndPlaceholder: Story = {
  args: {
    id: "input-id",
    label: "Input label",
    value: "Initial value",
    placeholder: "Placeholder text",
  },
};

export const InputWithPlaceholder: Story = {
  args: {
    id: "input-id",
    label: "Input label",
    placeholder: "Placeholder text",
  },
};
