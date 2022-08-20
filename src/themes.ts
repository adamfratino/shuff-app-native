import { CSSProperties } from "styled-components";

export type Theme = {
  location: string;
  emoji?: string;
  board: CSSProperties["color"];
  court: CSSProperties["color"];
  border: CSSProperties["color"];
  contrastText?: CSSProperties["color"];
  biscuitColorLeft?: CSSProperties["color"];
  biscuitColorRight?: CSSProperties["color"];
};

export const blue: Theme = {
  location: "Royal Palms",
  emoji: "🦩",
  board: "#cffafe", // cyan 100
  court: "#22d3ee", // cyan 400
  border: "#164e63", // cyan 900
  contrastText: "black",
  biscuitColorLeft: "gold",
  biscuitColorRight: "black",
};

export const green: Theme = {
  location: "St. Petersburg",
  emoji: "🏖",
  board: "#d1fae5", // emerald 100
  court: "#34d399", // emerald 400
  border: "#064e3b", // emerald 900
  contrastText: "black",
  biscuitColorLeft: "gold",
  biscuitColorRight: "black",
};

export const orange: Theme = {
  location: "Franklin Alley",
  emoji: "🐴",
  board: "#fed7aa", // orange 200
  court: "#fdba74", // orange 300
  border: "black",
  contrastText: "black",
  biscuitColorLeft: "gold",
  biscuitColorRight: "black",
};

export const amber: Theme = {
  location: "Forest City",
  emoji: "🤘",
  board: "#b45309", // amber 700
  court: "#78350f", // amber 900
  border: "#fffbeb", // amber 50
  contrastText: "white",
  biscuitColorLeft: "gold",
  biscuitColorRight: "black",
};
