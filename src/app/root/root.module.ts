import { FooterComponent } from "@/components/footer/footer.component";
import { HeaderComponent } from "@/components/header/header.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {
  provideRouter,
  RouterOutlet,
  withComponentInputBinding,
} from "@angular/router";
import { RootComponent } from "./root.component";
import { rootRoutes } from "./root.routes";

@NgModule({
  declarations: [RootComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
  ],
  bootstrap: [RootComponent],
  providers: [provideRouter(rootRoutes, withComponentInputBinding())],
})
export class RootModule {}
