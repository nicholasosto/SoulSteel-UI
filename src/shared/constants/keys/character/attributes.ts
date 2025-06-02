// shared/constants/Attributes.ts
export const ATTR_KEYS = ["str", "agi", "vit", "int"] as const;
/** Literal-string union ⇒ "str" | "agi" | … */
export type AttributeKey = (typeof ATTR_KEYS)[number];
