export const COHN = [
  "0",
  "1/2",
  "1",
  "2",
  "3",
  "5",
  "8",
  "13",
  "20",
  "40",
  "100",
  "?",
  "∞",
];

export const FIBONNACI = [
  "0",
  "1",
  "2",
  "3",
  "5",
  "8",
  "13",
  "21",
  "34",
  "55",
  "89",
  "?",
  "∞",
];

export const TSHIRT = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "?", "∞"];

export enum CARD_TYPES {
  COHN = "COHN",
  FIBONNACI = "FIBONNACI",
  TSHIRT = "TSHIRT",
}

export const CARDS: {
  [key: string]: {
    label: string;
    values: string[];
  };
} = {
  [CARD_TYPES.COHN]: {
    label: "Cohn",
    values: COHN,
  },
  [CARD_TYPES.FIBONNACI]: {
    label: "Fibonnaci",
    values: FIBONNACI,
  },
  [CARD_TYPES.TSHIRT]: { label: "T-Shirt sizes", values: TSHIRT },
};

export function cardsToOptions() {
  const result = [];
  for (const index in CARDS) {
    result.push({
      label: CARDS[index].label,
      value: index,
    });
  }
  return result;
}
