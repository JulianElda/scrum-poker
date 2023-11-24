import { ApplicationConfig } from "@angular/core";
import { provideRouter, withComponentInputBinding } from "@angular/router";
import { rootRoutes } from "./root.routes";

export const rootConfig: ApplicationConfig = {
  providers: [provideRouter(rootRoutes, withComponentInputBinding())],
};
