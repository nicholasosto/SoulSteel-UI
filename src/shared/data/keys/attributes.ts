// shared/constants/Attributes.ts
export const ATTR_KEYS = ["str", "agi", "vit", "int", "lck"] as const;
/** Literal-string union ⇒ "str" | "agi" | … */
export type AttributeKey = (typeof ATTR_KEYS)[number];

interface AttributeInfo {
	displayName: string;
	iconId: string;
	min: number;
	max: number;
}

export const ATTRIBUTE_META: Record<AttributeKey, AttributeInfo> = {
	str: { displayName: "Strength", iconId: "rbxassetid://127745571044516", min: 1, max: 999 },
	agi: { displayName: "Agility", iconId: "rbxassetid://73893872719367", min: 1, max: 999 },
	vit: { displayName: "Vitality", iconId: "rbxassetid://121291227474039", min: 1, max: 999 },
	int: { displayName: "Intellect", iconId: "rbxassetid://107600003376684", min: 1, max: 999 },
	lck: { displayName: "Luck", iconId: "rbxassetid://114767496083209", min: 1, max: 999 },
};
