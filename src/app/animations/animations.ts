import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from "@angular/animations";

export const slideRightAnimation = [
  style({ opacity: 0, transform: "translateX(-100px)" }),
  stagger(100, [
    animate(
      "200ms cubic-bezier(0.35, 0, 0.25, 1)",
      style({ opacity: 1, transform: "none" })
    ),
  ]),
];

export const resultCardsAnimation = trigger("cardsEnterAnimation", [
  transition(":enter", [
    query(".result-section", [...slideRightAnimation], { optional: true }),
  ]),
]);

export const cardsEnterAnimation = transition(":enter", [
  query("scp-card", [...slideRightAnimation], { optional: true }),
]);
