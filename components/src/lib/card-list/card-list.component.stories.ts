import type { Meta, StoryObj } from "@storybook/angular";
import { argsToTemplate } from "@storybook/angular";
import { CardListComponent } from "./card-list.component";
import { CARDS, CARD_TYPES } from "@scp/types";

const meta: Meta<CardListComponent> = {
  title: "Card list",
  component: CardListComponent,
  argTypes: {
    selectCard: { action: "selectCard" },
  },
  render: (args: CardListComponent) => ({
    props: {
      ...args,
    },
    template: `
      <div class="mx-auto max-w-5xl">
        <scp-card-list ${argsToTemplate(args)}></scp-card-list>
      </div>
    `,
  }),
};
export default meta;
type Story = StoryObj<CardListComponent>;

export const Cohn: Story = {
  args: {
    cards: CARDS[CARD_TYPES.COHN].values,
  },
};

export const Fibonnaci: Story = {
  args: {
    cards: CARDS[CARD_TYPES.FIBONNACI].values,
  },
};

export const TShirtSizes: Story = {
  args: {
    cards: CARDS[CARD_TYPES.TSHIRT].values,
  },
};
