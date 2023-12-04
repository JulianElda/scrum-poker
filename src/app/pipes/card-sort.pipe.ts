import { Pipe, PipeTransform } from "@angular/core";
import { Card } from "@scp/types";

@Pipe({
  name: "cardSort",
  standalone: true,
})
export class CardSortPipe implements PipeTransform {
  transform(cards: Card[]): Card[] {
    return cards.sort((a, b) => a.weight - b.weight);
  }
}
