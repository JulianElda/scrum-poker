import { Component, signal } from "@angular/core";
import {
  CardListComponent,
  ParticipantsComponent,
  ResultComponent,
  SelectComponent,
} from "@scp/components";
import { COHN, Participant } from "@scp/types";

@Component({
  selector: "scp-test",
  standalone: true,
  imports: [
    CardListComponent,
    ParticipantsComponent,
    ResultComponent,
    SelectComponent,
  ],
  styleUrl: "./test.component.css",
  template: `
    <div class="mx-auto max-w-5xl">
      <scp-card-list
        [cards]="sequence"
        (selectCard)="setSelected($event)" />
      <scp-participants [participants]="participants" />
      <scp-result [participants]="participants" />
      <scp-select
        [id]="'test-select'"
        [label]="'Presidents'"
        [options]="options"
        [selectedValue]="options[2].value"
        (selectChange)="onSelect($event)" />
    </div>
  `,
})
export class TestComponent {
  sequence = COHN;
  selectedCard = signal("");

  participants: Participant[] = [
    {
      name: "Donald",
      uid: "Donald",
      vote: "20",
    },
    {
      name: "Joe",
      uid: "Joe",
      vote: "8",
    },
    {
      name: "Obama",
      uid: "Obama",
      vote: "13",
    },
    {
      name: "Bush",
      uid: "Bush",
      vote: "20",
    },
  ];

  options = [
    {
      label: "Trump",
      value: "trump",
    },
    {
      label: "Obama",
      value: "obama",
    },
    {
      label: "Joe",
      value: "joe",
    },
  ];

  setSelected(value: string | null) {
    this.selectedCard.set(value!);
  }

  onSelect(value: string) {
    console.log("TestComponent", value);
  }
}
