import { FooterComponent } from "@/components/footer/footer.component";
import { HeaderComponent } from "@/components/header/header.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { BrowserModule } from "@angular/platform-browser";
import {
  RouterOutlet,
  provideRouter,
  withComponentInputBinding,
} from "@angular/router";
import { environment } from "src/environments/environment";
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
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  bootstrap: [RootComponent],
  providers: [provideRouter(rootRoutes, withComponentInputBinding())],
})
export class RootModule {}
