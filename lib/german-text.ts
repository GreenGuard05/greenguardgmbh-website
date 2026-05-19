const GERMAN_CHAR_UPPER: Record<string, string> = {
  ä: "Ä",
  ö: "Ö",
  ü: "Ü",
  ß: "ẞ",
};

/** German-aware uppercase (ß → ẞ, not SS). Prefer over CSS `text-transform: uppercase`. */
export function germanUppercase(text: string): string {
  return [...text].map((char) => GERMAN_CHAR_UPPER[char] ?? char.toUpperCase()).join("");
}
