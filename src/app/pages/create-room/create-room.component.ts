import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputComponent } from "src/app/components/input/input.component";
import { ButtonComponent } from "src/app/components/button/button.component";
import { FormControl } from "@angular/forms";

@Component({
  selector: "scp-create-room",
  standalone: true,
  imports: [CommonModule, InputComponent, ButtonComponent],
  templateUrl: "./create-room.component.html",
  styleUrls: ["./create-room.component.css"],
})
export class CreateRoomComponent {
  name = new FormControl("Name");

  onClick() {
    undefined;
  }
}
