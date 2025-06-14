# Scrum Poker

Try it out live [https://julianelda.io/planning-poker](https://julianelda.io/planning-poker).

This project is an open-source Scrum / Planning Poker web application. Create a new game and invite your team members to estimate story points. Featuring selectable scales (Cohn, Fibonnaci, T-Shirt) and dark mode.

The app is built with Firebase and Angular, scaffolded with Nx, styled with tailwindcss and Fontawesome, and tested with jest and Cypress.

## Local development

Create an `environment.ts` file from the template in `src/assets/environments` and fill in your Firebase configuration.

Run `nx serve` to run the application locally in `localhost:4200`.

## Build

Run `nx serve` to build the project. The build artifacts will be stored in `build/browser` directory.

## Testing

Run `nx run scrum-poker:test --watch` to execute unit tests for the main project (`scrum-poker`) or `nx run components:test --watch` to run unit tests for `components` library.

Run `nx run scrum-poker:e2e --watch` to run Cypress in headed mode.

# Misc

This application, including source code can be used under [MIT License](LICENSE).

[Planning Poker](https://www.mountaingoatsoftware.com/agile/planning-poker/license) is a registered trademark of Mountain Goat Software, LLC.
