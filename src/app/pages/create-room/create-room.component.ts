import { ButtonComponent } from "@/components/button/button.component";
import { InputComponent } from "@/components/input/input.component";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
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
