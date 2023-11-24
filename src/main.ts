import { bootstrapApplication } from "@angular/platform-browser";
import { RootComponent } from "src/app/root/root.component";
import { rootConfig } from "src/app/root/root.config";

bootstrapApplication(RootComponent, rootConfig).catch((e) => console.error(e));
