import { Auth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { AuthService, FirebaseService } from "@scp/services";
import type { Meta, StoryObj } from "@storybook/angular";
import { argsToTemplate } from "@storybook/angular";
import { CreateRoomComponent } from "./create-room.component";

const meta: Meta<CreateRoomComponent> = {
  title: "Create Game",
  component: CreateRoomComponent,
  render: (args: CreateRoomComponent) => ({
    props: {
      ...args,
    },
    moduleMetadata: {
      providers: [
        {
          provide: FirebaseService,
          useValue: {},
        },
        {
          provide: AuthService,
          useValue: {},
        },
        {
          provide: Router,
          useValue: {},
        },
        {
          provide: Auth,
          useValue: {},
        },
      ],
    },
    template: `<scp-create-room ${argsToTemplate(args)}></scp-create-room>`,
  }),
};
export default meta;
type Story = StoryObj<CreateRoomComponent>;

export const CreateGame: Story = {};
