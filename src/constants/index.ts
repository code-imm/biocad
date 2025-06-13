import type { ColorGroup } from "../types";

export const AMINO_ACID_SEQUENCE_REGEX = /^[ARNDCQEGHILKMFPSTWYV-]*$/;

export const aminoAcidColors: Record<string, string> = {
  C: "#FFEAA0", // Цистеин
  A: "#67E4A6",
  I: "#67E4A6",
  L: "#67E4A6",
  M: "#67E4A6",
  F: "#67E4A6",
  W: "#67E4A6",
  Y: "#67E4A6",
  V: "#67E4A6",
  P: "#67E4A6", // Гидрофобные
  G: "#C4C4C4", // Глицин
  D: "#F9C9AC",
  E: "#F9C9AC", // Отрицательно заряженные
  K: "#B89FFF",
  R: "#B89FFF", // Положительно заряженные
  S: "#80BFFF",
  T: "#80BFFF",
  H: "#80BFFF",
  Q: "#80BFFF",
  N: "#80BFFF", // Полярные незаряженные
};

export const aminoAcidNames: Record<string, string> = {
  A: "Аланин",
  R: "Аргинин",
  N: "Аспарагин",
  D: "Аспарагиновая кислота",
  C: "Цистеин",
  Q: "Глутамин",
  E: "Глутаминовая кислота",
  G: "Глицин",
  H: "Гистидин",
  I: "Изолейцин",
  L: "Лейцин",
  K: "Лизин",
  M: "Метионин",
  F: "Фенилаланин",
  P: "Пролин",
  S: "Серин",
  T: "Треонин",
  W: "Триптофан",
  Y: "Тирозин",
  V: "Валин",
  "-": "Пропуск",
};

export const colorGroups: ColorGroup[] = [
  { name: "Гидрофобные", color: "#67E4A6" },
  { name: "Полярные", color: "#80BFFF" },
  { name: "Положительные", color: "#B89FFF" },
  { name: "Отрицательные", color: "#F9C9AC" },
  { name: "Цистеин", color: "#FFEAA0" },
  { name: "Глицин", color: "#C4C4C4" },
];
