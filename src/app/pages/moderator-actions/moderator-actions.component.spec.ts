import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ModeratorActionsComponent } from "./moderator-actions.component";

describe("ModeratorActionsComponent", () => {
  let component: ModeratorActionsComponent;
  let fixture: ComponentFixture<ModeratorActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeratorActionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModeratorActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
