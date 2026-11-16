// The built-in sections, in the order they appear on the People page
export const CATEGORIES = [
  "Head of the Lab",
  "Doctoral Research Assistants",
  "Graduate Research Assistants",
  "Software Research Assistant",
  "Legal Research Assistant",
  "Medical Officer & Research Affiliate",
];

export const HEAD_OF_LAB = "Head of the Lab";

// Value of the "Other" choice in the section dropdown
export const OTHER_SECTION = "__other__";

// Tidy a section name someone typed: trim and collapse extra spaces
export function cleanSection(raw: string) {
  return raw.replace(/\s+/g, " ").trim();
}

export function isHeadOfLab(section: string) {
  return cleanSection(section).toLowerCase() === HEAD_OF_LAB.toLowerCase();
}

// Built-in sections first (in your order), then sections members added, A–Z
export function orderSections(sections: string[]) {
  const added = [...new Set(sections)]
    .filter((s) => !CATEGORIES.includes(s))
    .sort((a, b) => a.localeCompare(b));
  return [...CATEGORIES, ...added];
}
