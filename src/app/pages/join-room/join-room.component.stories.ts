import { Auth } from "@angular/fire/auth";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService, FirebaseService } from "@scp/services";
import type { Meta, StoryObj } from "@storybook/angular";
import { argsToTemplate } from "@storybook/angular";
import { JoinRoomComponent } from "./join-room.component";

const meta: Meta<JoinRoomComponent> = {
  title: "Join Game",
  component: JoinRoomComponent,
  render: (args: JoinRoomComponent) => ({
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
          provide: ActivatedRoute,
          useValue: {},
        },
        {
          provide: Auth,
          useValue: {},
        },
      ],
    },
    template: `<scp-join-room ${argsToTemplate(args)}></scp-join-room>`,
  }),
};
export default meta;
type Story = StoryObj<JoinRoomComponent>;

export const JoinGame: Story = {};
